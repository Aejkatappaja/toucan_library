import { replaceDashByComma } from "./books.utils";

describe("replaceDashByComma", () => {
  it("should replace dashes with commas in a sentence", () => {
    const sentence = "This-is-an-example";
    const expected = "This, is, an, example";
    const result = replaceDashByComma(sentence);
    expect(result).toEqual(expected);
  });

  it("should do nothing if the sentence is empty", () => {
    const sentence = "";
    const result = replaceDashByComma(sentence);
    expect(result).toEqual("");
  });

  it("should do nothing if the argument is not a string", () => {
    const sentence = 123;
    //@ts-expect-error
    const result = replaceDashByComma(sentence);
    expect(result).toEqual(sentence);
  });

  it("should do nothing if the argument is null or undefined", () => {
    //@ts-expect-error
    const resultNull = replaceDashByComma(null);
    //@ts-expect-error
    const resultUndefined = replaceDashByComma(undefined);

    expect(resultNull).toEqual(null);
    expect(resultUndefined).toEqual(undefined);
  });
});
