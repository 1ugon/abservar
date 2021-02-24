import Quetiapina from "../assets/arts/QUETIAPINA.png";
import Fluoxetina from "../assets/arts/FLUOXETINA.png";
import MorteLentaB from "../assets/arts/B-MORTE-LENTA.png";

import MorteLentaPrint from "../assets/prints/MORTE-LENTA.png";
import Negligencia from "../assets/prints/NEGLIGÊNCIA.png";

export const arts = [
  {
    id: 1,
    slang: "mortelenta",
    title: "Morte Lenta (interlúdio)",
    link: "https://abservar.bandcamp.com/album/neglig-ncia",
    desc:
      "essa track faz parte do ep. NEGLIGÊNCIA (2020), você pode apoiar esse projeto adquirindo uma das obras originais.",
    descsec:
      "Disponível na versão A e versão B por tempo limitado, o de fundo branco 50 reais e o de fundo preto 100",
    paper: "Couché 300g",
    dimension: "A2 (42,0 x 59,4 cm)",
    year: "2021",
    price: "50/100",
    imagePrimary: MorteLentaB,
    imageSecundary: MorteLentaPrint,
  },
  {
    id: 2,
    slang: "quetiapina",
    title: "Quetiapina",
    link: "https://abservar.bandcamp.com/album/neglig-ncia",
    desc:
      "essa track faz parte do ep. NEGLIGÊNCIA (2020), você pode apoiar esse projeto adquirindo uma das obras originais.",
    descsec: "",
    paper: "Couché 300g",
    dimension: "A2 (42,0 x 59,4 cm)",
    year: "2020",
    price: 100,
    imagePrimary: Quetiapina,
    imageSecundary: Negligencia,
  },
  {
    id: 3,
    slang: "fluoxetina",
    title: "Fluoxetina",
    link: "https://abservar.bandcamp.com/album/neglig-ncia",
    desc:
      "essa track faz parte do ep. NEGLIGÊNCIA (2020), você pode apoiar esse projeto adquirindo uma das obras originais.",
    descsec: "",
    paper: "Couché 300g",
    dimension: "A2 (42,0 x 59,4 cm)",
    year: "2020",
    price: 100,
    imagePrimary: Fluoxetina,
    imageSecundary: Negligencia,
  },
];

export const useArt = (slang) => {
  return arts.find((a) => a.slang === slang);
};
