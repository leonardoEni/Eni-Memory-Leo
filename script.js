//------------NIVEAU 1 : Au click je change le contenu de la balise  ---------// 
// verif de lien de fichiers. 
/*
console.log("Hello World!");

// Recuperer la position
const cell0 = document.getElementById("0");

// Vérification 
//console.log(cell0);   // lire

// modification 
//cell0.textContent = "image1"; // modifier

// Réaction puis changement au click. 
cell0.addEventListener("click", ()=> {
    cell0.textContent = "image1";  
    console.log(cell0);  

})



//------------NIVEAU 2 : J'appelle le contenu d'un tableau ---------// 
// Création du tableau d'éléments à afficher : 

const tableaux1 = ["T1image1", "T1image2", "T1image3", "T1image4", "T1image5"];

//-----------------------------------------//

// Recuperer la position 1
const cell1 = document.getElementById("1");

// Vérification 
//console.log(cell0);   // lire

// modification 
//cell0.textContent = "image1"; // modifier

// J'appelle un élément précis de du tableau au click.  
cell1.addEventListener("click", ()=> {
    cell1.textContent = tableaux1[3];  
    console.log(cell1);  

})


// ---------NIVEAU 3----------------------//
//-----IF pour conditionner l'affichage et créer lien tableau HTML et "tableau1"-------//
//-----POUR UNE POSITION DU TABLEAU ----------------//

const tableaux1 = ["T1image1", "T1image2", "T1image3", "T1image4", "T1image5"];

let cell_0 = document.getElementById("0");
console.log(cell_0.id);

// Ecoute du click. 
cell_0.addEventListener("click", ()=> {

 // condition pour comparer tableau HTML et tableau1 
    const choix = cell_0.id;

  if (choix === "0"){
    cell_0.textContent = tableaux1[0];
    console.log(cell_0);
    }
    else{
    console.log("pas id = 0");

    }
    
});

*/


//-------------------NIVEAU 4------------------------------------------------------//
const tableaux1 = ["T1image1", "T1image2", "T1image3", "T1image4", "T1image5"];

let cells = document.querySelectorAll("#plateauLegumes td");
// console.log(cells);

// Comprendre For Each
cells.forEach((cell) => {
    cell.addEventListener("click", creerImage);
}
);

function creerImage(){
    console.log("tttt");
}


