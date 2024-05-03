const hiroganaA = document.querySelector(".hirogana-A");
const hiroganaAOne = hiroganaA.querySelector(".hirogana-A__one");
const hiroganaATwo = hiroganaA.querySelector(".hirogana-A__two");
const hiroganaAThree = hiroganaA.querySelector(".hirogana-A__three");

const hieroglyphBtn = document.querySelector(".hieroglyphs-btn");

const DEFAULT_OPTIONS = {
  duration: 2000,
  delay: 300,
  fill: "forwards",
  easing: "ease-in-out",
};

function animateElement(element, frames, options) {
  element.animate(frames, options);
}

function animateHiroganaAOne() {
  animateElement(
    hiroganaAOne,
    [
      { opacity: 0, strokeDashoffset: 300 },
      { opacity: 1, offset: 0.5 },
      { opacity: 1, strokeDashoffset: 0 },
    ],
    { ...DEFAULT_OPTIONS }
  );
}

function animateHiroganaATwo() {
  animateElement(
    hiroganaATwo,
    [
      { opacity: 0, strokeDashoffset: 600 },
      { opacity: 1, offset: 0.3 },
      { opacity: 1, strokeDashoffset: 0 },
    ],
    { ...DEFAULT_OPTIONS, duration: 3000, delay: 1400 }
  );
}

function animateHiroganaAThree() {
  animateElement(
    hiroganaAThree,
    [
      { opacity: 0, strokeDashoffset: 1000 },
      { opacity: 1, offset: 0.2 },
      { opacity: 1, strokeDashoffset: 0 },
    ],
    { ...DEFAULT_OPTIONS, duration: 4000, delay: 3200 }
  );
}

function animateHirogana() {
  animateHiroganaAOne();
  animateHiroganaATwo();
  animateHiroganaAThree();
}

animateHirogana();

function animateOpacityHirogana() {
  const hiroganaA = [hiroganaAOne, hiroganaATwo, hiroganaAThree];
  hiroganaA.forEach((item) => {
    animateElement(item, [{ opacity: 1 }, { opacity: 0 }], {
      ...DEFAULT_OPTIONS,
      duration: 400,
      delay: 0,
    });
  });
}

hieroglyphBtn.addEventListener("click", () => {
  animateOpacityHirogana(), setTimeout(animateHirogana(), 400);
});

