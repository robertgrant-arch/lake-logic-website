import React from 'react';

export type ArticleDef = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  readMinutes: number;
  publishedISO: string;
  image: string;
  imageAlt: string;
  body: () => React.ReactNode;
};

/**
 * Long-form SEO articles for /resources. Each post targets a specific search intent,
 * adopts a professional, science-backed voice consistent with Lake Logic's brand,
 * and references the topics that drive real pond-owner decisions.
 */
export const ARTICLES: ArticleDef[] = [
  {
    slug: 'hoa-pond-maintenance-checklist',
    title: 'The HOA Pond Maintenance Checklist: A Board Member\u2019s Guide',
    excerpt:
      'Community ponds drive property values — or drain them. Here\u2019s the month-by-month playbook we use to keep HOA amenity ponds complaint-free, algae-free, and on-budget.',
    metaDescription:
      'A practical month-by-month HOA pond maintenance checklist covering budgeting, algae control, aeration, and resident communication for Kansas City–area community associations.',
    category: 'HOA',
    readMinutes: 9,
    publishedISO: '2026-03-12',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'HOA community pond with fountain',
    body: () => (
      <>
        <p>
          If you serve on an HOA board, the community pond is probably one of three things: your most beautiful amenity, your most frequent source of complaints, or — on a bad summer — both. The pond is one of the few capital assets the association owns that residents experience every day on their commute home. Neglect shows up instantly.
        </p>
        <p>
          This checklist distills what we do across dozens of HOA contracts in the Kansas City metro. It\u2019s what a board can expect from a professional lake management program, and it doubles as a due-diligence checklist when evaluating proposals.
        </p>

        <h2>January \u2013 February: Plan the Year</h2>
        <ul>
          <li>Review last year\u2019s after-visit reports and water quality trends.</li>
          <li>Confirm the annual management contract, or solicit proposals if the contract is expiring.</li>
          <li>Schedule a pre-season walk-through with your provider before ice-out. Note shoreline damage from winter.</li>
          <li>Verify fountain/aeration compressor warranties and replacement part inventory.</li>
        </ul>

        <h2>March: Pre-Season Diagnostics</h2>
        <ul>
          <li>Water panel: alkalinity, hardness, pH, total phosphorus, ammonia.</li>
          <li>Secchi-disk clarity baseline.</li>
          <li>Shoreline inspection for erosion, burrow damage, and dead vegetation from winter.</li>
          <li>Electrical GFCI tests on fountain circuits per NEC Article 680.</li>
        </ul>

        <h2>April: Spring Startup</h2>
        <ul>
          <li>Reinstall display fountains and run through full pattern.</li>
          <li>Resume subsurface aeration if winterized. Inspect diffuser plates for biofouling.</li>
          <li>Apply pre-emergent pond dye (blue or aqua) to shade pending algae and reduce solar heating.</li>
          <li>First algaecide pass if filamentous algae present. Early treatment prevents midsummer explosions.</li>
          <li>Stabilize shoreline with cool-season native seed or fiber matting where winter damage is visible.</li>
        </ul>

        <h2>May \u2013 July: Peak Season Operations</h2>
        <ul>
          <li>Bi-weekly or monthly service visits depending on contract tier.</li>
          <li>Target filamentous algae early (less than 10% surface coverage) with copper-based or peroxyhydrate algaecides.</li>
          <li>Monitor for duckweed, watermeal, or cyanobacteria — each requires a different treatment.</li>
          <li>Dissolved oxygen checks during hot, calm stretches; turn on emergency aeration if readings drop below 4 mg/L.</li>
          <li>Send after-visit summaries to the property manager for posting on the resident portal.</li>
        </ul>

        <div className="callout">
          <div className="callout-title">When Residents Complain</div>
          <p className="!mb-0">Most algae complaints peak at the exact moment residents start hosting summer cookouts. A consistent bi-weekly treatment cadence from May through August — with one-day response to complaint calls — prevents 80% of the friction.</p>
        </div>

        <h2>August: Mid-Season Review and Budget Prep</h2>
        <ul>
          <li>Mid-year water-quality report for the board.</li>
          <li>Schedule electrofishing if the association maintains a fishery.</li>
          <li>Begin drafting next year\u2019s proposal with three service tiers so the board can match spend to dues.</li>
          <li>Identify capital items (fountain replacement, dredging, shoreline armoring) for the reserve study.</li>
        </ul>

        <h2>September \u2013 October: Late Season Stabilization</h2>
        <ul>
          <li>Fall weed treatments for cattails (imazapyr or glyphosate) while plants are actively translocating.</li>
          <li>Shoreline reseeding with cool-season grasses.</li>
          <li>Goose deterrent escalation in advance of migration.</li>
          <li>Annual contract renewal and budget vote.</li>
        </ul>

        <h2>November \u2013 December: Winterization</h2>
        <ul>
          <li>Pull and store display fountains before first hard freeze.</li>
          <li>Decide whether to keep diffused aeration running (prevents winter fish kill under ice) or winterize. For most HOA ponds 8+ feet deep, we leave one diffuser running in a shallow zone to keep an open hole.</li>
          <li>Final year-end report with annual water-quality trends and multi-year projection.</li>
        </ul>

        <p>
          A well-run HOA pond is boring — in the best sense of the word. Nothing dramatic happens. Residents stop complaining. The pond becomes the marketing photo for the neighborhood instead of the next board-meeting emergency. Getting there takes one season of consistent professional management and a board that says yes to source-control investments (aeration, native plantings, nutrient inactivation) instead of chasing symptoms with algaecide alone.
        </p>
      </>
    ),
  },

  {
    slug: 'why-aeration-matters',
    title: 'Why Aeration Is the Single Highest-ROI Investment for a Pond',
    excerpt:
      'Of every dollar spent on a pond, the dollar spent on aeration is the one that keeps giving. Here\u2019s the science, the math, and the sizing guide.',
    metaDescription:
      'How diffused aeration improves pond water quality, prevents fish kills, reduces muck, and lowers algaecide costs. Sizing rules and selection guide from Lake Logic.',
    category: 'Aeration',
    readMinutes: 7,
    publishedISO: '2026-02-18',
    image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'Pond with aeration bubbles and fountain',
    body: () => (
      <>
        <p>
          Every pond problem we are called about — algae, muck, odors, fish kills, stained water — traces back in some way to oxygen. A pond with insufficient dissolved oxygen cannot support a healthy fishery, cannot efficiently break down organic matter, and cannot resist the internal phosphorus loading that fuels algae blooms. Aeration is the single most important lever to pull.
        </p>

        <h2>The Oxygen Problem in Midwestern Ponds</h2>
        <p>
          Kansas and Missouri ponds thermally stratify by late May. A warm upper layer (epilimnion) floats on a cold lower layer (hypolimnion), and the two rarely mix. Oxygen in the bottom layer is consumed by bacterial decomposition of accumulated sediment and never gets replenished. Phosphorus bound to sediment under oxygenated conditions is released as soon as the bottom goes anaerobic, feeding the next algae bloom from below.
        </p>

        <h2>Two Categories of Aeration</h2>
        <h3>Surface Aeration (including Display Fountains)</h3>
        <p>
          Pump water through an impeller, launch it into the air, and let atmospheric oxygen dissolve in the falling droplets. Best for shallow ponds (&lt;7 feet), heavily vegetated ponds where bottom circulation would kick up debris, or applications where the visual display matters more than the water-column effect.
        </p>

        <h3>Diffused Subsurface Aeration</h3>
        <p>
          A compressor on shore pushes air through weighted lines to membrane diffusers on the pond bottom. The rising bubble plume entrains the cold bottom layer and lifts it to the surface, destratifying the pond and oxygenating the full water column. Dramatically more efficient than surface aeration for ponds deeper than 7 feet.
        </p>

        <div className="callout">
          <div className="callout-title">Sizing Rule of Thumb</div>
          <p className="!mb-0">One diffuser plate per acre for ponds 8–15 feet deep, with 2–4 cubic feet per minute (CFM) of airflow per diffuser. Deeper, nutrient-heavier ponds need more. Always size off summer temperature profiles and measured dissolved oxygen — never off sales literature alone.</p>
        </div>

        <h2>The Compounding Returns</h2>
        <ul>
          <li><strong>Lower algaecide spend.</strong> Properly aerated ponds typically need 30–50% less chemical treatment after the first full season.</li>
          <li><strong>Reduced muck.</strong> Aerobic bacterial decomposition breaks down organic sediment at roughly three times the rate of anaerobic decomposition. Over 5 years, 6–12 inches of muck can be eliminated without dredging.</li>
          <li><strong>No summer or winter fish kills.</strong> The two conditions that kill fish — summer algae crashes and winter ice-over — are both oxygen-driven and both preventable with proper aeration.</li>
          <li><strong>Higher dissolved oxygen at depth</strong> expands the usable habitat for gamefish by 40–100% in a typical 10-foot pond.</li>
          <li><strong>No more hydrogen-sulfide odor</strong> during summer turnover.</li>
        </ul>

        <h2>Common Mistakes</h2>
        <ul>
          <li><strong>Undersizing.</strong> Contractors often size aeration off surface area alone. Volume matters more. A 1-acre, 4-foot-deep pond needs a different system than a 1-acre, 18-foot-deep pond.</li>
          <li><strong>Single diffuser in the middle.</strong> For ponds larger than a half-acre, multiple diffusers distributed across the deep zones outperform one central diffuser every time.</li>
          <li><strong>Cheap compressors.</strong> A rotary-vane compressor running 24/7 outdoors in Kansas summers needs a proper housing with airflow, sound dampening, and a filter-change schedule. Commercial-grade pays back within 2 years in reduced downtime.</li>
        </ul>

        <h2>Payback</h2>
        <p>
          A properly sized diffused aeration system for a 1-acre pond runs $4,000–$7,000 installed. Annual power cost is typically $200–$400. The payback (in reduced algaecide treatments and avoided dredging) typically arrives in years 2–4 for nutrient-heavy ponds. For HOAs, the quieter resident portal is worth it even before you count the dollars.
        </p>
      </>
    ),
  },

  {
    slug: 'grass-carp-weed-control-kansas-missouri',
    title: 'Grass Carp for Weed Control: The Kansas and Missouri Rulebook',
    excerpt:
      'Sterile triploid grass carp are a cheap, durable weed-control tool — when stocked correctly and legally. Here\u2019s what Kansas and Missouri pond owners need to know.',
    metaDescription:
      'Grass carp stocking rates, permitting, and legal rules for Kansas and Missouri ponds. How many to stock, what they eat, and when to add them to your weed management plan.',
    category: 'Fisheries',
    readMinutes: 6,
    publishedISO: '2026-02-04',
    image: 'https://images.unsplash.com/photo-1516767254076-ea25be49f6d4?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'Fish stocking truck at a Kansas pond',
    body: () => (
      <>
        <p>
          Few pond tools are as cost-effective as sterile triploid grass carp (Ctenopharyngodon idella). For many Midwestern ponds with nuisance submerged vegetation, a one-time stocking of 5 fish per vegetated acre delivers 7–10 years of durable biological control — at a fraction of the cost of repeated herbicide applications.
        </p>

        <h2>What Grass Carp Actually Eat</h2>
        <p>
          Grass carp prefer softer, palatable submerged species — hydrilla, elodea, naiads, coontail, and curlyleaf pondweed are highly preferred. They will also eat filamentous algae in quantity and moderately preferred plants like sago and American pondweed. They will <em>not</em> reliably control cattails, water lilies, watermilfoil, or most emergent vegetation.
        </p>

        <div className="callout">
          <div className="callout-title">Palatability Ranking</div>
          <p className="!mb-0">Highly preferred: hydrilla, elodea, naiads, coontail, curlyleaf pondweed, duckweed, filamentous algae. Moderately preferred: sago pondweed, American pondweed, Chara. Poorly preferred: watermilfoil, water lilies, cattails, spatterdock.</p>
        </div>

        <h2>Kansas Rules</h2>
        <p>
          In Kansas, only sterile triploid grass carp may be stocked. Diploid (fertile) grass carp are illegal. A permit from the Kansas Department of Wildlife and Parks is required to possess and transport triploid grass carp, but private pond stocking is straightforward. Your fish vendor handles the paperwork in most cases.
        </p>

        <h2>Missouri Rules</h2>
        <p>
          Missouri permits sterile triploid grass carp in private ponds without a special permit. Again, diploid grass carp are prohibited. The Missouri Department of Conservation publishes stocking guidance that mirrors the 5-per-acre rule of thumb.
        </p>

        <h2>Stocking Rates by Problem Severity</h2>
        <ul>
          <li><strong>Moderate submerged vegetation (20–40% coverage):</strong> 5 fish per vegetated acre.</li>
          <li><strong>Heavy coverage (40–60%):</strong> 7 fish per vegetated acre.</li>
          <li><strong>Severe coverage (60%+):</strong> 10–15 fish per vegetated acre plus a one-time herbicide knockdown.</li>
          <li><strong>Maintenance restocking:</strong> replace at 30–40% of initial stocking every 5–7 years.</li>
        </ul>

        <h2>Size at Stocking</h2>
        <p>
          Stock fish at 10 inches or longer. Smaller fish are eaten by largemouth bass. A 12-inch grass carp will grow to 20–30 pounds over its 10–15 year lifespan in a well-managed pond.
        </p>

        <h2>When Not to Use Grass Carp</h2>
        <ul>
          <li>Ponds with uncontrolled outlets. Grass carp escape downstream and cause problems in public water.</li>
          <li>Ponds where submerged vegetation is part of the fishery habitat plan — grass carp do not discriminate between nuisance and beneficial plants.</li>
          <li>Ponds with primarily floating-leaf or emergent weeds — use herbicide or mechanical control.</li>
          <li>Ponds that need immediate results — grass carp take 12–18 months to visibly reduce dense vegetation.</li>
        </ul>

        <h2>Pairing with Other Tools</h2>
        <p>
          The best long-term program uses grass carp as the baseline biological control, supplemented with targeted herbicide for early-season flushes and mechanical removal of unreachable species. Combined, these typically cut annual vegetation-control costs by 50–70% after year one.
        </p>
      </>
    ),
  },

  {
    slug: 'muck-and-dredging-when-to-act',
    title: 'Muck, Sediment & Dredging: When to Act and What It Costs',
    excerpt:
      'Every Midwestern pond accumulates 0.5\u20132 inches of sediment per year. Here\u2019s how to know when dredging is overdue \u2014 and how to minimize the bill.',
    metaDescription:
      'When to dredge a pond, hydraulic versus mechanical dredging comparison, typical Kansas and Missouri costs, permitting, and alternatives like aeration and nutrient inactivation.',
    category: 'Sediment',
    readMinutes: 8,
    publishedISO: '2026-01-22',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'Pond shoreline with exposed sediment',
    body: () => (
      <>
        <p>
          Every pond loses depth. Topsoil, lawn clippings, leaves, goose droppings, and internal biological production accumulate at the bottom at roughly 0.5 to 2 inches per year depending on the watershed. At some point the pond becomes a wide puddle — and the only cure is removal of the sediment.
        </p>

        <h2>Signs Your Pond Needs Dredging</h2>
        <ul>
          <li>Average depth has dropped below 4 feet.</li>
          <li>Soft muck exceeds 12 inches deep across more than 25% of the bottom.</li>
          <li>Persistent summer algae blooms even after aeration, alum, or Phoslock treatments.</li>
          <li>Winter fish kills despite open water maintained by aeration.</li>
          <li>Hydrogen-sulfide ("rotten egg") odor during summer turnover.</li>
          <li>Wading access is impossible because of bottom softness.</li>
          <li>Fountains sink slowly into the bottom or become progressively harder to service.</li>
        </ul>

        <h2>Hydraulic vs Mechanical Dredging</h2>
        <h3>Hydraulic (Cutter-Suction)</h3>
        <p>
          A floating dredge lowers a rotating cutterhead into the sediment and pumps the slurry to a shoreline dewatering tube or containment cell. Best for soft, unconsolidated muck. The pond stays full. No heavy equipment drives over the shoreline. Typical throughput: 400–1,200 cubic yards per day.
        </p>

        <h3>Mechanical (Excavator)</h3>
        <p>
          Either the pond is drawn down and an excavator works from the bank, or a long-reach excavator works from a barge. Best for stiff clay sediment, small ponds, or projects requiring simultaneous shoreline reshaping. Faster than hydraulic dredging per cubic yard but requires drawdown infrastructure.
        </p>

        <h2>Typical Costs in Kansas and Missouri</h2>
        <ul>
          <li><strong>Hydraulic dredging:</strong> $10–$22 per cubic yard depending on volume, pumping distance, and dewatering logistics.</li>
          <li><strong>Mechanical dredging:</strong> $8–$18 per cubic yard plus drawdown and access road preparation.</li>
          <li><strong>Geotextile dewatering tubes:</strong> $0.80–$1.50 per cubic yard of treated slurry, plus polymer.</li>
          <li><strong>Permitting and mitigation:</strong> $5,000–$25,000 depending on wetlands impact.</li>
        </ul>
        <p>
          A typical 2-acre HOA pond needing 10,000 cubic yards of removal runs $120,000–$250,000 installed.
        </p>

        <h2>Permitting</h2>
        <p>
          Under Section 404 of the Clean Water Act, dredging in "waters of the United States" typically requires review by the U.S. Army Corps of Engineers. Kansas Department of Health and Environment and Missouri Department of Natural Resources issue state-level water quality certifications. Isolated ponds disconnected from surface drainage often qualify for Nationwide Permits with minimal mitigation. Expect a 60–120 day permitting timeline.
        </p>

        <h2>Less-Invasive Alternatives</h2>
        <ul>
          <li><strong>Bottom aeration</strong> shifts the pond from anaerobic to aerobic decomposition, doubling or tripling the natural muck-breakdown rate. Over 5 years, this can eliminate 6–12 inches of muck without dredging.</li>
          <li><strong>Beneficial bacteria</strong> products accelerate decomposition in warm months. Effect is modest but additive.</li>
          <li><strong>Alum or Phoslock inactivation</strong> binds phosphorus in the sediment, reducing internal loading and algae fuel. Often buys 5–10 years of runway before dredging is needed.</li>
          <li><strong>Watershed source control</strong> — diverting driveway or rooftop runoff, installing a forebay, upgrading upstream BMPs — slows the refill rate.</li>
        </ul>

        <div className="callout">
          <div className="callout-title">Build a Sinking Fund</div>
          <p className="!mb-0">For HOAs and commercial properties, we model dredging costs into a 20-year reserve study and translate it to a monthly per-unit dues amount. A community with a 2-acre pond should typically reserve $6,000–$12,000 per year for eventual sediment management.</p>
        </div>
      </>
    ),
  },

  {
    slug: 'cyanobacteria-harmful-algal-blooms-kansas',
    title: 'Cyanobacteria & Harmful Algal Blooms in Kansas: What Pond Owners Need to Know',
    excerpt:
      'Blue-green "algae" aren\u2019t algae at all \u2014 they\u2019re bacteria, and some strains produce toxins lethal to dogs, livestock, and people. Here\u2019s how to recognize and manage them.',
    metaDescription:
      'Identifying cyanobacteria blooms, toxin testing, public health protocols, and treatment options for Kansas and Missouri ponds. Includes KDHE advisory thresholds and response protocol.',
    category: 'Water Quality',
    readMinutes: 8,
    publishedISO: '2026-01-08',
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'Green algae bloom on a pond',
    body: () => (
      <>
        <p>
          The spike in pet deaths at Midwestern ponds and lakes over the last decade has pushed cyanobacteria — colloquially and incorrectly called "blue-green algae" — into the mainstream conversation. For pond managers, the stakes are simple: misidentifying a cyanobacteria bloom as ordinary algae can kill a dog, a horse, or (rarely) a person.
        </p>

        <h2>Cyanobacteria Aren\u2019t Algae</h2>
        <p>
          Despite the name, cyanobacteria are prokaryotic bacteria that photosynthesize. They have existed for billions of years and are responsible for Earth\u2019s oxygen atmosphere. In small quantities they are normal and ubiquitous. In warm, nutrient-rich, low-flow waterbodies — the profile of most summer Midwestern ponds — they can bloom to dominance and produce potent toxins.
        </p>

        <h2>The Dangerous Toxins</h2>
        <ul>
          <li><strong>Microcystins</strong> — hepatotoxins produced by Microcystis and other genera. Can cause liver damage, gastrointestinal symptoms, and dermatitis. KDHE public advisory threshold: 8 µg/L.</li>
          <li><strong>Anatoxin-a</strong> — a neurotoxin. Rapidly lethal to dogs that drink contaminated water.</li>
          <li><strong>Cylindrospermopsin</strong> — hepato- and nephrotoxin.</li>
          <li><strong>Saxitoxins</strong> — neurotoxins.</li>
        </ul>

        <h2>Visual Identification</h2>
        <p>
          Cyanobacteria blooms often form a thick, paint-like scum on the surface in shades of green, blue-green, red, or brown. The classic "pea soup" or "spilled paint" look is a red flag. Distinguishing cyanobacteria from filamentous green algae by eye alone is unreliable — microscopy or qPCR testing is the only definitive method.
        </p>

        <div className="callout">
          <div className="callout-title">When in Doubt, Keep Out</div>
          <p className="!mb-0">If a pond has a surface scum that resembles spilled paint, assume cyanobacteria until proven otherwise. Keep pets and livestock out of the water. Post warning signs. Collect a sample for laboratory testing before any treatment.</p>
        </div>

        <h2>KDHE Public Advisory Protocol</h2>
        <ul>
          <li><strong>Warning</strong>: microcystin &gt;8 µg/L, anatoxin-a &gt;15 µg/L, or visible scum. Swimming, wading, boating discouraged.</li>
          <li><strong>Hazard</strong>: microcystin &gt;20 µg/L or anatoxin-a &gt;90 µg/L. All recreation prohibited; public access closed.</li>
        </ul>

        <h2>Treatment Options</h2>
        <h3>Do Not Use Copper on Active Blooms of Toxin Producers</h3>
        <p>
          Copper sulfate rapidly lyses cyanobacteria cells, releasing the intracellular toxins into the water column. In the short term this actually increases human and animal exposure. Copper is acceptable for pre-emptive treatment of early, thin blooms but not for dense, established blooms with suspected toxin load.
        </p>

        <h3>Peroxyhydrate Products</h3>
        <p>
          Sodium carbonate peroxyhydrate (brand: PAK 27, GreenClean) oxidizes cyanobacteria cell walls more gradually, with less toxin release. These are the preferred chemical intervention for active cyanobacteria blooms.
        </p>

        <h3>Source Control Is the Long-Term Fix</h3>
        <p>
          Cyanobacteria are fueled by phosphorus and nitrogen. Alum or Phoslock inactivation of sediment phosphorus, bottom aeration to prevent anaerobic phosphorus release, goose exclusion, and watershed nutrient reduction all reduce the fuel. No chemical treatment will keep a nutrient-saturated pond clear of cyanobacteria over multiple summers.
        </p>

        <h2>Reporting</h2>
        <p>
          Suspected cyanobacteria blooms in publicly accessible Kansas waters should be reported to KDHE at 1-785-296-1664. In Missouri, report to the Missouri Department of Natural Resources. Private pond owners are not required to report but we strongly recommend professional testing before allowing pets or livestock back in the water.
        </p>
      </>
    ),
  },

  {
    slug: 'stocking-a-new-pond-kansas',
    title: 'Stocking a New Pond in Kansas or Missouri: The Complete Playbook',
    excerpt:
      'Species selection, stocking sequence, size, and timing for new private ponds \u2014 plus the most common mistakes that turn a promising fishery into a stunted bluegill factory.',
    metaDescription:
      'Complete guide to stocking a new pond in Kansas or Missouri: species, stocking ratios, sequence, size at stocking, and common mistakes. From Lake Logic\u2019s fisheries biologists.',
    category: 'Fisheries',
    readMinutes: 8,
    publishedISO: '2025-12-14',
    image: 'https://images.unsplash.com/photo-1516767254076-ea25be49f6d4?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'Largemouth bass being released into a pond',
    body: () => (
      <>
        <p>
          You\u2019ve just finished building a pond, or you\u2019ve drained and restored one. The water is clear, the shoreline is seeded, and the inlet is flowing. Now comes the question that defines the next decade of use: what do you stock, in what quantities, and in what order?
        </p>

        <h2>The Classic Midwestern Recipe</h2>
        <p>
          For ponds 0.5–20 acres in Kansas and Missouri, the gold-standard stocking is:
        </p>
        <ul>
          <li><strong>Fall of Year 1:</strong> 500 bluegill per acre (2–3 inch fingerlings). Optional: 50 redear sunfish per acre.</li>
          <li><strong>Spring of Year 2:</strong> 50–100 channel catfish per acre (6–8 inch).</li>
          <li><strong>Late Spring / Early Summer of Year 2:</strong> 100 largemouth bass per acre (2–3 inch fingerlings), stocked <em>after</em> bluegill have successfully spawned.</li>
        </ul>

        <div className="callout">
          <div className="callout-title">Why the Sequence Matters</div>
          <p className="!mb-0">Stocking bass before bluegill have reproduced gives bass no forage — and they cannibalize each other, never establish, and leave you stocking again next year. The "fall bluegill, spring bass" sequence is the single most important decision in new-pond fisheries.</p>
        </div>

        <h2>Optional Additions</h2>
        <ul>
          <li><strong>Fathead minnows</strong> — 5–10 pounds per acre at the same time as bluegill. Kickstart the forage base for the first year of bass growth.</li>
          <li><strong>Redear sunfish ("shellcracker")</strong> — 50 per acre. Excellent at eating rams-horn snails (reducing grub and yellow-grub parasite loads on bass and bluegill). Not a replacement for bluegill.</li>
          <li><strong>Hybrid striped bass</strong> — 25 per acre where trophy sport fishing is a priority. Require supplemental feeding to thrive.</li>
          <li><strong>Triploid grass carp</strong> — 5 per vegetated acre if submerged weeds are anticipated.</li>
        </ul>

        <h2>Species to Avoid</h2>
        <ul>
          <li><strong>Crappie</strong> in small ponds. Almost invariably overpopulate and stunt. Reserved for 20-acre-plus lakes with aggressive harvest.</li>
          <li><strong>Green sunfish</strong> — aggressive overpopulator that crowds out bluegill.</li>
          <li><strong>Bullhead catfish</strong> — muddy the water and outcompete channel catfish.</li>
          <li><strong>Diploid grass carp, common carp, goldfish</strong> — illegal or destructive.</li>
        </ul>

        <h2>Where to Source Fish</h2>
        <p>
          Use a reputable regional hatchery — in the Kansas City area, that includes several established Kansas and Missouri private suppliers. Avoid transporting fish yourself over long distances; stress during transport dramatically affects survival. Certified hatcheries provide disease-free stock with documented origin, which matters for insurance and for permitting triploid grass carp.
        </p>

        <h2>First-Year Management</h2>
        <ul>
          <li>Do not fish heavily in Year 2. Let the bluegill and bass populations establish.</li>
          <li>Install one automatic feeder per 2 acres. Feed pellets 3 times daily at bluegill and catfish.</li>
          <li>Maintain aeration. Fish oxygen demand scales quickly with pond biomass.</li>
          <li>Begin annual electrofishing surveys in Year 3 to track size structure.</li>
          <li>Impose a slot limit — release bass 12–16 inches, harvest bass under 12 inches (selectively) — to prevent the classic stunted-bass trap.</li>
        </ul>
      </>
    ),
  },

  {
    slug: 'goose-management-nutrient-loading',
    title: 'Canada Geese, Nutrient Loading, and the HOA Pond',
    excerpt:
      'Twenty resident geese deposit 60+ pounds of nitrogen and phosphorus per year into your pond. Here\u2019s the integrated management approach that actually works.',
    metaDescription:
      'Integrated Canada goose management for ponds: habitat modification, deterrents, permitted harassment, and the nutrient math that makes the case for goose control.',
    category: 'HOA',
    readMinutes: 6,
    publishedISO: '2025-11-20',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'Canada geese on a community pond',
    body: () => (
      <>
        <p>
          In the mid-1960s, Kansas Canada goose populations were a few thousand migratory birds. Today, the resident (non-migratory) population exceeds 100,000 statewide — thanks largely to HOA amenity ponds, golf courses, and urban parks that offer exactly the habitat geese prefer: short-mowed grass next to open water.
        </p>

        <h2>The Nutrient Math</h2>
        <p>
          A resident Canada goose deposits approximately 2–3 pounds of nitrogen and 0.7 pounds of phosphorus per bird per year. A flock of 20 resident geese contributes roughly:
        </p>
        <ul>
          <li><strong>Nitrogen:</strong> 40–60 pounds per year</li>
          <li><strong>Phosphorus:</strong> 14 pounds per year</li>
        </ul>
        <p>
          For a 1-acre, 8-foot-deep pond, that phosphorus loading alone is enough to fuel summer-long algae blooms. Geese are not the only nutrient source, but they are the most concentrated and the easiest to address.
        </p>

        <h2>Integrated Goose Management</h2>
        <h3>1. Habitat Modification</h3>
        <p>
          The highest-leverage intervention. Geese avoid shorelines where they cannot walk out of the water onto short grass with clear sightlines for predators. Install a 3-foot-tall, 6-foot-deep native shoreline buffer — switchgrass, big bluestem, little bluestem, native wildflowers — and resident goose use drops 60–80% within two seasons.
        </p>

        <h3>2. Visual and Audio Deterrents</h3>
        <p>
          Coyote decoys, predator-eye balloons, and propane cannons work temporarily. Geese habituate within 2–4 weeks. Rotate deterrents weekly. Most useful as a transition tool while native shoreline is establishing.
        </p>

        <h3>3. Border Collie Harassment</h3>
        <p>
          Trained collies systematically flush geese, and geese perceive them as sustained predation. Requires regular visits through the peak season (March–October) but is highly effective.
        </p>

        <h3>4. Egg Addling</h3>
        <p>
          Shaking or oiling eggs prevents hatching without removing the nest, which keeps the adult pair from re-laying. Requires a USDA egg-oil permit (straightforward to obtain). Cuts resident recruitment dramatically.
        </p>

        <h3>5. Harassment Permits and Roundups</h3>
        <p>
          For HOAs with chronic resident goose problems, USDA Wildlife Services will evaluate the site and, where warranted, conduct a summer roundup during the molt when geese are flightless. This is the last resort but effective for populations that have lost fear of deterrents.
        </p>

        <h2>What Residents Worry About</h2>
        <p>
          Most HOA boards hesitate to take action because "residents like the geese." In practice, residents like <em>seeing</em> geese. They do not like goose feces on sidewalks, dead-fish smells from algae blooms, or "no swimming / no fishing" advisories driven by high E. coli counts. Framing goose management as algae and water-quality management, not goose removal, nearly always unlocks board support.
        </p>

        <div className="callout">
          <div className="callout-title">Goose Feeding Ordinances</div>
          <p className="!mb-0">Most Kansas City metro municipalities have waterfowl-feeding ordinances. Posted signage plus an enforcement letter in the HOA newsletter typically reduces resident feeding by 70%+.</p>
        </div>
      </>
    ),
  },

  {
    slug: 'fall-pond-preparation-checklist',
    title: 'Fall Pond Preparation: The 10-Point Checklist for Kansas Winters',
    excerpt:
      'Fall is when ponds win or lose the next summer. Here\u2019s the 10-point checklist we run at every contracted property before first freeze.',
    metaDescription:
      'Fall pond winterization checklist for Kansas and Missouri ponds: aeration, fountains, shoreline, fisheries, and ice management to prevent winter fish kills.',
    category: 'Seasonal',
    readMinutes: 5,
    publishedISO: '2025-10-28',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'Pond in autumn with colorful leaves',
    body: () => (
      <>
        <p>
          Ponds don\u2019t go dormant in winter — they just change what they need. A pond that enters January oxygenated, clean of nuisance vegetation, and with a managed shoreline arrives at spring ready to perform. A neglected fall leads to foul summer smells, winter fish kills, and an earlier algae bloom the following year.
        </p>

        <h2>The 10-Point Fall Checklist</h2>
        <ol>
          <li><strong>Pre-winter diagnostics.</strong> Secchi depth, dissolved oxygen profile, phosphorus, and alkalinity baseline. Trends over multiple years are the foundation of every management decision.</li>
          <li><strong>Late-season weed treatment.</strong> Cattails, phragmites, and other perennial emergents are most vulnerable to herbicide translocation in August and September when carbohydrates are moving from leaves to rhizomes.</li>
          <li><strong>Shoreline reseeding.</strong> Cool-season grasses (tall fescue, Kentucky bluegrass) or native mixes (switchgrass, big bluestem) establish best with fall planting before hard freeze.</li>
          <li><strong>Fountain pull and storage.</strong> Remove display fountains before ice forms; clean, inspect seals and impellers, store in frost-free space.</li>
          <li><strong>Aeration decision.</strong> Most ponds benefit from winter aeration to maintain an ice-free hole for gas exchange. Move one diffuser to a shallower zone to avoid chilling the entire volume unnecessarily. Keep compressor housing heated above 40°F.</li>
          <li><strong>Goose shoreline review.</strong> Remove crop vegetation 50 feet from the water\u2019s edge to reduce spring goose settlement.</li>
          <li><strong>Electrofishing survey (optional).</strong> Late-fall surveys show size-structure trends at peak biomass before winter losses.</li>
          <li><strong>Forage augmentation.</strong> For managed fisheries, final feeder run at water temps below 55°F; feed conversion drops sharply below 50°F.</li>
          <li><strong>Structural review.</strong> Inspect spillways, risers, trash racks, and overflow pipes for leaf debris. Clear before leaves freeze in place.</li>
          <li><strong>Year-end reporting.</strong> For HOAs and commercial clients, compile an annual report showing year-over-year water quality trends, treatment history, and capital-plan recommendations.</li>
        </ol>

        <div className="callout">
          <div className="callout-title">Preventing Winter Fish Kills</div>
          <p className="!mb-0">Winter fish kills happen when snow accumulates on ice, blocks sunlight, stops photosynthesis, and oxygen gets consumed by bacterial respiration under the ice. Maintaining even a small area of open water via shallow-set aeration or a floating de-icer prevents 95% of winter fish kills in Kansas ponds.</p>
        </div>
      </>
    ),
  },
];

export const ARTICLE_BY_SLUG: Record<string, ArticleDef> = Object.fromEntries(
  ARTICLES.map((a) => [a.slug, a]),
);
