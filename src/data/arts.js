import Desmemoriado from "../assets/arts/DESMEMORIADO.png";
import Quetiapina from "../assets/arts/QUETIAPINA.png";
import Fluoxetina from "../assets/arts/FLUOXETINA.png";
import MorteLentaB from "../assets/arts/B-MORTE-LENTA.png";

export const arts = [
  {
    id: 1,
    slang: "desmemoriado",
    title: "Desmemoriado",
    description: "",
    price: 0,
    image: Desmemoriado,
    imagealt: "",
    class: "art1",
  },
  {
    id: 2,
    slang: "quetiapina",
    title: "Quetiapina",
    description: "",
    price: 0,
    image: Quetiapina,
    imagealt: "",
    class: "art2",
  },
  {
    id: 3,
    slang: "fluoxetina",
    title: "Fluoxetina",
    description: "",
    price: 0,
    image: Fluoxetina,
    imagealt: "",
    class: "art3",
  },
  {
    id: 4,
    slang: "mortelentab",
    title: "MorteLentaB",
    description: "",
    price: 0,
    image: MorteLentaB,
    imagealt: "",
    class: "art4",
  },
];

export const useArt = (slang) => {
  return arts.find((a) => a.slang === slang);
};
