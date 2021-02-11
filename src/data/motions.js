import GrayBall from "../assets/motions/GRAYBALL.mp4";
import Janela from "../assets/motions/JANELA.mp4";
import Varandas from "../assets/motions/VARANDAS.mp4";

export const motions = [
  {
    id: 1,
    slang: "grayball",
    title: "GrayBall",
    description: "",
    price: 0,
    video: GrayBall,
  },
  {
    id: 2,
    slang: "janela",
    title: "Janela",
    description: "",
    price: 0,
    video: Janela,
  },
  {
    id: 3,
    slang: "varandas",
    title: "Varandas",
    description: "",
    price: 0,
    image: Varandas,
  },
  {
    id: 4,
    slang: "varandas",
    title: "Varandas",
    description: "",
    price: 0,
    image: Varandas,
  },
];

export const useMotion = (slang) => {
  return motions.find((m) => m.slang === slang);
};
