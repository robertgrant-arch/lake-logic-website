'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const API_BASE = 'https://lake-pond-rag.vercel.app';
const API_KEY = 'd275ccb01df20ecb2b7e41ca724c2b49e0167480a7a9327af09e42d37469f991';
const BRAND = '#3B82F6';

const DIAGNOSTIC_PREFIX = `[INSTRUCTION: You are a diagnostic assistant. Do NOT dump information. Keep responses to 2-4 sentences max. When the user describes a problem, ask ONE clarifying question to narrow down the diagnosis before giving solutions. Follow this flow: 1) Acknowledge briefly 2) Ask what they see (color, texture, location, smell) 3) Ask about their waterbody (size, depth) 4) Ask about recent conditions 5) Only after 3-5 questions give a diagnosis and recommend calling Lake Logic at (816) 810-1081. Never list all types of anything - ask questions to narrow it down first.]

User question: `;

interface Source {
  n: number;
  title?: string;
  urls?: string[];
}

interface Msg {
  role: 'user' | 'bot';
  content: string;
  sources?: Source[];
}

function mdToHtml(md: string): string {
  let html = md
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/^### (.+)$/gm, '<h4 class="cw-h4">$1</h4>')
    .replace(/^## (.+)$/gm, '<h3 class="cw-h3">$1</h3>')
    .replace(/^# (.+)$/gm, '<h3 class="cw-h3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*<\/li>)/, '<ul class="cw-ul">$1</ul>')
    .replace(/\n{2,}/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');
  return html;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const historyRef = useRef<{role:string;content:string}[]>([]);

  const scrollBottom = useCallback(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, []);

  useEffect(() => { scrollBottom(); }, [msgs, scrollBottom]);

  const handleOpen = () => {
    setOpen(true);
    if (!greeted) {
      setMsgs([{ role: 'bot', content: 'Hi! I\'m Lake Logic\'s pond diagnostic assistant. Tell me what\'s going on with your pond or lake and I\'ll help you figure out what\'s happening and what to do about it.' }]);
      setGreeted(true);
    }
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setLoading(true);
    const userMsg: Msg = { role: 'user', content: text };
    setMsgs(prev => [...prev, userMsg]);
    historyRef.current.push({ role: 'user', content: text });

    // Build messages with diagnostic prefix on the latest user message
    const apiMessages = historyRef.current.map((m, i) => {
      if (i === historyRef.current.length - 1 && m.role === 'user') {
        return { role: 'user', content: DIAGNOSTIC_PREFIX + m.content };
      }
      return m;
    });

    let answer = '';
    let sources: Source[] = [];
    try {
      const resp = await fetch(API_BASE + '/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': API_KEY },
        body: JSON.stringify({ messages: apiMessages.slice(-10), stream: true }),
      });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let botAdded = false;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split('\n\n');
        buffer = events.pop() || '';
        for (const ev of events) {
          const lines = ev.split('\n');
          let eventName = 'message';
          const dataLines: string[] = [];
          for (const l of lines) {
            if (l.startsWith('event:')) eventName = l.slice(6).trim();
            else if (l.startsWith('data:')) dataLines.push(l.slice(5).trim());
          }
          if (!dataLines.length) continue;
          let data: any;
          try { data = JSON.parse(dataLines.join('\n')); } catch { continue; }
          if (eventName === 'sources') {
            sources = data;
          } else if (eventName === 'delta') {
            answer += data;
            if (!botAdded) {
              setMsgs(prev => [...prev, { role: 'bot', content: answer }]);
              botAdded = true;
            } else {
              setMsgs(prev => {
                const copy = [...prev];
                copy[copy.length - 1] = { role: 'bot', content: answer };
                return copy;
              });
            }
          }
        }
      }
      if (sources.length) {
        setMsgs(prev => {
          const copy = [...prev];
          copy[copy.length - 1] = { ...copy[copy.length - 1], sources };
          return copy;
        });
      }
      historyRef.current.push({ role: 'assistant', content: answer });
    } catch (err: any) {
      setMsgs(prev => [...prev, { role: 'bot', content: 'Sorry, something went wrong. Please try again.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[2147483000] font-sans text-sm">
      {/* Chat Panel */}
      {open && (
        <div className="absolute bottom-[76px] right-0 w-[400px] max-w-[calc(100vw-32px)] h-[580px] max-h-[calc(100vh-100px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 text-white" style={{ background: BRAND }}>
            <span className="font-semibold text-[15px]">Lake Logic Pond Diagnostic</span>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white text-xl leading-none bg-transparent border-none cursor-pointer">×</button>
          </div>
          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[85%]">
                  {m.role === 'user' ? (
                    <div className="px-3.5 py-2.5 rounded-2xl rounded-br-sm text-white text-[13.5px] leading-relaxed" style={{ background: BRAND }}>{m.content}</div>
                  ) : (
                    <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-white border border-gray-200 text-gray-800 text-[13.5px] leading-relaxed cw-prose" dangerouslySetInnerHTML={{ __html: mdToHtml(m.content) }} />
                  )}
                  {m.sources && m.sources.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.sources.map((s) => (
                        <span key={s.n} className="inline-block text-[10px] px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100 max-w-[180px] truncate" title={s.title || 'source'}>
                          [{s.n}] {s.title || 'source'}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && msgs[msgs.length - 1]?.role === 'user' && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white border border-gray-200">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* Input */}
          <div className="flex gap-2 p-3 border-t border-gray-200 bg-white">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Describe what's going on with your pond..."
              rows={1}
              className="flex-1 border border-gray-300 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-500 resize-none max-h-[120px] font-[inherit]"
            />
            <button onClick={send} disabled={loading || !input.trim()} className="px-4 rounded-xl text-white font-semibold text-sm disabled:opacity-50 border-none cursor-pointer" style={{ background: BRAND }}>Send</button>
          </div>
          <div className="text-center text-[11px] text-gray-400 py-1.5 bg-white border-t border-gray-100">Powered by Lake Logic KB</div>
        </div>
      )}
      {/* Bubble */}
      <button onClick={open ? () => setOpen(false) : handleOpen} className="w-[60px] h-[60px] rounded-full text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform border-none cursor-pointer" style={{ background: BRAND }}>
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      </button>
    </div>
  );
}
