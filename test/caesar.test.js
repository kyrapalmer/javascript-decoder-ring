const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return a string with shifted characters", () => {
        const input = "thinkful";
        const expected = "wklqnixo";
        const actual = caesar(input, 3, encode = true);
        expect(actual).to.equal(expected);
    });
    it("should return a string with -4 shifted characters", () => {
        const input = "thinkful";
        const expected = "pdejgbqh";
        const actual = caesar(input, -4, encode = true);
        expect(actual).to.equal(expected);
    });
    it("should return false when shift value is 0 or nonexistent", () => {
        const input = "";
        const expected = false;
        const actual = caesar(input);
        expect(actual).to.equal(expected);
    });
    it("should loop around if the shift goes beyond the alphabet", () => {
        const input = "xylophone";
        const expected = "bcpstlsri";
        const actual = caesar(input, 4, encode = true);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces through encoding", () => {
        const input = "just dance";
        const expected = "payz jgtik";
        const actual = caesar(input, 6, encode = true);
        expect(actual).to.equal(expected);
    });
    it("should maintain special characters", () => {
        const input = "just dance!";
        const expected = "payz jgtik!";
        const actual = caesar(input, 6, encode = true);
        expect(actual).to.equal(expected);
    });
    it("should decode the input if encode is false", () => {
        const input = "payz jgtik!";
        const expected = "just dance!";
        const actual = caesar(input, 6, encode = false);
        expect(actual).to.equal(expected);
    });
})