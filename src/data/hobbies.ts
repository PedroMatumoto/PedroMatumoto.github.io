// ─── Boulder Climbing ───────────────────────────────────────────────────────

export type BoulderGrade = "V0" | "V1" | "V2" | "V3" | "V4" | "V5" | "V6" | "V7" | "V8+";

export interface BoulderSession {
  date: string; // ISO date
  gym: string;
  topSends: BoulderGrade[];
  notes?: string;
}

export interface BoulderProject {
  name: string;
  grade: BoulderGrade;
  gym: string;
  status: "projecting" | "sent" | "abandoned";
  attempts: number;
  sentDate?: string;
  /** Photo URLs or local paths under /public, e.g. "/images/boulder/route/1.jpg" */
  photos?: string[];
  notes?: string;
}

export const boulderData = {
  gyms: ["República dos Macacos - SP"],
  maxGrade: "V2" as BoulderGrade,
  totalSessions: 3,
  projects: [
    {
      name: "Pinch amarelo com negativo no meio",
      grade: "V2",
      gym: "República dos Macacos - SP",
      status: "projecting",
      attempts: 5,
      photos: [],
      notes: "A virada pra mudar de parede precisa de mais força nos dedos.",
    },
    {
      name: " Dyno verde com negativo",
      grade: "V2",
      gym: "República dos Macacos - SP",
      status: "projecting",
      attempts: 4,
      photos: [],
      notes: "Faltou força e confiança para o movimento. Preciso praticar o timing do dyno em blocos mais fáceis e trabalhar a força explosiva.",
    },
    
  ] as BoulderProject[],
  recentSessions: [
    { date: "2026-05-06", gym: "República dos Macacos - SP", topSends: ["V2", "V1", "V1", "V1"], notes: "Primeiro V2 e V1 com heel hook" },
    { date: "2026-04-15", gym: "República dos Macacos", topSends: ["V1", "V1", "V1", "V0", "V0"]},
    { date: "2026-04-11", gym: "República dos Macacos - SP", topSends: ["VO", "V0", "V0", "V0","V0"] },
  ] as BoulderSession[],
};

// ─── JDM ────────────────────────────────────────────────────────────────────

export type JdmStatus = "owned" | "favorite" | "tracked" | "sold";

export interface JdmCar {
  name: string;
  year: number;
  chassis: string;
  status: JdmStatus;
  /** Photo URL or local path under /public, e.g. "/images/cars/favorites/eg6.jpg" */
  image?: string;
  mods?: string[];
  notes?: string;
}

export interface JdmEvent {
  name: string;
  date: string;
  location: string;
  attended: boolean;
  seenCars?: {
    name: string;
    image: string;
    notes?: string;
  }[];
  notes?: string;
}

export const jdmData = {
  cars: [
    {
      name: "Honda NSX (NA1)",
      year: 1993,
      chassis: "NA1",
      status: "favorite",
      image: "https://libertywalk.co.jp/wp-content/uploads/2022/11/LB-WORKS-NSX-NA101.jpg",
      notes: "Sonho: full Kanjo spec, B16B, roll cage, sem interior.",
    },
    {
      name: "Toyota AE86 Trueno",
      year: 1985,
      chassis: "AE86",
      status: "favorite",
      image: "https://wallpapers.com/images/hd/ae86-n6gyoh8nwhnn2d08.jpg",
    },
  ] as JdmCar[],
  events: [
    {
      name: "JDM Culture Shopping D",
      date: "2026-02-21",
      location: "São Paulo, SP",
      attended: true,
      seenCars: [
        {
          name: "Nissan 300ZX (Z32)",
          image: "/images/cars/jdm-culture/1.jpg",
          notes: "Roda branca, low fitment e interior bem limpo.",
        },
        {
          name: "Honda Accord (4ª Geração)",
          image: "/images/cars/jdm-culture/2.jpg",
          notes: "Body kit discreto e setup de rua.",
        },
        {
          name: "Mitsubishi Eclipse (2ª Geração)",
          image: "/images/cars/jdm-culture/3.jpg",
          notes: "Body kit discreto e setup de rua.",
        },
        {
          name: "Honda Civic Hatch (Geração EG)",
          image: "/images/cars/jdm-culture/4.jpg",
          notes: "Body kit discreto e setup de rua.",
        },
        {
          name: "NISSAN SKYLINE GT-R V-SPEC II NÜR (R34)",
          image: "/images/cars/jdm-culture/5.jpg",
          notes: "Body kit discreto e setup de rua.",
        },
      ],
    },
    {
      name: "Suhai Music Festival",
      date: "2026-08-30",
      location: "São Paulo, SP",
      attended: false,
      seenCars: [],
    },
  ] as JdmEvent[],
};

// ─── Trilhas ─────────────────────────────────────────────────────────────────

export type TrailDifficulty = "FÁCIL" | "MODERADO" | "DIFÍCIL";

export interface Trail {
  slug: string;
  name: string;
  distanceKm: number;
  elevationM: number;
  difficulty: TrailDifficulty;
  done: boolean;
  region: string;
  /** Trail start point [longitude, latitude] */
  coords: [number, number];
  /** Path to GPX file under /public, e.g. "/gpx/slug.gpx" */
  gpx?: string;
  /** Photo URLs or local paths under /public, e.g. "/images/trails/slug/1.jpg" */
  photos?: string[];
  notes?: string;
}

export const trilhasData: Trail[] = [
  { slug: "travessia-petro-tere",  name: "Travessia Petropólis × Teresópolis", distanceKm: 32.23, elevationM: 4696, difficulty: "DIFÍCIL", done: false, region: "Serra dos Órgãos, RJ",      coords: [-43.1810, -22.5090], gpx: "/gpx/travessia-petro-tere.gpx" },
  { slug: "laguna-los-tres",       name: "Laguna de Los Tres",                  distanceKm: 23.35, elevationM: 1159, difficulty: "DIFÍCIL", done: false, region: "El Chaltén, Argentina",     coords: [-73.0594, -49.2742], gpx: "/gpx/laguna-los-tres.gpx" },
  { slug: "temimina-petar",        name: "Temimina — PETAR",                    distanceKm: 9.14,  elevationM: 568,  difficulty: "DIFÍCIL", done: false, region: "Iporanga, SP",              coords: [-48.6631, -24.5868], gpx: "/gpx/temimina-petar.gpx" },
  { slug: "morro-couto-itatiaia",  name: "Morro do Couto — Itatiaia",           distanceKm: 5.81,  elevationM: 424,  difficulty: "FÁCIL",   done: false, region: "Itatiaia, RJ",             coords: [-44.6186, -22.4284], gpx: "/gpx/morro-couto-itatiaia.gpx" },
  { slug: "pedra-grande-atibaia",  name: "Pedra Grande — Atibaia",              distanceKm: 5.68,  elevationM: 623,  difficulty: "MODERADO",done: false, region: "Atibaia, SP",              coords: [-46.5560, -23.1017], gpx: "/gpx/pedra-grande-atibaia.gpx" },
  { slug: "pico-marins",           name: "Pico dos Marins",                     distanceKm: 13.18, elevationM: 1414, difficulty: "DIFÍCIL", done: false, region: "Piquete, SP",              coords: [-45.1820, -22.6580], gpx: "/gpx/pico-marins.gpx" },
  { slug: "pico-lopo",             name: "Pico do Lopo",                        distanceKm: 6.86,  elevationM: 398,  difficulty: "MODERADO",done: false, region: "Extrema, MG",             coords: [-46.3035, -22.8565], gpx: "/gpx/pico-lopo.gpx" },
  { slug: "los-glaciares",         name: "Los Glaciares — Glaciar Perito Moreno",distanceKm:26.69, elevationM: 1300, difficulty: "DIFÍCIL", done: false, region: "Santa Cruz, Argentina",    coords: [-73.0394, -50.4970], gpx: "/gpx/los-glaciares.gpx" },
  { slug: "caminho-mar-historico", name: "Trilha Caminho do Mar Ida Histórico Volta Lorena",     distanceKm: 9.02,  elevationM: 327,  difficulty: "FÁCIL",   done: true,  region: "Cubatão, SP",             coords: [-46.4280, -23.8940], gpx: "/gpx/caminho-mar-historico.gpx", notes: "Início de SP, descida histórica para a Baixada Santista.", photos: ["/images/trails/caminho-mar/1.jpg","/images/trails/caminho-mar/2.jpg","/images/trails/caminho-mar/3.jpg"]},
  { slug: "ana-chata",             name: "Trilha da Ana Chata",                 distanceKm: 5.29,  elevationM: 465,  difficulty: "MODERADO",done: true,  region: "Serra do Mar, SP",        coords: [-46.1060, -23.6350], gpx: "/gpx/ana-chata.gpx", photos: ["/images/trails/ana-chata/1.jpg","/images/trails/ana-chata/2.jpg","/images/trails/ana-chata/3.jpg"] },
];

// ─── Receitas ────────────────────────────────────────────────────────────────

export interface Recipe {
  slug: string;
  name: string;
  timeMin: number;
  tags: string[];
  image?: string; // external URL
  ingredients: string[];
  steps: string[];
  notes?: string;
}

export const receitasData: Recipe[] = [
  {
    slug: "kare",
    name: "Kare",
    timeMin: 90,
    tags: ["japonês", "prato principal", "curry"],
    image: "https://i.imgur.com/JseUfub.jpg",
    ingredients: [
      "3 batatas médias",
      "1 cenoura",
      "1 caixa de karê",
      "100g de shimeji",
      "100g de shiitake",
      "500g de carne",
      "2 colheres de sopa de cachaça",
      "1,0 L de água",
    ],
    steps: [
      "Corte a cebola em fileiras",
      "Corte a cenoura e a batata em pedaços médios",
      "Desfaça as cabeças de cogumelo e se necessário corte o shiitake",
      "Caramelize a cebola",
      "Logo após caramelizar, coloque os cogumelos até dourar",
      "Reserve e coloque a carne com sal, pimenta do reino e a cachaça e dourar",
      "Assim que dourar, adicionar as batatas, cenoura e a mistura de cebola e cogumelo",
      "Completar com água",
      "Deixar cozinhar as batatas até ficarem cozidas (tem que dar pra cortar com o garfo)",
    ],
  },
  {
    slug: "pao-de-queijo-frigideira",
    name: "Pão de queijo de frigideira",
    timeMin: 15,
    tags: ["brasileiro", "lanche", "rápido"],
    image: "https://i.imgur.com/nDgTxZI.jpg",
    ingredients: [
      "1 ovo",
      "1 colher de sopa de ricota/requeijão",
      "2 colheres cheias de tapioca",
      "Meia colher de sopa de fermento químico",
      "Queijo mussarela",
    ],
    steps: [
      "Unte uma panela com manteiga",
      "Em um bowl, bata o ovo, a tapioca, a ricota e o fermento",
      "Coloque metade da massa na frigideira",
      "Coloque o queijo",
      "Despede o resto da massa",
      "Deixe tostar dos dois lados",
    ],
  },
  {
    slug: "macarra-cogu",
    name: "Macarrão ao funghi",
    timeMin: 20,
    tags: ["italiano", "massa", "vegetariano"],
    image: "https://i.imgur.com/nXAOBvY.jpg",
    ingredients: [
      "100g de shimeji",
      "100g de shiitake",
      "1 cubo de manteiga",
      "200g de macarrão",
      "Creme de leite",
      "Cebolinha",
    ],
    steps: [
      "Em uma frigideira, derreta a manteiga",
      "Coloque os cogumelos e doure eles",
      "Depois de dourar, coloque creme de leite à gosto",
      "Coloque um pouco da água de cozimento do macarrão",
      "Junte com o macarrão",
    ],
  },
  {
    slug: "sunomono",
    name: "Sunomono",
    timeMin: 40,
    tags: ["japonês", "entrada", "vegano"],
    image: "https://i.imgur.com/HfbqTfl.jpg",
    ingredients: [
      "1 pepino inteiro",
      "3 colheres de sopa de vinagre de arroz",
      "2 colheres de açúcar",
      "Sal",
      "Gergelim a gosto",
    ],
    steps: [
      "Fatie o peino em rodelas bem finas",
      "Colocar sal e misturar no pepino",
      "Deixar desidratando em uma peneira para soltar a água",
      "Em uma panela, esquentar a mistura do vinagre com açúcar, sem deixar ferver. Assim que tiver dissolvido tudo, desligue e deixe esfriar",
      "Lavar para retirar excesso de sal",
      "Exprema para tirar o excesso de água e depois seque bem com papel toalha",
      "Adicione junto com a mistura de vinagre adoçicado",
      "Adicione gergelim à gosto",
    ],
  },
];

// ─── Viagens ──────────────────────────────────────────────────────────────────

export type TripStatus = "visited" | "planned" | "dream";

export interface TripPhoto {
  src: string;
  caption?: string;
  location?: string;
  tags?: string[];
  /** bento grid cell sizing */
  span?: "wide" | "tall" | "normal";
}

export interface Trip {
  slug: string;
  name: string;
  country: string;
  flag: string;
  status: TripStatus;
  period?: string; // e.g. "Jan 2024" for visited
  tags: string[];
  highlight: string; // one-liner description
  notes?: string;
  /** Places visited within the trip */
  places?: string[];
  /** Photos for the gallery page */
  photos?: TripPhoto[];
}

export const viagensData: Trip[] = [
  // Visited
  {
    slug: "japao-2026",
    name: "Japão",
    country: "Japão",
    flag: "🇯🇵",
    status: "planned",
    period: "2026",
    tags: ["urbano", "cultura", "gastronomia"],
    highlight: "Tóquio, Kamakura, Kyoto, Nara,Osaka.",
    notes: "Primeira de muitas",
    places: ["Tóquio", "Kyoto", "Osaka", "Nara", "Kamakura"],
  },
  {
    slug: "patagonia-2023",
    name: "Patagônia",
    country: "Argentina / Chile",
    flag: "🇦🇷",
    status: "planned",
    tags: ["trekking", "natureza", "aventura"],
    highlight: "El Chaltén, El Calafate e Perito Moreno.",
    notes: "Primeira vez no gelo",
    places: ["El Chaltén", "El Calafate", "Perito Moreno"]
  },
  // Planned / on the radar
  {
    slug: "islandia",
    name: "Islândia",
    country: "Islândia",
    flag: "🇮🇸",
    status: "planned",
    tags: ["natureza", "road trip", "auroras boreais"],
    highlight: "Golden Circle, Vik, Skaftafell — ring road completo.",
    notes: "Rota já planejada. Verão (sem noite) ou inverno (auroras).",
  },
  {
    slug: "torres-del-paine",
    name: "Torres del Paine",
    country: "Chile",
    flag: "🇨🇱",
    status: "planned",
    tags: ["trekking", "natureza", "W-circuit"],
    highlight: "W-Circuit de 5 dias com camping.",
    notes: "Reservar torres early — vagas esgotam 6 meses antes.",
  },
  {
    slug: "dolomitas",
    name: "Dolomitas",
    country: "Itália",
    flag: "🇮🇹",
    status: "planned",
    tags: ["trekking", "via ferrata", "alpinismo"],
    highlight: "Alta Via 1, Tre Cime di Lavaredo.",
  },
  {
    slug: "portugal",
    name: "Portugal",
    country: "Portugal",
    flag: "🇵🇹",
    status: "planned",
    tags: ["historico"],
    highlight: "Serra da estrela",
  },
  {
    slug: "china",
    name: "China",
    country: "China",
    flag: "🇨🇳",
    status: "planned",
    tags: ["historico"],
    highlight: "Grande Muralha, Cidade Proibida, Terracota.",

  },
  {
    slug: "peru-aventura",
    name: "Peru Aventura",
    country: "Peru",
    flag: "🇵🇪",
    status: "planned",
    tags: ["historico"],
    highlight: "Laguna 69, Laguna Parón, Inca Jungle, Moray e Maras, Montanha 7 cores, Canion Colca",

  },
  // Dreams
  {
    slug: "hokkaido",
    name: "Hokkaido no Inverno",
    country: "Japão",
    flag: "🇯🇵",
    status: "dream",
    tags: ["neve", "onsen", "japão"],
    highlight: "Sapporo Yuki Matsuri, ski em Niseko, onsen em Noboribetsu.",
  },
  {
    slug: "nova-zelandia",
    name: "Nova Zelândia",
    country: "Nova Zelândia",
    flag: "🇳🇿",
    status: "dream",
    tags: ["trekking", "natureza", "Tongariro"],
    highlight: "Tongariro Alpine Crossing e Milford Track.",
  },
];

// ─── Restaurantes ─────────────────────────────────────────────────────────────

export type RestaurantStatus = "visited" | "want";

export interface Dish {
  name: string;
  /** Photo URL or local path under /public, e.g. "/images/restaurants/slug/prato.jpg" */
  photo?: string;
  notes?: string;
}

export interface Restaurant {
  slug: string;
  name: string;
  location: string;
  cuisine: string[];
  status: RestaurantStatus;
  /** [longitude, latitude] */
  coords?: [number, number];
  /** 1 = $  2 = $$  3 = $$$  4 = $$$$ */
  priceRange?: 1 | 2 | 3 | 4;
  rating?: number; // 1–5
  visitedDate?: string; // ISO date
  highlight?: string;
  dishes?: Dish[];
  notes?: string;
}

/**
 * Parse a Google Maps share URL and return [longitude, latitude] for use in `coords`.
 *
 * Supported formats:
 *   https://www.google.com/maps/place/Name/@-23.561,-46.655,17z/...
 *   https://www.google.com/maps?q=-23.561,-46.655
 *   https://maps.google.com/maps?ll=-23.561,-46.655
 *
 * Note: shortened links (maps.app.goo.gl) are NOT supported — open the link first
 * and copy the full URL from the browser address bar.
 */
export function coordsFromMaps(url: string): [number, number] {
  // /@lat,lon,zoom
  const atMatch = url.match(/\/@(-?\d+\.?\d*),(-?\d+\.?\d*)/);
  if (atMatch) return [parseFloat(atMatch[2]), parseFloat(atMatch[1])];

  // ?q=lat,lon or &q=lat,lon
  const qMatch = url.match(/[?&]q=(-?\d+\.?\d*),(-?\d+\.?\d*)/);
  if (qMatch) return [parseFloat(qMatch[2]), parseFloat(qMatch[1])];

  // ?ll=lat,lon or &ll=lat,lon
  const llMatch = url.match(/[?&]ll=(-?\d+\.?\d*),(-?\d+\.?\d*)/);
  if (llMatch) return [parseFloat(llMatch[2]), parseFloat(llMatch[1])];

  throw new Error(`coordsFromMaps: não foi possível extrair coordenadas de "${url}"`);
}

export const restaurantesData: Restaurant[] = [
    {
        slug: "7kings",
        name: "7Kings",
        location: "Moema, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "50-25",
        name: "50/25",
        location: "SCS, São Caetano do Sul, SP",
        cuisine: ["Bar"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "1908-coffee-station",
        name: "1908 | Coffee Station",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "aguekazu",
        name: "Aguekazu",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "aguiko",
        name: "Aguiko",
        location: "Higienópolis, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 5,
        highlight: "Oniguirazu de tonkatsu, Lu rou fan, Jajangmyeon"
    },
    {
        slug: "aio",
        name: "Aio",
        location: "Vila Mariana, São Paulo, SP",
        cuisine: ["Taiwanesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "aizome",
        name: "Aizomê",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "antonella-maison",
        name: "Antonella Maison",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Drinks"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "aoyama",
        name: "Aoyama",
        location: "Moema, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "asawon",
        name: "Asawon",
        location: "Bom Retiro, São Paulo, SP",
        cuisine: ["Coreana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "aska-lamen",
        name: "ASKA Lamen",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "athenas",
        name: "Athenas",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Grega"],
        status: "visited",
        rating: 4,
        highlight: "Moussaká, Filé a Cubana"
    },
    {
        slug: "augustus",
        name: "Augustus",
        location: "Morumbi, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "backstage",
        name: "Backstage",
        location: "Vila Mariana, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "bar-dos-arcos",
        name: "Bar dos Arcos",
        location: "Centro, São Paulo, SP",
        cuisine: ["Bar"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "barbacoa",
        name: "Barbacoa",
        location: "Itaim, São Paulo, SP",
        cuisine: ["Carnes"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "blue-note",
        name: "Blue Note",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Bar"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "bravo-bar",
        name: "Bravo Bar",
        location: "Mooca, São Paulo, SP",
        cuisine: ["Drinks"],
        status: "visited",
        rating: 3,
        highlight: "Shot de tequila com pimenta"
    },
    {
        slug: "bruta-pizza-e-birra",
        name: "Bruta pizza e Birra",
        location: "SCS, São Caetano do Sul, SP",
        cuisine: ["Pizza"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "buzina",
        name: "Buzina",
        location: "Pinheiros, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "cadillac-burguer",
        name: "Cadillac Burguer",
        location: "Mooca, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "visited",
        rating: 3,
        highlight: ""
    },
    {
        slug: "cantina-del-piero",
        name: "Cantina Del Piero",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "canton",
        name: "Canton",
        location: "Moema, São Paulo, SP",
        cuisine: ["Chifa"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "cauli",
        name: "Caulí",
        location: "Pinheiros, São Paulo, SP",
        cuisine: ["Drinks"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "cepam",
        name: "Cepam",
        location: "Vila Prudente, São Paulo, SP",
        cuisine: ["Alelo", "Brasileira"],
        status: "visited",
        rating: 3,
        highlight: ""
    },
    {
        slug: "charles-pizzaria",
        name: "Charles Pizzaria",
        location: "Vila Mariana, São Paulo, SP",
        cuisine: ["Pizza"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "chico-restaurante",
        name: "Chico Restaurante",
        location: "Tatuapé, São Paulo, SP",
        cuisine: ["Brasileira"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "cho-sun-gal-bi",
        name: "Cho Sun Gal Bi",
        location: "Bom Retiro, São Paulo, SP",
        cuisine: ["Coreana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "choyee",
        name: "Choyee",
        location: "Bom Retiro, São Paulo, SP",
        cuisine: ["Coreana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "coco-bambu",
        name: "Coco bambu",
        location: "Anália Franco, São Paulo, SP",
        cuisine: ["Alelo", "Havaiana"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "coffee-lab",
        name: "Coffee Lab",
        location: "Vila Madalena, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "coffee-selfie",
        name: "Coffee Selfie",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Café"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "corujinha-restaurante",
        name: "Corujinha restaurante",
        location: "Mairiporã, SP",
        cuisine: ["Carnes", "Peixes"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "cozinha-de-afeto",
        name: "Cozinha de afeto",
        location: "Oscar Freire, São Paulo, SP",
        cuisine: ["Brasileira"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "dabok",
        name: "DABOK",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Coreana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "esfiha-juventus",
        name: "Esfiha Juventus",
        location: "Mooca, São Paulo, SP",
        cuisine: ["Alelo", "Árabe"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "fame",
        name: "Fame",
        location: "Jardins, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "famiglia-mancini",
        name: "Famiglia Mancini",
        location: "Centro, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "fat-buddha",
        name: "Fat Buddha",
        location: "Sumaré, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "filipinas-restaurante-oriental",
        name: "FILIPINAS RESTAURANTE ORIENTAL",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Alelo", "Filipina"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "fillmore",
        name: "Fillmore",
        location: "Ipiranga, São Paulo, SP",
        cuisine: ["Alelo", "Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "formo",
        name: "Formo",
        location: "Consolação, São Paulo, SP",
        cuisine: ["Italiana", "Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "formosa-hifi",
        name: "Formosa Hifi",
        location: "Anhangabau, São Paulo, SP",
        cuisine: ["Bar"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "forno",
        name: "Fôrno",
        location: "Higienópolis, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "gael",
        name: "Gael",
        location: "Pinheiros, São Paulo, SP",
        cuisine: ["Mediterranea"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "gatcha",
        name: "Gatcha",
        location: "Centro, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "gato-pingado",
        name: "Gato Pingado",
        location: "Oscar Freire, São Paulo, SP",
        cuisine: ["Café", "CatCafé"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "gorilla-burguer",
        name: "Gorilla Burguer",
        location: "Mooca, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "goya",
        name: "Goya",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "grindhouse-braserito",
        name: "Grindhouse Braserito",
        location: "Pinheiros, São Paulo, SP",
        cuisine: ["Carnes", "Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "gua-co",
        name: "Gua.CO",
        location: "Itaim, Paulista, Pinheiros, São Paulo, SP",
        cuisine: ["Alelo", "Mexicana"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "gyomo",
        name: "Gyomo",
        location: "Santo André, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "hakkopan",
        name: "Hakkopan",
        location: "Paraíso, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "hayashi-bakery",
        name: "HAYASHI BAKERY",
        location: "Hospital São Paulo, São Paulo, SP",
        cuisine: ["Alelo", "Café"],
        status: "visited",
        rating: 3,
        highlight: ""
    },
    {
        slug: "high-tea",
        name: "High Tea",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Café"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "hinode",
        name: "Hinodê",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "hira",
        name: "Hira",
        location: "Itaim, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "holy-burguer",
        name: "Holy burguer",
        location: "Higienópolis, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "hot-pot",
        name: "Hot Pot",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Coreana"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "ikemen",
        name: "Ikemen",
        location: "Paraíso, São Paulo, SP",
        cuisine: ["Japonesa", "Lamen"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "ikkousha",
        name: "IKKOUSHA",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "inah",
        name: "Inah",
        location: "SCS, São Caetano do Sul, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "visited",
        rating: 3,
        highlight: ""
    },
    {
        slug: "it-sushi",
        name: "IT SUSHI",
        location: "Itaim, Pinheiros, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "itoya",
        name: "Itoya",
        location: "Vila Maria, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "izakaya-kuroda",
        name: "Izakaya kuroda",
        location: "Itaim, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "izakaya-toki",
        name: "Izakaya Toki",
        location: "Itaim, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "jaba-do-ribamar",
        name: "Jabá do Ribamar",
        location: "Santo André, SP",
        cuisine: ["Alelo", "Mineira"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "jhons-burguer",
        name: "Jhons burguer",
        location: "Mooca, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "jojo-ramen",
        name: "JoJo Ramen",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "kaifu-asian-cuisine",
        name: "Kaifu Asian Cuisine",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "kaishi",
        name: "Kaishi",
        location: "SCS, São Caetano do Sul, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "kanalu",
        name: "Kanalu",
        location: "SCS, São Caetano do Sul, SP",
        cuisine: ["Alelo", "Havaiana"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "kidoairaku",
        name: "Kidoairaku",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 0,
        priceRange: 3,
        dishes: [
            {
            name: "TORI KARA SU JYOUYU JUUBAKO",
            photo: "/images/FOOD/kidoairaku.jpg",
            notes: "Frango frito com molho de soja, servido em uma caixa bento. Crocante por fora e suculento por dentro, com um sabor umami intenso do molho. Acompanha arroz branco e legumes em conserva, equilibrando a riqueza do prato."
            },
        ],
        highlight: ""
    },
    {
        slug: "kiki-cafe",
        name: "KIKI CAFE",
        location: "Ipiranga, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "kinkan-flagship",
        name: "Kinkan Flagship",
        location: "Oscar Freire, São Paulo, SP",
        cuisine: ["Japonesa", "Omakase"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "ko-burguer",
        name: "Ko burguer",
        location: "Itaim, Pinheiros, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "komah",
        name: "Komah",
        location: "Barra Funda, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "kooi-mooa",
        name: "Kooi Mooa",
        location: "Santa Cecília, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "kotori",
        name: "Kotori",
        location: "Fradique Coutinho, São Paulo, SP",
        cuisine: ["Yakiniku"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "la-pergoletta",
        name: "La pergoletta",
        location: "Tatuapé, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "lamen-kazu",
        name: "Lamen Kazu",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 0,
        highlight: ""
    },
    {
        slug: "lanchonete-da-cidade",
        name: "Lanchonete da Cidade",
        location: "Moema, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "lena",
        name: "Lena",
        location: "Fradique Coutinho, São Paulo, SP",
        cuisine: ["Mineira"],
        status: "visited",
        rating: 5,
        priceRange: 3,
        dishes: [
            {
            name: "Galinhada",
            photo: "/images/FOOD/lena1.jpg",
            notes: "Apesar de ser galinhada, não é um prato pesado. O arroz é soltinho e bem temperado, com pedaços generosos de frango desfiado, junto com a cebola fica muito bom."
            },
            {
            name: "Broa",
            photo: "/images/FOOD/lena2.jpg",
            notes: "De longe a melhor broa de milho que já comi. A textura é perfeita, com uma crosta crocante por fora e um interior macio e úmido. O kimchi dá um toque diferente"
            },
        ],
        highlight: ""
    },
    {
        slug: "manden-baoba",
        name: "Manden Baoba",
        location: "Vila Mariana, São Paulo, SP",
        cuisine: ["Africana"],
        status: "visited",
        rating: 5,
        highlight: "Frango de curry à moda Angolana, Tigadèguèna (Mali) Não vegano"
    },
    {
        slug: "mane-burguer",
        name: "Mané Burguer",
        location: "Mooca, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "visited",
        rating: 4,
        highlight: "Beirute especial"
    },
    {
        slug: "mapu",
        name: "Mapu",
        location: "Vila Mariana, São Paulo, SP",
        cuisine: ["Taiwanesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "masaki",
        name: "Masaki",
        location: "Ipiranga, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 3,
        highlight: ""
    },
    {
        slug: "master-curry-japanese-kitchen",
        name: "Master Curry Japanese Kitchen",
        location: "Saúde, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "mata-citta",
        name: "Mata Citta",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "metzi",
        name: "Metzi",
        location: "Pinheiros, São Paulo, SP",
        cuisine: ["Mexicana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "miado",
        name: "Miado",
        location: "Jardins, São Paulo, SP",
        cuisine: ["Tailaindesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "milkie",
        name: "Milkie",
        location: "Itaim, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "misoya",
        name: "Misoya",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "mizzica",
        name: "Mizzica",
        location: "Mooca, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "moah-restaurante",
        name: "Moah Restaurante",
        location: "Bom Retiro, São Paulo, SP",
        cuisine: ["Coreana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "mocoto",
        name: "Mocoto",
        location: "Tucuruvi, São Paulo, SP",
        cuisine: ["Brasileira"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "moinhos-do-vento",
        name: "Moinhos do vento",
        location: "Mooca, São Paulo, SP",
        cuisine: ["Pizza"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "moma",
        name: "MoMa",
        location: "Oscar Freire, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "moma-osteria",
        name: "Moma Osteria",
        location: "Itaim, Pinheiros, São Paulo, SP",
        cuisine: ["Alelo", "Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "momonoki",
        name: "Momonoki",
        location: "Vila Madalena, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "mr-texas",
        name: "Mr. Texas",
        location: "SCS, São Caetano do Sul, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "mugui",
        name: "Mugui",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "nawaki-sushi",
        name: "Nawaki Sushi",
        location: "Ipiranga, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "new-mimatsu",
        name: "NEW MIMATSU",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "visited",
        rating: 0,
        highlight: ""
    },
    {
        slug: "notthesamo",
        name: "NOTTHESAMO",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "oguru",
        name: "OGURU",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "oishiisa",
        name: "Oishiisa",
        location: "Ipiranga, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "old-man",
        name: "Old Man",
        location: "SCS, São Caetano do Sul, SP",
        cuisine: ["Hambúrguer"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "omoide-sakaba",
        name: "OMOIDE SAKABA",
        location: "Vila Mariana, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "oseyo",
        name: "Oseyo",
        location: "Vila Mariana, São Paulo, SP",
        cuisine: ["Coreana"],
        status: "visited",
        rating: 0,
        priceRange: 2,
        dishes: [
            {
            name: "Tteokbokki",
            photo: "/images/FOOD/oseyo.jpg",
            notes: "Apimentado, mas muito saboroso. O bolinho de arroz é macio e tem um leve sabor de gergelim, o molho é bem temperado, levemente adocicado e tem um toque de picância que não chega a incomodar. A porção é generosa, dá para compartilhar tranquilamente."
            },
        ],
        highlight: "",
        

    },
    {
        slug: "osteria-generale",
        name: "Osteria generale",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "panda-ya",
        name: "Panda Ya",
        location: "Pinheiros, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "pao-com-carne",
        name: "Pão com carne",
        location: "Itaim, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "pappa-gohan",
        name: "Pappa Gohan",
        location: "SCS, São Caetano do Sul, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "pasta-way",
        name: "PASTA WAY",
        location: "Santo André, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "pato-rei",
        name: "PATO REI",
        location: "Pinheiros, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 4,
        highlight: "OmuKarê, Kare Chips"
    },
    {
        slug: "patties",
        name: "Patties",
        location: "Fradique Coutinho, Itaim, Pinheiros, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "paulao-lanches",
        name: "Paulão Lanches",
        location: "Santo André, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "petros-greek-taverna",
        name: "Petros Greek Taverna",
        location: "Fradique Coutinho, São Paulo, SP",
        cuisine: ["Grega"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "portal-da-coreia",
        name: "PORTAL DA COREIA",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Coreana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "rong-he",
        name: "Rong He",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Chinesa"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "ronron-cat-cafe",
        name: "RONRON CAT CAFE",
        location: "Vila Leopoldina, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "ryo",
        name: "Ryo",
        location: "Itaim, São Paulo, SP",
        cuisine: ["Japonesa", "Omakase"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "sa-yakiniku",
        name: "SA Yakiniku",
        location: "Anália Franco, São Paulo, SP",
        cuisine: ["Japonesa", "Yakiniku"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "saiko",
        name: "Saiko",
        location: "Jardim Europa, São Paulo, SP",
        cuisine: ["Lanche"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "santo-mar",
        name: "SANTO MAR",
        location: "Tatuapé, São Paulo, SP",
        cuisine: ["Alelo", "Frutos do mar"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "sarumon",
        name: "Sarumon",
        location: "Itaim, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "visited",
        rating: 3,
        highlight: ""
    },
    {
        slug: "seu-luigi-e-dona-lina",
        name: "Seu Luigi e Dona Lina",
        location: "SCS, São Caetano do Sul, SP",
        cuisine: ["Alelo", "Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "seu-oswaldo",
        name: "Seu Oswaldo",
        location: "Ipiranga, São Paulo, SP",
        cuisine: ["Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "sororoca-bar",
        name: "Sororoca Bar",
        location: "Vila Madalena, São Paulo, SP",
        cuisine: ["Brasileira"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "street-digital-burger",
        name: "Street Digital Burger",
        location: "Tatuapé, São Paulo, SP",
        cuisine: ["Alelo", "Hambúrguer"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "sushi-nami",
        name: "Sushi Nami",
        location: "Moema, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "sushi-shin-zuchi",
        name: "Sushi Shin-Zuchi",
        location: "Paraíso, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "sushi-yassu",
        name: "Sushi Yassu",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "takoyaki8",
        name: "TAKOYAKI8",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "tamashii-ramen",
        name: "Tamashii Ramen",
        location: "Fradique Coutinho, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 4,
        priceRange: 2,
        dishes: [
            {
            name: "HABANERO KARA MISO RAMEN",
            photo: "/images/FOOD/tamashii.jpg",
            notes: "Picante na medida certa, o caldo é rico e saboroso, com um equilíbrio perfeito entre o sabor do miso e a picância do habanero. O macarrão é fresco e tem uma textura ótima, complementando bem o caldo."
            },
        ],
        highlight: ""
    },
    {
        slug: "tanka",
        name: "Tanka",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "taqueria-atzi",
        name: "Taqueria Atzi",
        location: "Vila Madalena, São Paulo, SP",
        cuisine: ["Mexicana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "tatu-bola",
        name: "Tatu Bola",
        location: "Paulista, Tatuapé, São Paulo, SP",
        cuisine: ["Bar"],
        status: "visited",
        rating: 4,
        highlight: ""
    },
    {
        slug: "temaki-station",
        name: "Temaki Station",
        location: "Vila Prudente, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 3,
        highlight: ""
    },
    {
        slug: "tempura-ten",
        name: "Tempura Ten",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "tetto-rooftop",
        name: "Tetto Rooftop",
        location: "Oscar Freire, São Paulo, SP",
        cuisine: ["Bar"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "thai-chef",
        name: "THAI CHEF",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Tailaindesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "thai-e-san",
        name: "Thai e San",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Tailaindesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "the-view",
        name: "The View",
        location: "Paulista, São Paulo, SP",
        cuisine: ["Bar"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "toriko",
        name: "Toriko",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Alelo", "Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "udon-jinbei",
        name: "Udon Jinbei",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "ueda-horumon-yaki",
        name: "Ueda Horumon Yaki",
        location: "Liberdade, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "vivi-wakuda",
        name: "Vivi Wakuda",
        location: "Pinheiros, São Paulo, SP",
        cuisine: ["Café"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "yorimichi-izakaya",
        name: "YORIMICHI IZAKAYA",
        location: "Paraíso, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "yubari",
        name: "Yubari",
        location: "Centro, São Paulo, SP",
        cuisine: ["Japonesa", "Omakase"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "elcarbon",
        name: "El Carbon",
        location: "Vila Olímpia, São Paulo, SP",
        cuisine: ["Espanhola"],
        status: "visited",
        rating: 3,
        priceRange: 3,
        dishes: [
            {
            name: "Risoto com brisket",
            photo: "/images/FOOD/elcarbon1.jpg",
            notes: "Bom, mas bem gorduroso."
            },
            {
            name: "Cookie com sorvete",
            photo: "/images/FOOD/elcarbon2.jpg",
            notes: "Bem gostoso, mas um pouco doce demais."
            }
        ],
        highlight: ""
    }
];
