import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class extends Component {
  @service router;

  get classNames() {
    const classNames = ["custom-category-boxes-container"];

    if (this.noneSelected) {
      classNames.push("none-selected");
    }

    return classNames.join(" ");
  }

  #allowedCategories(selectedCategories) {
    // filters categories to only include selected categories for each section
    let availableCategories = this.site.categories.filter((category) => {
      if (selectedCategories.indexOf(category.id) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    return availableCategories;
  }

  get shouldRenderHeadings() {
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
  }

  get noneSelected() {
    return this.router.currentRoute.name.includes("None");
  }

  getAbbreviation(categoryName) {
    let abbr = categoryName.replace(" and", "").split(" ");

    if (abbr.length > 1) {
      abbr = abbr[0].charAt(0).toUpperCase() + abbr[1].charAt(0).toLowerCase();
    } else {
      abbr = abbr[0].charAt(0).toUpperCase() + abbr[0].charAt(1).toLowerCase();
    }

    return abbr;
  }

  firstCategories() {
    return this.#allowedCategories(
      settings.first_categories.split("|").map((id) => Number(id))
    );
  }

  secondCategories() {
    return this.#allowedCategories(
      settings.second_categories.split("|").map((id) => Number(id))
    );
  }

  thirdCategories() {
    return this.#allowedCategories(
      settings.third_categories.split("|").map((id) => Number(id))
    );
  }

  fourthCategories() {
    return this.#allowedCategories(
      settings.fourth_categories.split("|").map((id) => Number(id))
    );
  }

  fifthCategories() {
    return this.#allowedCategories(
      settings.fifth_categories.split("|").map((id) => Number(id))
    );
  }
}
