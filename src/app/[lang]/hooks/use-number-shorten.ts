import { useMemo } from "react";
import { numberShorten } from "../utils/number-shorten";

export const useNumberShorten = (num: number) => {
  const shortened = useMemo(() => numberShorten(num), [num]);
  return shortened;
};
