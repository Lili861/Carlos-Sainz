//ceka na nacteni stranky
document.addEventListener("DOMContentLoaded", () => {

	//vyber vsech counter prvku
	const counters = document.querySelectorAll('.counter');

	//rychlost animace
	const speed = 200; 

	//funkce pro animaci cisla
	const animate = () => {
		counters.forEach(counter => {

			//cilova hodnota
			const target = +counter.getAttribute('data-target');

			//aktualni hodnota
			const count = +counter.innerText;

			//prirustek
			const inc = target / 150;

			//pokud jeste nedoslo na cil
			if (count < target) {
				counter.innerText = Math.ceil(count + inc);

				//opakuj animaci
				setTimeout(animate, 40);
			} else {

				//nastav finalni hodnotu
				counter.innerText = target;
			}
		});
	};

	//spusteni animace s malym zpozdenim
	setTimeout(animate, 200);

});