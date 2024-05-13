import { allPlusStandartMarkup } from "./all+sdandart";
import { vipMarkup } from "./vip";
import { diamondMarkup } from "./diamond";

export default function partyScenariosMarkup(type) {
  if (type === "stand" || type === "all") {
    return allPlusStandartMarkup;
  }
  if (type === "vip") {
    return vipMarkup;
  }
  if (type === "diamond") {
    return diamondMarkup;
  }
}
