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
    slang: "mortelenta",
    title: "Morte Lenta (interlúdio)",
    desc: "essa track faz parte do ep. NEGLIGÊNCIA (2021)",
    desclink: "https://abservar.bandcamp.com/album/neglig-ncia",
    descfull:
      "agora você pode contribuir com o projeto adquirindo 2 obras limitadas tamanho A2 (42,0 x 59,4 cm) em papel Couché [PRETO; BRANCO]",
    tags: "#experimental #soundart #eletric #hal9000",
    price: 10,
    imagePrimary: MorteLentaB,
    imageSecundary: MorteLentaPrint,
  },
  {
    id: 2,
    slang: "quetiapina",
    title: "Quetiapina",
    desc: "essa track faz parte do ep. NEGLIGÊNCIA (2021)",
    desclink: "https://abservar.bandcamp.com/album/neglig-ncia",
    descfull:
      "agora você pode contribuir com o projeto adquirindo uma obra limitada tamanho A2 (42,0 x 59,4 cm) em papel Couché [PRETO]",
    tags: "#experimental #grime #techno #drill #160bpm",
    price: 50,
    imagePrimary: Quetiapina,
    imageSecundary: Negligencia,
  },
  {
    id: 3,
    slang: "desmemoriado",
    title: "Desmemoriado",
    desc: "track lançada em setembro de 2020",
    desclink: "https://abservar.bandcamp.com/track/desmemoriado",
    descfull:
      "a sensação descrita foi de chegar ao topo de uma montanha e encontrar vários monstros voando ao seu redor. assustado, sem poder confiar em ninguém e o frio na barriga de uma queda sem fim. colagem sonora usando samples de spray, moeda, xícara, corrente, garrafa, chave+",
    tags: "#experimental #acid #downtempo",
    price: 100,
    imagePrimary: Desmemoriado,
    imageSecundary: DesmemoriadoPrint,
  },
  {
    id: 4,
    slang: "fluoxetina",
    title: "Fluoxetina",
    desc: "essa track faz parte do ep. NEGLIGÊNCIA (2021)",
    desclink: "https://abservar.bandcamp.com/album/neglig-ncia",
    descfull:
      "agora você pode contribuir com o projeto adquirindo uma obra limitada tamanho A2 (42,0 x 59,4 cm) em papel Couché [PRETO]",
    tags: "#experimental  #techno #afrobeat #hardbass #160bpm",
    price: 200,
    imagePrimary: Fluoxetina,
    imageSecundary: Negligencia,
  },
];

export const useArt = (slang) => {
  return arts.find((a) => a.slang === slang);
};
