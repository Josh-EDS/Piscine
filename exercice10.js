/* Calculs */ 
/* Innitialisation */
RemainingBread = breadCount;
RemainingSalad = saladCount;
RemainingTomato = tomatoCount;

/* Ham SANDWICH */
nbHamSandwich = 0;
for (var i = 0; i < hamCount; i++) {
    if (RemainingBread >= 2) {
        RemainingBread = RemainingBread - 2;
    } else {
        break;
    }
    nbHamSandwich += 1;
}
RemainingHam = hamCount - nbHamSandwich;

/* Tuna SANDWICH */
nbTunaSandwich = 0;
for (var i = 0; i < tunaCount; i++) {
    if (RemainingBread < 2 || RemainingSalad < 2) break;
    RemainingBread = RemainingBread - 2;
    RemainingSalad = RemainingSalad - 2;
    nbTunaSandwich += 1;
}
RemainingTuna = tunaCount - nbTunaSandwich;

/* Vegie SANDWICH */
nbVegieSandwich = 0;
for (var i = 0; i < saladCount; i++) {
    if (RemainingBread < 2 || RemainingTomato < 2) break;
    RemainingBread = RemainingBread - 2;
    RemainingTomato = RemainingTomato - 2;
    nbVegieSandwich += 1;
}
RemainingSalad = saladCount - nbVegieSandwich;

/* Mise à jour des ingrédients */
breadCount = RemainingBread;
hamCount = RemainingHam;
tunaCount = RemainingTuna;
saladCount = RemainingSalad;
tomatoCount = RemainingTomato;

displayThisText("Number of Ham Sandwish(es) : " + nbHamSandwich);
displayThisText("Number of Tuna Sandwish(es) : " + nbTunaSandwich);
displayThisText("Number of Vegie Sandwish(es) : " + nbVegieSandwich);

/* Affichage des ingrédients restants */
displayIngredients();

/* Réparation des images */
const breadImages = document.querySelectorAll("img[alt='bread']");
breadImages.forEach(img => { img.src = "https://cdn-icons-png.flaticon.com/512/8620/8620877.png"; });
const hamImages = document.querySelectorAll("img[alt='ham']");
hamImages.forEach(img => { img.src = "https://pics.clipartpng.com/midle/Ham_PNG_Clip_Art_Image-1267.png"; });
const tunaImages = document.querySelectorAll("img[alt='tuna']");
tunaImages.forEach(img => { img.src = "https://png.pngtree.com/png-vector/20220603/ourmid/pngtree-a-can-of-tuna-background-daily-preserved-vector-png-image_36938134.png"; });
const saladImages = document.querySelectorAll("img[alt='salad']");
saladImages.forEach(img => { img.src = "https://pngimg.com/uploads/salad/salad_PNG2819.png"; });
const tomatoImages = document.querySelectorAll("img[alt='tomato']");
tomatoImages.forEach(img => { img.src = "https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png"; });

