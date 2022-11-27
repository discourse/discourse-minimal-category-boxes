import { registerUnbound } from "discourse-common/lib/helpers";
import { withPluginApi } from "discourse/lib/plugin-api";
import Category from "discourse/models/category";

registerUnbound("getAbbreviation", categoryName => {
  let abbr = categoryName.replace(" and", "").split(" ");
  
  if (abbr[1].charAt(0) = "-") {
    abbr = abbr.replace("-","");
  }
  
  if (abbr.length > 1) {
    abbr = abbr[0].charAt(0).toLowerCase() + abbr[1].charAt(0).toLowerCase();
  } else {
    abbr = abbr[0].charAt(0).toLowerCase() + abbr[0].charAt(1).toLowerCase();
  }
  
  return abbr;
});
