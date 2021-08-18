import SVG from "../pages/malik-portfolio.svg";
import { Toggle } from "../functions/header-comps";
export function Header() {
  return `
  <nav class="nav__bar">
    <a href="/">
      <img src=${SVG} alt="Portfolio-Logo"/>
    </a>
    <button class="nav__bar__burger" onclick=${Toggle}>
      <div></div>
      <div></div>
      <div></div>
    </button>
    <div class="nav__bar__list">
      <ul class="nav__bar__list__items">
        <li class="nav__bar__list__items__item"><a class="nav__bar__list__items__item__link nav__bar__list__items__item--active" href="/">Home</a></li>
        <li class="nav__bar__list__items__item"><a class="nav__bar__list__items__item__link" href="/portfolio-about">About&nbsp;Me</a></li>
        <li class="nav__bar__list__items__item"><a class="nav__bar__list__items__item__link" href="/portfolio-resume">My&nbsp;Resume</a></li>
        <li class="nav__bar__list__items__item"><a class="nav__bar__list__items__item__link" href="/portfolio-project">My&nbsp;Projects</a></li>
        <li class="nav__bar__list__items__item"><a class="nav__bar__list__items__item__link" href="/portfolio-github-api">Github&nbsp;Api</a></li>
      </ul>
    </div>
  </nav>
  `;
}
const locHref = location.href;
const activeState = `nav__bar__list__items__item--active`;
//console.log(document.querySelectorAll("a"));
