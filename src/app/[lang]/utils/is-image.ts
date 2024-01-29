export const isImage = (url: string): boolean => {
  const regexp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/;
  return regexp.test(url);
};
