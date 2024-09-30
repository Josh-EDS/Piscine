document.querySelectorAll('*').forEach(el => el.style.color = 'black');
/* Je change la couleur du texte en noir pour qu'il soit visible */

if (bananasCount > 0) {
    displayThisText("Yummy !")
} else if (bananasCount == 0) {
    displayThisText("Oh no, there is no banana.")
} else {
    displayThisText("Do I owe you bananas ??")
}
