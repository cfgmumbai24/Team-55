import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const isLoggedInStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (data) => set(() => ({ isLoggedIn: data })),
    }),
    {
      name: "isLoggedIn",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
