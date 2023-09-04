import { apiInitializer } from "discourse/lib/api";
import CustomCategoryBoxes from "../components/custom-category-boxes";

export default apiInitializer("1.9.0", (api) => {
  api.renderInPluginOutlet("above-discovery-categories", CustomCategoryBoxes);
});
