import React from 'react';

export type IndustryDef = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  metaDescription: string;
  hero: { title: string; subtitle: string; image: string; imageAlt: string };
  body: () => React.ReactNode;
};

export const INDUSTRIES: IndustryDef[] = [
  {
    slug: 'hoa',
    shortTitle: 'HOA & Community Ponds',
    title: 'HOA & Community Pond Management',
    eyebrow: 'Homeowner Associations',
    metaDescription:
      'Turn-key pond and lake management for HOAs and community associations in the Kansas City metro. Predictable annual budgets, resident-facing reporting, and a single point of accountability for your amenity pond.',
    hero: {
      title: 'HOA & Community Pond Management',
      subtitle:
        'Your community pond is the front door to your neighborhood. We keep it clean, algae-free, and worth the dues — with reporting you can actually share at the next board meeting.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'HOA community pond with fountain',
    },
    body: () => (
      <>
        <h2>What HOA Boards Care About (and What We Deliver)</h2>
        <ul>
          <li><strong>Predictable annual costs</strong> — contracted programs with a single line-item budget number, no surprise invoices.</li>
          <li><strong>Resident-facing reporting</strong> — after-visit summaries in plain English that your management company can post to the resident portal.</li>
          <li><strong>Liability protection</strong> — fully licensed applicators, $2M general liability, documented treatment records retained per Kansas/Missouri regulations.</li>
          <li><strong>Rapid response</strong> — algae complaints, dead-fish events, and amenity fountain failures get same-day or next-day triage.</li>
          <li><strong>Board-ready materials</strong> — annual water-quality trends, multi-year sediment projections, and capital-plan recommendations with cost estimates.</li>
        </ul>

        <h2>The Most Common HOA Pond Problems</h2>
        <h3>Filamentous Algae Complaints</h3>
        <p>
          The single most common resident complaint. Our IPM approach pairs targeted algaecide applications (copper or peroxyhydrate) with shade (pond dye), bottom aeration, and nutrient source control — dramatically reducing complaint frequency after the first season.
        </p>

        <h3>Geese and Nutrient Loading</h3>
        <p>
          Twenty resident Canada geese deposit 60+ pounds of nitrogen and phosphorus per year — a primary algae fuel. We integrate goose-habitat modification (shoreline buffer plantings, visual deterrents, and — when needed — coordinated USDA harassment permits) with nutrient remediation.
        </p>

        <h3>Fountain Downtime</h3>
        <p>
          Your fountain is the amenity residents see. We are factory-authorized service centers for AquaMaster, Kasco, Otterbine, and Vertex — repairs in hours, not weeks. Every program includes spring startup, fall winterization, and monthly operational checks.
        </p>

        <div className="callout">
          <div className="callout-title">Budget Planning Starts in August</div>
          <p className="!mb-0">For most HOAs the budget vote happens in October or November. We deliver detailed proposals with three service tiers — Essential, Premier, and Elite — along with multi-year capital plans so boards can align pond maintenance with reserve-study timelines.</p>
        </div>

        <h2>Reporting You Can Actually Use</h2>
        <p>
          Every site visit ends with a one-page summary: what we saw, what we treated, what's next, and any board-level decisions needed. At year-end, each HOA receives an annual water-quality analytics report showing trends in dissolved oxygen, phosphorus, clarity, and vegetation — useful evidence at the annual meeting when residents ask what their dues pay for.
        </p>

        <h2>Service Areas</h2>
        <p>
          We serve HOAs across Johnson County, Jackson County, Wyandotte County, Cass County, Clay County, and Platte County — from small subdivision amenity ponds to multi-acre master-planned community lakes.
        </p>
      </>
    ),
  },
  {
    slug: 'golf-course',
    shortTitle: 'Golf Course Ponds',
    title: 'Golf Course Pond & Lake Management',
    eyebrow: 'Superintendent Partners',
    metaDescription:
      'Aquatic management for Kansas City–area golf courses. Irrigation water quality, signature-hole fountains, algae control, fishery maintenance, and superintendent-friendly scheduling.',
    hero: {
      title: 'Golf Course Pond & Lake Management',
      subtitle:
        'Your water hazards are also your most visible aesthetic — and often your irrigation source. We treat them as both, with scheduling that respects course operations.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'Golf course pond with fountain near green',
    },
    body: () => (
      <>
        <h2>Built for Course Operations</h2>
        <ul>
          <li><strong>Early-morning or evening applications</strong> — minimal disruption to tee times.</li>
          <li><strong>Aquatic herbicide selection compatible with turf reuse</strong> — no triclopyr or imazapyr around irrigation intakes feeding bentgrass greens.</li>
          <li><strong>Signature-hole aesthetics</strong> — fountain patterns, LED lighting, and aquatic plantings designed for on-course photography.</li>
          <li><strong>Irrigation water quality</strong> — alkalinity, bicarbonate, and sodium adsorption ratio (SAR) monitoring to protect turf quality.</li>
        </ul>

        <h2>Common Golf Course Pond Challenges</h2>
        <h3>Algae Clogging Irrigation Intakes</h3>
        <p>
          Nothing ruins a morning like a pump shutoff from a filamentous mat on the intake screen. We install floating screens with wave-break perimeters, maintain mid-season algaecide programs, and keep intake areas aerated to prevent sulfide-driven intake corrosion.
        </p>

        <h3>Duckweed and Watermeal</h3>
        <p>
          Small-leaf floating plants that thrive in nutrient-rich golf-course ponds. We treat with fluridone or flumioxazin — selectively — and pair treatment with nutrient source control since chronic duckweed is almost always a nitrogen signal.
        </p>

        <h3>Carp and Rough Fish</h3>
        <p>
          Common carp and goldfish roil the sediment, cloud the water, and accelerate phosphorus recycling. Electrofishing surveys quantify the problem, and selective removal — often via professional netting — restores clarity within one season.
        </p>

        <h2>Irrigation Water Quality Monitoring</h2>
        <p>
          For courses drawing from on-site ponds, we run quarterly irrigation panels — pH, alkalinity, total hardness, sodium, chloride, iron, and sulfate — at accredited labs. Results feed directly into your agronomic plan for wetting-agent selection, acid injection, and soil amendments.
        </p>

        <div className="callout">
          <div className="callout-title">Fish as Aesthetic Asset</div>
          <p className="!mb-0">Many private clubs maintain stocked largemouth bass, bluegill, and channel catfish for members who fish. We manage the fishery as an amenity — supplemental stocking, feeders, habitat, and light electrofishing surveys — so the fishing experience keeps up with the golf experience.</p>
        </div>
      </>
    ),
  },
  {
    slug: 'private-estate',
    shortTitle: 'Private Estate Lakes',
    title: 'Private Estate Lake Management',
    eyebrow: 'Estate Owners',
    metaDescription:
      'White-glove lake and pond management for private estates across Kansas and Missouri. Trophy fisheries, signature fountains, custom dock and shoreline designs, discreet scheduled service.',
    hero: {
      title: 'Private Estate Lake Management',
      subtitle:
        "Your lake is where you fish, swim, boat, and host. We manage it like it's the 10th hole of your private course — meticulously, discreetly, and on your schedule.",
      image: 'https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'Private estate lake with dock',
    },
    body: () => (
      <>
        <h2>Our Estate Program Approach</h2>
        <p>
          Estate owners expect results, privacy, and zero headaches. Our white-glove program assigns a dedicated lead biologist as your single point of contact, handles all vendor coordination, and delivers results you can see from the porch.
        </p>

        <h2>Services for Estate Lakes</h2>
        <ul>
          <li><strong>Trophy fisheries</strong> — multi-year bass growth programs targeting 8 to 10-pound-plus trophies.</li>
          <li><strong>Signature fountains</strong> — custom-designed display fountains with LED packages sized to the lake's sight lines.</li>
          <li><strong>Swim clarity</strong> — nutrient inactivation (alum, Phoslock), planktonic algae management, and sediment stabilization to keep beach areas clear and safe.</li>
          <li><strong>Waterfowl management</strong> — shoreline buffer plantings, native reestablishment, and permit-based harassment when indicated.</li>
          <li><strong>Dock & shoreline design</strong> — coordination with marine contractors for dock, boat lift, and bioengineered shoreline projects.</li>
          <li><strong>Concierge scheduling</strong> — advance notification of every visit, discreet crews, and after-event cleanup.</li>
        </ul>

        <h2>Water Clarity for Swimming & Aesthetics</h2>
        <p>
          Estate owners usually want two things: clear water and great fishing. These goals sometimes conflict — a fertilized pond grows bigger bass but cloudier water. We strike the balance with targeted nutrient management, bottom aeration, and selective algaecide applications that preserve zooplankton and crucial forage without sacrificing clarity at the swim beach.
        </p>

        <h2>Confidentiality</h2>
        <p>
          We work at many of the region's most prominent estate properties. Our NDAs, photography restrictions, and scheduled crew access protocols are established on day one.
        </p>
      </>
    ),
  },
  {
    slug: 'municipal',
    shortTitle: 'Municipal & Stormwater',
    title: 'Municipal & Stormwater Lake Management',
    eyebrow: 'Public Sector',
    metaDescription:
      'Municipal lake and stormwater BMP management for Kansas and Missouri public works departments. MS4 inspection, compliance reporting, public-access safety, and capital-planning support.',
    hero: {
      title: 'Municipal & Stormwater Lake Management',
      subtitle:
        'City parks, municipal lakes, and stormwater BMPs are public assets. We manage them with the documentation, compliance rigor, and public-safety focus that public-sector ownership demands.',
      image: 'https://images.unsplash.com/photo-1569163139394-de4e1c4a2b6e?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'Municipal lake park',
    },
    body: () => (
      <>
        <h2>Public-Sector Service Package</h2>
        <ul>
          <li><strong>MS4 BMP inspection and reporting</strong> — annual inspection reports in the format required by Kansas City, Overland Park, Olathe, Lenexa, and other regional stormwater departments.</li>
          <li><strong>Public health and safety</strong> — cyanobacteria monitoring with lab microcystin testing, public advisory protocol coordination with KDHE.</li>
          <li><strong>Fish kill response</strong> — rapid on-site assessment, KDWP or MDC notification, and documented cause-of-death reporting.</li>
          <li><strong>Aquatic vegetation management</strong> — licensed aquatic pesticide applications with EPA Pesticide General Permit (PGP) NOI coverage where required.</li>
          <li><strong>Capital improvement planning</strong> — five and ten-year CIP support for dredging, shoreline armoring, aeration upgrades, and BMP retrofits.</li>
        </ul>

        <h2>Procurement-Ready</h2>
        <p>
          We work under standard public-sector procurement vehicles: RFP responses, on-call term contracts, cooperative purchasing agreements (Sourcewell, OMNIA), and task-order-based IDIQ contracts. Insurance, bonding, and prevailing-wage certifications are in place for federally-funded work.
        </p>

        <div className="callout">
          <div className="callout-title">Liability and Documentation</div>
          <p className="!mb-0">For publicly-owned waterbodies, documentation is as important as the work itself. Every inspection, treatment, and observation is logged with date, time, applicator, product, rate, weather conditions, and GPS location — an audit trail that stands up in regulatory review and tort defense.</p>
        </div>

        <h2>Common Engagements</h2>
        <ul>
          <li>Annual BMP inspections across 20–200 stormwater facilities under a single contract.</li>
          <li>Targeted dredging of sediment-loaded detention basins at or near 85% capacity.</li>
          <li>Restoration of public fishing lakes — fishery surveys, stocking, and habitat enhancement.</li>
          <li>Water-quality monitoring for 319 grant-funded watershed restoration projects.</li>
        </ul>
      </>
    ),
  },
];

export const INDUSTRY_BY_SLUG: Record<string, IndustryDef> = Object.fromEntries(
  INDUSTRIES.map((i) => [i.slug, i]),
);
