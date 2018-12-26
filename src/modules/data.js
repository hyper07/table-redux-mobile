//import { List, Record } from 'immutable';
import namor from "namor";
import React from "react";

export let dummyData =
  [
    {
      children:[],
      mal_id: 169,
      url: "https://myanimelist.net/character/169/Amidamaru",
      image_url: "https://cdn.myanimelist.net/images/characters/3/60102.jpg?s=510b72b496a64524dcbe52d291e81f6c",
      name: "Amidamaru",
      role: "Main"
    },
    {
      children:[],
      mal_id: 167,
      url: "https://myanimelist.net/character/167/You_Asakura",
      image_url: "https://cdn.myanimelist.net/images/characters/4/60123.jpg?s=ac23eba74324a8f1fae5669ef10b38a0",
      name: "Asakura, You",
      role: "Main"
    },
    {
      children:[],
      mal_id: 172,
      url: "https://myanimelist.net/character/172/Hao_Asakura",
      image_url: "https://cdn.myanimelist.net/images/characters/14/251443.jpg?s=a549b0cf9a5699340dbc5dbac49fa4b9",
      name: "Asakura, Hao",
      role: "Main"
    },
    {
      children:[],
      mal_id: 170,
      url: "https://myanimelist.net/character/170/Anna_Kyouyama",
      image_url: "https://cdn.myanimelist.net/images/characters/8/86806.jpg?s=169d5dc8c18418eb46d20bb7d65f1741",
      name: "Kyouyama, Anna",
      role: "Main"
    },
    {
      children:[],
      mal_id: 174,
      url: "https://myanimelist.net/character/174/Manta_Oyamada",
      image_url: "https://cdn.myanimelist.net/images/characters/10/110871.jpg?s=deb8445d2eb18c6333d8129e67bacd12",
      name: "Oyamada, Manta",
      role: "Main"
    },
    {
      children:[],
      mal_id: 171,
      url: "https://myanimelist.net/character/171/Ren_Tao",
      image_url: "https://cdn.myanimelist.net/images/characters/3/60170.jpg?s=a2d507f97850909223cfa2064dc27595",
      name: "Tao, Ren",
      role: "Main"
    },
    {
      children:[],
      mal_id: 37012,
      url: "https://myanimelist.net/character/37012/Billy_Anderson",
      image_url: "https://cdn.myanimelist.net/images/characters/3/100751.jpg?s=6d78e677d20462932bb9499f395cc1dd",
      name: "Anderson, Billy",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 38760,
      url: "https://myanimelist.net/character/38760/Keiko_Asakura",
      image_url: "https://cdn.myanimelist.net/images/characters/16/106251.jpg?s=64ad5eb9c20117d041c6266101ef8e7d",
      name: "Asakura, Keiko",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 34029,
      url: "https://myanimelist.net/character/34029/Youmei_Asakura",
      image_url: "https://cdn.myanimelist.net/images/characters/12/92369.jpg?s=5815b4fcc4cae2707500f05f478b02d0",
      name: "Asakura, Youmei",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 61457,
      url: "https://myanimelist.net/character/61457/Kino_Asakura",
      image_url: "https://cdn.myanimelist.net/images/characters/11/163917.jpg?s=66eca0bd0de312ea335ff04b40b1a4fd",
      name: "Asakura, Kino",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20829,
      url: "https://myanimelist.net/character/20829/Mikihisa_Asakura",
      image_url: "https://cdn.myanimelist.net/images/characters/5/48112.jpg?s=fcecdddc4e390e3065a443ded57e0e52",
      name: "Asakura, Mikihisa",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20241,
      url: "https://myanimelist.net/character/20241/Bason",
      image_url: "https://cdn.myanimelist.net/images/characters/11/60304.jpg?s=5c249081a996f906d5b6206a02b10752",
      name: "Bason",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20408,
      url: "https://myanimelist.net/character/20408/Kanna_Bismarch",
      image_url: "https://cdn.myanimelist.net/images/characters/12/60290.jpg?s=55ae39cdead489348c2de5e4e9dab629",
      name: "Bismarch, Kanna",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20856,
      url: "https://myanimelist.net/character/20856/Bill_Burton",
      image_url: "https://cdn.myanimelist.net/images/characters/4/48492.jpg?s=b407771d0ee14b478e0904dc92b87ed1",
      name: "Burton, Bill",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20245,
      url: "https://myanimelist.net/character/20245/Conchi",
      image_url: "https://cdn.myanimelist.net/images/characters/9/81875.jpg?s=08f197e9f8496c1a41cec236e85ae8c4",
      name: "Conchi",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 17219,
      url: "https://myanimelist.net/character/17219/Peyote_D_iacute_az",
      image_url: "https://cdn.myanimelist.net/images/characters/4/48491.jpg?s=0ae978eff4e565e3c1228891aa6c2db3",
      name: "D&iacute;az, Peyote",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20694,
      url: "https://myanimelist.net/character/20694/John_Denbat",
      image_url: "https://cdn.myanimelist.net/images/characters/15/47923.jpg?s=77dfaaf6748b56cb89b5e7ede6e3d4ba",
      name: "Denbat, John",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 1529,
      url: "https://myanimelist.net/character/1529/Lyserg_Diethel",
      image_url: "https://cdn.myanimelist.net/images/characters/7/110874.jpg?s=188559dd1da54f6393c0748f693bb0da",
      name: "Diethel, Lyserg",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20883,
      url: "https://myanimelist.net/character/20883/Boris_Tepes_Dracula",
      image_url: "https://cdn.myanimelist.net/images/characters/12/48454.jpg?s=1937177a612af9ea8e2b7780ac7a2693",
      name: "Dracula, Boris Tepes",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 18342,
      url: "https://myanimelist.net/character/18342/Eliza",
      image_url: "https://cdn.myanimelist.net/images/characters/4/110872.jpg?s=6d8dddca742ddec918593cc94001d41d",
      name: "Eliza",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 3262,
      url: "https://myanimelist.net/character/3262/Johann_Faust_VIII",
      image_url: "https://cdn.myanimelist.net/images/characters/12/110873.jpg?s=231ee604e1baa9f92ed5857f4ad9652c",
      name: "Faust VIII, Johann",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 35349,
      url: "https://myanimelist.net/character/35349/Zorya_Gagarik",
      image_url: "https://cdn.myanimelist.net/images/characters/10/116267.jpg?s=eaa2d65d096b6560e6f443c71039e0dd",
      name: "Gagarik, Zorya",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20879,
      url: "https://myanimelist.net/character/20879/Zang-Ching_Hang",
      image_url: "https://cdn.myanimelist.net/images/characters/6/48450.jpg?s=ec4c65b8c37c680059346c5112a903b6",
      name: "Hang, Zang-Ching",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 7137,
      url: "https://myanimelist.net/character/7137/Iron_Maiden_Jeanne",
      image_url: "https://cdn.myanimelist.net/images/characters/13/110865.jpg?s=9a1307b2317a1dcee79d93b6327e7b4c",
      name: "Iron Maiden Jeanne",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20882,
      url: "https://myanimelist.net/character/20882/Kalim",
      image_url: "https://cdn.myanimelist.net/images/characters/14/48453.jpg?s=8c40dec0122fbb27ccfc289133b9875b",
      name: "Kalim",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20242,
      url: "https://myanimelist.net/character/20242/Kororo",
      image_url: "https://cdn.myanimelist.net/images/characters/10/60194.jpg?s=508fa0e3cb9becc29f1c94dd2a66f3fd",
      name: "Kororo",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 7144,
      url: "https://myanimelist.net/character/7144/Marco_Lasso",
      image_url: "https://cdn.myanimelist.net/images/characters/4/81878.jpg?s=74e66d5df868a2a69aaec8e0846b50c6",
      name: "Lasso, Marco",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20855,
      url: "https://myanimelist.net/character/20855/Luchist_Lasso",
      image_url: "https://cdn.myanimelist.net/images/characters/6/48395.jpg?s=3b7339e2fc227d3a69696ca9b6e40bda",
      name: "Lasso, Luchist",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20421,
      url: "https://myanimelist.net/character/20421/Lilirara",
      image_url: "https://cdn.myanimelist.net/images/characters/14/110601.jpg?s=e5aa8dd4208697bc0261dd530db60cec",
      name: "Lilirara",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20418,
      url: "https://myanimelist.net/character/20418/Lily",
      image_url: "https://cdn.myanimelist.net/images/characters/10/47008.jpg?s=63894c061dc84ae8570a3bf1d865dd9b",
      name: "Lily",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 19120,
      url: "https://myanimelist.net/character/19120/Matamune",
      image_url: "https://cdn.myanimelist.net/images/characters/9/168775.jpg?s=77cbe887c684d52acb97bdcad0eee6ca",
      name: "Matamune",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20407,
      url: "https://myanimelist.net/character/20407/Matilda_Matisse",
      image_url: "https://cdn.myanimelist.net/images/characters/14/60291.jpg?s=0b9c51e02199b1daff09f322894afeca",
      name: "Matisse, Matilda",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 15349,
      url: "https://myanimelist.net/character/15349/Chocolove_McDonell",
      image_url: "https://cdn.myanimelist.net/images/characters/3/110870.jpg?s=65953b6129a66b0af0e7c329ceb8f7df",
      name: "McDonell, Chocolove",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20696,
      url: "https://myanimelist.net/character/20696/Cebin_Mendel",
      image_url: "https://cdn.myanimelist.net/images/characters/13/47925.jpg?s=d9b282394b67ada02cb5ee9cf9ea17b7",
      name: "Mendel, Cebin",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20880,
      url: "https://myanimelist.net/character/20880/Blocken_Meyer",
      image_url: "https://cdn.myanimelist.net/images/characters/7/48451.jpg?s=ca1e94885309d2b01e588b62dca0c85f",
      name: "Meyer, Blocken",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20406,
      url: "https://myanimelist.net/character/20406/Mic",
      image_url: "https://cdn.myanimelist.net/images/characters/8/81876.jpg?s=857cd2d9cc64ab5679190d67f449f76a",
      name: "Mic",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20409,
      url: "https://myanimelist.net/character/20409/Meene_Montgomery",
      image_url: "https://cdn.myanimelist.net/images/characters/10/47968.jpg?s=5960f8fef550fb856ac9cd3dd12f6388",
      name: "Montgomery, Meene",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 9147,
      url: "https://myanimelist.net/character/9147/Morphine",
      image_url: "https://cdn.myanimelist.net/images/characters/15/46492.jpg?s=23654723bc39f3efb44f7ba917efc3bc",
      name: "Morphine",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20881,
      url: "https://myanimelist.net/character/20881/Nichrom",
      image_url: "https://cdn.myanimelist.net/images/characters/15/48452.jpg?s=9cdc2e24e9a50d17425a0d67c1a08d9c",
      name: "Nichrom",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 7147,
      url: "https://myanimelist.net/character/7147/Opacho",
      image_url: "https://cdn.myanimelist.net/images/characters/6/88958.jpg?s=8590e5beb945c8bb88d498e5e86fc68a",
      name: "Opacho",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20240,
      url: "https://myanimelist.net/character/20240/Lee_Pailong",
      image_url: "https://cdn.myanimelist.net/images/characters/2/60301.jpg?s=6423878990df8c02d65aaeed6d22746d",
      name: "Pailong, Lee",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 16145,
      url: "https://myanimelist.net/character/16145/Marion_Phauna",
      image_url: "https://cdn.myanimelist.net/images/characters/2/60289.jpg?s=b83bc7b13ea84100fe3d50913fb4c5b6",
      name: "Phauna, Marion",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 30836,
      url: "https://myanimelist.net/character/30836/Ponchi",
      image_url: "https://cdn.myanimelist.net/images/characters/16/81874.jpg?s=8f52548c2902cfe912fa5d25bddb9c6e",
      name: "Ponchi",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 21129,
      url: "https://myanimelist.net/character/21129/Radim",
      image_url: "https://cdn.myanimelist.net/images/characters/2/49262.jpg?s=f7071d4291cf577334509c650398b33d",
      name: "Radim",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 7145,
      url: "https://myanimelist.net/character/7145/Silva",
      image_url: "https://cdn.myanimelist.net/images/characters/7/60359.jpg?s=55ab383c4d604df3cb0def4b7c486d2e",
      name: "Silva",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 154976,
      url: "https://myanimelist.net/character/154976/Ryou_Sugimoto",
      image_url: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f0d17be5a46f7de113f7dbbb23ae5e1a",
      name: "Sugimoto, Ryou",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20857,
      url: "https://myanimelist.net/character/20857/Mohammed_Tabarsi",
      image_url: "https://cdn.myanimelist.net/images/characters/7/48397.jpg?s=e3cd4dbe936121382444f6b6c823b30a",
      name: "Tabarsi, Mohammed",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 6195,
      url: "https://myanimelist.net/character/6195/Tamao_Tamamura",
      image_url: "https://cdn.myanimelist.net/images/characters/16/60288.jpg?s=c1758d50cafbc63b9ae868d47243d420",
      name: "Tamamura, Tamao",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 20884,
      url: "https://myanimelist.net/character/20884/Yúan_Tao",
      image_url: "https://cdn.myanimelist.net/images/characters/12/48455.jpg?s=d3dd63ffe88127cb4aa48436f46a3970",
      name: "Tao, Yúan",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 45007,
      url: "https://myanimelist.net/character/45007/Ching_Tao",
      image_url: "https://cdn.myanimelist.net/images/characters/7/123969.jpg?s=6867a570639f0bea4dee9d300fbaf355",
      name: "Tao, Ching",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 4327,
      url: "https://myanimelist.net/character/4327/Jun_Tao",
      image_url: "https://cdn.myanimelist.net/images/characters/10/60168.jpg?s=fb6d9f923731b29f0eb105af0bf3bd54",
      name: "Tao, Jun",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 45005,
      url: "https://myanimelist.net/character/45005/Ran_Tao",
      image_url: "https://cdn.myanimelist.net/images/characters/14/123967.jpg?s=b6c22a75e98377e261ef047b2ffb0478",
      name: "Tao, Ran",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 9148,
      url: "https://myanimelist.net/character/9148/Tokagero",
      image_url: "https://cdn.myanimelist.net/images/characters/3/110603.jpg?s=0dd361ec5aca743a5a787498b3a3fd87",
      name: "Tokagero",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 12677,
      url: "https://myanimelist.net/character/12677/Ryunosuke_Umemiya",
      image_url: "https://cdn.myanimelist.net/images/characters/6/60193.jpg?s=638f017ccdb6a95027da5fa3ebea6d86",
      name: "Umemiya, Ryunosuke",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 15558,
      url: "https://myanimelist.net/character/15558/Pirika_Usui",
      image_url: "https://cdn.myanimelist.net/images/characters/14/163921.jpg?s=9db94b9d2cf021db6ea2f1a178a93f19",
      name: "Usui, Pirika",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 173,
      url: "https://myanimelist.net/character/173/Horokeu_Usui",
      image_url: "https://cdn.myanimelist.net/images/characters/13/81877.jpg?s=8ab47d948956f6f7ee1356717522e154",
      name: "Usui, Horokeu",
      role: "Supporting"
    },
    {
      children:[],
      mal_id: 154975,
      url: "https://myanimelist.net/character/154975/Zen_Yoneda",
      image_url: "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f0d17be5a46f7de113f7dbbb23ae5e1a",
      name: "Yoneda, Zen",
      role: "Supporting"
    }
  ]

 
let id = 0; // auto increament for new item in mal_id
let pageNumber = 0;
let loadedData = [];

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newAnimes = () => {
  //const statusChance = Math.random();
  return {
    mal_id: id++,
    name: namor.generate({ words: 1, numbers: 0 }),
    url: Math.floor(Math.random() * 30),
    image_url: Math.floor(Math.random() * 99)+"1000.jpg",
    role: namor.generate({ words: 1, numbers: 0 }),
  };
};

export function makeData(len = 35) {
  return range(len).map(d => {
    return {
      ...newAnimes(),
      children: range(Math.floor(Math.random() * 10)).map(newAnimes) // chidren list for mulitple episod of anime
     
    };
  });
}

export function useDummyData() {
  return dummyData.map(x => x)
}
export const getPageNumber = () => pageNumber;
export const setPageNumber = (number) => pageNumber=number;
export const getData = () => loadedData.length > 0 ? loadedData : useDummyData();
export const setData = (newData) => {
  loadedData= loadedData.concat(newData);
}
export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;


