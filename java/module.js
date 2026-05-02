//ceka na nacteni stranky
document.addEventListener("DOMContentLoaded", () => {

	//vyber tlacitka open
	const btnOpen = document.getElementById("open");

	//vyber tlacitka close
	const btnClose = document.querySelector(".close-module");

	//vyber modulu
	const module = document.getElementById("info-module");

	//klik na open zobrazi modul a zamkne scroll
	btnOpen.addEventListener("click", () => {
		module.classList.add("active");
		document.body.style.overflow = "hidden";
	});

	//klik na close skryje modul a povoli scroll
	btnClose.addEventListener("click", () => {
		module.classList.remove("active");
		document.body.style.overflow = "auto";
	});

});