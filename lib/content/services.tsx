import React from 'react';

export type ServiceDef = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  hero: { title: string; subtitle: string; image: string; imageAlt: string };
  metaDescription: string;
  body: () => React.ReactNode;
};

/**
 * Services modeled after the JonesLakeManagement service structure but adapted for
 * Kansas/Midwest, leveraging Lake Logic's science-backed knowledge base.
 * Images are Unsplash (free, commercial use, no random portraits).
 */
export const SERVICES: ServiceDef[] = [
  {
    slug: 'pond-lake-management',
    shortTitle: 'Pond & Lake Management',
    title: 'Pond & Lake Management',
    eyebrow: 'Flagship Service',
    metaDescription:
      'Comprehensive pond and lake management in the Kansas City metro — water quality testing, nutrient reduction, aquatic vegetation control, and year-round care from licensed aquatic biologists.',
    hero: {
      title: 'Comprehensive Pond & Lake Management',
      subtitle:
        'A healthy waterbody is the product of dozens of interacting variables — oxygen, nutrients, alkalinity, vegetation, fish, sediment, and weather. Lake Logic measures them all and tunes them into balance.',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'Clear managed lake with natural shoreline',
    },
    body: () => (
      <>
        <p>
          Ponds and lakes are living systems. Left unmanaged, nutrient inputs from lawn fertilizer, geese, and stormwater drive algae blooms, fish kills, foul odors, and accelerated sediment accumulation. Our programs are built on routine diagnostics — dissolved oxygen profiles, alkalinity and hardness, total phosphorus, chlorophyll-a, and bathymetric surveys — so every treatment decision is rooted in data, not guesswork.
        </p>

        <h2>What a Lake Logic Management Program Includes</h2>
        <ul>
          <li><strong>Baseline assessment:</strong> on-site water quality panel, vegetation mapping, shoreline inspection, and fish-community snapshot.</li>
          <li><strong>Custom treatment plan:</strong> algae and aquatic weed control, nutrient remediation (alum, Phoslock, biological amendments), and erosion mitigation sequenced by season.</li>
          <li><strong>Aeration design:</strong> diffused-air or surface aeration sized to your waterbody's depth, volume, and thermal profile.</li>
          <li><strong>Fisheries support:</strong> electrofishing surveys, supplemental stocking, habitat installation, and predator/prey balance.</li>
          <li><strong>Year-round monitoring:</strong> scheduled site visits, written reports, and rapid response for fish kills or algae bloom events.</li>
        </ul>

        <div className="callout">
          <div className="callout-title">The Water Quality Fundamentals</div>
          <p className="!mb-0">
            Dissolved oxygen above 5 mg/L, total phosphorus below 0.05 mg/L, alkalinity of 40–200 mg/L, and pH between 6.5 and 9.0 are the baseline indicators of a healthy Midwestern pond. These are tested on every site visit and trended over time in your annual report.
          </p>
        </div>

        <h2>Common Problems We Solve</h2>
        <h3>Nuisance Algae and Aquatic Weeds</h3>
        <p>
          Most Kansas ponds bloom in late spring and again in late summer. We identify the organism — filamentous green algae, planktonic algae, or true cyanobacteria — before selecting a treatment. Many HOAs and estates see immediate results from targeted algaecide applications paired with source control (nutrient remediation and aeration).
        </p>

        <h3>Muck, Odors, and Stratification</h3>
        <p>
          Organic muck accumulates at roughly one inch per year in nutrient-loaded ponds. Diffused aeration circulates oxygen to the bottom, converts anaerobic sediment to a firmer benthic layer, and prevents the hydrogen-sulfide "rotten egg" smell that dominates summer turnover.
        </p>

        <h3>Fish Kills</h3>
        <p>
          Summer and winter fish kills are almost always oxygen-driven. Our aeration designs, combined with seasonal dissolved-oxygen monitoring, prevent the thermal and ice-cover events that cause catastrophic losses.
        </p>

        <h2>Service Frequency Options</h2>
        <ul>
          <li><strong>Essential Care</strong> — 6 to 8 annual visits covering monitoring, vegetation control, and reporting.</li>
          <li><strong>Premier Pond</strong> — bi-monthly visits with expanded diagnostics, algaecide and herbicide treatments, and priority response.</li>
          <li><strong>Elite Fishery Master Plan</strong> — fully integrated fishery and water-quality management with electrofishing and targeted stocking.</li>
          <li><strong>EcoRestore</strong> — shoreline restoration, native plantings, and sediment remediation for degraded waterbodies.</li>
        </ul>

        <p>
          Every program is custom-quoted and includes licensed aquatic pesticide applicators, full insurance, and compliance with Kansas and Missouri state regulations.
        </p>
      </>
    ),
  },

  {
    slug: 'algae-weed-control',
    shortTitle: 'Algae & Weed Control',
    title: 'Algae & Aquatic Weed Control',
    eyebrow: 'Vegetation Management',
    metaDescription:
      'Targeted algae and aquatic weed control in Kansas and Missouri. Licensed applicators treat filamentous algae, planktonic blooms, cyanobacteria, duckweed, curlyleaf pondweed, and cattails.',
    hero: {
      title: 'Algae & Aquatic Weed Control',
      subtitle:
        'Science-first vegetation management — identify the species, measure the nutrient driver, and select the lowest-impact, most cost-effective treatment.',
      image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'Aquatic vegetation control on a pond',
    },
    body: () => (
      <>
        <p>
          Not every green thing in a pond is the same, and not every green thing needs the same treatment. A filamentous mat, a planktonic chlorophyll bloom, a cyanobacteria cell, and duckweed each demand different chemistry, timing, and follow-up. Our applicators identify the organism on-site, verify with microscopy when needed, and choose the treatment that matches both the biology and your risk profile.
        </p>

        <h2>What We Treat</h2>
        <h3>Filamentous Green Algae</h3>
        <p>
          The classic "pond scum" that floats in mats. Early-season spot treatments with chelated copper or sodium carbonate peroxyhydrate prevent the mid-summer explosions that dominate HOA complaints. Longer-term, we recommend shade (pond dye), bottom aeration, and nutrient reduction as the durable fix.
        </p>

        <h3>Planktonic Algae Blooms</h3>
        <p>
          Single-celled algae that turn the water green, pea-soup, or brown. We use laboratory chlorophyll-a and secchi depth readings to quantify bloom severity before treating. Chronic blooms signal excess phosphorus — addressed with alum or Phoslock inactivation, not repeat algaecide applications.
        </p>

        <h3>Cyanobacteria (Harmful Algal Blooms)</h3>
        <p>
          True cyanobacteria can produce toxins harmful to pets, livestock, and humans. We test for microcystin, anatoxin, and cylindrospermopsin, escalate to the Kansas Department of Health and Environment when required, and deploy copper-based treatments only when toxins are below advisory thresholds.
        </p>

        <h3>Submerged, Emergent, and Floating Weeds</h3>
        <ul>
          <li><strong>Curlyleaf pondweed</strong> — early-spring endothall or diquat before turions form.</li>
          <li><strong>Eurasian watermilfoil</strong> — fluridone, 2,4-D, or triclopyr depending on selectivity needs.</li>
          <li><strong>Duckweed and watermeal</strong> — fluridone or flumioxazin, often combined with aeration.</li>
          <li><strong>Cattails and emergent weeds</strong> — imazapyr or glyphosate spot-treatments in late summer.</li>
        </ul>

        <div className="callout">
          <div className="callout-title">Why Species ID Matters</div>
          <p className="!mb-0">Copper-based algaecides have no effect on duckweed. Fluridone has no effect on filamentous algae. Using the wrong product wastes money, frustrates the client, and can harm non-target organisms. Every Lake Logic treatment starts with verified species identification.</p>
        </div>

        <h2>Licensed, Labeled, Logged</h2>
        <p>
          All applicators hold Kansas Aquatic Pest Control (Category 5) and Missouri Aquatic (Category 5) pesticide licenses. Every application is logged with the product, EPA registration number, rate, weather conditions, and treated acreage — records retained for the full state-mandated period and available to you on request.
        </p>

        <h2>Integrated Vegetation Management</h2>
        <p>
          Chemistry is the fastest tool, but not the only one. Depending on the waterbody we integrate biological controls (sterile triploid grass carp at 5–7 per vegetated acre), physical removal (mechanical harvesting or hand-pulling), nutrient inactivation, native plantings, and shade. The goal is a pond that needs less and less treatment over time, not more.
        </p>
      </>
    ),
  },

  {
    slug: 'fountains-aeration',
    shortTitle: 'Fountains & Aeration',
    title: 'Fountains & Aeration Solutions',
    eyebrow: 'Water Circulation',
    metaDescription:
      'Decorative fountains and diffused aeration systems for Kansas City-area ponds and lakes. Sizing, installation, winterization, and service for AquaMaster, Kasco, and Vertex equipment.',
    hero: {
      title: 'Fountains & Aeration Solutions',
      subtitle:
        'Aeration is the single highest-leverage investment you can make in a pond. Fountains add the visual wow. We design, install, and service both — sized to your depth and volume.',
      image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'Decorative lake fountain at sunset',
    },
    body: () => (
      <>
        <h2>Decorative Display Fountains</h2>
        <p>
          Surface-mounted fountains create dramatic vertical water patterns ideal for HOA entrances, corporate campuses, estate ponds, and golf-course focal points. We install AquaMaster, Kasco, Otterbine, and Vertex units, ranging from ½ HP for quarter-acre ponds up to 10 HP tri-phase systems for multi-acre lakes. Optional LED lighting turns the fountain into a nighttime landmark.
        </p>

        <h3>Fountain Selection Checklist</h3>
        <ul>
          <li><strong>Minimum depth:</strong> 4 feet recommended, 5+ feet ideal.</li>
          <li><strong>Power:</strong> 120V for &lt;1 HP units, 240V/three-phase for 3 HP+.</li>
          <li><strong>GFCI-protected dedicated circuit</strong> per National Electrical Code (NEC) Article 680.</li>
          <li><strong>Pattern:</strong> single-tier V, two-tier crown, or three-tier trumpet based on pond width and sight lines.</li>
          <li><strong>Throw height</strong> should not exceed 60% of pond width to prevent wind-blown spray on surrounding lawns or walkways.</li>
        </ul>

        <h2>Subsurface Diffused Aeration</h2>
        <p>
          Decorative fountains aerate only the top few feet. For ponds deeper than 7 feet, diffused aeration is the workhorse — a shoreline-mounted compressor pushes air through weighted lines to membrane diffusers on the bottom, turning the column over and oxygenating the entire volume.
        </p>

        <div className="callout">
          <div className="callout-title">Sizing Rule of Thumb</div>
          <p className="!mb-0">One diffuser plate per acre of surface area for ponds 8–15 feet deep, with 2–4 CFM per diffuser. Deeper lakes and nutrient-heavy waterbodies require more. We use the standard oxygen transfer rate (SOTR) formula and summer thermal profiles to size every system, not a sales-team rule of thumb.</p>
        </div>

        <h2>Maintenance & Winterization</h2>
        <ul>
          <li><strong>Spring startup:</strong> compressor inspection, diffuser cleaning, fountain nozzle reassembly, and GFCI test.</li>
          <li><strong>Monthly:</strong> check intake screens, inspect mooring lines, verify amp draw.</li>
          <li><strong>Fall winterization:</strong> fountain pulled and stored; aeration either kept running (with compressor housing heat) to prevent winter fish kill or winterized depending on pond depth.</li>
          <li><strong>Warranty service:</strong> we are factory-authorized dealers/service centers for the major brands — no third-party hand-offs.</li>
        </ul>

        <h2>Solar and Off-Grid Options</h2>
        <p>
          For remote estate ponds or agricultural locations without electrical service, solar diffused aeration systems (Keeton, Outdoor Water Solutions) deliver 1–2 CFM during daylight hours with optional battery banks for nighttime operation. Sized per application.
        </p>
      </>
    ),
  },

  {
    slug: 'fisheries-management',
    shortTitle: 'Fisheries & Stocking',
    title: 'Fisheries Management & Fish Stocking',
    eyebrow: 'Trophy Fisheries',
    metaDescription:
      'Fisheries management, electrofishing surveys, custom stocking plans, and habitat installation for Kansas and Missouri ponds. Largemouth bass, bluegill, channel catfish, crappie, hybrid striped bass.',
    hero: {
      title: 'Fisheries Management & Stocking',
      subtitle:
        'Building trophy bass, balanced bluegill, and healthy forage — one pond at a time, with electrofishing data and decades-proven stocking ratios.',
      image: 'https://images.unsplash.com/photo-1516767254076-ea25be49f6d4?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'Angler with a largemouth bass caught from a managed lake',
    },
    body: () => (
      <>
        <h2>Electrofishing Population Surveys</h2>
        <p>
          You cannot manage what you cannot measure. Our boat-mounted and backpack electrofishing surveys temporarily stun fish to the surface for species ID, length/weight measurements, and release — providing a quantitative snapshot of your fishery's biomass, size structure, and relative weight (Wr) index.
        </p>
        <p>
          We typically recommend surveys every 2–3 years, or annually for intensively managed trophy fisheries. The result is a written report with Proportional Stock Density (PSD), Relative Stock Density (RSD), and targeted management recommendations.
        </p>

        <h2>New Pond Stocking</h2>
        <p>
          The classic Midwestern pond stocking ratio — originally developed by Kansas and Missouri state fisheries biologists — is:
        </p>
        <ul>
          <li><strong>500 bluegill per acre</strong> (fall, 2–3 inch fingerlings)</li>
          <li><strong>50–100 channel catfish per acre</strong> (spring following bluegill)</li>
          <li><strong>100 largemouth bass per acre</strong> (late spring/early summer, once bluegill have spawned)</li>
          <li><strong>Optional: 50 redear sunfish per acre</strong> (shellcracker, excellent predator of ramshorn snails and trematode vectors)</li>
        </ul>

        <div className="callout">
          <div className="callout-title">Grass Carp for Weed Control</div>
          <p className="!mb-0">Sterile triploid grass carp stocked at 5 fish per vegetated acre provide durable biological control of submerged vegetation. A permit is required in Kansas; Missouri allows them freely. Fertile diploid grass carp are prohibited in both states.</p>
        </div>

        <h2>Established Pond Adjustments</h2>
        <p>
          Many ponds suffer from bluegill overpopulation and stunted bass. The fix is almost never "stock more bass." Instead we use data-driven supplemental stocking — 8–10 inch intermediate-sized bass, forage-producing threadfin or gizzard shad (where appropriate), and sometimes aggressive bluegill harvest — combined with habitat and feeding adjustments.
        </p>

        <h2>Habitat Installation</h2>
        <p>
          Natural ponds rarely have enough structural cover. We install Mossback fish habitat products, brush piles (cedar and hardwood), rock piles, spawning beds, and deep-water thermoclines that provide the ambush points, spawning substrate, and refuge from predation that make fish grow faster and congregate predictably.
        </p>

        <h2>Automated Feeding Programs</h2>
        <p>
          Fish feeders turn a 4-inch bluegill into a 9-inch slab in one growing season and accelerate bass growth through the predator effect on that forage base. We install and service Texas Hunter and Moultrie directional feeders on 3-times-daily schedules calibrated to stocking density and water temperature.
        </p>

        <h2>Trophy Bass Programs</h2>
        <p>
          Targeting 8 to 10-pound-plus bass takes 5–7 years of deliberate management: forage abundance, minimum length limits (often 20 inches or higher), selective harvest of smaller bass, supplemental feeding, and consistent monitoring. We build the multi-year roadmap, then execute it with you.
        </p>
      </>
    ),
  },

  {
    slug: 'shoreline-dredging',
    shortTitle: 'Shoreline & Dredging',
    title: 'Shoreline Restoration & Dredging',
    eyebrow: 'Sediment & Erosion',
    metaDescription:
      'Shoreline erosion repair, bioengineered stabilization, hydraulic and mechanical dredging, and sediment management for Kansas and Missouri ponds and lakes.',
    hero: {
      title: 'Shoreline Restoration & Dredging',
      subtitle:
        'Eroding banks and accumulated muck are the two biggest long-term threats to pond value. We stabilize one and remove the other.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'Restored natural pond shoreline',
    },
    body: () => (
      <>
        <h2>Shoreline Erosion Causes</h2>
        <p>
          Eroded shorelines almost always trace back to one or more of: inadequate vegetation (lawn to water's edge), wave action from boats or fountains, waterfowl traffic, burrowing animals (muskrat, beaver), or stormwater outfall scour. Before we recommend a stabilization method, we identify the dominant driver — otherwise the fix fails within two seasons.
        </p>

        <h2>Stabilization Options</h2>
        <h3>Bioengineered Shorelines</h3>
        <p>
          Native wetland plantings (arrowhead, pickerelweed, bulrush, switchgrass) installed into coir fiber logs or natural-fiber mats anchor the bank, filter stormwater, and create habitat. Lowest cost, highest ecological value, and preferred by most HOAs that have adopted "no-mow buffer" policies.
        </p>

        <h3>Riprap</h3>
        <p>
          Graded limestone or fieldstone placed on a geotextile fabric. Durable, low-maintenance, and effective on high-wave-action and waterfowl-heavy sites. Installed to state-approved slopes (typically 2:1 or flatter).
        </p>

        <h3>Vinyl and Steel Sheet Piling</h3>
        <p>
          Vertical bulkhead solution where property lines are tight or where a clean, architectural edge is desired. Higher cost; 30+ year service life.
        </p>

        <h3>Articulated Concrete Block</h3>
        <p>
          Interlocking cabled blocks used on larger municipal and stormwater applications where riprap is inadequate and vegetation cannot establish.
        </p>

        <h2>Dredging & Sediment Removal</h2>
        <p>
          Midwestern ponds accumulate sediment at 0.5 to 2 inches per year depending on the watershed. When average depth drops below 4 feet — or when the accumulated muck becomes the dominant nutrient source — dredging is the only durable solution.
        </p>

        <h3>Hydraulic Dredging</h3>
        <p>
          A floating cutter-suction dredge pumps a sediment slurry to a geotextile dewatering tube or containment cell on shore. Best for soft, unconsolidated muck; minimal shoreline disturbance; the pond stays full.
        </p>

        <h3>Mechanical Dredging</h3>
        <p>
          Excavators work from the bank (or a barge) to remove consolidated sediment. Requires either drawing down the pond or working from temporary roads. Fastest option for dense clay sediment and small, accessible ponds.
        </p>

        <div className="callout">
          <div className="callout-title">Permitting Matters</div>
          <p className="!mb-0">Dredging in Kansas or Missouri often triggers Section 404 (Clean Water Act) review from the U.S. Army Corps of Engineers, plus state-level water-quality certification. We handle the permitting package — jurisdictional determination, plans, mitigation, and coordination with KDHE or MDNR — as part of every dredge scope.</p>
        </div>

        <h2>Nuisance Animal Control</h2>
        <p>
          Beavers, muskrats, and burrowing rodents cause catastrophic bank failures and dam blowouts. We provide trapping (through licensed nuisance wildlife control operators), burrow-filling, and armoring to prevent recurrence.
        </p>
      </>
    ),
  },

  {
    slug: 'stormwater-commercial',
    shortTitle: 'Stormwater & Commercial',
    title: 'Stormwater Pond & Commercial Lake Management',
    eyebrow: 'Compliance & Infrastructure',
    metaDescription:
      'Stormwater BMP inspection, maintenance, and compliance for Kansas City metro commercial properties, HOAs, and municipalities. MS4 reporting, NOI, and post-construction stormwater ordinance support.',
    hero: {
      title: 'Stormwater & Commercial Lake Management',
      subtitle:
        'Detention, retention, and wet ponds are engineered infrastructure. We maintain them to the design intent — and to the Kansas and Missouri regulatory standards that govern them.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80',
      imageAlt: 'Commercial stormwater pond with native plantings',
    },
    body: () => (
      <>
        <p>
          Stormwater ponds serve two purposes: flood mitigation and pollutant removal. Both functions degrade over time as sediment accumulates in the forebay, outlet structures clog, and vegetation encroaches on the riser. A well-maintained BMP meets its design intent for 20+ years. A neglected one fails far sooner — often catastrophically during a major storm event.
        </p>

        <h2>Annual BMP Inspection Program</h2>
        <p>
          Under MS4 (Municipal Separate Storm Sewer System) Phase II requirements, most Kansas City–area communities require annual inspection of privately-owned stormwater BMPs. Our inspections cover:
        </p>
        <ul>
          <li>Inlet and outlet structure integrity, trash-rack condition, and flow capacity</li>
          <li>Principal spillway, emergency spillway, and riser joint condition</li>
          <li>Embankment condition — seepage, slumping, animal burrows, vegetation</li>
          <li>Forebay sediment depth and 85% sediment-capacity threshold</li>
          <li>Permanent pool water quality indicators (DO, clarity, nuisance vegetation)</li>
          <li>Access road condition and vector control (mosquitoes)</li>
        </ul>
        <p>
          Reports are delivered in a format acceptable to Kansas City, Overland Park, Olathe, Lenexa, and Jackson County stormwater departments.
        </p>

        <h2>Corrective Maintenance</h2>
        <ul>
          <li><strong>Forebay cleanouts</strong> — mechanical or hydraulic sediment removal on a 5 to 10-year cycle.</li>
          <li><strong>Outlet structure rehabilitation</strong> — riser repair, anti-seep collar installation, trash-rack replacement.</li>
          <li><strong>Embankment repair</strong> — burrow filling, slump regrading, cover crop reseeding.</li>
          <li><strong>Nuisance vegetation management</strong> — cattail control around risers, willow/cottonwood removal on embankments.</li>
        </ul>

        <h2>Regulatory Support</h2>
        <p>
          We coordinate with KDHE, MDNR, and the U.S. Army Corps of Engineers on jurisdictional questions; prepare NOI packages for construction general permit coverage; assist with Section 404 permitting; and provide the operation-and-maintenance manuals required under local post-construction stormwater ordinances.
        </p>

        <h2>Serving</h2>
        <ul>
          <li>HOAs with shared stormwater detention amenities</li>
          <li>Commercial real estate (office parks, retail, medical campuses)</li>
          <li>Industrial facilities under MSGP (Multi-Sector General Permit)</li>
          <li>Public works departments and municipal drainage districts</li>
          <li>Engineering firms needing post-construction inspections</li>
        </ul>

        <div className="callout">
          <div className="callout-title">Why It Matters</div>
          <p className="!mb-0">Under the Clean Water Act and Kansas/Missouri implementing regulations, property owners are liable for the ongoing performance of stormwater infrastructure on their site. Documented annual inspection and corrective maintenance is both a regulatory requirement and a liability shield.</p>
        </div>
      </>
    ),
  },
];

export const SERVICE_BY_SLUG: Record<string, ServiceDef> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);
