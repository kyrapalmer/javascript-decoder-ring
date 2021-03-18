const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("my substitution tests", () => {
    it("should return false if the parameter alphabet isn't 26 characters", () => {
        const expected = false;
        const actual = substitution("thinkful", "xoyqmcgrukswev", encode = true);
        expect(actual).to.equal(expected);
    });
    it("should correctly translate the given word or phrase", () => {
        const input = "thinkful";
        const expected = "jrufscpw";
        const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev", encode = true);
        expect(actual).to.equal(expected);
    });
    it("should return false if the given alphabet has any duplicates", () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input, "xooqmcgrukswaflnthdjpzibev", encode = true);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces throughout", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "tHinkFul";
        const expected = "jrufscpw";
        const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev", encode = true);
        expect(actual).to.equal(expected);
    });
    it("should maintain any special characters throughout", () => {
        const expected = "$elp xhm$ xf& mbymwwmfj dne!";
        const actual = substitution("$You are$ an& excellent spy!", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
})