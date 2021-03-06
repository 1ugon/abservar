// HOME ARTS
import MorteLentaHome from "../assets/homearts/MORTE-LENTA.png";
import QuetiapinaHome from "../assets/homearts/QUETIAPINA.png";
import FluoxetinaHome from "../assets/homearts/FLUOXETINA.png";
import DesmemoriadoHome from "../assets/homearts/DESMEMORIADO.png";

// ARTS & PRINTS
import MorteLentaB from "../assets/arts/B-MORTE-LENTA.png";
import MorteLentaPrint from "../assets/arts/MORTE-LENTA-PRINT.png";
import Quetiapina from "../assets/arts/QUETIAPINA.png";
import Fluoxetina from "../assets/arts/FLUOXETINA.png";
import Desmemoriado from "../assets/arts/DESMEMORIADO.png";

export const arts = [
  {
    id: 1,
    slang: "mortelenta",
    title: "Morte Lenta",
    descprim: "essa track faz parte do ep. NEGLIGÊNCIA (2020)",
    descsec:
      "você pode apoiar esse projeto adquirindo uma das obras originais.",
    link: "",
    price: 50,
    imageHome: MorteLentaHome,
    imagePrimary: MorteLentaB,
    imageSecundary: MorteLentaPrint,
  },
  {
    id: 2,
    slang: "quetiapina",
    title: "Quetiapina",
    link: "https://abservar.bandcamp.com/album/neglig-ncia",
    descprim: "essa track faz parte do ep. NEGLIGÊNCIA (2020)",
    descsec:
      "você pode apoiar esse projeto adquirindo uma das obras originais.",
    price: "",
    imageHome: QuetiapinaHome,
    imagePrimary: Quetiapina,
    imageSecundary: Quetiapina,
  },
  {
    id: 3,
    slang: "fluoxetina",
    title: "Fluoxetina",
    link: "https://abservar.bandcamp.com/album/neglig-ncia",
    descprim: "essa track faz parte do ep. NEGLIGÊNCIA (2020)",
    descsec:
      "você pode apoiar esse projeto adquirindo uma das obras originais.",
    price: "",
    imageHome: FluoxetinaHome,
    imagePrimary: Fluoxetina,
    imageSecundary: Fluoxetina,
  },
  {
    id: 4,
    slang: "desmemoriado",
    title: "Desmemoriado",
    link: "https://abservar.bandcamp.com/track/desmemoriado",
    descprim: "colagem sonora usando spray, moeda, xícara, chave+",
    descsec: "Ano: - 2020",
    price: "",
    imageHome: DesmemoriadoHome,
    imagePrimary: Desmemoriado,
    imageSecundary: Desmemoriado,
  },
];

export const useArt = (slang) => {
  return arts.find((a) => a.slang === slang);
};
