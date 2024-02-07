import { create } from "zustand";

export type PlanetType = "moon" | "mars" | "earth";

type usePlanetType = {
  planet: PlanetType;
  setPlanet: (pl: PlanetType) => void;
};

export const usePlanet = create<usePlanetType>((set) => ({
  planet: "moon",
  setPlanet: (pl) => set(() => ({ planet: pl })),
}));

type useDarkType = {
  dark: boolean;
  setDark: () => void;
};

export const useDark = create<useDarkType>((set) => ({
  dark: false,
  setDark: () => set((state) => ({ dark: !state.dark })),
}));
