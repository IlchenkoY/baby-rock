import { ourRules } from "./modal-markup/our-rules";
import additionalServisesMarkup from "./modal-markup/additional-servises";
import partyScenariosMarkup from "./modal-markup/party-scenarios";
import { modalButtonMarkup } from "./modal-markup/button";

export default function infoCardMarkup(params, type) {
  if (params === "НАШІ ПРАВИЛА") {
    return ourRules;
  }
  if (params === "ДОДАТКОВІ ПОСЛУГИ") {
    return additionalServisesMarkup(type) + modalButtonMarkup;
  }
  if (params === "СЦЕНАРІЇ СВЯТА*") {
    return partyScenariosMarkup(type) + modalButtonMarkup;
  }
}
