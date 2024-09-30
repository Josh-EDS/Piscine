document.querySelector("img[alt='bread']").src = "https://cdn-icons-png.flaticon.com/512/8620/8620877.png";
document.querySelector("img[alt='ham']").src = "https://pics.clipartpng.com/midle/Ham_PNG_Clip_Art_Image-1267.png";
document.querySelector("img[alt='tuna']").src = "https://png.pngtree.com/png-vector/20220603/ourmid/pngtree-a-can-of-tuna-background-daily-preserved-vector-png-image_36938134.png";
/* Réparation des images  */

if (breadCount >= 2) {
    if (hamCount >= 1) {
        if (tunaCount >= 1) {
            displayThisText("I can make a royal sandwich!")
        } else {
            displayThisText("I can make a ham Sandwich!")
        }
    } else if (tunaCount >= 1) {
        displayThisText("I can make a Tuna Sandwich!")
    } else {
        displayThisText("I'd rather be fasting tonight..")
    }
    
} else {
    displayThisText("I'd rather be fasting tonight..")
}