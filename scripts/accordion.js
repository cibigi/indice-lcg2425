// Elementi dell'accordion
let accordions = document.getElementsByClassName("accordion");
let accordionButtons = document.getElementsByClassName("accordion-button");

// Evento al clic per ogni bottone dell'accordion
for(let i = 0; i<accordionButtons.length; i++) {
	accordionButtons[i].addEventListener("click", () => {
		// Testo dell'accordion (fratello del bottone)
		let accordionText = accordionButtons[i].nextElementSibling;

		// Mostrare e nascondere
		if(window.getComputedStyle(accordionText).getPropertyValue("display") === "none") {
			accordionText.style.setProperty("display", "block");
			accordionText = accordionText.nextElementSibling;
			accordionText.style.setProperty("display", "block");
			accordionButtons[i].innerHTML = accordionButtons[i].innerHTML.replace("+", "−");
		} else {
			accordionText.style.setProperty("display", "none");
			accordionText = accordionText.nextElementSibling;
			accordionText.style.setProperty("display", "none");
			accordionButtons[i].innerHTML = accordionButtons[i].innerHTML.replace("−", "+");
		}
	});
}