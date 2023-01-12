import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GithubUserStore {
  user: string;
  setUser: (user: string) => void;
}

export const useGithubUserStore = create(
  persist<GithubUserStore>(
    (set) => ({
      user: "",
      setUser: (user) => set({ user }),
    }),
    {
      name: "github-user",
    }
  )
);
