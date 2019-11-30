
const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.checkBook", () => {
    test("returns true when a book is found by title", () => {
      expect(catalogueService.checkBook("Great Expectations")).toBe(true);
    });

    test("returns false when a book cannot be found by title", () => {
      expect(catalogueService.checkBook("Gone With The Wind")).toBe(false);
    });

    test("returns true when a partial match is found", () => {
      expect(catalogueService.checkBook("Expectations")).toBe(true);
    });

    test("returns false when not even a partial match is found", () => {
      expect(catalogueService.checkBook("The Wind")).toBe(false);
    });
  });

  describe("catalogueService.countBooksByKeyword", () => {
    test("return a count (Number) of how many book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword("Assassin")).toBe(3);
    });
    test("return a count (Number) of how many book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword("2666")).toBe(1);
    });
    });
    describe("catalogueService.getStockCount", () => {
      test("return the number of items that are in stock of a given title", () => {
        expect(catalogueService.getStockCount("Between the Assassinations")).toBe(9);
      });
      test("return the number of items that are in stock of a given title", () => {
        expect(catalogueService.getStockCount("A Tale of Two Cities")).toBe(3);
      });
      test("returns The Great Gatsbys when passed 0", () => {
        expect(catalogueService.getStockCount("The Great Gatsby")).toBe(0);
      });
      test("returns Dracula when passed 0", () => {
        expect(catalogueService.getStockCount("The Origin of Species")).toBe(50);
      });
    });
    describe("catalogueService.stockReview", () => {
      test("return Dracula is not in stock", () => {
        expect(catalogueService.stockReview("Dracula")).toBe("Not in Stock");
      });
      test("return Normal People is low stock", () => {
        expect(catalogueService.stockReview("Normal People")).toBe("Low Stock");
      });
      test("return The Blind Assassin is medium stock", () => {
        expect(catalogueService.stockReview("The Blind Assassin")).toBe("Medium Stock");
      });
      test("return The Origin of Species is high stock", () => {
        expect(catalogueService.stockReview("Why Be Happy When You Could Be Normal?")).toBe("High Stock");
      });
  });

});