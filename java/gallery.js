//vyber gallery tracku
const track = document.querySelector(".gallery_class");

//vyber tlacitka next
const next = document.querySelector(".next");

//vyber tlacitka prev
const prev = document.querySelector(".prev");

//posun o kolik se scrolluje
const step = 240;

//duplikace obrazku pro infinite scroll
track.innerHTML = track.innerHTML + track.innerHTML + track.innerHTML;

//nastaveni pocatecni pozice na stred
track.scrollLeft = track.scrollWidth / 3;

//klik na next posune doprava
next.addEventListener("click", () => {
  track.scrollBy({ left: step, behavior: "smooth" });
});

//klik na prev posune doleva
prev.addEventListener("click", () => {
  track.scrollBy({ left: -step, behavior: "smooth" });
});

//kontrola scrollu pro nekonecny efekt
track.addEventListener("scroll", () => {
  const max = track.scrollWidth / 3;

  //posun na druhou stranu kdyz jsme moc vlevo
  if (track.scrollLeft < max * 0.5) {
    track.scrollLeft += max;
  }

  //posun na druhou stranu kdyz jsme moc vpravo
  if (track.scrollLeft > max * 1.5) {
    track.scrollLeft -= max;
  }
});