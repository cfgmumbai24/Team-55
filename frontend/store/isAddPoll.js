import { create } from "zustand";

export const pollAddStore = create((set) => ({
  isPollAdd: false,
  setIsPollAdd: (data) => set(() => ({ isPollAdd: data })),

  allPolls: [],
  setAllPolls: (data) => set(() => ({ allPolls: data })),
}));
