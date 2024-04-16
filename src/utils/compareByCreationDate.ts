export const compareByCreationDate: <T extends { created: string }>(
  a: T,
  b: T,
) => number = (a, b) => {
  return new Date(a.created).getTime() - new Date(b.created).getTime();
};
