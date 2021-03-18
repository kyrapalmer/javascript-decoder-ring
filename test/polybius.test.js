const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("my polybius tests", () => {
    it("should return an encoded message as a string of numbers", () => {
        const input = "thinkful";
        const expected = "4432423352125413";
        const actual = polybius(input, encode = true);
        expect(actual).to.equal(expected);
    });
    it("should decode the letters i and j to 42", () => {
        const input = "4432423352125413";
        const expected = "th(i/j)nkful";
        const actual = polybius(input, encode = false);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "ThinKful";
        const expected = "4432423352125413";
        const actual = polybius(input, encode = true);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces throughout encoding", () => {
        const input = "hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input, encode = true);
        expect(actual).to.equal(expected);
    });
})