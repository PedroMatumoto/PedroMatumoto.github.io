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
  status: "projecting" | "sent" | "abandoned"| "archived";
  attempts: number;
  sentDate?: string;
  /** Photo URLs or local paths under /public, e.g. "/images/boulder/route/1.jpg" */
  photos?: string[];
  notes?: string;
}

export const boulderData = {
  gyms: ["República dos Macacos - SP"],
  projects: [
    {
      name: "Abaolado roxo",
      grade: "V2",
      gym: "República dos Macacos - SP",
      status: "sent",
      attempts: 12,
      photos: ["/images/bouldering/v2-roxa-abaolado.jpg"],
      notes: "",
    },
    {
      name: "Pinch amarelo com negativo no meio",
      grade: "V2",
      gym: "República dos Macacos - SP",
      status: "archived",
      attempts: 13,
      photos: ["/images/bouldering/v2-amarela-pinch.jpg"],
      notes: "A virada pra mudar de parede precisa de mais força nos dedos.",
    },
    {
      name: "Dyno verde com negativo",
      grade: "V2",
      gym: "República dos Macacos - SP",
      status: "archived",
      attempts: 7,
      photos: ["/images/bouldering/v2-vira-lado.jpg"],
      notes: "Faltou força e confiança para o movimento. Preciso praticar o timing do dyno em blocos mais fáceis e trabalhar a força explosiva.",
    },
    {
      name: "Pinch laranja",
      grade: "V2",
      gym: "República dos Macacos - SP",
      status: "sent",
      attempts: 5,
      photos: ["/images/bouldering/v1-branca-negativo.jpg"],
      notes: "",
    },
    {
      name: "Jug com negativo branco",
      grade: "V1",
      gym: "República dos Macacos - SP",
      status: "sent",
      attempts: 10,
      photos: ["/images/bouldering/v1-branca-negativo.jpg"],
      notes: "Falta colocar os pés e grip pra segurar o jug com força pra ir pras últimas agarras.",
    },
    {
      name: "Crimp preta",
      grade: "V1",
      gym: "República dos Macacos - SP",
      status: "archived",
      attempts: 8,
      photos: ["/images/bouldering/v1-preta-forca.jpg"],
      notes: "Faltou força na penúltima agarra. Grip pra subir ainda é um desafio, mas o movimento em si é tranquilo. Preciso focar em fortalecer os dedos e melhorar a técnica de pés para compensar a falta de força.",
    },
  ] as BoulderProject[],
  recentSessions: [
    { date: "2026-05-31", gym: "República dos Macacos - SP", topSends: ["V2", "V2", "V2", "V2", "V2", "V1", "V1", "V1", "V1", "V1", "V1", "V0", "V0"], notes: "Sessão focada em refazer movimentos e melhorar técnica" },
    { date: "2026-05-26", gym: "República dos Macacos - SP", topSends: ["V2", "V2", "V1", "V0", "V0", "V0", "V0"], notes: "V2 abaolado e V2 laranja feitos" },
    { date: "2026-05-20", gym: "República dos Macacos - SP", topSends: ["V2", "V1", "V1", "V1", "V1"], notes: "V2 pinch e V2 abaolado faltando a última agarra, V2 laranja faltando controle das pernas, sessão focada em V2" },
    { date: "2026-05-16", gym: "República dos Macacos - SP", topSends: ["V2", "V1", "V1", "V1"], notes: "Sessão mais longa até agora" },
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
      name: "Shopping Eldorado",
      date: "",
      location: "São Paulo, SP",
      attended: true,
      seenCars: [
        {
          name: "Mazda MX-3",
          image: "/images/cars/car-spotting/mazda-mx3-mcqueen.jpg",
          notes: "Mazda MX-3 com pintura personalizada do Relâmpago McQueen.",
        },
      ],
    },
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

// ─── Favoritos Pessoais ─────────────────────────────────────────────────────

export type FavoriteMediaType = "manga" | "filme" | "anime" | "jogo" | "album";

export interface PersonalFavorite {
    type: FavoriteMediaType;
    title: string;
    subtitle?: string;
    cover: string;
    year?: string;
    creator?: string;
    genres?: string[];
    reason?: string;
}

export const personalFavoritesData: PersonalFavorite[] = [
    {
        type: "manga",
        title: "Kokou no Hito",
        subtitle: "Sakamoto Shinichi",
        cover: "/images/favorites/kokou-no-hito.jpg",
        year: "1989",
        creator: "Sakamoto Shinichi",
        genres: ["Drama", "Esporte", "Aventura"],
        reason: "Construção de mundo absurda, arte única e evolução pesada dos personagens.",
    },
    {
        type: "filme",
        title: "Project Hail Mary",
        subtitle: "Andy Weir",
        cover: "/images/favorites/project-hail-mary.jpg",
        year: "2026",
        creator: "Andy Weir / MGM",
        genres: ["Sci-Fi", "Drama", "Aventura"],
        reason: "Trilha sonora sensacional, fotografia incrível e tema de sobrevivência espacial muito bem explorado, com um toque de humor e emoção com o Ryan Gosling.",
    },
    {
        type: "anime",
        title: "86",
        subtitle: "Eighty-Six",
        cover: "/images/favorites/86.jpeg",
        year: "2021",
        creator: "Shougo Yasukawa / A-1 Pictures",
        genres: ["Ação", "Aventura", "Fantasia"],
        reason: "Narrativa envolvente, personagens complexos e uma abordagem única para o gênero me conquistaram completamente.",
    },
    {
        type: "jogo",
        title: "GRIS",
        subtitle: "Nomada Studio",
        cover: "/images/favorites/gris.jpg",
        year: "2018",
        creator: "Nomada Studio",
        genres: ["Plataforma", "Puzzle", "Indie"],
        reason: "Direção de arte e trilha impecáveis, com narrativa sensível sem precisar de texto.",
    },
    {
        type: "album",
        title: "F-1 Trillion: Long Bed",
        subtitle: "Post Malone",
        cover: "https://i.scdn.co/image/ab67616d0000b273e17e51543be87943285b65ad",
        year: "2024",
        creator: "Post Malone",
        genres: ["Country", "Pop", "Folk"],
        reason: "Mistura de country moderno com melodias fortes; ótimo álbum para ouvir inteiro.",
    },
];

export type BacklogCategoryKey = "animes" | "mangas" | "jogos" | "filmes";
export type BacklogItemStatus = "consumed" | "backlog" | "planned" | "dropped" | "watching" | "reading";

export interface BacklogItem {
    title: string;
    subtitle?: string;
    year?: string;
    creator?: string;
    cover?: string;
    genres?: string[];
    status: BacklogItemStatus;
    rating?: number;
    notes?: string;
}

export interface BacklogCategory {
    label: string;
    kanji: string;
    description: string;
    items: BacklogItem[];
}

export const mediaBacklogData: Record<BacklogCategoryKey, BacklogCategory> = {
    animes: {
        label: "Animes",
        kanji: "ア",
        description: "Lista de animes assistidos e no backlog.",
        items: [
    {
        "title": "BLEACH",
        "subtitle": "Bleach",
        "year": "2004",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx269-d2GmRkJbMopq.png",
        "genres": [
            "Action",
            "Adventure",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Bakemonogatari",
        "subtitle": "Bakemonogatari",
        "year": "2009",
        "creator": "Shaft",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5081-9GocceQ5Z865.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Mystery",
            "Psychological",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Baka to Test to Shoukanjuu",
        "subtitle": "Baka and Test - Summon the Beasts",
        "year": "2010",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6347-DCSHLkCY7UT3.jpg",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Angel Beats!",
        "subtitle": "Angel Beats!",
        "year": "2010",
        "creator": "P.A.WORKS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6547-SYexAn5aFyss.png",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Ao no Exorcist",
        "subtitle": "Blue Exorcist",
        "year": "2011",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9919-nXS7JOZrWHfS.jpg",
        "genres": [
            "Action",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.",
        "subtitle": "Anohana: The Flower We Saw That Day",
        "year": "2011",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9989-hImMg6kCMm6I.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Another",
        "subtitle": "Another",
        "year": "2012",
        "creator": "P.A.WORKS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11111-gvvE5bBYsyFo.png",
        "genres": [
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Ano Natsu de Matteru",
        "subtitle": "Waiting in the Summer",
        "year": "2012",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11433-KLEzZeK6D46g.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Sci-Fi",
            "Slice of Life"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Blood Lad",
        "subtitle": "Blood Lad",
        "year": "2013",
        "creator": "Brain's Base",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11633-vIjtabJq64Xt.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Ecchi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Ao no Exorcist Movie",
        "subtitle": "Blue Exorcist: The Movie",
        "year": "2012",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11737-49ya7CBO5wEq.jpg",
        "genres": [
            "Action",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Black Bullet",
        "subtitle": "Black Bullet",
        "year": "2014",
        "creator": "Kinema Citrus",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20457-ftrNiYhZzgoY.jpg",
        "genres": [
            "Action",
            "Drama",
            "Mystery",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Ao Haru Ride",
        "subtitle": "Blue Spring Ride",
        "year": "2014",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20596-fJdMHV8xRMgY.png",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Amagi Brilliant Park",
        "subtitle": "Amagi Brilliant Park",
        "year": "2014",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20602-f6CfipBF44kV.png",
        "genres": [
            "Comedy",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Akame ga Kill!",
        "subtitle": "Akame ga Kill!",
        "year": "2014",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20613-HXHpec4bemk5.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Horror",
            "Psychological",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Aldnoah.Zero",
        "subtitle": "ALDNOAH.ZERO",
        "year": "2014",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20632-Mkgbtvi1kmhD.jpg",
        "genres": [
            "Action",
            "Mecha",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Barakamon",
        "subtitle": "Barakamon",
        "year": "2014",
        "creator": "Kinema Citrus",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20722-2KAeq72E95dr.png",
        "genres": [
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Ansatsu Kyoushitsu",
        "subtitle": "Assassination Classroom",
        "year": "2015",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20755-dWrhs569YGUO.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Akatsuki no Yona",
        "subtitle": "Yona of the Dawn",
        "year": "2014",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20770-brCDvhTXlums.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Absolute Duo",
        "subtitle": "Absolute Duo",
        "year": "2015",
        "creator": "8-bit",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20785-AsFpG5XMj7ip.jpg",
        "genres": [
            "Action",
            "Ecchi",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Ao Haru Ride: unwritten",
        "subtitle": "",
        "year": "2014",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20837-yK7SvUj1Tg7l.jpg",
        "genres": [
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Ao Haru Ride PAGE.13",
        "subtitle": "",
        "year": "2014",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20900-r4sNKDY8LBGK.png",
        "genres": [
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Ansatsu Kyoushitsu 2nd Season",
        "subtitle": "Assassination Classroom Second Season",
        "year": "2016",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21170-kbcfTTZGSaFt.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Amaama to Inazuma",
        "subtitle": "Sweetness & Lightning",
        "year": "2016",
        "creator": "TMS Entertainment",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21659-r1nnqXPIcl9D.png",
        "genres": [
            "Comedy",
            "Slice of Life"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Ao no Exorcist: Kyoto Fujouou-hen",
        "subtitle": "Blue Exorcist: Kyoto Saga",
        "year": "2017",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21861-KDvJJQenJJlT.jpg",
        "genres": [
            "Action",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Black Clover",
        "subtitle": "Black Clover",
        "year": "2017",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97940-fyh8o7gNbha0.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Blend S",
        "subtitle": "BLEND-S",
        "year": "2017",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97994-JZ1rLkJBcO8V.png",
        "genres": [
            "Comedy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Aho-Girl",
        "subtitle": "AHO-GIRL",
        "year": "2017",
        "creator": "diomedéa",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b98251-6miVBNYEXzaF.jpg",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Ani ni Tsukeru Kusuri wa Nai!",
        "subtitle": "Take My Brother Away!",
        "year": "2017",
        "creator": "Fanworks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b98425-p8JtS69Mt4Ea.png",
        "genres": [
            "Comedy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "3-gatsu no Lion 2nd Season",
        "subtitle": "March comes in like a lion Season 2",
        "year": "2017",
        "creator": "Shaft",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98478-Yua5iL9zbrji.jpg",
        "genres": [
            "Drama",
            "Slice of Life"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Akkun to Kanojo",
        "subtitle": "My Sweet Tyrant",
        "year": "2018",
        "creator": "Yumeta Company",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100645-NJW4S7M0LvDc.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Arifureta Shokugyou de Sekai Saikyou",
        "subtitle": "Arifureta: From Commonplace to World's Strongest",
        "year": "2019",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100668-DvOn5bMOt4cy.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Beelzebub-jou no Oki ni Mesu Mama.",
        "subtitle": "As Miss Beelzebub Likes it.",
        "year": "2018",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101505-jhNHjv7Ng3ku.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Go-toubun no Hanayome",
        "subtitle": "The Quintessential Quintuplets",
        "year": "2019",
        "creator": "Tezuka Productions",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx103572-cchriAdH95cQ.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Assassins Pride",
        "subtitle": "ASSASSINS PRIDE",
        "year": "2019",
        "creator": "EMT Squared",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104722-XVscwgdGzfnO.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Fantasy",
            "Mystery",
            "Romance"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Araburu Kisetsu no Otome-domo yo.",
        "subtitle": "O Maidens in Your Savage Season",
        "year": "2019",
        "creator": "Lay-duce",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105932-OCI48MaTvGXT.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Go-toubun no Hanayome ∬",
        "subtitle": "The Quintessential Quintuplets 2",
        "year": "2021",
        "creator": "Bibury Animation Studios",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx109261-65rKxMDlcU9r.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Arifureta Shokugyou de Sekai Saikyou 2nd season",
        "subtitle": "Arifureta: From Commonplace to World's Strongest Season 2",
        "year": "2022",
        "creator": "Asread",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112323-C6nlP84x8jH8.png",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Psychological"
        ],
        "status": "dropped",
        "rating": 4
    },
    {
        "title": "Back Arrow",
        "subtitle": "BACK ARROW",
        "year": "2021",
        "creator": "Studio VOLN",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114307-7ON0DNyETBRk.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Mecha",
            "Sci-Fi"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "100-man no Inochi no Ue ni Ore wa Tatteiru",
        "subtitle": "I'm Standing on a Million Lives",
        "year": "2020",
        "creator": "Maho Film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116242-JY81Khmbqysn.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Akudama Drive",
        "subtitle": "Akudama Drive",
        "year": "2020",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116566-PPIVQt359vQY.jpg",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "86: Eighty Six",
        "subtitle": "86 EIGHTY-SIX",
        "year": "2021",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116589-KawXHB6sApFt.jpg",
        "genres": [
            "Action",
            "Drama",
            "Mecha",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "BLEACH: Sennen Kessen-hen",
        "subtitle": "BLEACH: Thousand-Year Blood War",
        "year": "2022",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116674-p3zK4PUX2Aag.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Ai no Utagoe wo Kikasete",
        "subtitle": "Sing a Bit of Harmony",
        "year": "2021",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx123899-AimlRWzAqpHC.jpg",
        "genres": [
            "Music",
            "Sci-Fi"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "100-man no Inochi no Ue ni Ore wa Tatteiru 2nd Season",
        "subtitle": "I'm Standing on a Million Lives Season 2",
        "year": "2021",
        "creator": "Maho Film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127366-nQRRRvVbPIDt.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Blue Period",
        "subtitle": "Blue Period",
        "year": "2021",
        "creator": "Seven Arcs",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128705-LqIWVpiwDlDc.jpg",
        "genres": [
            "Drama",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Go-toubun no Hanayome Movie",
        "subtitle": "The Quintessential Quintuplets Movie",
        "year": "2022",
        "creator": "Bibury Animation Studios",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131520-89Qfo8JnGHI3.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "86: Eighty Six Part 2",
        "subtitle": "86 EIGHTY-SIX Part 2",
        "year": "2021",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131586-JhC0wcBi09EZ.jpg",
        "genres": [
            "Action",
            "Drama",
            "Mecha",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Aoashi",
        "subtitle": "Aoashi",
        "year": "2022",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx134732-OXKSrOhF9pCM.jpg",
        "genres": [
            "Sports"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Aharen-san wa Hakarenai",
        "subtitle": "Aharen-san wa Hakarenai",
        "year": "2022",
        "creator": "Felix Film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx137281-i4UHcGkUi7j6.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Blue Lock",
        "subtitle": "BLUE LOCK",
        "year": "2022",
        "creator": "8-bit",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx137822-U8naszP96vzC.png",
        "genres": [
            "Action",
            "Drama",
            "Sports"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Cowboy Bebop",
        "subtitle": "Cowboy Bebop",
        "year": "1998",
        "creator": "Sunrise",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-GCsPm7waJ4kS.png",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Sci-Fi"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Code Geass: Hangyaku no Lelouch",
        "subtitle": "Code Geass: Lelouch of the Rebellion",
        "year": "2006",
        "creator": "Sunrise",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1575-hsmWM2ydNm1m.jpg",
        "genres": [
            "Action",
            "Drama",
            "Mecha",
            "Sci-Fi",
            "Thriller"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "CLANNAD",
        "subtitle": "Clannad",
        "year": "2007",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx2167-pSDBcyc0vjej.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "CLANNAD: After Story",
        "subtitle": "Clannad: After Story",
        "year": "2008",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4181-zUKE7BZC62OF.png",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Boku wa Tomodachi ga Sukunai",
        "subtitle": "Haganai",
        "year": "2011",
        "creator": "AIC Build",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx10719-aNf9gOOw62Fs.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "BTOOOM!",
        "subtitle": "BTOOOM!",
        "year": "2012",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14345-BeDPCuhQGtL5.jpg",
        "genres": [
            "Action",
            "Psychological",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Chuunibyou demo Koi ga Shitai!",
        "subtitle": "Love, Chunibyo & Other Delusions",
        "year": "2012",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14741-CGXEIeUe2roA.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Boku wa Tomodachi ga Sukunai NEXT",
        "subtitle": "Haganai NEXT",
        "year": "2013",
        "creator": "AIC Build",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14967-ZGsclJ1xjPwr.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Danganronpa: Kibou no Gakuen to Zetsubou no Koukousei - The Animation",
        "subtitle": "Danganronpa: The Animation",
        "year": "2013",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16592-mFn1gfMXlKtw.jpg",
        "genres": [
            "Horror",
            "Mystery",
            "Psychological",
            "Sci-Fi",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Chuunibyou demo Koi ga Shitai! Ren",
        "subtitle": "Love, Chunibyo & Other Delusions - Heart Throb -",
        "year": "2014",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx18671-RVIY9TGd737H.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Bokura wa Minna Kawaisou",
        "subtitle": "The Kawai Complex Guide to Manors and Hostel Behavior",
        "year": "2014",
        "creator": "Brain's Base",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20529-WyK2k8mF9wIQ.png",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Bokura wa Minna Kawaisou: Hajimete no",
        "subtitle": "The Kawai Complex Guide to Manors and Hostel Behavior: First Time",
        "year": "2015",
        "creator": "Brain's Base",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20780-snAzGJ1TIdkP.png",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Charlotte",
        "subtitle": "",
        "year": "2015",
        "creator": "P.A.WORKS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20997-axVYrsIfjtYJ.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "BORUTO: NARUTO THE MOVIE",
        "subtitle": "Boruto: Naruto the Movie",
        "year": "2015",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21220-3cWAUtR1Ih5h.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Boku dake ga Inai Machi",
        "subtitle": "ERASED",
        "year": "2016",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21234-XmqW39aQ9o7O.jpg",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Bungou Stray Dogs",
        "subtitle": "Bungo Stray Dogs",
        "year": "2016",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21311-hAXyT8Yoh6G9.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Dagashi Kashi",
        "subtitle": "",
        "year": "2016",
        "creator": "feel.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21365-FRalqWQn0lf9.jpg",
        "genres": [
            "Comedy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Boku no Hero Academia",
        "subtitle": "My Hero Academia",
        "year": "2016",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21459-nYh85uj2Fuwr.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Bungou Stray Dogs 2nd Season",
        "subtitle": "Bungo Stray Dogs 2",
        "year": "2016",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21679-9MKdz1A7YLV7.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Busou Shoujo Machiavellianism",
        "subtitle": "Armed Girl's Machiavellism",
        "year": "2017",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21851-WCBWT6fLgh5z.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Boku no Hero Academia 2",
        "subtitle": "My Hero Academia Season 2",
        "year": "2017",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21856-gutauxhWAwn6.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Chuunibyou demo Koi ga Shitai!: Take On Me",
        "subtitle": "Love, Chunibyo & Other Delusions: Take on Me",
        "year": "2018",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98762-ofC7Eqsm2KcD.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Boku no Kanojo ga Majime Sugiru Shoujo Bitch na Ken",
        "subtitle": "My Girlfriend is Shobitch",
        "year": "2017",
        "creator": "diomedéa",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98951-EeoDeSyF97ZS.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Darling in the Franxx",
        "subtitle": "DARLING in the FRANXX",
        "year": "2018",
        "creator": "TRIGGER",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx99423-8MBxtwCeHf8B.png",
        "genres": [
            "Action",
            "Drama",
            "Mecha",
            "Psychological",
            "Romance",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Boku no Hero Academia 3",
        "subtitle": "My Hero Academia Season 3",
        "year": "2018",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100166-jUCZYbzn2XLw.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "CONCEPTION",
        "subtitle": "Conception",
        "year": "2018",
        "creator": "GONZO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx101609-CRv6x3ifnius.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Bokutachi wa Benkyou ga Dekinai",
        "subtitle": "We Never Learn: BOKUBEN",
        "year": "2019",
        "creator": "Studio Silver",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx103900-E3rqgpq4X0Py.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Boku no Hero Academia 4",
        "subtitle": "My Hero Academia Season 4",
        "year": "2019",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104276-SnEowMvesWIE.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Darwin's Game",
        "subtitle": "Darwin's Game",
        "year": "2020",
        "creator": "Nexus",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105190-lSoQNlnMF6UP.jpg",
        "genres": [
            "Action",
            "Mystery",
            "Sci-Fi",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Boku no Hero Academia THE MOVIE: Futari no Hero Specials",
        "subtitle": "My Hero Academia the Movie: Two Heroes Specials",
        "year": "2019",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105893-IW5rW9O9auyK.jpg",
        "genres": [
            "Action",
            "Drama"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!",
        "subtitle": "High School Prodigies Have It Easy Even In Another World",
        "year": "2019",
        "creator": "project No.9",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108388-DV17bODJAKlR.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Ecchi",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Boku no Hero Academia THE MOVIE: Heroes:Rising",
        "subtitle": "My Hero Academia: Heroes Rising",
        "year": "2019",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108553-yOLfFogpWnTF.jpg",
        "genres": [
            "Action",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Bokutachi wa Benkyou ga Dekinai!",
        "subtitle": "We Never Learn!: BOKUBEN Season 2",
        "year": "2019",
        "creator": "Studio Silver",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx110229-uBjHp2cbXYVL.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "BNA",
        "subtitle": "BNA",
        "year": "2020",
        "creator": "TRIGGER",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx110354-JJKR42frJABe.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Bokutachi no Remake",
        "subtitle": "Remake Our Life!",
        "year": "2021",
        "creator": "feel.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114065-YPPyW7ZSxfYU.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Cheat Kusushi no Slow Life: Isekai ni Tsukurou Drugstore",
        "subtitle": "Drug Store in Another World - The Slow Life of a Cheat Pharmacist",
        "year": "2021",
        "creator": "EMT Squared",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114302-xfqGNUaK59lQ.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "BURN THE WITCH",
        "subtitle": "BURN THE WITCH",
        "year": "2020",
        "creator": "Studio Colorido",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116673-cy4sgiliurpR.jpg",
        "genres": [
            "Action",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Boku no Hero Academia 5",
        "subtitle": "My Hero Academia Season 5",
        "year": "2021",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx117193-E75BlZmDh1aB.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Cyberpunk: Edgerunners",
        "subtitle": "Cyberpunk: Edgerunners",
        "year": "2022",
        "creator": "TRIGGER",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx120377-ayZPoxiWt4Li.jpg",
        "genres": [
            "Action",
            "Drama",
            "Psychological",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Boku no Hero Academia THE MOVIE: World Heroes' Mission",
        "subtitle": "My Hero Academia: World Heroes' Mission",
        "year": "2021",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126659-i6c1PsXHGyke.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Chainsaw Man",
        "subtitle": "Chainsaw Man",
        "year": "2022",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127230-DdP4vAdssLoz.png",
        "genres": [
            "Action",
            "Drama",
            "Horror",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Chuukou Ikkan!! Kimetsu Gakuen Monogatari: Valentine-hen",
        "subtitle": "Junior High and High School!! Kimetsu Academy Story: Valentine Edition",
        "year": "2021",
        "creator": "ufotable",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129627-GiVeOqDUAqUC.png",
        "genres": [
            "Comedy"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Boku ga Aishita Subete no Kimi e",
        "subtitle": "To Every You I’ve Loved Before",
        "year": "2022",
        "creator": "BAKKEN RECORD",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139310-OM1RKpk5YH7g.jpg",
        "genres": [
            "Romance",
            "Sci-Fi"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Boku no Hero Academia 6",
        "subtitle": "My Hero Academia Season 6",
        "year": "2022",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139630-3v4gxWtNZxLV.jpg",
        "genres": [
            "Action",
            "Adventure"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Boku no Hero Academia 7",
        "subtitle": "My Hero Academia Season 7",
        "year": "2024",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163139-JchZhUFlNTWU.jpg",
        "genres": [
            "Action",
            "Adventure"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Class de 2-banme ni Kawaii Onnanoko to Tomodachi ni Natta",
        "subtitle": "I Made Friends with the Second Prettiest Girl in My Class",
        "year": "2026",
        "creator": "CONNECT",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx169580-nXxpmqu6UVux.jpg",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Dandadan",
        "subtitle": "DAN DA DAN",
        "year": "2024",
        "creator": "Science SARU",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx171018-60q1B6GK2Ghb.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Romance",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Chainsaw Man: Reze-hen",
        "subtitle": "Chainsaw Man – The Movie: Reze Arc",
        "year": "2025",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx171627-ZN9D7P46yHnw.png",
        "genres": [
            "Action",
            "Drama",
            "Horror",
            "Romance",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Boku no Hero Academia FINAL SEASON",
        "subtitle": "My Hero Academia FINAL SEASON",
        "year": "2025",
        "creator": "bones film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx182896-mvxTVHGdDB4q.jpg",
        "genres": [
            "Action",
            "Adventure"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Dandadan 2nd Season",
        "subtitle": "DAN DA DAN Season 2",
        "year": "2025",
        "creator": "Science SARU",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx185660-uB8RUMBGovGr.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Romance",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Elfen Lied",
        "subtitle": "Elfen Lied",
        "year": "2004",
        "creator": "ARMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx226-MibyRKhIrnTe.png",
        "genres": [
            "Action",
            "Drama",
            "Ecchi",
            "Horror",
            "Psychological",
            "Romance",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "DEATH NOTE",
        "subtitle": "Death Note",
        "year": "2006",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1535-kUgkcrfOrkUM.jpg",
        "genres": [
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",
        "subtitle": "Fullmetal Alchemist: Brotherhood",
        "year": "2009",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-nSWCgQlmOMtj.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "FAIRY TAIL",
        "subtitle": "Fairy Tail",
        "year": "2009",
        "creator": "Satelight",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b6702-KI4qgSMyI8Pm.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Durarara!!",
        "subtitle": "Durarara!!",
        "year": "2010",
        "creator": "Brain's Base",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6746-3LTwM95Uqeoa.png",
        "genres": [
            "Action",
            "Mystery",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Deadman Wonderland",
        "subtitle": "Deadman Wonderland",
        "year": "2011",
        "creator": "Manglobe",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6880-qZ1jIqIYpST2.png",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Guilty Crown",
        "subtitle": "Guilty Crown",
        "year": "2011",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx10793-KCysCbrVNqK9.jpg",
        "genres": [
            "Action",
            "Drama",
            "Mecha",
            "Psychological",
            "Romance",
            "Sci-Fi"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Hagure Yuusha no Estetica",
        "subtitle": "Aesthetica of a Rogue Hero",
        "year": "2012",
        "creator": "ARMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx13161-m4znwxInGXfd.jpg",
        "genres": [
            "Action",
            "Ecchi",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Golden Time",
        "subtitle": "Golden Time",
        "year": "2013",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx17895-M8yjOyMxHf5X.jpg",
        "genres": [
            "Drama",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Haikyuu!!",
        "subtitle": "HAIKYU!!",
        "year": "2014",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20464-ooZUyBe4ptp9.png",
        "genres": [
            "Comedy",
            "Drama",
            "Sports"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Gekkan Shoujo Nozaki-kun",
        "subtitle": "Monthly Girls' Nozaki-kun",
        "year": "2014",
        "creator": "Doga Kobo",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20668-6UslJY5NDYNh.png",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka",
        "subtitle": "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
        "year": "2015",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20920-MTREwZOG4BAD.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Death Parade",
        "subtitle": "Death Parade",
        "year": "2015",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20931-bktYqOcxPERi.jpg",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Haikyuu!! 2nd Season",
        "subtitle": "HAIKYU!! 2nd Season",
        "year": "2015",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20992-aHgNbcalVEqk.png",
        "genres": [
            "Comedy",
            "Drama",
            "Sports"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Gakusen Toshi Asterisk",
        "subtitle": "The Asterisk War",
        "year": "2015",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21131-sh1HBXuF6qHH.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Romance",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Gakusen Toshi Asterisk 2",
        "subtitle": "The Asterisk War 2",
        "year": "2016",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21390-5MedgrU15Twy.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Romance",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Eromanga Sensei",
        "subtitle": "Eromanga Sensei",
        "year": "2017",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21685-h1SrcpaNnrIq.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Haikyuu!!: Karasuno Koukou VS Shiratorizawa Gakuen Koukou",
        "subtitle": "HAIKYU!! 3rd Season",
        "year": "2016",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21698-RL71mr1YU5Io.png",
        "genres": [
            "Comedy",
            "Drama",
            "Sports"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Fuuka",
        "subtitle": "Fuuka",
        "year": "2017",
        "creator": "diomedéa",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21887-CAq64M7WMgY5.jpg",
        "genres": [
            "Drama",
            "Ecchi",
            "Music",
            "Romance"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Gamers!",
        "subtitle": "GAMERS!",
        "year": "2017",
        "creator": "PINE JAM",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97766-AKr0m3uHkKyW.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Death March Kara Hajimaru Isekai Kyousoukyoku",
        "subtitle": "Death March to the Parallel World Rhapsody",
        "year": "2018",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97907-MAOO4oDANGXm.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "DEVILMAN crybaby",
        "subtitle": "Devilman Crybaby",
        "year": "2018",
        "creator": "Science SARU",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98460-bLtH2c3jd6sV.png",
        "genres": [
            "Action",
            "Drama",
            "Horror",
            "Psychological",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Grand Blue",
        "subtitle": "Grand Blue Dreaming",
        "year": "2018",
        "creator": "Zero-G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100922-uxEhaCsqMMp3.png",
        "genres": [
            "Comedy",
            "Slice of Life",
            "Sports"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Goblin Slayer",
        "subtitle": "GOBLIN SLAYER",
        "year": "2018",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101165-v5NwPXWPFDuD.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Dororo",
        "subtitle": "Dororo",
        "year": "2019",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101347-TGaDwEYqLfm1.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Domestic na Kanojo",
        "subtitle": "Domestic Girlfriend",
        "year": "2019",
        "creator": "diomedéa",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx103139-2TfvRyGTE1qp.jpg",
        "genres": [
            "Drama",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Doukyonin wa Hiza, Tokidoki, Atama no Ue.",
        "subtitle": "My Roommate is a Cat",
        "year": "2019",
        "creator": "Zero-G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx103874-kAyuVMwwF5pp.jpg",
        "genres": [
            "Comedy",
            "Slice of Life"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Enen no Shouboutai",
        "subtitle": "Fire Force",
        "year": "2019",
        "creator": "david production",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105310-2PKUvoaA6fTn.jpg",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Haikyuu!! TO THE TOP",
        "subtitle": "HAIKYU!! TO THE TOP",
        "year": "2020",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx106625-UR22wB2NuNVi.png",
        "genres": [
            "Comedy",
            "Drama",
            "Sports"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Dumbbell Nan Kilo Moteru?",
        "subtitle": "How Heavy Are the Dumbbells You Lift?",
        "year": "2019",
        "creator": "Doga Kobo",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx107226-zIyl8iIdR8JA.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Slice of Life",
            "Sports"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Gleipnir",
        "subtitle": "Gleipnir",
        "year": "2020",
        "creator": "PINE JAM",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108241-Mc28QvkdUkfp.jpg",
        "genres": [
            "Action",
            "Ecchi",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Deca-Dence",
        "subtitle": "DECA-DENCE",
        "year": "2020",
        "creator": "NUT",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx110353-XGYSsii7qJeK.png",
        "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Enen no Shouboutai: Ni no Shou",
        "subtitle": "Fire Force Season 2",
        "year": "2020",
        "creator": "david production",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114236-wfQOWF0Ii3h2.png",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Fumetsu no Anata e",
        "subtitle": "To Your Eternity",
        "year": "2021",
        "creator": "Brain's Base",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114535-y3NnjexcqKG1.jpg",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Psychological",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Genjitsu Shugi Yuusha no Oukoku Saikenki",
        "subtitle": "How a Realist Hero Rebuilt the Kingdom",
        "year": "2021",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx117612-MCbAaq2ypJlp.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Gokushufudou",
        "subtitle": "The Way of the Househusband",
        "year": "2021",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx125426-WeKnIVjCRNIC.png",
        "genres": [
            "Comedy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Deatte 5-byou de Battle",
        "subtitle": "Battle Game in 5 Seconds",
        "year": "2021",
        "creator": "Vega Entertainment",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126047-C3ivEjzfigA0.jpg",
        "genres": [
            "Action",
            "Drama",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Enen no Shouboutai Mini Anime",
        "subtitle": "",
        "year": "2021",
        "creator": "",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128390-mAZM9djmgPEi.png",
        "genres": [
            "Comedy"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Goblin Slayer II",
        "subtitle": "GOBLIN SLAYER II",
        "year": "2023",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129188-zWPBGutZXgjZ.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Fuuto Tantei",
        "subtitle": "Fuuto PI",
        "year": "2022",
        "creator": "Studio KAI",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131912-80XB9ZQGLuuS.jpg",
        "genres": [
            "Action",
            "Drama",
            "Mystery",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Fuufu Ijou, Koibito Miman.",
        "subtitle": "More than a Married Couple, but Not Lovers.",
        "year": "2022",
        "creator": "studio MOTHER",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141949-tViCIRHPZAyG.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Ecchi",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Engage Kiss",
        "subtitle": "Engage Kiss",
        "year": "2022",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146625-DmXjpJ2y8fDn.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Romance",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Enen no Shouboutai: San no Shou",
        "subtitle": "Fire Force Season 3",
        "year": "2025",
        "creator": "david production",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx149118-AOQb0xuTssGl.jpg",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Haikyuu!!: Gomi Suteba no Kessen",
        "subtitle": "HAIKYU!! The Dumpster Battle",
        "year": "2024",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx153658-KVnjW77cQw3y.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Sports"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Good Night World",
        "subtitle": "GOOD NIGHT WORLD",
        "year": "2023",
        "creator": "NAZ",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx167820-RO0nRXw7fcpu.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Gachiakuta",
        "subtitle": "Gachiakuta",
        "year": "2025",
        "creator": "bones film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx178025-cWJKEsZynkil.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Enen no Shouboutai: San no Shou Part 2",
        "subtitle": "Fire Force Season 3 Part 2",
        "year": "2026",
        "creator": "david production",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx179062-pbzYE1miZq61.png",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Grand Blue Season 2",
        "subtitle": "Grand Blue Dreaming Season 2",
        "year": "2025",
        "creator": "Zero-G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx182309-IfrR8sgHIczv.jpg",
        "genres": [
            "Comedy",
            "Slice of Life",
            "Sports"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Grand Blue Season 3",
        "subtitle": "",
        "year": "2026",
        "creator": "Zero-G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx199111-gBSuBG61ElcW.jpg",
        "genres": [
            "Comedy",
            "Slice of Life",
            "Sports"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Gachiakuta 2nd Season",
        "subtitle": "Gachiakuta Season 2",
        "year": "",
        "creator": "",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx204436-gGUp9DNszIY5.png",
        "genres": [
            "Action",
            "Drama",
            "Fantasy"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "HELLSING",
        "subtitle": "Hellsing",
        "year": "2001",
        "creator": "GONZO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b270-S2ProngvO6BU.jpg",
        "genres": [
            "Action",
            "Horror",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Howl no Ugoku Shiro",
        "subtitle": "Howl‘s Moving Castle",
        "year": "2004",
        "creator": "Studio Ghibli",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx431-o8Lj3XkjHm2k.jpg",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "HELLSING OVA",
        "subtitle": "Hellsing Ultimate",
        "year": "2006",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx777-F6547pSAR2Zd.jpg",
        "genres": [
            "Action",
            "Horror",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Gakuen Mokushiroku: HIGHSCHOOL OF THE DEAD",
        "subtitle": "High School of the Dead",
        "year": "2010",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx8074-YB63Ik96fjPj.png",
        "genres": [
            "Action",
            "Drama",
            "Ecchi",
            "Horror",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "IS: Infinite Stratos",
        "subtitle": "Infinite Stratos",
        "year": "2011",
        "creator": "8-bit",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9041-nyIdVMM8q27K.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi",
            "Mecha",
            "Romance",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Hoshi wo Ou Kodomo",
        "subtitle": "Children who Chase Lost Voices",
        "year": "2011",
        "creator": "CoMix Wave",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9760-Ur2uU0HuF1Iz.jpg",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "IS: Infinite Stratos Encore - Koi ni Kogareru Sextet",
        "subtitle": "IS: Infinite Stratos Encore: A Sextet Yearning for Love",
        "year": "2011",
        "creator": "8-bit",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/10794.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "HUNTER×HUNTER (2011)",
        "subtitle": "Hunter x Hunter (2011)",
        "year": "2011",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11061-y5gsT1hoHuHw.png",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Hyouka",
        "subtitle": "Hyouka",
        "year": "2012",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx12189-zj5AWUYO53Fv.jpg",
        "genres": [
            "Mystery",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Hyouka: Motsubeki Mono wa",
        "subtitle": "Hyouka: What Should Be Had",
        "year": "2012",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx13469-bbRQoSUgmf4T.png",
        "genres": [
            "Mystery",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Hataraku Maou-sama!",
        "subtitle": "The Devil is a Part-Timer!",
        "year": "2013",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15809-ECv3HyOYJKrk.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Kaguya-hime no Monogatari",
        "subtitle": "The Tale of The Princess Kaguya",
        "year": "2013",
        "creator": "Studio Ghibli",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/16664-Wakrc8rbBkor.jpg",
        "genres": [
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "IS: Infinite Stratos 2",
        "subtitle": "Infinite Stratos 2",
        "year": "2013",
        "creator": "8-bit",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/18247.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi",
            "Mecha",
            "Romance",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Inou-Battle wa Nichijou-kei no Naka de",
        "subtitle": "When Supernatural Battles Became Commonplace",
        "year": "2014",
        "creator": "TRIGGER",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20646-LgR1T1MSR493.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Jitsu wa Watashi wa",
        "subtitle": "Actually, I Am",
        "year": "2015",
        "creator": "TMS Entertainment",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21033-6RAkCuvCPbFJ.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Inuyashiki",
        "subtitle": "INUYASHIKI LAST HERO",
        "year": "2017",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97922-qrGn5fkQinDs.jpg",
        "genres": [
            "Action",
            "Drama",
            "Psychological",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Isekai wa Smartphone to Tomo ni.",
        "subtitle": "In Another World With My Smartphone",
        "year": "2017",
        "creator": "Ashi Productions",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx98491-5vyX89aabiHz.jpg",
        "genres": [
            "Adventure",
            "Comedy",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Just Because!",
        "subtitle": "Just Because!",
        "year": "2017",
        "creator": "PINE JAM",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98820-EVHeNEUOWkh3.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Itsudatte Bokura no Koi wa 10 cm Datta.",
        "subtitle": "Our love has always been 10 centimeters apart.",
        "year": "2017",
        "creator": "Lay-duce",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98977-CpZkd98fWj32.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Hataraku Saibou",
        "subtitle": "Cells at Work!",
        "year": "2018",
        "creator": "david production",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100977-nH1J2dR7GGAk.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Isekai Maou to Shoukan Shoujo no Dorei Majutsu",
        "subtitle": "How NOT to Summon a Demon Lord",
        "year": "2018",
        "creator": "Ajiado",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101004-rJLBIWGypbYK.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Irozuku Sekai no Ashita kara",
        "subtitle": "IRODUKU: The World in Colors",
        "year": "2018",
        "creator": "P.A.WORKS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101316-yI1ZvMrsDUn9.png",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "HELLO WORLD",
        "subtitle": "",
        "year": "2019",
        "creator": "Graphinica",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx106240-XeWQ4YhKzv7h.png",
        "genres": [
            "Drama",
            "Psychological",
            "Romance",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Jibaku Shounen Hanako-kun",
        "subtitle": "Toilet-bound Hanako-kun",
        "year": "2020",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108463-u03vrYnyB3L9.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Jaku-Chara Tomozaki-kun",
        "subtitle": "Bottom-Tier Character Tomozaki",
        "year": "2021",
        "creator": "project No.9",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112443-UVB1oKdblsIx.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Jujutsu Kaisen",
        "subtitle": "JUJUTSU KAISEN",
        "year": "2020",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-LHBAeoZDIsnF.jpg",
        "genres": [
            "Action",
            "Drama",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Haikyuu!! TO THE TOP 2",
        "subtitle": "HAIKYU!! TO THE TOP Part 2",
        "year": "2020",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113538-tHVE8j5mOPLu.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Sports"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Josee to Tora to Sakanatachi",
        "subtitle": "Josee, the Tiger and the Fish",
        "year": "2020",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113596-LKA0bYJGjLnB.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Hige wo Soru. Soshite Joshikousei wo Hirou.",
        "subtitle": "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway",
        "year": "2021",
        "creator": "project No.9",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114232-2rm50ZD1cQgP.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Higurashi no Naku Koro ni Gou",
        "subtitle": "Higurashi: When They Cry - GOU",
        "year": "2020",
        "creator": "Passione",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114446-H6uxjVi8wBoo.jpg",
        "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω",
        "subtitle": "How NOT to Summon a Demon Lord Ω",
        "year": "2021",
        "creator": "Tezuka Productions",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx117448-bsPgVDD85sjB.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Ijiranaide, Nagatoro-san",
        "subtitle": "DON'T TOY WITH ME, MISS NAGATORO",
        "year": "2021",
        "creator": "Telecom Animation Film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx120697-BA2TqxB1I5bJ.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Horimiya",
        "subtitle": "Horimiya",
        "year": "2021",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124080-3i22mRVPBS0T.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Jigokuraku",
        "subtitle": "Hell’s Paradise",
        "year": "2023",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128893-Gc2t8b8M0mVu.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Mystery",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Jouran: THE PRINCESS OF SNOW AND BLOOD",
        "subtitle": "JORAN THE PRINCESS OF SNOW AND BLOOD",
        "year": "2021",
        "creator": "BAKKEN RECORD",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129664-YeovI2zsTwY9.jpg",
        "genres": [
            "Action",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Kage no Jitsuryokusha ni Naritakute!",
        "subtitle": "The Eminence in Shadow",
        "year": "2022",
        "creator": "Nexus",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx130298-YMdcKHytpWNH.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Hataraku Maou-sama!!",
        "subtitle": "The Devil is a Part-Timer! Season 2",
        "year": "2022",
        "creator": "Studio 3Hz",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx130592-LAUlhx15mxQu.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Romance",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Jujutsu Kaisen 0",
        "subtitle": "JUJUTSU KAISEN 0",
        "year": "2021",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131573-rpl82vDEDRm6.jpg",
        "genres": [
            "Action",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Isekai Oji-san",
        "subtitle": "Uncle from Another World",
        "year": "2022",
        "creator": "Atelier Pontdarc",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx135806-uhqZSNTYZe04.jpg",
        "genres": [
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Ijiranaide, Nagatoro-san 2nd Attack",
        "subtitle": "DON'T TOY WITH ME, MISS NAGATORO 2nd Attack",
        "year": "2023",
        "creator": "OLM",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140596-wBtzi7evAMlf.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Jujutsu Kaisen 2nd Season",
        "subtitle": "JUJUTSU KAISEN Season 2",
        "year": "2023",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145064-hSNRJM03pvv1.jpg",
        "genres": [
            "Action",
            "Drama",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta",
        "subtitle": "I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too",
        "year": "2023",
        "creator": "Millepensee",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx153845-C47aoKy7wf19.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Houkago Shounen Hanako-kun",
        "subtitle": "After-school Hanako-kun",
        "year": "2023",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx159074-6sc64nKBa1wE.jpg",
        "genres": [
            "Comedy",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Kage no Jitsuryokusha ni Naritakute! 2nd season",
        "subtitle": "The Eminence in Shadow Season 2",
        "year": "2023",
        "creator": "Nexus",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx161964-JpkEbHI8ivaP.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Horimiya: piece",
        "subtitle": "Horimiya: The Missing Pieces",
        "year": "2023",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163132-C220CO5UrTxY.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Jigokuraku 2nd Season",
        "subtitle": "Hell’s Paradise Season 2",
        "year": "2026",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx166613-uHB8q3D4qbon.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Mystery",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Jibaku Shounen Hanako-kun 2",
        "subtitle": "Toilet-bound Hanako-kun Season 2",
        "year": "2025",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx170892-zhJUSsX6PaF0.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Mystery",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Jujutsu Kaisen: Shimetsu Kaiyuu - Zenpen",
        "subtitle": "JUJUTSU KAISEN Season 3: The Culling Game Part 1",
        "year": "2026",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx172463-LnXqHzt74SJL.jpg",
        "genres": [
            "Action",
            "Drama",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Hikaru ga Shinda Natsu",
        "subtitle": "The Summer Hikaru Died",
        "year": "2025",
        "creator": "CygamesPictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx177689-d0mB5nYgdnhi.jpg",
        "genres": [
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Hime Kishi wa Barbaroi no Yome",
        "subtitle": "The Warrior Princess and the Barbaric King",
        "year": "2026",
        "creator": "Jumondou",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx182483-La7chs6htDWr.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Romance"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Kono Naka ni Hitori, Imouto ga Iru!",
        "subtitle": "NAKAIMO - My Little Sister Is Among Them!",
        "year": "2012",
        "creator": "Studio Gokumi",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx13367-mjPgNBIcatlt.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Kill la Kill",
        "subtitle": "Kill la Kill",
        "year": "2013",
        "creator": "TRIGGER",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b18679-lbkq7iYESoFW.png",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Kiseijuu: Sei no Kakuritsu",
        "subtitle": "Parasyte -the maxim-",
        "year": "2014",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20623-dUARfggnNDOe.jpg",
        "genres": [
            "Action",
            "Drama",
            "Horror",
            "Psychological",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Kekkai Sensen",
        "subtitle": "Blood Blockade Battlefront",
        "year": "2015",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20727-jgVnxLCHAKqZ.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Koe no Katachi",
        "subtitle": "A Silent Voice",
        "year": "2016",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20954-sYRfE5jQRtSB.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Kokoro ga Sakebitagatterun da.",
        "subtitle": "The Anthem of the Heart",
        "year": "2015",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20968-0zFVsoFUYjeh.jpg",
        "genres": [
            "Drama",
            "Music",
            "Psychological",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Kiznaiver",
        "subtitle": "Kiznaiver",
        "year": "2016",
        "creator": "TRIGGER",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21421-5y8ryXsMB7aJ.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Kono Bijutsu-bu ni wa Mondai ga Aru!",
        "subtitle": "This Art Club Has a Problem!",
        "year": "2016",
        "creator": "feel.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21457-MzWktnoD67PO.png",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Kimi no Na wa.",
        "subtitle": "Your Name.",
        "year": "2016",
        "creator": "CoMix Wave",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21519-SUo3ZQuCbYhJ.png",
        "genres": [
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Kobayashi-san Chi no Maidragon",
        "subtitle": "Miss Kobayashi's Dragon Maid",
        "year": "2017",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21776-bwPaYKhnKfUs.png",
        "genres": [
            "Comedy",
            "Fantasy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Kakegurui",
        "subtitle": "Kakegurui",
        "year": "2017",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b98314-TSJykxVwCCQN.jpg",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Koi to Uso",
        "subtitle": "LOVE and LIES",
        "year": "2017",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98320-VwCcTBeEs08J.jpg",
        "genres": [
            "Drama",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Kimi no Suizou wo Tabetai",
        "subtitle": "I Want to Eat Your Pancreas",
        "year": "2018",
        "creator": "Studio VOLN",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99750-pNyly9d3MEgV.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Kenja no Mago",
        "subtitle": "Wise Man’s Grandchild",
        "year": "2019",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100112-eExFpnYG2QAK.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Kakegurui ××",
        "subtitle": "Kakegurui xx",
        "year": "2019",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100876-RfvmpW1B8bDQ.png",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Kishuku Gakkou no Juliet",
        "subtitle": "Boarding School Juliet",
        "year": "2018",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx101310-w1PLPsyg0XHr.jpg",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen",
        "subtitle": "Kaguya-sama: Love is War",
        "year": "2019",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101921-ufrjLzhSz7L1.jpg",
        "genres": [
            "Comedy",
            "Psychological",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Kimetsu no Yaiba",
        "subtitle": "Demon Slayer: Kimetsu no Yaiba",
        "year": "2019",
        "creator": "ufotable",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-WBsBl0ClmgYL.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Kaijuu no Kodomo",
        "subtitle": "Children of the Sea",
        "year": "2019",
        "creator": "Studio 4°C",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx103221-Ol5OyQ8fbTqH.png",
        "genres": [
            "Drama",
            "Mystery",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Kimi to, Nami ni Noretara",
        "subtitle": "Ride Your Wave",
        "year": "2019",
        "creator": "Science SARU",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105018-XM7rFyryltjb.jpg",
        "genres": [
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Kanata no Astra",
        "subtitle": "ASTRA LOST IN SPACE",
        "year": "2019",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx107663-gfIpy1h36kUL.jpg",
        "genres": [
            "Adventure",
            "Mystery",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Kobayashi-san Chi no Maidragon S",
        "subtitle": "Miss Kobayashi's Dragon Maid S",
        "year": "2021",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx107717-bixaW1NTGBra.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?",
        "subtitle": "Hensuki: Are you willing to fall in love with a pervert, as long as she’s a cutie?",
        "year": "2019",
        "creator": "GEEKTOYS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx107961-8aQlUDwwRpQS.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Mystery",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Kimetsu no Yaiba: Mugen Ressha-hen",
        "subtitle": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
        "year": "2020",
        "creator": "ufotable",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112151-1qlQwPB1RrJe.png",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Kaguya-sama wa Kokurasetai?: Tensaitachi no Renai Zunousen",
        "subtitle": "Kaguya-sama: Love is War?",
        "year": "2020",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112641-zoGC8d6FaPXU.jpg",
        "genres": [
            "Comedy",
            "Psychological",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Kimi to Boku no Saigo no Senjo, Arui wa Sekai ga Hajimaru Seisen",
        "subtitle": "Our Last Crusade or the Rise of a New World",
        "year": "2020",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112667-GYFeAlZ38mXK.jpg",
        "genres": [
            "Action",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Kakushigoto",
        "subtitle": "Kakushigoto",
        "year": "2020",
        "creator": "Ajiado",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113311-6bSvvCHBpjpI.jpg",
        "genres": [
            "Comedy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Kaifuku Jutsushi no Yarinaoshi",
        "subtitle": "Redo of Healer",
        "year": "2021",
        "creator": "TNK",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113425-tYGRUa5pgZje.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Ecchi",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Kanojo, Okarishimasu",
        "subtitle": "Rent-a-Girlfriend",
        "year": "2020",
        "creator": "TMS Entertainment",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113813-SnljeXpU3Pw7.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Kemono Jihen",
        "subtitle": "Kemono Jihen",
        "year": "2021",
        "creator": "Ajiado",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114085-2w5rYZTOa7ER.jpg",
        "genres": [
            "Action",
            "Drama",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Koi to Yobu ni wa Kimochi Warui",
        "subtitle": "Koikimo",
        "year": "2021",
        "creator": "Nomad",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114840-FlmPI0oBQjjO.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Kami no Tou: Tower of God",
        "subtitle": "Tower of God",
        "year": "2020",
        "creator": "Telecom Animation Film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx115230-QHOdSN7yt8ab.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Mystery"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Kamisama ni Natta Hi",
        "subtitle": "The Day I Became a God",
        "year": "2020",
        "creator": "P.A.WORKS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx118419-li8RpQcLgiKK.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Sci-Fi",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Kai Byoui Ramune",
        "subtitle": "Dr. Ramune -Mysterious Disease Specialist-",
        "year": "2021",
        "creator": "Platinum Vision",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx123779-AbSom3C7nPQn.jpg",
        "genres": [
            "Drama",
            "Psychological",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Kanojo, Okarishimasu 2nd Season",
        "subtitle": "Rent-a-Girlfriend Season 2",
        "year": "2022",
        "creator": "TMS Entertainment",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124410-iScdHzzEqdmk.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Kaguya-sama wa Kokurasetai: Ultra Romantic",
        "subtitle": "Kaguya-sama: Love is War -Ultra Romantic-",
        "year": "2022",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx125367-1yuq9NFcQuLI.png",
        "genres": [
            "Comedy",
            "Psychological",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Kanojo mo Kanojo",
        "subtitle": "Girlfriend, Girlfriend",
        "year": "2021",
        "creator": "Tezuka Productions",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126192-3fFbZJFSwrHH.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Kawaii dake ja Nai Shikimori-san",
        "subtitle": "Shikimori's Not Just a Cutie",
        "year": "2022",
        "creator": "Doga Kobo",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127911-qfJDzUt0qCna.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Kimetsu no Yaiba: Mugen Ressha-hen (TV)",
        "subtitle": "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
        "year": "2021",
        "creator": "ufotable",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129874-g6ZKXB94Hui1.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Koi wa Sekai Seifuku no Ato de",
        "subtitle": "Love After World Domination",
        "year": "2022",
        "creator": "project No.9",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx132010-s0o3Rg0XvDXl.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Romance",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Kakkou no Iinazuke",
        "subtitle": "A Couple of Cuckoos",
        "year": "2022",
        "creator": "Shin-Ei Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx132052-3gDTi19HyW6E.png",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Komi-san wa, Komyushou desu.",
        "subtitle": "Komi Can’t Communicate",
        "year": "2021",
        "creator": "OLM",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx133965-9TZBS4m4yvED.png",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Kimetsu no Yaiba: Yuukaku-hen",
        "subtitle": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
        "year": "2022",
        "creator": "ufotable",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142329-kET1PIXJv2eW.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Komi-san wa, Komyushou desu. 2",
        "subtitle": "Komi Can't Communicate Part 2",
        "year": "2022",
        "creator": "OLM",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142984-nv2MWVWZ1yYH.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Kimi wa Houkago Insomnia",
        "subtitle": "Insomniacs After School",
        "year": "2023",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx143653-uq3motvR9kb4.png",
        "genres": [
            "Romance",
            "Slice of Life"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Kimetsu no Yaiba: Katanakaji no Sato-hen",
        "subtitle": "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
        "year": "2023",
        "creator": "ufotable",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145139-rRimpHGWLhym.png",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Kaijuu 8-gou",
        "subtitle": "Kaiju No. 8",
        "year": "2024",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx153288-25FBfFJzEQ5O.jpg",
        "genres": [
            "Action",
            "Sci-Fi"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Kimetsu no Yaiba: Hashira Geiko-hen",
        "subtitle": "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc",
        "year": "2024",
        "creator": "ufotable",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx166240-PBV7zukIHW7V.png",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Kimetsu no Yaiba: Mugenjou-hen Movie 1 - Akaza Sairai",
        "subtitle": "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
        "year": "2025",
        "creator": "ufotable",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx178788-zm3gtpB9TpRt.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Kaoru Hana wa Rin to Saku",
        "subtitle": "The Fragrant Flower Blooms With Dignity",
        "year": "2025",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx181444-Ut9DDUZdfHwg.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Ladies versus Butlers!",
        "subtitle": "Ladies Versus Butlers",
        "year": "2010",
        "creator": "Xebec",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7148-nLJGo6aO9FQX.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Mirai Nikki",
        "subtitle": "The Future Diary",
        "year": "2011",
        "creator": "Asread",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx10620-dUZeNej0W4QN.png",
        "genres": [
            "Action",
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Kuroko no Basket",
        "subtitle": "Kuroko's Basketball",
        "year": "2012",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11771-uvr44RAwRxPw.jpg",
        "genres": [
            "Comedy",
            "Sports"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Maoyuu Maou Yuusha",
        "subtitle": "Maoyu: Archenemy & Hero",
        "year": "2013",
        "creator": "ARMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14833-6M3yEmu4SJkH.png",
        "genres": [
            "Adventure",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Kyoukai no Kanata",
        "subtitle": "Beyond the Boundary",
        "year": "2013",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx18153-oDqA9zQzQPOq.png",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Mahou Sensou",
        "subtitle": "Magical Warfare",
        "year": "2014",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19769-1SATJNKBhkDV.jpg",
        "genres": [
            "Action",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Mahouka Koukou no Rettousei",
        "subtitle": "The Irregular at Magic High School",
        "year": "2014",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20458-tGh343Ew10yU.jpg",
        "genres": [
            "Action",
            "Romance",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Mekakucity Actors",
        "subtitle": "",
        "year": "2014",
        "creator": "Shaft",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20541-vEenrRZqApRn.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Momokuri",
        "subtitle": "Momokuri",
        "year": "2016",
        "creator": "Satelight",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21050-jGDgfWrFdCIJ.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Koutetsujou no Kabaneri",
        "subtitle": "Kabaneri of the Iron Fortress",
        "year": "2016",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21196-2PfPfIDrxKki.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Horror",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Kono Subarashii Sekai ni Shukufuku wo!",
        "subtitle": "KONOSUBA -God's blessing on this wonderful world!",
        "year": "2016",
        "creator": "Studio DEEN",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21202-mPOr80AEjUcZ.png",
        "genres": [
            "Adventure",
            "Comedy",
            "Ecchi",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Mob Psycho 100",
        "subtitle": "Mob Psycho 100",
        "year": "2016",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21507-6YUSbh2m0N1p.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Psychological",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Kono Subarashii Sekai ni Shukufuku wo!: Kono Subarashii Choker ni Shukufuku wo!",
        "subtitle": "KONOSUBA -God's blessing on this wonderful world!: God's Blessings On This Wonderful Choker!",
        "year": "2016",
        "creator": "Studio DEEN",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21574-CTRsdAGe4mDp.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Kono Subarashii Sekai ni Shukufuku wo! 2",
        "subtitle": "KONOSUBA -God's blessing on this wonderful world! 2",
        "year": "2017",
        "creator": "Studio DEEN",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21699-Fkbnkl9ZC6fW.png",
        "genres": [
            "Adventure",
            "Comedy",
            "Ecchi",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Kuzu no Honkai",
        "subtitle": "Scum's Wish",
        "year": "2017",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21701-j81oh6WCNlsQ.jpg",
        "genres": [
            "Drama",
            "Ecchi",
            "Psychological",
            "Romance"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Masamune-kun no Revenge",
        "subtitle": "Masamune-kun's Revenge",
        "year": "2017",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21857-haPDVD7DKDpg.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Kono Subarashii Sekai ni Shukufuku wo! 2: Kono Subarashii Geijutsu ni Shukufuku wo!",
        "subtitle": "KONOSUBA -God's blessing on this wonderful world! 2: God's Blessings on These Wonderful Works of Art!",
        "year": "2017",
        "creator": "Studio DEEN",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b97996-px2KGexuEZpg.jpg",
        "genres": [
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Mahoutsukai no Yome",
        "subtitle": "The Ancient Magus' Bride",
        "year": "2017",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98436-n7sK6POCd0XV.png",
        "genres": [
            "Drama",
            "Fantasy",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Kujira no Kora wa Sajou ni Utau",
        "subtitle": "Children of the Whales",
        "year": "2017",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98449-CxVQsAWFPpMa.jpg",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Mystery",
            "Romance",
            "Sci-Fi"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Mob Psycho 100 II",
        "subtitle": "Mob Psycho 100 II",
        "year": "2019",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101338-rokVscjRYzdP.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Psychological",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Kono Subarashii Sekai ni Shukufuku wo! Kurenai Densetsu",
        "subtitle": "KONOSUBA -God's blessing on this wonderful world!- Legend of Crimson",
        "year": "2019",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx102976-2Yi5icRbjukO.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Kono Oto Tomare!",
        "subtitle": "Kono Oto Tomare!: Sounds of Life",
        "year": "2019",
        "creator": "Platinum Vision",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx103302-RVGwGRDGdMQq.jpg",
        "genres": [
            "Drama",
            "Music",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Kumo desu ga, Nani ka?",
        "subtitle": "So I'm a Spider, So What?",
        "year": "2021",
        "creator": "Millepensee",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx103632-2wsy9wFUdm1C.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy",
            "Mystery"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Midara na Ao-chan wa Benkyou ga Dekinai",
        "subtitle": "Ao-chan Can't Study!",
        "year": "2019",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105989-Jooq6bqkeeiP.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Kyokou Suiri",
        "subtitle": "In/Spectre",
        "year": "2020",
        "creator": "Brain's Base",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx107201-zQYOPotwmSXO.png",
        "genres": [
            "Comedy",
            "Mystery",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Kono Oto Tomare! 2",
        "subtitle": "Kono Oto Tomare!: Sounds of Life Season 2",
        "year": "2019",
        "creator": "Platinum Vision",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108891-RTZQkwjWsFi9.jpg",
        "genres": [
            "Drama",
            "Music",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Mahouka Koukou no Rettousei: Raihousha-hen",
        "subtitle": "The Irregular at Magic High School: Visitor Arc",
        "year": "2020",
        "creator": "8-bit",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112300-I5ucx66OvqWX.png",
        "genres": [
            "Action",
            "Romance",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou",
        "subtitle": "The Misfit of Demon King Academy: History’s Strongest Demon King Reincarnates and Goes to School with His Descendants",
        "year": "2020",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112301-f88Fs2es4pSr.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Majo no Tabitabi",
        "subtitle": "Wandering Witch: The Journey of Elaina",
        "year": "2020",
        "creator": "C2C",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112609-hBCbnYlEHluz.jpg",
        "genres": [
            "Adventure",
            "Fantasy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Monster Musume no Oisha-san",
        "subtitle": "Monster Girl Doctor",
        "year": "2020",
        "creator": "Arvo Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113286-AUS3PAJ5n6BU.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "MARS RED",
        "subtitle": "MARS RED",
        "year": "2021",
        "creator": "Signal.MD",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx115183-jvILP9lWry4s.jpg",
        "genres": [
            "Action",
            "Drama",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Meikyuu Black Company",
        "subtitle": "The Dungeon of Black Company",
        "year": "2021",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx120608-gjCnIszBGe9k.jpg",
        "genres": [
            "Comedy",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Kyokou Suiri Season 2",
        "subtitle": "In/Spectre 2",
        "year": "2023",
        "creator": "Brain's Base",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126529-AwE5AAdhuls1.png",
        "genres": [
            "Comedy",
            "Mystery",
            "Romance",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Kyuukyoku Shinka Shita Full Dive RPG ga Genjitsu yori mo Kusogee Dattara",
        "subtitle": "Full Dive: This Ultimate Next-Gen Full Dive RPG Is Even Shittier than Real Life!",
        "year": "2021",
        "creator": "ENGI",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126791-Rwhm1a5QFope.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Koroshi Ai",
        "subtitle": "Love of Kill",
        "year": "2022",
        "creator": "Platinum Vision",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127050-kJ3pIbJzLDYT.png",
        "genres": [
            "Action",
            "Psychological",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Mieruko-chan",
        "subtitle": "Mieruko-chan",
        "year": "2021",
        "creator": "Passione",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131083-sKGHkpVDksaZ.png",
        "genres": [
            "Comedy",
            "Horror",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Mahoutsukai Reimeiki",
        "subtitle": "The Dawn of the Witch",
        "year": "2022",
        "creator": "Tezuka Productions",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx133175-M7SRPRqC72lA.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Ecchi",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Mamahaha no Tsurego ga Motokano datta",
        "subtitle": "My Stepmom's Daughter is My Ex",
        "year": "2022",
        "creator": "project No.9",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx136934-BXmmENtggiHr.jpg",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Mob Psycho 100 III",
        "subtitle": "Mob Psycho 100 III",
        "year": "2022",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140439-bPKmhe1wNxc9.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Psychological",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Mato Seihei no Slave",
        "subtitle": "Chained Soldier",
        "year": "2024",
        "creator": "Seven Arcs",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141821-lkVTjKqL4BU2.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Ecchi",
            "Fantasy",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Lycoris Recoil",
        "subtitle": "Lycoris Recoil",
        "year": "2022",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx143270-rfkyiYXhek5w.jpg",
        "genres": [
            "Action",
            "Slice of Life"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Mahouka Koukou no Rettousei 3rd Season",
        "subtitle": "The Irregular at Magic High School Season 3",
        "year": "2024",
        "creator": "8-bit",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx143271-o5wry0ohH9R3.jpg",
        "genres": [
            "Action",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Kuro no Shoukanshi",
        "subtitle": "Black Summoner",
        "year": "2022",
        "creator": "Satelight",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145260-Yt5W8aQQKqF2.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Masamune-kun no Revenge R",
        "subtitle": "Masamune-kun's Revenge R",
        "year": "2023",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146953-80YtZNkpbhIA.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Kubo-san wa Mob wo Yurusanai",
        "subtitle": "Kubo Won't Let Me Be Invisible",
        "year": "2023",
        "creator": "PINE JAM",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx148969-3vPgXpMpQvba.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Koori Zokusei Danshi to Cool na Douryou Joshi",
        "subtitle": "The Ice Guy and His Cool Female Colleague",
        "year": "2023",
        "creator": "Zero-G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151252-ywrMmJG1Loc3.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "MASHLE",
        "subtitle": "MASHLE: MAGIC AND MUSCLES",
        "year": "2023",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151801-XxVf22Le6C8o.png",
        "genres": [
            "Action",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "MASHLE: Kami Shinkakusha Kouho Senbatsu Shiken-hen",
        "subtitle": "MASHLE: MAGIC AND MUSCLES Season 2",
        "year": "2024",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx166610-S5q7V2v5zdDK.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Look Back",
        "subtitle": "LOOK BACK",
        "year": "2024",
        "creator": "Studio Durian",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx174788-9LsUnn0oEppv.jpg",
        "genres": [
            "Drama",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "MARRIAGETOXIN",
        "subtitle": "MARRIAGETOXIN",
        "year": "2026",
        "creator": "bones film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx199547-LAaG3cmKCGhr.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Romance"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "NARUTO",
        "subtitle": "Naruto",
        "year": "2002",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20-dE6UHbFFg1A5.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Pocket Monsters",
        "subtitle": "Pokémon",
        "year": "1997",
        "creator": "OLM",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b527-t6dBVJ5OVcXK.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "NARUTO: Shippuuden",
        "subtitle": "Naruto: Shippuden",
        "year": "2007",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1735-kGfVm0YqCPcu.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Ore no Imouto ga Konna ni Kawaii Wake ga Nai",
        "subtitle": "Oreimo",
        "year": "2010",
        "creator": "AIC Build",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx8769-Lat76qlOwdBN.jpg",
        "genres": [
            "Comedy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Onii-chan Dakedo Ai Sae Areba Kankeinai yo ne!",
        "subtitle": "OniAi",
        "year": "2012",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14199-NAejQzViXuR7.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Ore no Kanojo to Osananajimi ga Shuraba Sugiru",
        "subtitle": "Oreshura",
        "year": "2013",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14749-aq6aPtIPPVOY.png",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Nagi no Asukara",
        "subtitle": "A Lull in the Sea",
        "year": "2013",
        "creator": "P.A.WORKS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16067-CFX0g435pLob.png",
        "genres": [
            "Drama",
            "Fantasy",
            "Romance",
            "Slice of Life"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Nisekoi",
        "subtitle": "Nisekoi",
        "year": "2014",
        "creator": "Shaft",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx18897-G2Fx2ZACsXBU.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru",
        "subtitle": "My Mental Choices Are Completely Interfering With My School Romantic Comedy",
        "year": "2013",
        "creator": "diomedéa",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19221-gYYDXIVzas7u.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "No Game No Life",
        "subtitle": "No Game, No Life",
        "year": "2014",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b19815-sEOQ9yQaPKlk.jpg",
        "genres": [
            "Adventure",
            "Comedy",
            "Ecchi",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Noragami",
        "subtitle": "Noragami",
        "year": "2014",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20447-EoQXeygHaVCK.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Ookami Shoujo to Kuro Ouji",
        "subtitle": "Wolf Girl and Black Prince",
        "year": "2014",
        "creator": "TYO Animations",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20701-8tyJFN3soUm0.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Nisekoi OVA",
        "subtitle": "Nisekoi OVA",
        "year": "2014",
        "creator": "Shaft",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20728-gBiGaxCy0HF2.png",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Ore ga Ojou-sama Gakkou ni \"Shomin Sample\" Toshite Gets-Sareta Ken",
        "subtitle": "Shomin Sample",
        "year": "2015",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20771-sh0k9VAB3Df8.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Nanatsu no Taizai",
        "subtitle": "The Seven Deadly Sins",
        "year": "2014",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20789-Ma5ouSYPkru9.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Prison School",
        "subtitle": "Prison School",
        "year": "2015",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20807-8nFoO0AUdGsy.jpg",
        "genres": [
            "Comedy",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Owari no Seraph",
        "subtitle": "Seraph of the End: Vampire Reign",
        "year": "2015",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20829-pgsXVjrfyI5V.png",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Overlord",
        "subtitle": "Overlord",
        "year": "2015",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20832-vUNm5zrYWifc.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Nisekoi:",
        "subtitle": "Nisekoi:",
        "year": "2015",
        "creator": "Shaft",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20876-CCVVLTSsnKC8.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Ore Monogatari!!",
        "subtitle": "My Love Story!!",
        "year": "2015",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20946-ejH7JhG6z25y.png",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Owari no Seraph: Nagoya Kessen-hen",
        "subtitle": "Seraph of the End: Battle in Nagoya",
        "year": "2015",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20993-c34UTma2bCcv.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "One Punch Man",
        "subtitle": "One-Punch Man",
        "year": "2015",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21087-B5DHjqZ3kW4b.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Netoge no Yome wa Onnanoko ja Nai to Omotta?",
        "subtitle": "And you thought there is never a girl online?",
        "year": "2016",
        "creator": "project No.9",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21290-R6qYWnylwpbL.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "orange",
        "subtitle": "Orange",
        "year": "2016",
        "creator": "Telecom Animation Film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21647-zMUXNhcVyRyv.png",
        "genres": [
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "One Punch Man 2",
        "subtitle": "One-Punch Man Season 2",
        "year": "2019",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97668-nC8gQrXVxt7k.png",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Overlord II",
        "subtitle": "Overlord II",
        "year": "2018",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98437-5q0GWqHhNAgJ.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Net-juu no Susume",
        "subtitle": "Recovery of an MMO Junkie",
        "year": "2017",
        "creator": "Signal.MD",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99726-tta6v7TKGYKa.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Piano no Mori (TV)",
        "subtitle": "Forest of Piano",
        "year": "2018",
        "creator": "Gaina",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100401-frKNiXOnRKdu.jpg",
        "genres": [
            "Drama",
            "Music"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Overlord III",
        "subtitle": "Overlord III",
        "year": "2018",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101474-tGRyvSAWMjU9.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Ore wo Suki nano wa Omae dake ka yo",
        "subtitle": "ORESUKI: Are you the only one who loves me?",
        "year": "2019",
        "creator": "CONNECT",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104464-UdOCt3uyA2K9.png",
        "genres": [
            "Comedy",
            "Drama",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Princess Connect! Re:Dive",
        "subtitle": "Princess Connect! Re:Dive",
        "year": "2020",
        "creator": "CygamesPictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx107871-ZOh7oeDd0kq9.png",
        "genres": [
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Peter Grill to Kenja no Jikan",
        "subtitle": "Peter Grill and the Philosopher's Time",
        "year": "2020",
        "creator": "WolfsBane",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx111965-iUYaDivDR4BG.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Murenase! Seton Gakuen",
        "subtitle": "Seton Academy: Join the Pack!",
        "year": "2020",
        "creator": "Studio Gokumi",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112293-UXFSGOfRbBe8.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "NOBLESSE",
        "subtitle": "Noblesse",
        "year": "2020",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116005-yfngIe9aBaJw.jpg",
        "genres": [
            "Action",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Munou na Nana",
        "subtitle": "Talentless Nana",
        "year": "2020",
        "creator": "Bridge",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx117343-NgCLZTaxallv.jpg",
        "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Ore dake Haireru Kakushi Dungeon",
        "subtitle": "The Hidden Dungeon Only I Can Enter",
        "year": "2021",
        "creator": "Okuruto Noboru",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx118375-95ClbAh2EQMD.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Peach Boy Riverside",
        "subtitle": "Peach Boy Riverside",
        "year": "2021",
        "creator": "Asahi Production",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx122441-5qlQC5Ka8k9W.png",
        "genres": [
            "Adventure",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Osananajimi ga Zettai ni Makenai Love Come",
        "subtitle": "Osamake: Romcom Where The Childhood Friend Won't Lose",
        "year": "2021",
        "creator": "Doga Kobo",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124675-fNI06ipb65vy.jpg",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Platinum End",
        "subtitle": "Platinum End",
        "year": "2021",
        "creator": "Signal.MD",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127401-fVKVbuIE5W5Q.jpg",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological",
            "Romance",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "ORIENT",
        "subtitle": "ORIENT",
        "year": "2022",
        "creator": "A.C.G.T.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128034-PHcAWDtmPuAK.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 1
    },
    {
        "title": "Overlord IV",
        "subtitle": "Overlord IV",
        "year": "2022",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx133844-E32FjKZ0XxEs.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Paripi Koumei",
        "subtitle": "Ya Boy Kongming!",
        "year": "2022",
        "creator": "P.A.WORKS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141774-iteNFzPq2oGw.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Music",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Otomege Sekai wa Mob ni Kibishii Sekai desu",
        "subtitle": "Trapped in a Dating Sim: The World of Otome Games Is Tough for Mobs",
        "year": "2022",
        "creator": "ENGI",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142074-pHe4bX791PJh.jpg",
        "genres": [
            "Action",
            "Fantasy",
            "Mecha",
            "Romance"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Natsu e no Tunnel, Sayonara no Deguchi",
        "subtitle": "The Tunnel to Summer, the Exit of Goodbyes",
        "year": "2022",
        "creator": "CLAP",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142769-kNyyqpwC9gGV.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "NieR:Automata Ver1.1a",
        "subtitle": "NieR:Automata Ver1.1a",
        "year": "2023",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145665-Qs53Mta5ngqs.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery",
            "Psychological",
            "Sci-Fi"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Noumin Kanren no Skill Bakka Agetetara Naze ka Tsuyoku Natta.",
        "subtitle": "I've Somehow Gotten Stronger When I Improved My Farm-Related Skills",
        "year": "2022",
        "creator": "studio A-CAT",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145815-XsgcXy7WzgtK.png",
        "genres": [
            "Adventure",
            "Comedy",
            "Fantasy",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "My Home Hero",
        "subtitle": "My Home Hero",
        "year": "2023",
        "creator": "Tezuka Productions",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151189-1oteiBRjwIzU.png",
        "genres": [
            "Action",
            "Drama",
            "Psychological",
            "Thriller"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Ore dake Level Up na Ken",
        "subtitle": "Solo Leveling",
        "year": "2024",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151807-it355ZgzquUd.png",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "One Punch Man 3",
        "subtitle": "One-Punch Man Season 3",
        "year": "2025",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx153800-8SpzdHOaZCoU.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Ore dake Level Up na Ken: Season 2 - Arise from the Shadow",
        "subtitle": "Solo Leveling Season 2 -Arise from the Shadow-",
        "year": "2025",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx176496-9BDMjAZGEbq4.png",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Sen to Chihiro no Kamikakushi",
        "subtitle": "Spirited Away",
        "year": "2001",
        "creator": "Studio Ghibli",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx199-sWefXJvXkDOb.jpg",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Saint Seiya",
        "subtitle": "Saint Seiya: Knights of the Zodiac",
        "year": "1986",
        "creator": "Toei Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1254.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Saint Seiya: Meiou Hades Juuni Kyuu-hen",
        "subtitle": "Saint Seiya: The Hades Chapter - Sanctuary",
        "year": "2002",
        "creator": "",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1257-tZuA879PQLZe.png",
        "genres": [
            "Adventure",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Saint Seiya: Meiou Hades Elysion-hen",
        "subtitle": "Saint Seiya: The Hades Chapter - Elysion",
        "year": "2008",
        "creator": "",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx3515-g6kdTI901fhw.png",
        "genres": [
            "Action",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Saint Seiya: THE LOST CANVAS - Meiou Shinwa",
        "subtitle": "Saint Seiya: The Lost Canvas",
        "year": "2009",
        "creator": "",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b6171-DO60x2e7jEjg.png",
        "genres": [
            "Action",
            "Adventure",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Saint Seiya: THE LOST CANVAS - Meiou Shinwa 2",
        "subtitle": "Saint Seiya: The Lost Canvas 2",
        "year": "2011",
        "creator": "",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9130-QkSQHOTK1uEH.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Saint Seiya: LEGEND of SANCTUARY",
        "subtitle": "",
        "year": "2014",
        "creator": "Toei Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx10687-iDNjbDXrZQ2U.png",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Sakurasou no Pet na Kanojo",
        "subtitle": "The Pet Girl of Sakurasou",
        "year": "2012",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx13759-xNf0gJK4Axt2.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Shingeki no Kyojin",
        "subtitle": "Attack on Titan",
        "year": "2013",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-buvcRTBx4NSm.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "PSYCHO-PASS 2",
        "subtitle": "PSYCHO-PASS 2",
        "year": "2014",
        "creator": "Tatsunoko Production",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20513-pVQqYhMwBGoh.jpg",
        "genres": [
            "Action",
            "Psychological",
            "Sci-Fi",
            "Thriller"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Shingeki no Bahamut: GENESIS",
        "subtitle": "Rage of Bahamut: Genesis",
        "year": "2014",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20590-LuMDAd75Kg3C.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Saenai Heroine no Sodatekata",
        "subtitle": "Saekano: How to Raise a Boring Girlfriend",
        "year": "2015",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20657-pMZBj6K6mLhi.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Shigatsu wa Kimi no Uso",
        "subtitle": "Your lie in April",
        "year": "2014",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20665-TLgkL8T8IRFd.png",
        "genres": [
            "Drama",
            "Music",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai",
        "subtitle": "SHIMONETA: A Boring World Where the Concept of Dirty Jokes Doesn’t Exist",
        "year": "2015",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20910-U7txwG3o9gma.jpg",
        "genres": [
            "Comedy",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Saint Seiya: Ougon Tamashii -soul of gold-",
        "subtitle": "Saint Seiya Soul of Gold",
        "year": "2015",
        "creator": "Toei Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20928-wbAbySSwgNEg.png",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Shingeki no Kyojin Season 2",
        "subtitle": "Attack on Titan Season 2",
        "year": "2017",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20958-HuFJyr54Mmir.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "ReLIFE",
        "subtitle": "ReLIFE",
        "year": "2016",
        "creator": "TMS Entertainment",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21049-4AHSLeiDE9eg.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Rakudai Kishi no Cavalry",
        "subtitle": "Chivalry of a Failed Knight",
        "year": "2015",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21092-1NML6TdngmBq.jpg",
        "genres": [
            "Action",
            "Ecchi",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Saijaku Muhai no Bahamut",
        "subtitle": "Undefeated Bahamut Chronicle",
        "year": "2016",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21188-VFUo0sASxOfO.jpg",
        "genres": [
            "Action",
            "Ecchi",
            "Fantasy",
            "Mecha",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Re:Zero kara Hajimeru Isekai Seikatsu",
        "subtitle": "Re:ZERO -Starting Life in Another World-",
        "year": "2016",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21355-wRVUrGxpvIQQ.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Psychological",
            "Romance",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Renai Boukun",
        "subtitle": "Love Tyrant",
        "year": "2017",
        "creator": "EMT Squared",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21517-huYdImj17Sr3.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Rokudenashi Majutsu Koushi to Akashic Records",
        "subtitle": "Akashic Records of Bastard Magic Instructor",
        "year": "2017",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21700-HhTEXPZKxupP.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Shingeki no Kyojin Season 3",
        "subtitle": "Attack on Titan Season 3",
        "year": "2018",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99147-AiPDD8cwlCfi.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Sayonara no Asa ni Yakusoku no Hana wo Kazarou",
        "subtitle": "Maquia: When the Promised Flower Blooms",
        "year": "2018",
        "creator": "P.A.WORKS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99457-OD0xtM8NlHNQ.png",
        "genres": [
            "Drama",
            "Fantasy",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Satsuriku no Tenshi",
        "subtitle": "Angels of Death",
        "year": "2018",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99629-BXyAJ6PDq4sr.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Horror",
            "Psychological",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "ROAD TO YOU",
        "subtitle": "",
        "year": "2017",
        "creator": "The Answer Studio",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100211-LhUYSSd5D4HZ.jpg",
        "genres": [
            "Drama",
            "Romance"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
        "subtitle": "Rascal Does Not Dream of Bunny Girl Senpai",
        "year": "2018",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101291-wfEdgPqtfU0l.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Mystery",
            "Psychological",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Shingeki no Kyojin Season 3 Part 2",
        "subtitle": "Attack on Titan Season 3 Part 2",
        "year": "2019",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104578-k61nx3LPjvgd.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Shinchou Yuusha: Kono Yuusha ga Ore TUEEE Kuse ni Shinchou Sugiru",
        "subtitle": "Cautious Hero: The Hero Is Overpowered but Overly Cautious",
        "year": "2019",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105156-ZVtxISdoUqnY.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Rikei ga Koi ni Ochita no de Shoumei shitemita.",
        "subtitle": "Science Fell in Love, So I Tried to Prove It",
        "year": "2020",
        "creator": "Zero-G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx107067-UOEanLoeuvYh.png",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season",
        "subtitle": "Re:ZERO -Starting Life in Another World- Season 2",
        "year": "2020",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108632-lQWnmw7XaNOK.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Psychological",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Sentouin, Hakenshimasu!",
        "subtitle": "Combatants Will Be Dispatched!",
        "year": "2021",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116588-noyscGIN8FIr.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2",
        "subtitle": "Re:ZERO -Starting Life in Another World- Season 2 Part 2",
        "year": "2021",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx119661-GDbUZxrZMz01.png",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Psychological",
            "Romance",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "SHAMAN KING (2021)",
        "subtitle": "SHAMAN KING (2021)",
        "year": "2021",
        "creator": "Bridge",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx119675-ziQ6Lb80zEx4.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Senpai ga Uzai Kouhai no Hanashi",
        "subtitle": "My Senpai is Annoying",
        "year": "2021",
        "creator": "Doga Kobo",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx120646-CeYcpChKQt0F.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Shadows House",
        "subtitle": "SHADOWS HOUSE",
        "year": "2021",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx125038-BCfEvry0QBXW.png",
        "genres": [
            "Fantasy",
            "Horror",
            "Mystery",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Rikei ga Koi ni Ochita no de Shoumei shitemita. r=1-sinθ (Heart)",
        "subtitle": "Science Fell in Love, So I Tried to Prove It r=1-sinθ",
        "year": "2022",
        "creator": "Zero-G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx125124-FHz4ND4kJzqu.jpg",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Seirei Gensouki",
        "subtitle": "Seirei Gensouki: Spirit Chronicles",
        "year": "2021",
        "creator": "TMS Entertainment",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126546-Jujx9OvKxLzA.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Shikkakumon no Saikyou Kenja",
        "subtitle": "The Strongest Sage with the Weakest Crest",
        "year": "2022",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129191-F80AgCUP79yE.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy",
            "Romance",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru",
        "subtitle": "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
        "year": "2021",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129898-FRUzDtPhRigt.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Mystery",
            "Romance"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Sabikui Bisco",
        "subtitle": "Sabikui Bisco",
        "year": "2022",
        "creator": "OZ",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx130591-9O1cf7u6SfYa.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "SCARLET NEXUS",
        "subtitle": "Scarlet Nexus",
        "year": "2021",
        "creator": "Sunrise",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131150-YjdcqAvbHfxw.png",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Saihate no Paladin",
        "subtitle": "The Faraway Paladin",
        "year": "2021",
        "creator": "Children's Playground Entertainment",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx132473-L64hP24nJyEV.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Mystery",
            "Psychological"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Renai Flops",
        "subtitle": "LOVE FLOPS",
        "year": "2022",
        "creator": "Passione",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146676-8hkJxhY3b4tX.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Ecchi",
            "Romance",
            "Sci-Fi"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season",
        "subtitle": "Re:ZERO -Starting Life in Another World- Season 3",
        "year": "2024",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163134-yieRFbvUOH9a.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Psychological",
            "Romance",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Seishun Buta Yarou wa Santa Claus no Yume wo Minai",
        "subtitle": "Rascal Does Not Dream of Santa Claus",
        "year": "2025",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx171046-9leqLiNuOqNu.png",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological",
            "Romance",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "SAKAMOTO DAYS",
        "subtitle": "SAKAMOTO DAYS",
        "year": "2025",
        "creator": "TMS Entertainment",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx177709-e5Qx6RlsBgD5.png",
        "genres": [
            "Action",
            "Comedy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Re:Zero kara Hajimeru Isekai Seikatsu 4th Season",
        "subtitle": "Re:ZERO -Starting Life in Another World- Season 4",
        "year": "2026",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx189046-yaHWtS5FII46.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Psychological",
            "Romance"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Steins;Gate",
        "subtitle": "Steins;Gate",
        "year": "2011",
        "creator": "WHITE FOX",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9253-tIUXF2gfU8Sg.jpg",
        "genres": [
            "Drama",
            "Psychological",
            "Sci-Fi",
            "Thriller"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Sword Art Online",
        "subtitle": "Sword Art Online",
        "year": "2012",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx11757-SxYDUzdr9rh2.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Shinsekai yori",
        "subtitle": "From the New World",
        "year": "2012",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx13125-2EDZb8ahshQc.png",
        "genres": [
            "Drama",
            "Horror",
            "Mystery",
            "Psychological",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Tamako Love Story",
        "subtitle": "Tamako -love story-",
        "year": "2014",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20519-YdNUizVJJIWI.png",
        "genres": [
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Shokugeki no Souma",
        "subtitle": "Food Wars!",
        "year": "2015",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20923-pNT38pjW3RFH.jpg",
        "genres": [
            "Comedy",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Sousei no Onmyouji",
        "subtitle": "Twin Star Exorcists",
        "year": "2016",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21499-JCxvIXc27mVT.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Shokugeki no Souma: Ni no Sara",
        "subtitle": "Food Wars! The Second Plate",
        "year": "2016",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21518-uBqzDGIuSxJ5.jpg",
        "genres": [
            "Comedy",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Shokugeki no Souma OVA",
        "subtitle": "Food Wars! Shokugeki no Soma OVA",
        "year": "2016",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21691-9RejHe6U6vLK.jpg",
        "genres": [
            "Comedy",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Suki ni Naru Sono Shunkan wo.: Kokuhaku Jikkou Iinkai",
        "subtitle": "The Moment You Fall in Love",
        "year": "2016",
        "creator": "Qualia Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21757-zH78HtS4b0GU.png",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Shokugeki no Souma: Ni no Sara OVA",
        "subtitle": "Food Wars! The Second Plate OVA",
        "year": "2017",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98702-Ao74l33hWMDL.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Shokugeki no Souma: San no Sara",
        "subtitle": "Food Wars! The Third Plate",
        "year": "2017",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx99255-heGTtj5b4owl.jpg",
        "genres": [
            "Comedy",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Tate no Yuusha no Nariagari",
        "subtitle": "The Rising of the Shield Hero",
        "year": "2019",
        "creator": "Kinema Citrus",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99263-LcazQwdlWzMy.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Shokugeki no Souma: San no Sara - Tootsuki Ressha-hen",
        "subtitle": "Food Wars! The Third Plate: Totsuki Train Arc",
        "year": "2018",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100773-KLx4vR0TiC5o.jpg",
        "genres": [
            "Comedy",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Shokugeki no Souma: San no Sara - Kyokuseiryou no Erina",
        "subtitle": "Food Wars! The Third Plate: Erina at Polar Star Dormitory",
        "year": "2018",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101924-rttgJX7R5CpX.jpg",
        "genres": [
            "Drama",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Tenki no Ko",
        "subtitle": "Weathering With You",
        "year": "2019",
        "creator": "CoMix Wave",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx106286-5COcpd0J9VbL.png",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Sora no Aosa wo Shiru Hito yo",
        "subtitle": "Her Blue Sky",
        "year": "2019",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108577-plhp2UMSmEhk.jpg",
        "genres": [
            "Drama",
            "Music",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Shokugeki no Souma: Shin no Sara",
        "subtitle": "Food Wars! The Fourth Plate",
        "year": "2019",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx109963-t8E9axH0Dvrn.jpg",
        "genres": [
            "Comedy",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Shingeki no Kyojin: The Final Season",
        "subtitle": "Attack on Titan Final Season",
        "year": "2021",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx110277-sKUNXAsWMNFw.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Tate no Yuusha no Nariagari Season 2",
        "subtitle": "The Rising of the Shield Hero Season 2",
        "year": "2022",
        "creator": "Kinema Citrus",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx111321-dIr3dEKOIPer.png",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Tate no Yuusha no Nariagari Season 3",
        "subtitle": "The Rising of the Shield Hero Season 3",
        "year": "2023",
        "creator": "Kinema Citrus",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx111322-2jQMDQva4YD7.png",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Slime Taoshite 300-nen, Shiranai Uchi ni Level MAX ni Nattemashita",
        "subtitle": "I've Been Killing Slimes for 300 Years and Maxed Out My Level",
        "year": "2021",
        "creator": "REVOROOT",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112608-T3OKdLhxYUfe.png",
        "genres": [
            "Adventure",
            "Comedy",
            "Fantasy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari",
        "subtitle": "Suppose a Kid from the Last Dungeon Boonies moved to a starter town?",
        "year": "2021",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112649-Wdcxo6cQZbhx.jpg",
        "genres": [
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Skate-Leading☆Stars",
        "subtitle": "Skate-Leading Stars",
        "year": "2021",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113585-AJKXZnpnAX0w.jpg",
        "genres": [
            "Drama",
            "Sports"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Shokugeki no Souma: Gou no Sara",
        "subtitle": "Food Wars! The Fifth Plate",
        "year": "2020",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114043-QkgiycojrojN.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Ecchi"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Tenchi Souzou Design-bu",
        "subtitle": "Heaven’s Design Team",
        "year": "2021",
        "creator": "Asahi Production",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx117696-oqodbcesiazN.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "SK∞",
        "subtitle": "SK8 the Infinity",
        "year": "2021",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124153-uEBI764OSavB.png",
        "genres": [
            "Action",
            "Drama",
            "Sports"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Soredemo Ayumu wa Yosetekuru",
        "subtitle": "When Will Ayumu Make His Move?",
        "year": "2022",
        "creator": "SILVER LINK.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128223-TOQovu2MXr8k.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Tantei wa mou, Shindeiru.",
        "subtitle": "The Detective Is Already Dead",
        "year": "2021",
        "creator": "ENGI",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128712-AlVwHbrugvj6.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Mystery",
            "Romance",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Tensai Ouji no Akaji Kokka Saisei Jutsu",
        "subtitle": "The Genius Prince's Guide to Raising a Nation Out of Debt",
        "year": "2022",
        "creator": "Yokohama Animation Lab",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129190-UnaPbNhTCTOR.jpg",
        "genres": [
            "Comedy",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Summer Time Render",
        "subtitle": "Summer Time Rendering",
        "year": "2022",
        "creator": "OLM",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129201-HJBauga2be8I.png",
        "genres": [
            "Action",
            "Drama",
            "Mystery",
            "Supernatural",
            "Thriller"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Shinigami Bocchan to Kuro Maid",
        "subtitle": "The Duke of Death and His Maid",
        "year": "2021",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129277-ou64knqN2eQT.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "takt op.Destiny",
        "subtitle": "takt op.Destiny",
        "year": "2021",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131565-3W2YEX6V3K3i.jpg",
        "genres": [
            "Action",
            "Fantasy",
            "Music"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Shingeki no Kyojin: The Final Season Part 2",
        "subtitle": "Attack on Titan Final Season Part 2",
        "year": "2022",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131681-5ooUqvqNtee1.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Sonny Boy",
        "subtitle": "Sonny Boy",
        "year": "2021",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx132126-4ugVjXMQLAps.png",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Sono Bisque Doll wa Koi wo Suru",
        "subtitle": "My Dress-Up Darling",
        "year": "2022",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx132405-qP7FQYGmNI3d.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Shinigami Bocchan to Kuro Maid 2nd Season",
        "subtitle": "The Duke of Death and His Maid Season 2",
        "year": "2023",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139435-7cLDzwDsRqAn.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "SPY×FAMILY",
        "subtitle": "SPY x FAMILY",
        "year": "2022",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140960-Kb6R5nYQfjmP.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Suzume no Tojimari",
        "subtitle": "Suzume",
        "year": "2022",
        "creator": "CoMix Wave",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142770-dDaDIRnsv5jN.jpg",
        "genres": [
            "Adventure",
            "Fantasy",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "SPY×FAMILY Part 2",
        "subtitle": "SPY x FAMILY Cour 2",
        "year": "2022",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142838-26JrqcFU1ljB.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Slime Taoshite 300-nen, Shiranai Uchi ni Level MAX ni Nattemashita: Sono ni",
        "subtitle": "I've Been Killing Slimes For 300 Years And Maxed Out My Level Season 2",
        "year": "2025",
        "creator": "Teddy",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx143337-2uPE0ywVcz9X.jpg",
        "genres": [
            "Comedy",
            "Fantasy",
            "Slice of Life"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Shinobi no Ittoki",
        "subtitle": "Shinobi no Ittoki",
        "year": "2022",
        "creator": "TROYCA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145604-FQ8gN4CPaiui.jpg",
        "genres": [
            "Action"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Shingeki no Kyojin: The Final Season - Kanketsu-hen Zenpen",
        "subtitle": "Attack on Titan Final Season THE FINAL CHAPTERS Special 1",
        "year": "2023",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146984-GXrLeT6vQqyP.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Sousou no Frieren",
        "subtitle": "Frieren: Beyond Journey’s End",
        "year": "2023",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154587-qQTzQnEJJ3oB.jpg",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Sono Bisque Doll wa Koi wo Suru Season 2",
        "subtitle": "My Dress-Up Darling Season 2",
        "year": "2025",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154768-DHHvNd4MjV1p.jpg",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Tengoku Daimakyou",
        "subtitle": "Tengoku Daimakyo",
        "year": "2023",
        "creator": "Production I.G",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx155783-YosKbsmZzuDE.jpg",
        "genres": [
            "Adventure",
            "Mystery",
            "Sci-Fi",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "SPY×FAMILY Season 2",
        "subtitle": "SPY x FAMILY Season 2",
        "year": "2023",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b158927-lfO85WVguYgc.png",
        "genres": [
            "Action",
            "Comedy",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Shoushimin Series",
        "subtitle": "SHOSHIMIN: How to Become Ordinary",
        "year": "2024",
        "creator": "Lapin Track",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx173295-5DIOnrTYiF0a.jpg",
        "genres": [
            "Mystery",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Shoushimin Series 2nd Season",
        "subtitle": "SHOSHIMIN: How to become Ordinary Season 2",
        "year": "2025",
        "creator": "Lapin Track",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx181182-lnlfAByYD7X6.png",
        "genres": [
            "Mystery",
            "Psychological",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Sousou no Frieren 2nd Season",
        "subtitle": "Frieren: Beyond Journey’s End Season 2",
        "year": "2026",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx182255-butzrqd4I0aC.jpg",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Takopii no Genzai",
        "subtitle": "Takopi's Original Sin",
        "year": "2025",
        "creator": "ENISHIYA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx185407-7uzY4fA3hokP.jpg",
        "genres": [
            "Drama",
            "Psychological",
            "Sci-Fi"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "To LOVE-Ru",
        "subtitle": "To Love Ru",
        "year": "2008",
        "creator": "Xebec",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx3455-oNiJmsZZTAAj.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Sci-Fi"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Toradora!",
        "subtitle": "Toradora!",
        "year": "2008",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4224-PXVMBLNwy2aF.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Toaru Majutsu no Index",
        "subtitle": "A Certain Magical Index",
        "year": "2008",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4654-ba44icsxDQZd.jpg",
        "genres": [
            "Action",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Tonari no Kaibutsu-kun",
        "subtitle": "My Little Monster",
        "year": "2012",
        "creator": "Brain's Base",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14227-VGxPG1xDZG7v.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Yahari Ore no Seishun Love Come wa Machigatteiru.",
        "subtitle": "My Teen Romantic Comedy SNAFU",
        "year": "2013",
        "creator": "Brain's Base",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14813-3mNvcKNEQcDs.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Tokyo Ravens",
        "subtitle": "Tokyo Ravens",
        "year": "2013",
        "creator": "8-bit",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16011-orxVpks3jG9U.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Tokyo Ghoul",
        "subtitle": "Tokyo Ghoul",
        "year": "2014",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b20605-k665mVkSug8D.jpg",
        "genres": [
            "Action",
            "Drama",
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Trinity Seven",
        "subtitle": "TRINITY SEVEN",
        "year": "2014",
        "creator": "Seven Arcs",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20631-LdCiy3goitcT.png",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Tokyo Ghoul √A",
        "subtitle": "Tokyo Ghoul √A",
        "year": "2015",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20850-glDf9EMKeCwe.jpg",
        "genres": [
            "Action",
            "Drama",
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Violet Evergarden",
        "subtitle": "Violet Evergarden",
        "year": "2018",
        "creator": "Kyoto Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21827-ubzq619ZA2E9.png",
        "genres": [
            "Drama",
            "Fantasy",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 10
    },
    {
        "title": "Trinity Seven Movie - Yuukyuu Toshokan to Renkinjutsu Shoujo",
        "subtitle": "Trinity Seven: Eternal Library & Alchemic Girl",
        "year": "2017",
        "creator": "Seven Arcs",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21874-X0MzTN5jehbN.png",
        "genres": [
            "Action",
            "Comedy",
            "Ecchi",
            "Fantasy",
            "Romance"
        ],
        "status": "consumed",
        "rating": 1
    },
    {
        "title": "Uchiage Hanabi, Shita kara Miru ka? Yoko kara Miru ka?",
        "subtitle": "Fireworks",
        "year": "2017",
        "creator": "Shaft",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97908-CbfTf71GjJjg.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Tsuki ga Kirei",
        "subtitle": "Tsukigakirei",
        "year": "2017",
        "creator": "feel.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98202-H6RtsIMZPALF.png",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Tsurezure Children",
        "subtitle": "Tsuredure Children",
        "year": "2017",
        "creator": "Studio Gokumi",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98291-LY6txxZTX8We.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Wotaku ni Koi wa Muzukashii",
        "subtitle": "Wotakoi: Love is Hard for Otaku",
        "year": "2018",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx99578-oO5KChtfhzln.png",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 5
    },
    {
        "title": "Tokyo Ghoul:re",
        "subtitle": "Tokyo Ghoul:re",
        "year": "2018",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100240-vJNaKd5HwPJ2.jpg",
        "genres": [
            "Action",
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "VINLAND SAGA",
        "subtitle": "Vinland Saga",
        "year": "2019",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101348-2fhDFPCuMNiz.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Tokyo Ghoul:re 2",
        "subtitle": "Tokyo Ghoul:re 2",
        "year": "2018",
        "creator": "Studio Pierrot",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx102351-yD3Ty9YZFMsf.jpg",
        "genres": [
            "Action",
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Wotaku ni Koi wa Muzukashii OVA",
        "subtitle": "",
        "year": "2019",
        "creator": "A-1 Pictures",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104217-PoZOCoWD5ei8.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Yahari Ore no Seishun Love Come wa Machigatteiru. Kan",
        "subtitle": "My Teen Romantic Comedy SNAFU Climax!",
        "year": "2020",
        "creator": "feel.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108489-yGmYCE6dhFta.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Xian Wang De Richang Shenghuo",
        "subtitle": "The Daily Life of the Immortal King",
        "year": "",
        "creator": "Haoliners Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114121-vxWVgIBlBjox.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 2
    },
    {
        "title": "Uzaki-chan wa Asobitai!",
        "subtitle": "Uzaki-chan Wants to Hang Out!",
        "year": "2020",
        "creator": "ENGI",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx115113-bJDZV7kP0XrP.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "THE GOD OF HIGH SCHOOL",
        "subtitle": "The God of High School",
        "year": "2020",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116006-Wt8JSA1ZQxlM.png",
        "genres": [
            "Action",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Tonikaku Kawaii",
        "subtitle": "TONIKAWA: Over The Moon For You",
        "year": "2020",
        "creator": "Seven Arcs",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116267-Eo1biPBTlL4i.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Ura Sekai Picnic",
        "subtitle": "Otherside Picnic",
        "year": "2021",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116287-LCcICfn2FhwL.jpg",
        "genres": [
            "Adventure",
            "Fantasy",
            "Horror",
            "Mystery",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Tokyo Revengers",
        "subtitle": "Tokyo Revengers",
        "year": "2021",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx120120-cWDmnmeEntSe.jpg",
        "genres": [
            "Action",
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Uzaki-chan wa Asobitai! ω",
        "subtitle": "Uzaki-chan Wants to Hang Out! Season 2",
        "year": "2022",
        "creator": "ENGI",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124395-9GeigGh1Ae2f.png",
        "genres": [
            "Comedy",
            "Ecchi",
            "Romance",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Wonder Egg Priority",
        "subtitle": "WONDER EGG PRIORITY",
        "year": "2021",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124845-JXORhqCTGt04.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery",
            "Psychological",
            "Sci-Fi",
            "Thriller"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Tsuki ga Michibiku Isekai Douchuu",
        "subtitle": "TSUKIMICHI -Moonlit Fantasy-",
        "year": "2021",
        "creator": "C2C",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx125206-O2MsOWdW1lVi.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Vivy: Fluorite Eye’s Song",
        "subtitle": "Vivy -Fluorite Eye's Song-",
        "year": "2021",
        "creator": "WIT STUDIO",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128546-UIwyhuhjxmL0.jpg",
        "genres": [
            "Action",
            "Drama",
            "Music",
            "Sci-Fi",
            "Thriller"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Tensei Kenja no Isekai Life: Daini no Shokugyou wo Ete, Sekai Saikyou ni Narimashita",
        "subtitle": "My Isekai Life: I Gained a Second Character Class and Became the Strongest Sage in the World!",
        "year": "2022",
        "creator": "REVOROOT",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129192-p9qQ3GNgoqnS.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Vanitas no Carte",
        "subtitle": "The Case Study of Vanitas",
        "year": "2021",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131646-cuyGfKcekZ62.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 8
    },
    {
        "title": "Vanitas no Carte Part 2",
        "subtitle": "The Case Study of Vanitas Part 2",
        "year": "2022",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx135136-wVMApb1FEmkz.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "VINLAND SAGA SEASON 2",
        "subtitle": "Vinland Saga Season 2",
        "year": "2023",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx136430-gsBsJjA7hGh9.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
        "subtitle": "TSUKIMICHI -Moonlit Fantasy- Season 2",
        "year": "2024",
        "creator": "J.C.STAFF",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139518-GZWYKM8Kg1S2.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Tokyo 24-ku",
        "subtitle": "Tokyo 24th Ward",
        "year": "2022",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140643-RpKlGdwDa7r7.jpg",
        "genres": [
            "Mystery",
            "Sci-Fi"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Tomodachi Game",
        "subtitle": "Tomodachi Game",
        "year": "2022",
        "creator": "Okuruto Noboru",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141014-bTWr7TtS0wt9.jpg",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Tonikaku Kawaii Season 2",
        "subtitle": "TONIKAWA: Over The Moon For You Season 2",
        "year": "2023",
        "creator": "Seven Arcs",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141208-On0qHKxo6P5t.png",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Tokyo Revengers: Seiya Kessen-hen",
        "subtitle": "Tokyo Revengers Season 2",
        "year": "2023",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142853-nxEZDE9oDRLG.png",
        "genres": [
            "Action",
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Tongari Boushi no Atelier",
        "subtitle": "Witch Hat Atelier",
        "year": "2026",
        "creator": "BUG FILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx147105-rwOX8qyUy8gV.jpg",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Tomo-chan wa Onnanoko!",
        "subtitle": "Tomo-chan Is a Girl!",
        "year": "2023",
        "creator": "Lay-duce",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151806-IAMi2ctI5xJI.jpg",
        "genres": [
            "Comedy",
            "Romance",
            "Slice of Life"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Undead Unluck",
        "subtitle": "Undead Unluck",
        "year": "2023",
        "creator": "david production",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154116-3ydDI9hhvPgw.png",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "WIND BREAKER",
        "subtitle": "WIND BREAKER",
        "year": "2024",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163270-wboZJp0ybwVK.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Tokyo Revengers: Tenjiku-hen",
        "subtitle": "Tokyo Revengers Season 2 Part 2",
        "year": "2023",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163329-lGJRnYV9dcjc.jpg",
        "genres": [
            "Action",
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Tougen Anki",
        "subtitle": "TOUGEN ANKI",
        "year": "2025",
        "creator": "Studio Hibari",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx177474-oHil1yLWldfl.jpg",
        "genres": [
            "Action",
            "Mystery",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Tsuki ga Michibiku Isekai Douchuu 3rd Season",
        "subtitle": "",
        "year": "",
        "creator": "",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx178467-mw0zYp9gVfiO.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "WIND BREAKER Season 2",
        "subtitle": "WIND BREAKER Season 2",
        "year": "2025",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx178680-nIAhCizY46ZU.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Drama"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Witch Watch",
        "subtitle": "WITCH WATCH",
        "year": "2025",
        "creator": "Bibury Animation Studios",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx180367-GlRuB2lG7Kaa.jpg",
        "genres": [
            "Comedy",
            "Drama",
            "Fantasy",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Yojouhan Shinwa Taikei",
        "subtitle": "The Tatami Galaxy",
        "year": "2010",
        "creator": "MADHOUSE",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7785-aTjIhsYva8cJ.jpg",
        "genres": [
            "Comedy",
            "Mystery",
            "Psychological",
            "Romance"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Zetsuen no Tempest",
        "subtitle": "Blast of Tempest",
        "year": "2012",
        "creator": "bones",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14075-EIJcGXq5hd9O.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery",
            "Romance"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Zankyou no Terror",
        "subtitle": "Terror in Resonance",
        "year": "2014",
        "creator": "MAPPA",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20661-aCR7QgzDfOSI.png",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological",
            "Thriller"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Yahari Ore no Seishun Love Come wa Machigatteiru. Zoku",
        "subtitle": "My Teen Romantic Comedy SNAFU TOO!",
        "year": "2015",
        "creator": "feel.",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20698-YZIYor2zW3Ta.png",
        "genres": [
            "Comedy",
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Yamada-kun to 7-nin no Majo",
        "subtitle": "Yamada and the Seven Witches",
        "year": "2015",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20966-HboUtUzEKWl6.jpg",
        "genres": [
            "Comedy",
            "Mystery",
            "Romance",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 4
    },
    {
        "title": "Zutto Mae kara Suki deshita.: Kokuhaku Jikkou Iinkai",
        "subtitle": "I've Always Liked You",
        "year": "2016",
        "creator": "Qualia Animation",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21296-WtdIXdg64GCK.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
        "subtitle": "Classroom of the Elite",
        "year": "2017",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98659-WNyPLIZDpGGY.jpg",
        "genres": [
            "Drama",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 6
    },
    {
        "title": "Yakusoku no Neverland",
        "subtitle": "The Promised Neverland",
        "year": "2019",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101759-8UR7r9MNVpz2.jpg",
        "genres": [
            "Drama",
            "Fantasy",
            "Horror",
            "Mystery",
            "Psychological",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 7
    },
    {
        "title": "Yakusoku no Neverland 2",
        "subtitle": "The Promised Neverland Season 2",
        "year": "2021",
        "creator": "CloverWorks",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108725-ZKivuyr4Jtc9.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Horror",
            "Psychological",
            "Thriller"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Yesterday wo Utatte",
        "subtitle": "SING \"YESTERDAY\" FOR ME",
        "year": "2020",
        "creator": "Doga Kobo",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx109020-sRBusiVXbsLH.jpg",
        "genres": [
            "Drama",
            "Romance",
            "Slice of Life"
        ],
        "status": "consumed",
        "rating": 3
    },
    {
        "title": "Yofukashi no Uta",
        "subtitle": "Call of the Night",
        "year": "2022",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141391-M3ZgUKTPENUk.jpg",
        "genres": [
            "Comedy",
            "Psychological",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 2nd Season",
        "subtitle": "Classroom of the Elite Season 2",
        "year": "2022",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145545-DGl3LVvFlnHi.png",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season",
        "subtitle": "Classroom of the Elite Season 3",
        "year": "2024",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146066-zzKl6P6OeEjy.jpg",
        "genres": [
            "Drama",
            "Psychological"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "[Oshi no Ko]",
        "subtitle": "Oshi No Ko",
        "year": "2023",
        "creator": "Doga Kobo",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150672-WqmmwZ4nMzAy.png",
        "genres": [
            "Drama",
            "Mystery",
            "Psychological",
            "Supernatural"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Yuusha Party wo Tsuihou Sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau",
        "subtitle": "Beast Tamer",
        "year": "2022",
        "creator": "EMT Squared",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150695-UOQF6Zz2iCTX.jpg",
        "genres": [
            "Adventure",
            "Fantasy"
        ],
        "status": "dropped",
        "rating": 0
    },
    {
        "title": "Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto",
        "subtitle": "Zom 100: Bucket List of the Dead",
        "year": "2023",
        "creator": "BUG FILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx159831-cJUNqCqzuApc.png",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Horror",
            "Supernatural"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Yuusha Kei ni Shosu: Choubatsu Yuusha 9004-tai Keimu Kiroku",
        "subtitle": "Sentenced to Be a Hero",
        "year": "2026",
        "creator": "Studio KAI",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx167152-O1pm6DWwifBD.jpg",
        "genres": [
            "Action",
            "Drama",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Yofukashi no Uta Season 2",
        "subtitle": "Call of the Night Season 2",
        "year": "2025",
        "creator": "LIDENFILMS",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx175914-VsbL90WzuqoM.jpg",
        "genres": [
            "Comedy",
            "Psychological",
            "Romance",
            "Slice of Life",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Zenchiteki na Dokusha no Shiten kara",
        "subtitle": "Omniscient Reader",
        "year": "",
        "creator": "",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx179068-wlmOf8c4HnXf.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 4th Season 2-nensei-hen Ichi Gakki",
        "subtitle": "Classroom of the Elite 4th Season: Second Year, First Semester",
        "year": "2026",
        "creator": "Lerche",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx180745-OEZaBeEdWozn.png",
        "genres": [
            "Drama",
            "Psychological"
        ],
        "status": "watching",
        "rating": 0
    },
    {
        "title": "Yuusha Party wo Oidasareta Kiyou Binbou",
        "subtitle": "Jack-of-All-Trades, Party of None",
        "year": "2026",
        "creator": "animation studio42",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx187264-aOUNQvTriPkX.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Yomi no Tsugai",
        "subtitle": "Daemons of the Shadow Realm",
        "year": "2026",
        "creator": "bones film",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx195600-moI0UFArtOme.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy",
            "Supernatural"
        ],
        "status": "planned",
        "rating": 0
    },
    {
        "title": "The God of High School PV",
        "subtitle": "",
        "year": "",
        "creator": "",
        "cover": "",
        "genres": [],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Re:Zero kara Hajimeru Isekai Seikatsu - Hyouketsu no Kizuna",
        "subtitle": "",
        "year": "",
        "creator": "",
        "cover": "",
        "genres": [],
        "status": "consumed",
        "rating": 9
    },
    {
        "title": "Shingeki no Kyojin Movie: Kanketsu-hen - The Last Attack",
        "subtitle": "",
        "year": "",
        "creator": "",
        "cover": "",
        "genres": [],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Uchiage Hanabi",
        "subtitle": "",
        "year": "",
        "creator": "",
        "cover": "",
        "genres": [],
        "status": "consumed",
        "rating": 0
    },
    {
        "title": "Ao no Hako",
        "subtitle": "",
        "year": "",
        "creator": "",
        "cover": "",
        "genres": [],
        "status": "watching",
        "rating": 0
    }
],
    },
    mangas: {
        label: "Mangás",
        kanji: "漫",
        description: "Mangás já lidos e próximos da fila.",
        items: [
    {
        "title": "Gantz",
        "year": "2000",
        "creator": "Hiroya Oku",
        "genres": ["Ação", "Sci-Fi", "Seinen", "Terror"],
        "status": "backlog"
    },
    {
        "title": "ReLife",
        "year": "2013",
        "creator": "Yayoiso",
        "genres": ["Drama", "Escolar", "Seinen"],
        "status": "consumed"
    },
    {
        "title": "Solo Leveling",
        "year": "2018",
        "creator": "Chugong, Dubu",
        "genres": ["Shounen", "Superpoderes", "Ação"],
        "status": "consumed"
    },
    {
        "title": "Akira",
        "year": "1982",
        "creator": "Katsuhiro Otomo",
        "genres": ["Sci-Fi", "Ação", "Cyberpunk", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "Look Back (One-shot)",
        "year": "2021",
        "creator": "Tatsuki Fujimoto",
        "genres": ["Drama", "Superpoderes"],
        "status": "consumed"
    },
    {
        "title": "Shingeki no Kyojin",
        "year": "2009",
        "creator": "Hajime Isayama",
        "genres": ["Ação", "Drama", "Shounen"],
        "status": "consumed"
    },
    {
        "title": "Sono Bisque Doll wa Koi wo Suru",
        "year": "2018",
        "creator": "Shinichi Fukuda",
        "genres": ["Comédia", "Escolar", "Romance"],
        "status": "consumed"
    },
    {
        "title": "Zetsuen no Tempest",
        "year": "2009",
        "creator": "Kyou Shirodaira, Ren Saizaki",
        "genres": ["Mistério", "Drama", "Fantasia"],
        "status": "backlog"
    },
    {
        "title": "Kokou no Hito",
        "year": "2007",
        "creator": "Shin-ichi Sakamoto, Yoshio Nabeta",
        "genres": ["Drama", "Esportes", "Seinen"],
        "status": "consumed"
    },
    {
        "title": "Fire Force",
        "year": "2015",
        "creator": "Atsushi Ohkubo",
        "genres": ["Ação", "Bom Protagonista", "Shounen", "Superpoderes"],
        "status": "consumed"
    },
    {
        "title": "Berserk",
        "year": "1989",
        "creator": "Kentaro Miura",
        "genres": ["Fantasia", "Seinen", "Ação", "Horror"],
        "status": "reading"
    },
    {
        "title": "Tomo-chan wa Onnanoko!",
        "year": "2015",
        "creator": "Fumita Yanagida",
        "genres": ["Escolar", "Romance", "Comédia"],
        "status": "consumed"
    },
    {
        "title": "Dandadan",
        "year": "2021",
        "creator": "Yukinobu Tatsu",
        "genres": ["Shounen", "Superpoderes", "Ação", "Comédia"],
        "status": "reading"
    },
    {
        "title": "Jigokuraku",
        "year": "2018",
        "creator": "Yuji Kaku",
        "genres": ["Ação", "Histórico", "Shounen"],
        "status": "consumed"
    },
    {
        "title": "Oyasumi Punpun",
        "year": "2007",
        "creator": "Inio Asano",
        "genres": ["Seinen", "Suspense", "Terror", "Drama Psicológico"],
        "status": "backlog"
    },
    {
        "title": "Kaguya-sama wa Kokurasetai",
        "year": "2015",
        "creator": "Aka Akasaka",
        "genres": ["Comédia", "Escolar", "Romance"],
        "status": "consumed"
    },
    {
        "title": "Chainsaw Man",
        "year": "2018",
        "creator": "Tatsuki Fujimoto",
        "genres": ["Ação", "Comédia", "Shounen", "Superpoderes"],
        "status": "reading"
    },
    {
        "title": "Homunculus",
        "year": "2003",
        "creator": "Hideo Yamamoto",
        "genres": ["Psicológico", "Mistério", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "Vagabond",
        "year": "1998",
        "creator": "Takehiko Inoue",
        "genres": ["Seinen", "Drama", "Ação", "Histórico"],
        "status": "backlog"
    },
    {
        "title": "Tokyo Revengers",
        "year": "2017",
        "creator": "Ken Wakui",
        "genres": ["Ação", "Shounen", "Drama"],
        "status": "backlog"
    },
    {
        "title": "Knights of Sidonia",
        "year": "2009",
        "creator": "Tsutomu Nihei",
        "genres": ["Sci-Fi", "Mecha", "Seinen", "Ação"],
        "status": "backlog"
    },
    {
        "title": "Omniscient Reader's Viewpoint",
        "year": "2020",
        "creator": "Sing N Song, Sleepy-C",
        "genres": ["Ação", "Fantasia", "Sobrenatural"],
        "status": "reading"
    },
    {
        "title": "Holyland",
        "year": "2000",
        "creator": "Kouji Mori",
        "genres": ["Artes Marciais", "Psicológico", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "Death Note",
        "year": "2003",
        "creator": "Tsugumi Ohba, Takeshi Obata",
        "genres": ["Mistério", "Psicológico", "Sobrenatural"],
        "status": "consumed"
    },
    {
        "title": "Shamo",
        "year": "1998",
        "creator": "Izo Hashimoto, Akio Tanaka",
        "genres": ["Artes Marciais", "Drama", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "My Hero Academia",
        "year": "2014",
        "creator": "Kohei Horikoshi",
        "genres": ["Bom Protagonista", "Escolar", "Shounen", "Superpoderes"],
        "status": "consumed"
    },
    {
        "title": "Innocent",
        "year": "2013",
        "creator": "Shin-ichi Sakamoto",
        "genres": ["Histórico", "Drama", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "New Normal",
        "year": "2021",
        "creator": "Akito Aihara",
        "genres": ["Escolar", "Romance", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "All You Need Is Kill",
        "year": "2014",
        "creator": "Hiroshi Sakurazaka, Takeshi Obata",
        "genres": ["Sci-Fi", "Ação", "Seinen", "Militar"],
        "status": "backlog"
    },
    {
        "title": "Tokyo Ghoul",
        "year": "2011",
        "creator": "Sui Ishida",
        "genres": ["Ação", "Drama", "Shounen", "Terror"],
        "status": "consumed"
    },
    {
        "title": "Blood on the Tracks (Chi no Wadachi)",
        "year": "2017",
        "creator": "Shuzo Oshimi",
        "genres": ["Psicológico", "Drama", "Seinen", "Suspense"],
        "status": "backlog"
    },
    {
        "title": "Gachiakuta",
        "year": "2022",
        "creator": "Kei Urana",
        "genres": ["Ação", "Fantasia", "Shounen"],
        "status": "backlog"
    },
    {
        "title": "Rainbow",
        "year": "2001",
        "creator": "George Abe, Masasumi Kakizaki",
        "genres": ["Drama", "Histórico", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "Kimetsu no Yaiba",
        "year": "2016",
        "creator": "Koyoharu Gotouge",
        "genres": ["Ação", "Fantasia", "Histórico", "Shounen"],
        "status": "consumed"
    },
    {
        "title": "Tokyo Ghoul: re",
        "year": "2014",
        "creator": "Sui Ishida",
        "genres": ["Ação", "Drama", "Shounen"],
        "status": "backlog"
    },
    {
        "title": "Blame!",
        "year": "1997",
        "creator": "Tsutomu Nihei",
        "genres": ["Sci-Fi", "Ação", "Seinen", "Cyberpunk"],
        "status": "backlog"
    },
    {
        "title": "Jujutsu Kaisen",
        "year": "2018",
        "creator": "Gege Akutami",
        "genres": ["Ação", "Sobrenatural", "Shounen"],
        "status": "consumed"
    },
    {
        "title": "Real",
        "year": "1999",
        "creator": "Takehiko Inoue",
        "genres": ["Esportes", "Drama", "Seinen", "Psicológico"],
        "status": "backlog"
    },
    {
        "title": "Nisekoi",
        "year": "2011",
        "creator": "Naoshi Komi",
        "genres": ["Bom Protagonista", "Drama", "Harém", "Romance"],
        "status": "backlog"
    },
    {
        "title": "Dorohedoro",
        "year": "2000",
        "creator": "Q Hayashida",
        "genres": ["Ação", "Fantasia", "Seinen", "Comédia"],
        "status": "backlog"
    },
    {
        "title": "Anohana",
        "year": "2012",
        "creator": "Mari Okada, Mitsu Izumi",
        "genres": ["Drama", "Slice of Life", "Sobrenatural"],
        "status": "backlog"
    },
    {
        "title": "No Longer Human (Ningen Shikkaku)",
        "year": "2017",
        "creator": "Junji Ito",
        "genres": ["Psicológico", "Drama", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "Yakusoku no Neverland",
        "year": "2016",
        "creator": "Kaiu Shirai, Posuka Demizu",
        "genres": ["Seinen", "Suspense", "Mistério"],
        "status": "consumed"
    },
    {
        "title": "Blue Period",
        "year": "2017",
        "creator": "Tsubasa Yamaguchi",
        "genres": ["Arte", "Drama", "Escolar", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "Vinland Saga",
        "year": "2005",
        "creator": "Makoto Yukimura",
        "genres": ["Ação", "Drama", "Histórico", "Seinen"],
        "status": "backlog"
    },
    {
        "title": "Undead Girl Murder Farce",
        "year": "2016",
        "creator": "Yugo Aosaki, Haruka Tomoyama",
        "genres": ["Mistério", "Sobrenatural", "Ação"],
        "status": "backlog"
    },
    {
        "title": "Mato Seihei no Slave",
        "year": "2019",
        "creator": "Takahiro, Yohei Takemura",
        "genres": ["Ação", "Fantasia", "Ecchi", "Shounen"],
        "status": "reading"
    },
    {
        "title": "Monster",
        "year": "1994",
        "creator": "Naoki Urasawa",
        "genres": ["Mistério", "Psicológico", "Seinen", "Suspense"],
        "status": "backlog"
    },
    {
        "title": "Wotakoi",
        "year": "2014",
        "creator": "Fujita",
        "genres": ["Romance", "Seinen", "Comédia"],
        "status": "backlog"
    }
],
    },
    jogos: {
        label: "Jogos",
        kanji: "遊",
        description: "Jogos zerados e próximos para jogar.",
        items: [
            {
                title: "GRIS",
                year: "2018",
                creator: "Nomada Studio",
                cover: "/images/favorites/gris.jpg",
                genres: ["Indie", "Puzzle", "Plataforma"],
                status: "consumed",
                rating: 10,
            },
            {
                title: "It Takes Two",
                year: "2021",
                creator: "Hazelight Studios",
                genres: ["Co-op", "Aventura"],
                status: "consumed",
                rating: 9,
            },
            {
                title: "Hollow Knight",
                year: "2017",
                creator: "Team Cherry",
                genres: ["Metroidvania", "Ação"],
                status: "backlog",
            },
        ],
    },
    filmes: {
        label: "Filmes",
        kanji: "映",
        description: "Filmes assistidos e lista de próximos.",
        items: [
            {
                title: "Project Hail Mary",
                year: "2026",
                creator: "Amazon MGM Studios",
                cover: "/images/favorites/project-hail-mary.jpg",
                genres: ["Sci-Fi", "Drama"],
                status: "consumed",
                rating: 9,
            },
            {
                title: "Interstellar",
                year: "2014",
                creator: "Christopher Nolan",
                genres: ["Sci-Fi", "Drama"],
                status: "consumed",
                rating: 10,
            },
            {
                title: "Dune: Part Two",
                year: "2024",
                creator: "Denis Villeneuve",
                genres: ["Sci-Fi", "Épico"],
                status: "backlog",
            },
        ],
    },
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
  { slug: "monte-roraima",             name: "Trekking Monte Roraima",                 distanceKm: 80.91,  elevationM: 9952,  difficulty: "DIFÍCIL",done: false,  region: "Monte Roraima, RR",        coords: [-46.1060, -23.6350], gpx: "/gpx/trekking-monte-roraima-8-dias.gpx", photos: [] },
  { slug: "pedra-tartaruga-quiriri",             name: "Pedra Tartaruga — Quiriri",                 distanceKm: 25.13,  elevationM: 633,  difficulty: "MODERADO",done: false,  region: "Quiriri, SC",        coords: [-46.1060, -23.6350], gpx: "/gpx/pedra-da-tartaruga.gpx", photos: [] },
  { slug: "mirante-janela",             name: "Mirante Janela - Chapada dos Veadeiros",                 distanceKm: 8.08,  elevationM: 329,  difficulty: "MODERADO",done: false,  region: "Chapada dos Veadeiros, GO",        coords: [-46.1060, -23.6350], gpx: "/gpx/trilha-mirante-da-janela.gpx", photos: [] },
  { slug: "pico-rinoceronte",             name: "Pico do Rinoceronte",                 distanceKm: 6.68,  elevationM: 324,  difficulty: "FÁCIL",done: false,  region: "Pico do Rinoceronte, SC",        coords: [-46.1060, -23.6350], gpx: "/gpx/pico-do-rinoceronte.gpx", photos: [] },
  { slug: "vale-do-pati",             name: "Vale do Pati",                 distanceKm: 75.21,  elevationM: 2858,  difficulty: "DIFÍCIL",done: false,  region: "Vale do Pati, BA",        coords: [-46.1060, -23.6350], gpx: "/gpx/vale-do-pati-5-dias.gpx", photos: [] },
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
    slug: "patagonia",
    name: "Patagônia",
    country: "Argentina / Chile",
    flag: "🇦🇷",
    status: "dream",
    tags: ["trekking", "natureza", "aventura"],
    highlight: "El Chaltén, El Calafate e Perito Moreno.",
    notes: "Primeira vez no gelo, Laguna de los tres, Laguna Torre, Laguna Capri, Glaciar Perito Moreno.",
    places: ["El Chaltén", "El Calafate", "Perito Moreno"]
  },
  // dream / on the radar
  {
    slug: "islandia",
    name: "Islândia",
    country: "Islândia",
    flag: "🇮🇸",
    status: "dream",
    tags: ["natureza", "road trip", "auroras boreais"],
    highlight: "Golden Circle, Vik, Skaftafell — ring road completo.",
    notes: "Rota já planejada. Verão (sem noite) ou inverno (auroras).",
  },
  {
    slug: "torres-del-paine",
    name: "Torres del Paine",
    country: "Chile",
    flag: "🇨🇱",
    status: "dream",
    tags: ["trekking", "natureza", "W-circuit"],
    highlight: "W-Circuit de 5 dias com camping.",
    notes: "Reservar torres early — vagas esgotam 6 meses antes.",
  },
  {
    slug: "dolomitas",
    name: "Dolomitas",
    country: "Itália",
    flag: "🇮🇹",
    status: "dream",
    tags: ["trekking", "via ferrata", "alpinismo"],
    highlight: "Alta Via 1, Tre Cime di Lavaredo.",
  },
  {
    slug: "portugal",
    name: "Portugal",
    country: "Portugal",
    flag: "🇵🇹",
    status: "dream",
    tags: ["historico"],
    highlight: "Serra da estrela",
  },
  {
    slug: "china",
    name: "China",
    country: "China",
    flag: "🇨🇳",
    status: "dream",
    tags: ["historico"],
    highlight: "Grande Muralha, Cidade Proibida, Terracota.",

  },
  {
    slug: "peru-aventura",
    name: "Peru Aventura",
    country: "Peru",
    flag: "🇵🇪",
    status: "dream",
    tags: ["historico"],
    highlight: "Laguna 69, Laguna Parón, Inca Jungle, Moray e Maras, Montanha 7 cores, Canion Colca",

  },
  {
    slug: "salar-de-uyuni",
    name: "Salar de Uyuni",
    country: "Bolívia",
    flag: "🇧🇴",
    status: "dream",
    tags: ["natureza", "aventura"],
    highlight: "Salar de Uyuni, Laguna Colorada, Isla Incahuasi, Árbol de Piedra",

  },
  {
    slug: "atacama",
    name: "Deserto do Atacama",
    country: "Chile",
    flag: "🇨🇱",
    status: "dream",
    tags: ["natureza", "aventura"],
    highlight: "Valle de la Luna, Geysers del Tatio, Lagunas Altiplânicas, Valle de las Damas",

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
        cuisine: ["Japonesa", "Lamen"],
        status: "visited",
        rating: 5,
        highlight: ""
    },
    {
        slug: "hira",
        name: "Hira",
        location: "Itaim, São Paulo, SP",
        cuisine: ["Japonesa", "Lamen"],
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
        cuisine: ["Alelo", "Japonesa", "Lamen"],
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
        cuisine: ["Alelo", "Mineira", "Brasileira"],
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
            photo: "/images/food/kidoairaku.jpg",
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
        cuisine: ["Mineira", "Brasileira"],
        status: "visited",
        rating: 5,
        priceRange: 3,
        dishes: [
            {
            name: "Galinhada",
            photo: "/images/food/lena1.jpg",
            notes: "Apesar de ser galinhada, não é um prato pesado. O arroz é soltinho e bem temperado, com pedaços generosos de frango desfiado, junto com a cebola fica muito bom."
            },
            {
            name: "Broa",
            photo: "/images/food/lena2.jpg",
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
        cuisine: ["Hambúrguer", "Brasileira"],
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
        cuisine: ["Japonesa", "Lamen"],
        status: "visited",
        rating: 5,
        dishes: [
            {
            name: "Hokkaido Miso Aburi Chashu Ramen",
            photo: "/images/food/misoya1.jpg",
            notes: "Caldo de miso forte e encorpado. O macarrão é fresco e tem uma textura ótima, absorvendo bem o sabor do caldo. A batata frita é bem macia. O chashu é bem macio. Vem bastante comida, é um prato completo mesmo sem entrada."
            },
            {
            name: "Kyushu Miso Aburi Chashu Ramen",
            photo: "/images/food/misoya2.jpg",
            notes: ""
            },
        ],
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
            photo: "/images/food/oseyo.jpg",
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
            photo: "/images/food/tamashii.jpg",
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
        dishes: [
            {
            name: "Kare Udon",
            photo: "/images/food/udonjimbei.jpg",
            notes: "Kare udon com caldo picante, nem tanto espesso, mas cheio de sabor. O macarrão é fresco e tem uma textura ótima, absorvendo bem o sabor do caldo. O prato tem frango em cubos, que é macio e suculento, complementando bem o conjunto. A porção é na medida certa, nem muito grande, nem muito pequena, perfeita para uma refeição satisfatória sem deixar aquela sensação de peso depois de comer."
            }
        ],
        highlight: "",
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
            photo: "/images/food/elcarbon1.jpg",
            notes: "Bom, mas bem gorduroso."
            },
            {
            name: "Cookie com sorvete",
            photo: "/images/food/elcarbon2.jpg",
            notes: "Bem gostoso, mas um pouco doce demais."
            }
        ],
        highlight: ""
    },
    {
        slug: "farfalle-tratoria",
        name: "Farfalle Tratoria",
        location: "Santo Amaro, São Paulo, SP",
        cuisine: ["Italiana"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "shawarmaria-asmar",
        name: "Shawarmaria Asmar's",
        location: "Mooca, São Paulo, SP",
        cuisine: ["Árabe"],
        status: "visited",
        rating: 5,
        dishes: [
            {
            name: "Shawarma de carne",
            notes: "Shawarma de carne é simplesmente incrível. A carne é suculenta, cortada bem fina, bem temperada e tem um sabor defumado delicioso. O pão sírio é macio e fresco. Os acompanhamentos, como o molho de tahine e os vegetais frescos, adicionam um toque de frescor e equilíbrio ao prato."
            },
        ],
        highlight: ""
    },
    {
        slug: "santokki",
        name: "Santokki",
        location: "Alto de Pinheiros, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
    {
        slug: "kuromoon",
        name: "Kuromoon",
        location: "Paraíso, São Paulo, SP",
        cuisine: ["Japonesa"],
        status: "want",
        rating: 0,
        highlight: ""
    },
];
