import { registerUnbound } from "discourse-common/lib/helpers";
import { withPluginApi } from "discourse/lib/plugin-api";
import Category from "discourse/models/category";

registerUnbound("hasSettings", chosenCategories => {
  if (chosenCategories.length === 0) {
    return false;
  } else {
    return true;
  }
});

registerUnbound("isIncluded", (chosenCategories, categoryId) => {
  return (
    chosenCategories
      .split("|")
      .map(id => Number(id))
      .indexOf(categoryId) !== -1
  );
});

registerUnbound("canViewChosenCategories", (chosenCategories, categories) => {
  chosenCategories = chosenCategories.split("|").map(id => Number(id));
  let availableCategories = categories.content.map(category => category.id);

  availableCategories = availableCategories.filter(categoryId => {
    return chosenCategories.indexOf(categoryId) !== -1;
  });

  if (availableCategories.length !== 0) {
    return true;
  } else {
    return false;
  }
});

registerUnbound("getAbbreviation", categoryName => {
  let abbr = categoryName.replace(" and", "").split(" ");

  if (abbr.length > 1) {
    abbr = abbr[0].charAt(0).toUpperCase() + abbr[1].charAt(0).toLowerCase();
  } else {
    abbr = abbr[0].charAt(0).toUpperCase() + abbr[0].charAt(1).toLowerCase();
  }

  return abbr;
});
