import { registerUnbound } from "discourse-common/lib/helpers";
import { withPluginApi } from "discourse/lib/plugin-api";
import Category from "discourse/models/category";

registerUnbound("getAbbreviation", categoryName => {
  let abbr = categoryName.replace(" and", "").split(" ");

  if (abbr.length > 1) {
    abbr =
      abbr[0].split(/.*?/u).slice(0, 1).join("").toUpperCase() +
      abbr[1].split(/.*?/u).slice(0, 1).join("").toLowerCase();
  } else {
    abbr =
      abbr[0].split(/.*?/u).slice(0, 1).join("").toUpperCase() +
      abbr[0].split(/.*?/u).slice(1, 2).join("").toLowerCase();
  }

  return abbr;
});
