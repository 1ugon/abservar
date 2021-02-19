import Desmemoriado from "../assets/arts/DESMEMORIADO.png";
import Quetiapina from "../assets/arts/QUETIAPINA.png";
import Fluoxetina from "../assets/arts/FLUOXETINA.png";
import MorteLentaB from "../assets/arts/B-MORTE-LENTA.png";

import DesmemoriadoPrint from "../assets/prints/DESMEMORIADO.png";
import MorteLentaPrint from "../assets/prints/MORTE-LENTA.png";
import Negligencia from "../assets/prints/NEGLIGÊNCIA.png";

export const arts = [
  {
    id: 1,
    slang: "mortelentab",
    title: "Morte Lenta B",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 10,
    imagePrimary: MorteLentaB,
    imageSecundary: MorteLentaPrint,
  },
  {
    id: 2,
    slang: "quetiapina",
    title: "Quetiapina",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 50,
    imagePrimary: Quetiapina,
    imageSecundary: Negligencia,
  },
  {
    id: 3,
    slang: "desmemoriado",
    title: "Desmemoriado",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 100,
    imagePrimary: Desmemoriado,
    imageSecundary: DesmemoriadoPrint,
  },
  {
    id: 4,
    slang: "fluoxetina",
    title: "Fluoxetina",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 200,
    imagePrimary: Fluoxetina,
    imageSecundary: Negligencia,
  },
];

export const useArt = (slang) => {
  return arts.find((a) => a.slang === slang);
};
