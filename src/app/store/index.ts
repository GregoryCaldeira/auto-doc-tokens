import create, { SetState, GetState } from "zustand";
import { devtools } from "zustand/middleware";

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({

});

export const useStore = create(
  devtools(createRootSlice, {
    name: "Auto Doc Tokens Store",
    anonymousActionType: "unknown action"
  })
);
