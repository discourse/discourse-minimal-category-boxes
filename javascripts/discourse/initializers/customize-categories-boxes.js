import { withPluginApi } from "discourse/lib/plugin-api";
import discourseComputed from "discourse-common/utils/decorators";
import Category from "discourse/models/category";

export default {
  name: "customize-categories-boxes",

  initialize() {
    withPluginApi("0.8.14", api => {
      api.modifyClass("component:categories-boxes", {
        tagName: "div",
        @discourseComputed()
        firstCategories(categorySettings) {
          let categories = [];
          let categoriesSettings = categorySettings.split("|").map(id => Number(id))

          categoriesSettings.forEach(categoryId => {
            categories.push(Category.findById(categoryId))
          })

          return categories.length? categories : null;
        },
        @discourseComputed()
        secondCategories() {
          let secondCategories = [];
          let secondCategoriesSettings = settings.second_categories.split("|").map(id => Number(id));

          secondCategoriesSettings.forEach(categoryId => {
            secondCategories.push(Category.findById(categoryId))
          })

          return secondCategories.length? secondCategories : null;
        },
        @discourseComputed()
        thirdCategories() {
          let thirdCategories = [];
          let thirdCategoriesSettings = settings.third_categories.split("|").map(id => Number(id));

          thirdCategoriesSettings.forEach(categoryId => {
            thirdCategories.push(Category.findById(categoryId))
          })

          return thirdCategories.length? thirdCategories : null;
        },
        @discourseComputed()
        fourthCategories() {
          let fourthCategories = [];
          let fourthCategoriesSettings = settings.fourth_categories.split("|").map(id => Number(id));

          fourthCategoriesSettings.forEach(categoryId => {
            fourthCategories.push(Category.findById(categoryId))
          })

          return fourthCategories.length? fourthCategories : null;
        },
        @discourseComputed()
        fifthCategories() {
          let fifthCategories = [];
          let fifthCategoriesSettings = settings.fifth_categories.split("|").map(id => Number(id));

          fifthCategoriesSettings.forEach(categoryId => {
            fifthCategories.push(Category.findById(categoryId))
          })

          return fifthCategories.length? fifthCategories : null;
        }
      })
    })
  }
}