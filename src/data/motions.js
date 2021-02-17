import GrayBall from "../assets/motions/GRAYBALL.mp4";
import Janela from "../assets/motions/JANELA.mp4";

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
];

export const useMotion = (slang) => {
  return motions.find((m) => m.slang === slang);
};
