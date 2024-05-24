export default function currentUseHref() {
  const svg = document.querySelector(".about__promo-icon");
  const useHref = svg.children[0].href.baseVal;
  const currentHref = useHref.slice(0, useHref.indexOf("."));

  return currentHref;
}
