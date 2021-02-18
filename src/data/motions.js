import GrayBall from "../assets/motions/GRAYBALL.gif";
import Janela from "../assets/motions/JANELA.gif";

export const motions = [
  {
    id: 1,
    slang: "grayball",
    title: "GrayBall",
    description: "",
    video: GrayBall,
  },
  {
    id: 2,
    slang: "janela",
    title: "Janela",
    description: "",
    video: Janela,
  },
];

export const useMotion = (slang) => {
  return motions.find((m) => m.slang === slang);
};
