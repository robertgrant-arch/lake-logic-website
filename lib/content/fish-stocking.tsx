export type StockingSpecies = {
  name: string;
  slug: string;
  description: string;
  bestFor: string;
  commonUseCase: string;
  managementNote: string;
  imagePrompt: string;
  category: 'gamefish' | 'panfish' | 'forage' | 'specialty';
};

export const STOCKING_SPECIES: StockingSpecies[] = [
  {
    name: 'Fingerling Largemouth Bass',
    slug: 'fingerling-largemouth-bass',
    description:
      'The foundation species for most new pond fisheries in Kansas and Missouri. Fingerlings (2-4 inches) establish naturally when stocked after forage populations are in place and grow rapidly in well-managed systems.',
    bestFor: 'New pond builds and complete fishery resets',
    commonUseCase:
      'Stocked 12-18 months after bluegill and fathead minnows to ensure adequate forage is established before predator introduction.',
    managementNote:
      'Timing matters more than quantity. Stocking fingerling bass into a pond without established forage leads to stunted growth and high first-year mortality.',
    imagePrompt:
      'Studio-quality side profile of a juvenile largemouth bass (3-4 inches), natural green coloration with pronounced lateral stripe, against a clean white or soft aquatic background. Photorealistic, high resolution.',
    category: 'gamefish',
  },
  {
    name: 'Adult Largemouth Bass',
    slug: 'adult-largemouth-bass',
    description:
      'Intermediate and adult bass (8-14 inches) accelerate fishery development in established ponds or correct size-structure imbalances identified through electrofishing surveys.',
    bestFor: 'Correcting stunted bluegill populations and accelerating trophy timelines',
    commonUseCase:
      'Supplemental stocking of 8-12 inch bass into ponds where survey data reveals an undersized predator class relative to forage abundance.',
    managementNote:
      'Adult bass stocking is a targeted intervention, not a default recommendation. Without population data confirming the need, added bass compete with existing fish and slow overall growth.',
    imagePrompt:
      'Photorealistic close-up of a healthy adult largemouth bass (12-14 inches) held at water level, showing vivid green-black coloration and robust body condition. Natural pond setting, sharp detail.',
    category: 'gamefish',
  },
  {
    name: 'Smallmouth Bass',
    slug: 'smallmouth-bass',
    description:
      'A cold-water-tolerant bass species suited to spring-fed ponds, tailwater lakes, and deeper impoundments with rocky substrate and cooler summer temperatures.',
    bestFor: 'Clear, rocky, spring-fed ponds and deeper impoundments',
    commonUseCase:
      'Introduced in waterbodies where summer bottom temperatures stay below 80 degrees F and rocky or gravel habitat supports spawning and crayfish forage.',
    managementNote:
      'Smallmouth require conditions most Kansas ponds cannot provide. Warm, turbid, soft-bottom ponds are poor candidates regardless of owner preference. Habitat must be evaluated first.',
    imagePrompt:
      'High-resolution side profile of a smallmouth bass with bronze-olive coloring, red eye, and dark vertical bars. Clean background, natural lighting, scientific illustration quality.',
    category: 'gamefish',
  },
  {
    name: 'Bluegill',
    slug: 'bluegill',
    description:
      'The primary forage and recreational panfish in Midwestern pond management. Prolific spawners that convert feed and natural food into biomass that drives the entire predator-prey system.',
    bestFor: 'Every managed warm-water fishery in the region',
    commonUseCase:
      'First species stocked in new ponds. Typically introduced as 2-3 inch fingerlings in fall to allow overwintering and spring spawning before bass are added.',
    managementNote:
      'Bluegill overpopulation is the most common fishery imbalance we encounter. Without adequate predation or selective harvest, bluegill stunt at 4-5 inches and outcompete young bass for food.',
    imagePrompt:
      'Vivid overhead-angled photograph of a mature bluegill sunfish showing iridescent blue-green gill plate, orange breast, and dark ear flap. Warm natural light, high detail.',
    category: 'panfish',
  },
  {
    name: 'Redear Sunfish',
    slug: 'redear-sunfish',
    description:
      'A bottom-feeding sunfish (shellcracker) that targets snails, mussels, and aquatic invertebrates. Grows larger than bluegill and reproduces less aggressively, reducing overpopulation risk.',
    bestFor: 'Diversifying panfish communities and controlling snail-borne parasites',
    commonUseCase:
      'Stocked alongside bluegill at a lower ratio to add size diversity, reduce trematode (grub) vectors, and give anglers a larger panfish target.',
    managementNote:
      'Redear do not replace bluegill as a forage base. Their lower reproductive output means they contribute less prey biomass to bass. Stock as a complement, not a substitute.',
    imagePrompt:
      'Detailed side-profile photograph of a redear sunfish showing the distinctive red-orange margin on the ear flap, olive-gold body, and speckled pattern. Natural aquatic tones, sharp focus.',
    category: 'panfish',
  },
  {
    name: 'Black Crappie',
    slug: 'black-crappie',
    description:
      'A popular sportfish that provides excellent table fare but requires careful population management. Crappie can dominate a small pond quickly if predation is insufficient.',
    bestFor: 'Larger impoundments (5+ acres) with established bass populations',
    commonUseCase:
      'Added to larger waterbodies where strong bass populations can control crappie recruitment and prevent the boom-bust cycles that plague smaller systems.',
    managementNote:
      'We rarely recommend crappie for ponds under 5 acres. Their prolific reproduction and competition with bluegill create management headaches that outweigh the angling benefit in small systems.',
    imagePrompt:
      'High-resolution photograph of a black crappie showing silver-green body with irregular dark speckles, prominent dorsal spines, and compressed body shape. Clean studio lighting.',
    category: 'panfish',
  },
  {
    name: 'Yellow Perch',
    slug: 'yellow-perch',
    description:
      'A cool-water panfish valued for its table quality. Functions as both a recreational target and intermediate forage species in systems with adequate depth and oxygen.',
    bestFor: 'Deeper ponds and northern-Kansas impoundments with cooler thermal profiles',
    commonUseCase:
      'Introduced in waterbodies where summer hypolimnetic oxygen supports cool-water species and where owners want panfish variety beyond bluegill.',
    managementNote:
      'Yellow perch struggle in shallow, warm ponds typical of the southern KC metro. Water temperature and dissolved oxygen profiling should confirm suitability before stocking.',
    imagePrompt:
      'Photorealistic side view of a yellow perch with golden-yellow body, dark vertical bars, and orange-red lower fins. Clear natural lighting, white or light aquatic background.',
    category: 'panfish',
  },
  {
    name: 'Channel Catfish',
    slug: 'channel-catfish',
    description:
      'A fast-growing, easy-to-catch species that adds recreational diversity to any pond. Catfish respond well to supplemental feeding and provide reliable angling even in fisheries still under development.',
    bestFor: 'Recreational fishing, put-and-take stocking, and kids-first ponds',
    commonUseCase:
      'Stocked in spring at 6-8 inches into new or established ponds. Often part of a balanced community alongside bass and bluegill.',
    managementNote:
      'Channel catfish compete minimally with bass and bluegill when stocked at moderate densities. However, in small ponds with limited forage, high catfish numbers can suppress bluegill recruitment.',
    imagePrompt:
      'Detailed photograph of a channel catfish showing slate-gray body with scattered dark spots, prominent barbels, and deeply forked tail. Natural pond backdrop, sharp focus.',
    category: 'gamefish',
  },
  {
    name: 'Walleye',
    slug: 'walleye',
    description:
      'A premier sportfish that thrives in larger, deeper impoundments with suitable spawning substrate and adequate forage. Not a standard pond species, but highly effective in the right setting.',
    bestFor: 'Lakes and large impoundments (10+ acres) with gravel substrate and cool-water refugia',
    commonUseCase:
      'Stocked as fingerlings in larger managed lakes where gizzard shad or other open-water forage can sustain growth to trophy size.',
    managementNote:
      'Walleye are not viable in most private ponds. They require specific habitat, forage, and water quality conditions that must be confirmed through assessment. Do not stock speculatively.',
    imagePrompt:
      'High-quality side profile of a walleye showing olive-gold body, glassy reflective eyes, dark saddle markings, and white-tipped lower tail lobe. Clean natural lighting, sharp detail.',
    category: 'gamefish',
  },
  {
    name: 'Muskie (Muskellunge)',
    slug: 'muskie',
    description:
      'The apex freshwater predator. Muskie are stocked strictly as a trophy management tool in large, well-established fisheries where extreme predator pressure is the explicit goal.',
    bestFor: 'Trophy predator programs in large lakes (20+ acres) with surplus forage',
    commonUseCase:
      'Introduced at very low densities into established, forage-rich systems where the owner prioritizes catching fewer but dramatically larger fish.',
    managementNote:
      'Muskie will consume bass, catfish, and large bluegill without discrimination. This species fundamentally alters fishery dynamics and is only appropriate where owners fully understand the tradeoff.',
    imagePrompt:
      'Dramatic photograph of a muskellunge showing elongated body, dark vertical bars or spots on olive-green flanks, duck-bill shaped head, and large tail. Moody natural lighting.',
    category: 'specialty',
  },
  {
    name: 'Northern Pike',
    slug: 'northern-pike',
    description:
      'An aggressive cool-water predator that grows fast and provides explosive strikes. Like muskie, pike require large waterbodies and careful management to prevent forage collapse.',
    bestFor: 'Large northern-Kansas impoundments with cool-water habitat and abundant forage',
    commonUseCase:
      'Stocked in systems where cool summer water temperatures support the species and where aggressive predation is needed to thin overcrowded forage populations.',
    managementNote:
      'Northern pike reproduce readily and can overpopulate if habitat and forage conditions are favorable. Ongoing monitoring is essential to prevent stunting and forage depletion.',
    imagePrompt:
      'Photorealistic side view of a northern pike showing elongated body with light oval spots on dark olive-green flanks, flattened snout, and large fins. Natural lake setting.',
    category: 'specialty',
  },
  {
    name: 'Fathead Minnows',
    slug: 'fathead-minnows',
    description:
      'The starter forage species for new ponds. Fatheads reproduce rapidly, tolerate poor water quality, and provide critical first-year food for stocked fingerling bass and other predators.',
    bestFor: 'New pond forage establishment and supplemental feeding in developing fisheries',
    commonUseCase:
      'Stocked at high densities 6-12 months before predator introduction to build a self-sustaining forage base that supports bass fingerling survival.',
    managementNote:
      'Fathead populations typically decline within 2-3 years as bass predation intensifies. This is expected and healthy — bluegill and their offspring take over as the primary forage source.',
    imagePrompt:
      'Clean close-up photograph of a school of fathead minnows (2-3 inches), showing olive-brown coloring and blunt head shape. Natural aquatic setting with soft green background.',
    category: 'forage',
  },
  {
    name: 'Golden Shiners',
    slug: 'golden-shiners',
    description:
      'A larger open-water forage species that bridges the gap between fathead minnows and adult bluegill. Golden shiners accelerate bass growth by offering a higher-calorie prey item.',
    bestFor: 'Trophy bass programs and ponds with limited natural forage diversity',
    commonUseCase:
      'Introduced as supplemental forage in established fisheries where electrofishing data reveals bass with low relative weight, indicating insufficient prey availability.',
    managementNote:
      'Golden shiners are a supplemental investment, not a permanent population. In most warm-water ponds they persist only 1-2 seasons before predation eliminates them. Budget for periodic restocking.',
    imagePrompt:
      'Side-profile photograph of golden shiners showing bright gold-silver scaling, streamlined body shape, and translucent fins. Natural pond water background, soft lighting.',
    category: 'forage',
  },
  {
    name: 'Gizzard Shad',
    slug: 'gizzard-shad',
    description:
      'A high-biomass open-water forage fish for large lakes. Young gizzard shad are exceptional bass forage, but adults quickly outgrow predation and can become a management liability.',
    bestFor: 'Large lakes (15+ acres) with established predator populations capable of controlling recruitment',
    commonUseCase:
      'Stocked or naturally present in larger impoundments where bass, hybrid striped bass, or walleye can consume juvenile shad before they reach adult size.',
    managementNote:
      'Adult gizzard shad grow too large for most bass to eat and compete with bluegill for plankton. In small ponds, shad introductions frequently backfire. Assess carefully before stocking.',
    imagePrompt:
      'High-resolution side profile of a gizzard shad showing silver compressed body, prominent last dorsal ray, dark shoulder spot, and deeply forked tail. Clean white background.',
    category: 'forage',
  },
  {
    name: 'Grass Carp (Triploid)',
    slug: 'grass-carp',
    description:
      'A sterile, herbivorous species used exclusively for biological control of submerged aquatic vegetation. Grass carp reduce or eliminate problem weeds without chemical treatment.',
    bestFor: 'Ponds with excessive submerged vegetation (pondweed, milfoil, hydrilla, coontail)',
    commonUseCase:
      'Stocked at rates determined by vegetation density and species — typically 5-15 fish per vegetated acre — as an alternative or complement to herbicide programs.',
    managementNote:
      'Only sterile triploid grass carp are legal. Kansas requires a state permit; Missouri does not. Overstocking eliminates all vegetation, which destabilizes the fishery. Rates must be calculated precisely.',
    imagePrompt:
      'Detailed photograph of a triploid grass carp showing elongated olive-bronze body, large cycloid scales, and broad head. Natural pond environment, full body in frame, high resolution.',
    category: 'specialty',
  },
];

export const STOCKING_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Assess the Waterbody and Your Goals',
    description:
      'Every stocking plan begins with a site visit. We evaluate pond size, depth profile, shoreline habitat, existing vegetation, water clarity, and — most importantly — what you want from the fishery. Trophy bass, family recreation, balanced panfishing, and vegetation control each require fundamentally different approaches.',
  },
  {
    number: '02',
    title: 'Analyze Habitat, Forage, and Water Quality',
    description:
      'We collect water quality data (dissolved oxygen, temperature, alkalinity, nutrient levels) and assess the existing forage base, spawning substrate, and structural cover. These factors determine which species will survive, reproduce, and grow — and which will not.',
  },
  {
    number: '03',
    title: 'Review Fish Population Data',
    description:
      'For established ponds, electrofishing surveys provide the quantitative baseline: species composition, size distribution, relative weight, and predator-to-prey ratios. This data tells us exactly where the fishery stands and what it needs.',
  },
  {
    number: '04',
    title: 'Recommend a Custom Stocking Strategy',
    description:
      'Based on the full assessment, we build a stocking plan specifying species, size classes, quantities, timing, and source quality. Every recommendation is tied to a specific management objective — not a generic formula.',
  },
  {
    number: '05',
    title: 'Monitor Results and Adjust Over Time',
    description:
      'Fisheries are dynamic. We schedule follow-up surveys, track growth rates, evaluate forage conditions, and adjust stocking and harvest recommendations as the system evolves. The plan adapts to what the data shows.',
  },
];
