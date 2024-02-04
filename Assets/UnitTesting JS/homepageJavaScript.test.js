
const { default: test } = require("node:test");
const preloaderFunc = require("../JavaScript/homepageJavaScript");

test("Aici ar trebui sa se puna clasa", () => {
    expect(preloaderFunc()).toMatch("/remove-preloader/");
});