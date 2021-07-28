import { withPluginApi } from "discourse/lib/plugin-api";
import discourseComputed from "discourse-common/utils/decorators";
import Category from "discourse/models/category";

export default {
  name: "customize-categories-boxes",

  initialize() {
    withPluginApi("0.8.14", api => {
      api.modifyClass("component:categories-boxes", {
        tagName: "div",
        _allowedCategories(selectedCategories) {
          let availableCategories = [];
          
          this.categories.forEach(category => {
            if (availableCategories.indexOf(category.id === -1)) {
              availableCategories.push(category.id);
              if (category.has_children) {
                availableCategories = [...availableCategories, ...category.subcategory_ids];
              }
            }
          });

          availableCategories = availableCategories.map(id => {
            return Category.findById(id);
          });

          availableCategories = availableCategories.filter(category => {
            return selectedCategories.indexOf(category.id) !== -1;
          });

          return availableCategories;
        },
        @discourseComputed()
        isCategoryPage() {
          if (this.topicTrackingState.filterCategory && this.topicTrackingState.filterCategory.has_children) {
            return true;
          } else {
            return false;
          }
        },
        @discourseComputed()
        firstCategories() {
          return this._allowedCategories(settings.first_categories.split("|").map(id => Number(id)));
        },
        @discourseComputed()
        secondCategories() {
          return this._allowedCategories(settings.second_categories.split("|").map(id => Number(id)));
        },
        @discourseComputed()
        thirdCategories() {
          return this._allowedCategories(settings.third_categories.split("|").map(id => Number(id)));
        },
        @discourseComputed()
        fourthCategories() {
          return this._allowedCategories(settings.fourth_categories.split("|").map(id => Number(id)));
        },
        @discourseComputed()
        fifthCategories() {
          return this._allowedCategories(settings.fifth_categories.split("|").map(id => Number(id)));
        },
      })
    })
  }
}