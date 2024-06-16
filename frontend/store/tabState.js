import { create } from "zustand";

export const tabsStore = create((set) => ({
  tab: "",
  setTab: (data) => set(() => ({ tab: data })),
}));
