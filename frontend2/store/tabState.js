import { create } from "zustand";

export const tabsStore = create((set) => ({
  tab: "Home",
  setTab: (data) => set(() => ({ tab : data })),
}));
