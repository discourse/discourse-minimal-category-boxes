import { withPluginApi } from "discourse/lib/plugin-api";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";
import Category from "discourse/models/category";

export default {
  name: "customize-categories-boxes",

  initialize() {
    withPluginApi("0.8.14", api => {
      api.modifyClass("component:categories-boxes", {
        tagName: "div",
        router: service(),
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
        isCategoryPage() {
          let isCategoryPage = this.router.currentRoute.name.includes("category");
          if (isCategoryPage) {
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