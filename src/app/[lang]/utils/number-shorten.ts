export const numberShorten = (num: number): string => {
  const tresholds: { value: number; fraction: number; postfix: string }[] = [
    {
      value: 1_000_000,
      postfix: "M",
      fraction: 1,
    },
    { value: 100_000, postfix: "k", fraction: 0 },
    { value: 10_000, postfix: "k", fraction: 1 },
    { value: 1_000, postfix: "k", fraction: 2 },
  ];
  for (let treshold of tresholds) {
    if (num >= treshold.value)
      return (
        (num / treshold.value).toFixed(treshold.fraction) + treshold.postfix
      );
  }
  return num.toString();
};
