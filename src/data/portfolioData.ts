export interface Project {
  id: string;
  title: string;
  cardTitle?: string;
  category: 'social' | 'identity' | 'print' | 'edition';
  categoryLabel: string;
  subLabel: string;
  client: string;
  year: string;
  image: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
  tools: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  basePriceXAF: number;
  basePriceEUR: number;
  unit: string;
  turnaround: string;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'reseaux-sociaux',
    title: 'Réseaux sociaux',
    cardTitle: 'Réseaux sociaux',
    category: 'social',
    categoryLabel: 'Réseaux sociaux',
    subLabel: 'Contenus & visuels',
    client: 'Marques urbaines & Entreprises',
    year: '2025',
    image: '/assets/images/social_media_hd_1792519424151.jpg',
    shortDesc: 'Création de visuels percutants, carrousels éducatifs et animations de stories pour maximiser l’engagement et l’impact sur Instagram, Facebook et TikTok.',
    challenge: 'Développer une présence digitale attractive capable de convertir une communauté passive en clients engagés et prescripteurs.',
    solution: 'Conception d’un feed harmonisé, déclinaison de templates réutilisables à forte identité et calendrier de publication optimisé pour les algorithmes.',
    results: [
      '+320% de taux d’engagement moyen',
      '+18 500 nouveaux abonnés ciblés',
      'Portée multipliée par 3.4 sur les carrousels éducatifs'
    ],
    deliverables: [
      'Pack de 20 templates de posts et carrousels HD',
      'Visuels de stories interactives et bannières de couverture',
      'Calendrier éditorial mensuel & programmation'
    ],
    tools: ['Adobe Photoshop', 'Canva Pro', 'Meta Business Suite', 'CapCut']
  },
  {
    id: 'identite-visuelle',
    title: 'Identité visuelle',
    cardTitle: 'Identité visuelle',
    category: 'identity',
    categoryLabel: 'Identité visuelle',
    subLabel: 'Logotype & charte graphique',
    client: 'Maison Brand & Entreprises émergentes',
    year: '2025',
    image: '/assets/images/brand_identity_showcase_1792516091933.jpg',
    shortDesc: 'Conception de logotypes épurés, de systèmes typographiques forts et de chartes graphiques professionnelles prêtes pour l’impression et le digital.',
    challenge: 'Donner une stature crédible, moderne et haut de gamme à une entreprise dès son lancement face à la concurrence.',
    solution: 'Création d’un symbole mémorable combiné à une typographie raffinée et une palette de couleurs équilibrée, déclinée sur l’ensemble de la papeterie.',
    results: [
      'Identité adoptée à 100% au premier tour de présentation',
      'Déploiement complet sur plus de 15 supports physiques et web'
    ],
    deliverables: [
      'Logo principal, logo secondaire et monogramme',
      'Guide de normes graphiques (charte complète)',
      'Cartes de visite avec gaufrage et papier en-tête',
      'Fichiers sources vectoriels (AI, EPS, SVG, PDF HD)'
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign']
  },
  {
    id: 'supports-print',
    title: 'Supports print',
    cardTitle: 'Supports print',
    category: 'print',
    categoryLabel: 'Supports print',
    subLabel: 'Affiches, flyers, brochures',
    client: 'Événements, Festivités & Conférences',
    year: '2024',
    image: '/assets/images/print_brochures_hd_1792519438378.jpg',
    shortDesc: 'Réalisation d’affiches grand format, de flyers promotionnels et de dépliants institutionnels calibrés pour une impression de haute qualité.',
    challenge: 'Capter l’attention dans l’espace public et lors d’événements majeurs grâce à une hiérarchie de lecture claire et un visuel marquant.',
    solution: 'Composition dynamique avec travail approfondi des contrastes, équilibre texte/image et préparation prépresse rigoureuse (CMJN, 300 DPI, traits de coupe).',
    results: [
      'Plus de 5 000 exemplaires imprimés et distribués avec succès',
      'Remplissage record des salles pour les événements promus'
    ],
    deliverables: [
      'Affiches formats A1, A2, A3',
      'Flyers recto/verso et dépliants 3 volets',
      'Kakémonos roll-up pour salons et conférences',
      'Fichiers d’impression certifiés imprimeur'
    ],
    tools: ['Adobe InDesign', 'Photoshop', 'Illustrator']
  },
  {
    id: 'edition-ia-automatisation',
    title: 'Comment automatiser son entreprise grâce à l\'intelligence artificielle',
    cardTitle: 'Édition',
    category: 'edition',
    categoryLabel: 'Édition & Publication',
    subLabel: 'Comment automatiser son entreprise grâce à l\'IA',
    client: 'Beck Beck Firmin & Auteurs Partenaires',
    year: '2025',
    image: '/assets/images/book_edition_ai_hd_1792519407710.jpg',
    shortDesc: 'Conception intégrale de la couverture 3D, typographie prestige et mise en page éditoriale du livre "Comment automatiser son entreprise grâce à l\'intelligence artificielle".',
    challenge: 'Créer un ouvrage d\'impact international symbolisant la puissance de l\'intelligence artificielle appliquée aux entreprises avec une lisibilité et une esthétique irréprochables.',
    solution: 'Design d’une couverture rigide royale bleu nuit et or, illustration neurale IA luminescente, composition de grille intérieure optimisée et préparation pour l’édition papier et numérique.',
    results: [
      'Ouvrage phare salué pour sa direction artistique avant-gardiste',
      'Mise en page certifiée prête pour impression offset et Kindle / KDP'
    ],
    deliverables: [
      'Couverture rigide 3D haute définition avec tranche et dos',
      'Mise en page intérieure paginée aux normes typographiques internationales',
      'Fichiers d’exportation PDF Haute Définition imprimeur et format ePub'
    ],
    tools: ['Adobe InDesign', 'Photoshop 3D', 'Illustrator']
  }
];

export const SERVICES = [
  {
    id: 'graphiste-designer',
    name: 'Graphiste Designer',
    icon: 'pen',
    category: 'Design & Image',
    desc: 'Création d\'identités visuelles, affiches, flyers, visuels réseaux sociaux, logotypes, supports print et web.',
    buttonColor: 'yellow',
    basePriceXAF: 180000,
    basePriceEUR: 275,
    unit: 'par projet',
    features: [
      'Logotypes originaux & déclinaisons vectorielles',
      'Affiches événementielles & flyers professionnels',
      'Bannières web & habillages digitaux',
      'Fichiers HD prêts pour impression (CMJN 300 DPI)'
    ]
  },
  {
    id: 'community-manager',
    name: 'Community Manager',
    icon: 'megaphone',
    category: 'Réseaux Sociaux',
    desc: 'Gestion et animation de vos réseaux sociaux, création de contenus, stratégie digitale, modération, analyse des performances.',
    buttonColor: 'black',
    basePriceXAF: 150000,
    basePriceEUR: 230,
    unit: 'par mois',
    features: [
      'Calendrier éditorial & stratégie de contenu',
      'Création de carrousels & posts réguliers',
      'Modération et animation des abonnés',
      'Rapport d’analyse des performances'
    ]
  },
  {
    id: 'editeur',
    name: 'Éditeur',
    icon: 'book',
    category: 'Édition & Papier',
    desc: 'Mise en page, correction, relecture, conception de livres ("Comment automatiser son entreprise grâce à l\'IA"), ebooks, supports éditoriaux et publications digitales.',
    buttonColor: 'yellow',
    basePriceXAF: 200000,
    basePriceEUR: 300,
    unit: 'par ouvrage',
    features: [
      'Couvertures de livres 3D percutantes',
      'Mise en page intérieure selon les règles de l’art',
      'Préparation aux formats papier & ePub',
      'Accompagnement personnalisé de l’auteur'
    ]
  },
  {
    id: 'conseil-strategie',
    name: 'Conseil & Stratégie',
    icon: 'lightbulb',
    category: 'Accompagnement',
    desc: 'Accompagnement personnalisé pour renforcer votre communication et développer votre visibilité en ligne.',
    buttonColor: 'black',
    basePriceXAF: 75000,
    basePriceEUR: 115,
    unit: 'par session',
    features: [
      'Audit de votre communication actuelle',
      'Plan d’action stratégique sur mesure',
      'Recommandations de positionnement',
      'Session de coaching 1-on-1'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    author: 'Serge Ndjock',
    role: 'Fondateur & DG',
    company: 'Kifani Urban Apparel (Douala)',
    content: 'Firmin a transformé notre communication sur Instagram. Nos carrousels captent enfin l’attention et les clients viennent en boutique en nous montrant les publications qu’il a créées. Un vrai professionnel rigoureux et réactif.',
    rating: 5,
    metric: '+320% d’engagement'
  },
  {
    id: 'test-2',
    author: 'Carine Mballa',
    role: 'Auteure & Entrepreneure',
    company: 'Éditions Horizons Nouveaux',
    content: 'La mise en page de notre ouvrage sur l\'automatisation par l\'IA et le design de la couverture par Beck Beck Firmin ont surpassé toutes nos attentes. Son souci du détail et sa créativité sont exemplaires.',
    rating: 5,
    metric: '100% satisfaction'
  },
  {
    id: 'test-3',
    author: 'Emmanuel Fopoussi',
    role: 'Directeur Artistique',
    company: 'Forum des Créateurs Africains',
    content: 'Collaborer avec Firmin est un plaisir. Il comprend vite les briefs complexes et livre des affiches dont la force graphique saute aux yeux. Son travail a été le pilier de notre visibilité.',
    rating: 5,
    metric: '5000+ affiches déployées'
  }
];

export interface ColorSwatch {
  name: string;
  hex: string;
  pantone?: string;
  usage: string;
}

export interface TypographySpec {
  header: string;
  body: string;
  notes: string;
}

export interface PortfolioBookPage {
  pageNumber: number; // 1 to 22
  id: string;
  title: string;
  subtitle: string;
  category: 'cover' | 'intro' | 'logos' | 'branding' | 'social' | 'packaging' | 'print' | 'edition' | 'outro';
  categoryLabel: string;
  image: string;
  description: string;
  tags: string[];
  keyDetails?: string[];
  colorPalette?: ColorSwatch[];
  typography?: TypographySpec;
  gridSpec?: string;
  designRationale?: string;
  isExtendedBoard?: boolean;
}

export const PORTFOLIO_PAGES: PortfolioBookPage[] = [
  {
    pageNumber: 1,
    id: 'page-01',
    title: 'Graphiste Designer • Portfolio',
    subtitle: 'Firmin Beck Beck • Conception, Création & Direction Artistique',
    category: 'cover',
    categoryLabel: 'Couverture Officielle',
    image: '/assets/portfolio_book/page_01.jpg',
    description: 'Première couverture officielle du book de Firmin Beck Beck : composition sur fond sombre texturé, lettrage majuscule puissant "Portfolio" encadré par une zone de sélection active avec points d\'ancrage et signature en cuivre cursif "Firmin Beck Beck".',
    tags: ['Couverture Officielle', 'Graphiste Designer', 'Firmin Beck Beck', 'ArtNovaTech'],
    keyDetails: ['Format Book Officiel', 'Design Graphique & Typographie', 'Cameroun'],
    colorPalette: [
      { name: 'Noir Asphalte Texturé', hex: '#141519', usage: 'Fond minéral immersif' },
      { name: 'Blanc Pur Titrage', hex: '#FFFFFF', usage: 'Titrage principal "Portfolio"' },
      { name: 'Cuivre Doré Signature', hex: '#E27D5B', usage: 'Signature manuscrite "Firmin Beck Beck"' },
      { name: 'Cyan Sélection Outil', hex: '#00A3FF', usage: 'Cadre de cadrage vectoriel' }
    ],
    typography: {
      header: 'Helvetica Neue / Plus Jakarta Sans Heavy',
      body: 'Script Copper Cursive',
      notes: 'Esthétique épurée inspirée des interfaces de création professionnelles'
    },
    gridSpec: 'Grille centrée avec repères de transformation vectorielle et zone de saisie'
  },
  {
    pageNumber: 2,
    id: 'page-02',
    title: 'Bonjour ! Je suis Beck Beck Firmin',
    subtitle: 'Biographie & Vision Artistique',
    category: 'intro',
    categoryLabel: 'Biographie',
    image: '/assets/portfolio_book/page_02.jpg',
    description: 'Portrait au crayon et présentation personnelle de Beck Beck Firmin. Salutations ! Graphiste passionné par l\'harmonie des formes, l\'efficacité du message et l\'élévation visuelle des marques.',
    tags: ['Portrait', 'Bio', 'Philosophie'],
    keyDetails: ['Graphiste Designer', 'Community Manager', 'Éditeur'],
    colorPalette: [
      { name: 'Graphite Minéral', hex: '#2A2D34', usage: 'Trait de crayon & ombres' },
      { name: 'Papier Canson Naturel', hex: '#F4EFEA', usage: 'Texture de fond' }
    ]
  },
  {
    pageNumber: 3,
    id: 'page-03',
    title: 'Table des Matières',
    subtitle: 'Sommaire des Grands Piliers Créatifs',
    category: 'intro',
    categoryLabel: 'Sommaire',
    image: '/assets/portfolio_book/page_03.jpg',
    description: 'Structure méthodique du portfolio en grands piliers : 01 Logo Folio, 02 Marques Design, 03 Conception Design, 04 Supports Imprimés Design, 05 Médias Sociaux Publications.',
    tags: ['Sommaire', 'Structure', 'Piliers'],
    keyDetails: ['01 Logo Folio', '02 Marques Design', '03 Conception Design', '04 Supports Imprimés', '05 Médias Sociaux']
  },
  {
    pageNumber: 4,
    id: 'page-04',
    title: '01. Portfolio de Logos',
    subtitle: 'Section 01 • L\'Art du Symbole et de la Typographie',
    category: 'logos',
    categoryLabel: 'Logotypes',
    image: '/assets/portfolio_book/page_04.jpg',
    description: 'Mise en valeur des logotypes personnalisés conçus pour correspondre précisément aux visions des clients : simplicité, mémorabilité et intemporalité.',
    tags: ['Logofolio', 'Symbole', 'Typographie'],
    keyDetails: ['Visions clients incarnées', 'Identités sur mesure', 'Impact immédiat']
  },
  {
    pageNumber: 5,
    id: 'page-05',
    title: 'Grille Logofolio - 12 Marques',
    subtitle: 'BOLAC, Barbent, HEUPOSS, CRYST Hôtels, VINOMA, Sunplus...',
    category: 'logos',
    categoryLabel: 'Logotypes',
    image: '/assets/portfolio_book/page_05.jpg',
    description: 'Galerie de 12 logotypes emblématiques créés pour des secteurs variés (agroalimentaire, hôtellerie, mode, technologie, services) : BOLAC, HEUPOSS, ARIRAM, Barbent, Ourvita, CRYST Hôtels & Résorts, Alexan, Western, Sunplus, TRESLR, VINOMA, Mystishy.',
    tags: ['12 Logos', 'Identité de Marque', 'Vectoriel'],
    keyDetails: ['12 secteurs d\'activité', 'Styles minimalistes & audacieux', 'Formats vectoriels HD'],
    gridSpec: 'Grille modulaire 4x3 équilibrée avec marges d\'aération rigoureuses'
  },
  {
    pageNumber: 6,
    id: 'page-06',
    title: '02. Image de Marque',
    subtitle: 'Section 02 • Conception d\'Identités Visuelles Complètes',
    category: 'branding',
    categoryLabel: 'Image de Marque',
    image: '/assets/portfolio_book/page_06.jpg',
    description: 'Création de marques visuelles percutantes qui expriment leur mission et atteignent leurs objectifs stratégiques par une cohérence graphique absolue.',
    tags: ['Branding', 'Stratégie', 'Charte Graphique'],
    keyDetails: ['Mission & Valeurs', 'Positionnement marché', 'Cohérence 360°']
  },
  {
    pageNumber: 7,
    id: 'page-07',
    title: 'Cas d\'Étude Marque : BOLAC',
    subtitle: 'Industrie Agroalimentaire • Identité Visuelle',
    category: 'branding',
    categoryLabel: 'Cas Bolac',
    image: '/assets/portfolio_book/page_07.jpg',
    description: 'Étude de cas approfondie pour BOLAC : logotype textuel percutant, choix de la couleur primaire Pantone 485 C, typographie sans serif moderne, charte graphique et prévisualisation packaging.',
    tags: ['BOLAC', 'Pantone 485 C', 'Agroalimentaire'],
    keyDetails: ['Couleur Pantone 485 C', 'Typographie Sans Serif', 'Applications packaging'],
    colorPalette: [
      { name: 'Rouge Bolac', hex: '#E31B23', pantone: 'Pantone 485 C', usage: 'Identité primaire & Packaging' },
      { name: 'Blanc Pur', hex: '#FFFFFF', usage: 'Typographie & Contraste' },
      { name: 'Anthracite Foncé', hex: '#1C1E24', usage: 'Fonds secondaires' }
    ],
    typography: {
      header: 'BOLAC Custom Bold Sans',
      body: 'Inter / Helvetica Neue',
      notes: 'Caractères géométriques aux terminaisons franches pour haute visibilité en rayon'
    },
    gridSpec: 'Construction basée sur le nombre d\'or avec alignements horizontaux'
  },
  {
    pageNumber: 8,
    id: 'page-08',
    title: 'Anatomie Graphique BOLAC',
    subtitle: 'Espace Négatif, Formes Arrondies & Ratios',
    category: 'branding',
    categoryLabel: 'Cas Bolac',
    image: '/assets/portfolio_book/page_08.jpg',
    description: 'Décryptage de la conception du logotype BOLAC : utilisation subtile de l\'espace négatif, rondeur conviviale des fûts de lettres, géométrie sans serif contemporaine et énergie du rouge.',
    tags: ['Espace Négatif', 'Typographie', 'Symbolique'],
    keyDetails: ['Espace négatif expressif', 'Formes géométriques douces', 'Contraste et lisibilité']
  },
  {
    pageNumber: 9,
    id: 'page-09',
    title: 'Déploiement 360° Marque BOLAC',
    subtitle: 'Papeterie, Application Mobile, Badges & Interface Web',
    category: 'branding',
    categoryLabel: 'Cas Bolac',
    image: '/assets/portfolio_book/page_09.jpg',
    description: 'Application concrète et omnicanale de la marque BOLAC : papeterie institutionnelle (cartes, têtes de lettre, enveloppes), mockup d\'application mobile UI/UX, badges collaborateurs et portail web.',
    tags: ['Papeterie', 'UI/UX Mobile', 'Badge', 'Web'],
    keyDetails: ['Papeterie d\'entreprise', 'App mobile responsive', 'Badges d\'identification']
  },
  {
    pageNumber: 10,
    id: 'page-10',
    title: '03. Médias Sociaux',
    subtitle: 'Section 03 • Contenus Visuels Stratégiques',
    category: 'social',
    categoryLabel: 'Médias Sociaux',
    image: '/assets/portfolio_book/page_10.jpg',
    description: 'Contenu visuel percutant conçu spécialement pour les réseaux sociaux majeurs tels qu\'Instagram, Facebook, TikTok et LinkedIn pour stimuler l\'engagement et la mémorisation.',
    tags: ['Social Media', 'Engagement', 'Instagram & FB'],
    keyDetails: ['Formats carrés et verticaux', 'Rythme visuel dynamique', 'Conversion de communauté']
  },
  {
    pageNumber: 11,
    id: 'page-11',
    title: 'Campagnes & Posts Instagram',
    subtitle: 'Publications Événementielles, Sony, Bolac, Fête Jeunesse...',
    category: 'social',
    categoryLabel: 'Médias Sociaux',
    image: '/assets/portfolio_book/page_11.jpg',
    description: 'Showcase de visuels pour smartphones : publications pour Sony, Bolac, Fête de la Jeunesse, Journée Internationale de la Femme (8 Mars) et carrousels immersifs.',
    tags: ['Instagram', 'Campagnes', 'Smartphone Feed'],
    keyDetails: ['Posts événementiels', 'Carrousels éducatifs', 'Stories interactives']
  },
  {
    pageNumber: 12,
    id: 'page-12',
    title: 'Publicité & Visuels Promotionnels',
    subtitle: 'Casquettes 8 Mars, T-Shirts, Typographie 3D & Merchandising',
    category: 'social',
    categoryLabel: 'Médias Sociaux',
    image: '/assets/portfolio_book/page_12.jpg',
    description: 'Créations publicitaires promotionnelles : séries de t-shirts graphiques, casquettes commémoratives 8 Mars, lettrages 3D captivants et bannières promotionnelles pour événements culturels.',
    tags: ['Merchandising', '3D Design', 'Promo'],
    keyDetails: ['Goodies & T-shirts', 'Designs 3D percutants', 'Campagnes promotionnelles']
  },
  {
    pageNumber: 13,
    id: 'page-13',
    title: '04. Conception d\'Emballage',
    subtitle: 'Section 04 • Packaging & Expérience Produit',
    category: 'packaging',
    categoryLabel: 'Packaging',
    image: '/assets/portfolio_book/page_13.jpg',
    description: 'Conception d\'emballages de produits innovants et visuellement attrayants qui communiquent efficacement l\'identité de la marque et déclenchent l\'acte d\'achat.',
    tags: ['Packaging', 'Design Produit', 'Rayonnage'],
    keyDetails: ['Attraction visuelle en rayon', 'Ergonomie des conditionnements', 'Prêt pour l\'impression industrielle']
  },
  {
    pageNumber: 14,
    id: 'page-14',
    title: 'Packaging Épicerie & Cosmétique',
    subtitle: 'Dates Arabian Tamra, Milkshake Can, Paneer Tikka, Aveda...',
    category: 'packaging',
    categoryLabel: 'Packaging',
    image: '/assets/portfolio_book/page_14.jpg',
    description: 'Éventail de designs packaging : sachet refermable Tamra Arabian Dates, canette Strawberry Milkshake, boîte surgelée Paneer Tikka, flacon cosmétique Aveda Face Wash et sachet Double Chocolate Cookie.',
    tags: ['Épicerie Fine', 'Cosmétique', 'Boissons'],
    keyDetails: ['Sachets stand-up pouch', 'Canettes & bouteilles', 'Boîtes alimentaires']
  },
  {
    pageNumber: 15,
    id: 'page-15',
    title: 'Packaging Produits Gourmands & Éclairage',
    subtitle: 'Glace Blueberry, Piment Kashmiri, Sauce Kissan, Ampoules CREE...',
    category: 'packaging',
    categoryLabel: 'Packaging',
    image: '/assets/portfolio_book/page_15.jpg',
    description: 'Pots de crème glacée Blueberry, étuis d\'épices indiennes Kashmiri Chilli, flacons de sauce Kissan Tomato Ketchup, boîtes d\'ampoules technologiques CREE LED et étuis Bouillie Lactée Bolac.',
    tags: ['Glaces', 'Épices', 'CREE LED', 'Bolac Bouillie'],
    keyDetails: ['Pots & Couvercles', 'Packaging tech & grand public', 'Alimentation infantile']
  },
  {
    pageNumber: 16,
    id: 'page-16',
    title: '05. Supports Imprimés',
    subtitle: 'Section 05 • Créations Print Haute Qualité Hors-Ligne',
    category: 'print',
    categoryLabel: 'Supports Imprimés',
    image: '/assets/portfolio_book/page_16.jpg',
    description: 'Des créations imprimées de haute qualité conçues pour magnifier et asseoir la présence de la marque dans le monde physique : affiches, roll-ups, brochures et dépliants.',
    tags: ['Print', 'Grand Format', 'Prepresse'],
    keyDetails: ['Résolution 300 DPI certifiée', 'Gestion colorimétrique CMJN', 'Finition et vernis sélectifs']
  },
  {
    pageNumber: 17,
    id: 'page-17',
    title: 'Roll-ups & Bannières Événementielles',
    subtitle: 'Prosuit Expertise, Mariage Royal, Partenaires & Événements',
    category: 'print',
    categoryLabel: 'Supports Imprimés',
    image: '/assets/portfolio_book/page_17.jpg',
    description: 'Conception de roll-ups verticaux d\'accueil et de présentation : Prosuit Expertise (conseil et audit), Mariage Royal prestigieux, Prosuit Partenaire et Bienvenue aux cérémonies.',
    tags: ['Roll-up', 'Kakémono', 'Mariage & Gala'],
    keyDetails: ['Formats standards 85x200cm', 'Lisibilité à distance', 'Élégance institutionnelle']
  },
  {
    pageNumber: 18,
    id: 'page-18',
    title: 'Livres Design & Édition d\'Ouvrages',
    subtitle: 'Comment automatiser son entreprise grâce à l\'intelligence artificielle',
    category: 'edition',
    categoryLabel: 'Édition & Livres',
    image: '/assets/portfolio_book/page_18.jpg',
    description: 'Direction artistique éditoriale complète : conception de couverture 3D prestigieuse, mise en page intérieure soignée, typographie de presse et publication de l\'ouvrage de référence "Comment automatiser son entreprise grâce à l\'intelligence artificielle" ainsi que des chroniques typographiques.',
    tags: ['Édition', 'Livre IA', 'Mise en page', 'Couverture 3D'],
    keyDetails: [
      'Titre : Comment automatiser son entreprise grâce à l\'intelligence artificielle',
      'Maquette intérieure & grille typographique',
      'Format papier relié et édition numérique'
    ]
  },
  {
    pageNumber: 19,
    id: 'page-19',
    title: 'Merci d\'avoir feuilleté ! Travaillons ensemble',
    subtitle: 'ArtNovaTech • Yaoundé & Douala, Cameroun',
    category: 'outro',
    categoryLabel: 'Contact Final',
    image: '/assets/portfolio_book/page_19.jpg',
    description: 'Dernière page du book : invitation à la collaboration, coordonnées directes de Beck Beck Firmin (+237 698 90 90 71, Kfirmin398@gmail.com, ArtNovaTech). Donnons vie à vos prochains succès visuels !',
    tags: ['ArtNovaTech', 'WhatsApp', 'Contact Direct', 'Devis'],
    keyDetails: [
      'WhatsApp : +237 698 90 90 71',
      'Email : Kfirmin398@gmail.com',
      'ArtNovaTech • Yaoundé & Douala'
    ]
  },
  {
    pageNumber: 20,
    id: 'page-20',
    title: 'Charte Graphique & Design System 360°',
    subtitle: 'Normes Typographiques, Palette Pantone & Grille de Construction',
    category: 'branding',
    categoryLabel: 'Charte & Normes',
    image: '/assets/portfolio_book/page_20.jpg',
    description: 'Planche de présentation studio type Behance Award : décomposition du logotype sur grille géométrique modulaire, spécimens typographiques (Lumin Architects / Axis Grotesk), palette chromatique Pantone & CMJN (Anthracite Charcoal, Warm Amber, Slate Grey, White Snow), déclinaisons papeterie de luxe avec dorure à chaud et mockup d’application mobile.',
    tags: ['Brand Guidelines', 'Design System', 'Grille Modulaire', 'Pantone'],
    keyDetails: [
      'Grille de construction géométrique au pixel près',
      'Palette certifiée Pantone & CMJN',
      'Mockups papeterie luxe & interface mobile'
    ],
    colorPalette: [
      { name: 'Anthracite Charcoal', hex: '#1A1D20', pantone: 'Pantone 419 C', usage: 'Fond & Stature institutionnelle' },
      { name: 'Warm Amber', hex: '#F5B716', pantone: 'Pantone 120 C', usage: 'Accents & Éléments signatures' },
      { name: 'Slate Grey', hex: '#707D8B', pantone: 'Pantone 423 C', usage: 'Hiérarchie secondaire' },
      { name: 'White Snow', hex: '#FFFFFF', usage: 'Typographie lumineuse' }
    ],
    typography: {
      header: 'Lumin Architects / Futura Display Bold',
      body: 'Axis Grotesk / Inter Regular',
      notes: 'Rigueur suisse avec contraste d\'épaisseur prononcé'
    },
    gridSpec: 'Grille modulaire 12 colonnes avec marges de sécurité et ratios harmoniques',
    isExtendedBoard: true
  },
  {
    pageNumber: 21,
    id: 'page-21',
    title: 'Campagnes Outdoor & Affichage Urbain Grand Format',
    subtitle: 'Bannières 4x3m, Abribus Transit & Signalétique Urbaine',
    category: 'print',
    categoryLabel: 'Affichage Grand Format',
    image: '/assets/portfolio_book/page_21.jpg',
    description: 'Direction artistique de campagne d’affichage grand format en milieu urbain : triptyque d’écrans géants et abribus rétroéclairés, composition typographique à fort impact visuel, contrastes vifs (bleu cobalt, orange éclatant, blanc pur) et lisibilité instantanée pour piétons et automobilistes.',
    tags: ['Outdoor', 'Billboard 4x3', 'Abribus', 'Campagne Urbaine'],
    keyDetails: [
      'Lisibilité garantie à plus de 50 mètres',
      'Déclinaison multi-formats abribus & façades urbaines',
      'Haute résolution calibrée pour impression grand format'
    ],
    colorPalette: [
      { name: 'Deep Cobalt', hex: '#0B1B3D', pantone: 'Pantone 280 C', usage: 'Fond puissant & Nuit urbaine' },
      { name: 'Radiant Orange', hex: '#FF5722', pantone: 'Pantone 1655 C', usage: 'Signaux d\'appel & Dynamisme' },
      { name: 'Pure White', hex: '#FFFFFF', usage: 'Titrage haute lisibilité' },
      { name: 'Onyx Black', hex: '#0B0C10', usage: 'Encadrements & Profondeur' }
    ],
    typography: {
      header: 'Bebas Neue Pro / Monument Extended',
      body: 'Grotesk Heavy',
      notes: 'Caractères gras ultra-lisibles sans empattement calibrés pour la vitesse urbaine'
    },
    gridSpec: 'Composition asymétrique dynamique avec lignes de force convergentes',
    isExtendedBoard: true
  },
  {
    pageNumber: 22,
    id: 'page-22',
    title: 'Édition de Luxe : Comment automatiser son entreprise grâce à l\'IA',
    subtitle: 'Mise en Page Intérieure, Grille Éditoriale & Couverture 3D',
    category: 'edition',
    categoryLabel: 'Édition & Livre IA',
    image: '/assets/portfolio_book/page_22.jpg',
    description: 'Chef-d’œuvre d’ingénierie éditoriale pour l’ouvrage phare "Comment automatiser son entreprise grâce à l\'intelligence artificielle" : double-page ouverte sur table d\'architecte avec grille suisse millimétrée, schéma neural d’automatisation, typographie littéraire soignée, reliure rigide luxe avec gaufrage dorure or sur bleu nuit impérial.',
    tags: ['Édition de Luxe', 'Livre IA', 'Grille Suisse', 'Reliure Rigide'],
    keyDetails: [
      'Ouvrage : Comment automatiser son entreprise grâce à l\'intelligence artificielle',
      'Double-page intérieure paginée aux normes typographiques internationales',
      'Couverture 3D reliée avec dorure or et motifs neuraux'
    ],
    colorPalette: [
      { name: 'Imperial Navy', hex: '#0B162C', pantone: 'Pantone 2768 C', usage: 'Couverture rigide royale' },
      { name: 'Radiant Gold', hex: '#D4AF37', pantone: 'Pantone Metallic 871 C', usage: 'Dorure à chaud & Titrage noble' },
      { name: 'Cream Paper', hex: '#F9F7F1', usage: 'Papier bouffant 90g intérieur' },
      { name: 'Charcoal Text', hex: '#1E2024', usage: 'Noir d\'encre 100% K pour la lecture' }
    ],
    typography: {
      header: 'Canela Fine / Garamond Premiere Pro',
      body: 'Swiss Grotesk / Freight Text',
      notes: 'Interlignage aéré 1.45 et confort de lecture prolongée'
    },
    gridSpec: 'Grille de mise en page canonique avec marges de reliure et folios',
    isExtendedBoard: true
  }
];

