import { foodDelivery } from "../food delivery.js";
import { assert } from "chai";

describe("foodDelivery", () => {
  describe("getCategory", () => {
    it('should return correct description for "Vegan"', () => {
      assert.strictEqual(
        foodDelivery.getCategory("Vegan"),
        "Dishes that contain no animal products."
      );
    });

    it('should return correct description for "Vegetarian"', () => {
      assert.strictEqual(
        foodDelivery.getCategory("Vegetarian"),
        "Dishes that contain no meat or fish."
      );
    });
    it('should return correct description for "Gluten-Free"', () => {
      assert.strictEqual(
        foodDelivery.getCategory("Gluten-Free"),
        "Dishes that contain no gluten."
      );
    });
    it('should return correct description for "All"', () => {
      assert.strictEqual(
        foodDelivery.getCategory("All"),
        "All available dishes."
      );
    });

    it("should throw error for invalid category", () => {
      assert.throws(() => {
        foodDelivery.getCategory("InvalidCategory");
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.getCategory({});
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.getCategory(true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.getCategory(undefined);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.getCategory(2);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.getCategory("2");
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.getCategory([]);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.getCategory(true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.getCategory("");
      },  "Invalid Information!"
    );
    });
  });

  describe("addMenuItem", () => {
    it("should return correct message and count", () => {
      const result = foodDelivery.addMenuItem([{ name: "Salad", price: 8 },{ name: "French fries", price: 4 }],8);
      assert.strictEqual(result,"There are 2 available menu items matching your criteria!"
      );
    });
    it("should return correct message and count", () => {
      const result = foodDelivery.addMenuItem([{ name: "Salad", price: 8 },{ name: "French fries", price: 4 },{name:'Soup',price:"2"}],8);
      assert.strictEqual(result,"There are 3 available menu items matching your criteria!"
      );
    });

    it("should throw error for invalid input", () => {
      assert.throws(() => {foodDelivery.addMenuItem({}, "string"),8},  "Invalid Information!"
    );
     
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {foodDelivery.addMenuItem([{ name: "Salad", price: 8 },{ name: "French fries", price: 4 },],-2);},  "Invalid Information!"
    );
      assert.throws(() => {foodDelivery.addMenuItem([{ name: "Salad", price: 8 },{ name: "French fries", price: 4 },],[]);},  "Invalid Information!"
    );
      assert.throws(() => {foodDelivery.addMenuItem([{ name: "Salad", price: 8 },{ name: "French fries", price: 4 },],'');},  "Invalid Information!"
    );
      assert.throws(() => {foodDelivery.addMenuItem([{ name: "Salad", price: 8 },{ name: "French fries", price: 4 },],{});},  "Invalid Information!"
    );
      assert.throws(() => {foodDelivery.addMenuItem([{ name: "Salad", price: 8 },{ name: "French fries", price: 4 },],'not empty string');},  "Invalid Information!"
    );
    
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem(
          [
            { name: "Salad", price: 8 },
            { name: "French fries", price: 4 },
          ],
          undefined
        );
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem(
          [
            { name: "Salad", price: 8 },
            { name: "French fries", price: 4 },
          ],
          true
        );
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
        assert.throws(() => {
          foodDelivery.addMenuItem({ name: "Salad", price: 8 }, 2.5);
        },  "Invalid Information!"
      );
      });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem({ name: "Salad", price: 8 }, 8);
      },  "Invalid Information!"
    );
    });
    
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem([], 8);
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem(true, 8);
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem(undefined, 8);
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem("", 8);
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem(2, 8);
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem(-2, 8);
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem(
          [
            { name: "Salad", price: 8 },
            { name: "French fries", price: 4 },
          ],
          4
        );
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem([{ name: "Salad" }], 2.5);
      },  "Invalid Information!"
    );
    });
    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.addMenuItem([], 6);
      },  "Invalid Information!"
    );
    });
  });

  describe("calculateOrderCost", () => {
    it("should calculate total cost with discount", () => {
   
        assert.strictEqual(foodDelivery.calculateOrderCost(["standart"],["beverage"],true),"You spend $2.98 for shipping and addons with a 15% discount!");
        assert.strictEqual(foodDelivery.calculateOrderCost(["express"],["beverage"],true),"You spend $7.22 for shipping and addons with a 15% discount!");
    });
    it("should calculate total cost without discount", () => {
      
      assert.strictEqual(foodDelivery.calculateOrderCost(["standard"],["sauce"],false), "You spend $4.00 for shipping and addons!");
      assert.strictEqual(foodDelivery.calculateOrderCost(["standard"],["beverage"],false), "You spend $6.50 for shipping and addons!");
    });

    it("should throw error for invalid input", () => {
      assert.throws(() => {
        foodDelivery.calculateOrderCost("empty", [], true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost("", [], true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost(undefined, {}, true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost([], true, true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost([], {}, true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost(true, [], true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost({}, [], true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost(NaN, [], true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost(undefined, [], true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost(2, [], true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost("", [], true);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost({}, [], NaN);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost({}, [], undefined);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost({}, [], 2);
      },  "Invalid Information!"
    );
      assert.throws(() => {
        foodDelivery.calculateOrderCost({}, [], "invalid");
      },  "Invalid Information!"
    );
    });
  });
});
