import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: "div",
  router: service(),
  classNames: ["custom-category-boxes-container"],
  classNameBindings: ["noneSelected:none-selected"],
  _allowedCategories(selectedCategories) {
    // filters categories to only include selected categories for each section
    let availableCategories = this.site.categories.filter(category => {
      if (selectedCategories.indexOf(category.id) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    return availableCategories;
  },
  @discourseComputed()
  shouldRenderHeadings() {
    let isCategoryPage = this.router.currentRoute.name.includes("category");
    let hasCategoriesSet = false;
    if (
      settings.first_categories ||
      settings.second_categories ||
      settings.third_categories ||
      settings.fourth_categories ||
      settings.fifth_categories
    ) {
      hasCategoriesSet = true;
    }
    if (!isCategoryPage && hasCategoriesSet) {
      return true;
    } else {
      return false;
    }
  },
  @discourseComputed()
  noneSelected() {
    return this.router.currentRoute.name.includes("None");
  },
  @discourseComputed()
  firstCategories() {
    return this._allowedCategories(
      settings.first_categories.split("|").map(id => Number(id))
    );
  },
  @discourseComputed()
  secondCategories() {
    return this._allowedCategories(
      settings.second_categories.split("|").map(id => Number(id))
    );
  },
  @discourseComputed()
  thirdCategories() {
    return this._allowedCategories(
      settings.third_categories.split("|").map(id => Number(id))
    );
  },
  @discourseComputed()
  fourthCategories() {
    return this._allowedCategories(
      settings.fourth_categories.split("|").map(id => Number(id))
    );
  },
  @discourseComputed()
  fifthCategories() {
    return this._allowedCategories(
      settings.fifth_categories.split("|").map(id => Number(id))
    );
  }
});
