// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  //tests for encoding functionality
  it("should return an encoded string when text is inputted", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal("jrufscpw");
  });
  it("should account for spaces and ignore capital letters when encoding text", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
  });
  
  // tests for decoding functionality
  it("should decode an encoded message", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal("thinkful");
  });
  
  // tests if the alphabet parameter is valid
  it("should return false if alphabet parameter is not a string of 26 letters", () => {
    const actual = substitution("thinkful", "short");
    expect(actual).to.equal(false);
  });
  it("should return false if all characters in alphabet parameter is not unique", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(false);
  });
});
