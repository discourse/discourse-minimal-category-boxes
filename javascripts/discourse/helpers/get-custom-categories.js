import { registerUnbound } from "discourse-common/lib/helpers";
import Category from "discourse/models/category";

registerUnbound("getCustomCategories", (settings) => {
  if (settings.length === 0) return false;
  let categories = [];
  let categoriesSettings = settings.split("|").map(id => Number(id))

    categoriesSettings.forEach(categoryId => {
      categories.push(Category.findById(categoryId))
    })

  return categories;
});

registerUnbound("getAbbreviation", (categoryName) => {
  let abbr = categoryName.replace(" and", "").split(" ")

  if (abbr.length > 1) {
    abbr = abbr[0].charAt(0).toUpperCase() + abbr[1].charAt(0).toLowerCase();
  } else {
    abbr = abbr[0].charAt(0).toUpperCase() + abbr[0].charAt(1).toLowerCase();
  }

  return abbr;
})
