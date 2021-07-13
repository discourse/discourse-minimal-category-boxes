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
