const chai = require("chai");
const expect = chai.expect;

describe("languageAcademy", () => {
  describe("difficultyLevel()", () => {
    it("should return the correct description for 'Beginner' course type", () => {
      const result = languageAcademy.difficultyLevel("Beginner");
      expect(result).to.equal(
        "The course is beginner-friendly and focuses on basic concepts like greetings, numbers, and common phrases."
      );
    });

    it("should return the correct description for 'Intermediate' course type", () => {
      const result = languageAcademy.difficultyLevel("Intermediate");
      expect(result).to.equal(
        "The course is moderately challenging and includes grammar rules, sentence structure, and conversational practice."
      );
    });

    it("should return the correct description for 'Advanced' course type", () => {
      const result = languageAcademy.difficultyLevel("Advanced");
      expect(result).to.equal(
        "The course is highly challenging and covers advanced vocabulary, idioms, and specialized topics like business or technical language."
      );
    });

    it("should return an error message for an invalid course type", () => {
      const result = languageAcademy.difficultyLevel("Expert");
      expect(result).to.equal(
        "Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'."
      );
    });
  });

  describe("discountbyNumber()", () => {
    it("should apply a 10% discount for 2 courses", () => {
      const result = languageAcademy.discountbyNumber(2, 200);
      expect(result).to.equal("Discount applied! You saved 20$ on your courses.");
    });

    it("should apply a 25% discount for 4 courses", () => {
      const result = languageAcademy.discountbyNumber(4, 400);
      expect(result).to.equal("Discount applied! You saved 100$ on your courses.");
    });

    it("should not apply a discount for 1 course", () => {
      const result = languageAcademy.discountbyNumber(1, 100);
      expect(result).to.equal("You cannot apply a discount.");
    });

    it("should throw an error for invalid input types", () => {
      expect(() => languageAcademy.discountbyNumber("two", 200)).to.throw("Invalid input.");
      expect(() => languageAcademy.discountbyNumber(2, "200")).to.throw("Invalid input.");
    });
  });

  describe("additionalResources()", () => {
    const resourceCatalog = [
      { name: "Textbook", price: 50 },
      { name: "Workbook", price: 30 },
      { name: "Audio CD", price: 20 },
    ];

    it("should calculate the total cost of needed resources", () => {
      const neededResources = ["Textbook", "Workbook"];
      const result = languageAcademy.additionalResources(resourceCatalog, neededResources);
      expect(result).to.equal("Total Cost is 80$.");
    });

    it("should return 0$ if no matching resources are found", () => {
      const neededResources = ["Video Lessons"];
      const result = languageAcademy.additionalResources(resourceCatalog, neededResources);
      expect(result).to.equal("Total Cost is 0$.");
    });

    it("should throw an error for invalid input types", () => {
      expect(() => languageAcademy.additionalResources("invalid", ["Textbook"])).to.throw("Invalid input.");
      expect(() => languageAcademy.additionalResources(resourceCatalog, "invalid")).to.throw("Invalid input.");
    });
  });
});
