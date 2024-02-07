import { create } from "zustand";

type usePlanetType = {
  planet: string;
  setPlanet: (pl: string) => void;
};

export const usePlanet = create<usePlanetType>((set) => ({
  planet: "moon",
  setPlanet: (pl) => set(() => ({ planet: pl })),
}));
