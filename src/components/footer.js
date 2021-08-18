import { Instagram,YouTube,Github,Twitter, Facebook, MapMarker, Envelope, Phone } from "./svg-code";
export function Footer() {
  return `
    <section class="wrapper__content">
      <div class="wrapper__content__success">
        <p>Let's talk about<br/>design is my passion<br/>and the key to success</p>
      </div>
      <div class="wrapper__content__list">
        <ul class="wrapper__content__list__items">
          <li class="wrapper__content__list__items__item"><a class="wrapper__content__list__items__item__link wrapper__content__list__items__item--active" href="/">Home</a></li>
          <li class="wrapper__content__list__items__item"><a class="wrapper__content__list__items__item__link" href="/portfolio-about">About&nbsp;Me</a></li>
          <li class="wrapper__content__list__items__item"><a class="wrapper__content__list__items__item__link" href="/portfolio-resume">My&nbsp;Resume</a></li>
          <li class="wrapper__content__list__items__item"><a class="wrapper__content__list__items__item__link" href="/portfolio-project">My&nbsp;Projects</a></li>
          <li class="wrapper__content__list__items__item"><a class="wrapper__content__list__items__item__link" href="/portfolio-github-api">Github&nbsp;Api</a></li>
        </ul>
      </div>
    </section>
    <section class="wrapper__icon">
      <div class="wrapper__icon--envelope">
      ${Envelope}
        <div>example@gmail.com</div>
      </div>
      <div class="wrapper__icon--map">
      ${MapMarker}
        <div>Punjab, Pakistan</div>
      </div>
      <div class="wrapper__icon--phone">
      ${Phone}
        <div>+92-3XX-XXXXXXX</div>
      </div>
    </section>
    <section class="wrapper__social-icon-copy">
      <ul class="wrapper__social-icon-copy__icon">
        <li>${Instagram}</li>
        <li>${YouTube}</li>
        <li>${Twitter}</li>
        <li>${Github}</li>
        <li>${Facebook}</li>
      </ul>
      <div class="wrapper__social-icon-copy__copy">
        <p>&copy;&nbsp;Copyright 2021 Deign by <a href="/">Malik&nbsp;Portfolio</a></p>
      </div>
    </section>
    `;
}

