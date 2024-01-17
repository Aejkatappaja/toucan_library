export const replaceDashByComma = (sentence: string): string => {
  if (typeof sentence !== "string" || !sentence) {
    return sentence;
  }
  return sentence.replace(/-/g, ", ");
};
