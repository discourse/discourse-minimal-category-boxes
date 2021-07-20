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
        isCategoryPage() {
          console.log(this.topicTrackingState.filterCategory);
          if (this.topicTrackingState.filterCategory && this.topicTrackingState.filterCategory.has_children) {
            return true;
          } else {
            return false;
          }
        }
      })
    })
  }
}