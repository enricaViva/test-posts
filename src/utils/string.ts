export const limitLength = (string: string, limit: number): string => {
  if (string.length > limit) {
    return `${string.substr(0, limit)}...`
  }
  return string;
};