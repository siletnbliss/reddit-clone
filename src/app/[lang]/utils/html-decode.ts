export const htmlDecode = (input: string) => {
  if (!input || !input.length) return null;
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};
