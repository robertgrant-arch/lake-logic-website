'use client';

import { useEffect } from 'react';

/**
 * Injects the Lake Pond RAG chatbot widget. Brand color matches Lake Logic water-500 (#3B82F6).
 */
export default function ChatWidget() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (document.querySelector('script[data-lake-logic-chat]')) return;

    const script = document.createElement('script');
    script.src = 'https://lake-pond-rag.vercel.app/widget.js';
    script.defer = true;
    script.dataset.apiKey =
      'd275ccb01df20ecb2b7e41ca724c2b49e0167480a7a9327af09e42d37469f991';
    script.dataset.title = 'Ask Lake Logic';
    script.dataset.color = '#3B82F6';
    script.setAttribute('data-lake-logic-chat', 'true');
    document.body.appendChild(script);
  }, []);

  return null;
}
