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



//-------------------NIVEAU 4------------------------------------------------------//
const tableaux1 = ["T1image1", "T1image2", "T1image3", "T1image4", "T1image5"];

let cells = document.querySelectorAll("#plateauLegumes td");
console.log(cells);

// Comprendre For Each
cells.forEach((cell) => {
  cell.addEventListener("click", recupererId);
});

function recupererId(event) {
  const idCellule = event.currentTarget.id;
  console.log(idCellule);

  if (idCellule == "0") {
    console.log("oui cellule 0");
  } else {
    console.log("pas cellule 0");
  }
  console.log(idCellule);
}


//-------------------NIVEAU 5---OK------------------------------------------------//
const tableaux1 = [
  "ressources/memory-legume/1.svg",
  "ressources/memory-legume/2.svg",
  "ressources/memory-legume/3.svg",
  "ressources/memory-legume/4.svg",
  "ressources/memory-legume/5.svg",
  "ressources/memory-legume/6.svg",
  "ressources/memory-legume/1.svg",
  "ressources/memory-legume/2.svg",
  "ressources/memory-legume/3.svg",
  "ressources/memory-legume/4.svg",
  "ressources/memory-legume/5.svg",
  "ressources/memory-legume/6.svg",
];

let cells = document.querySelectorAll("#plateauLegumes td");
console.log(cells);

// Comprendre For Each
cells.forEach((cell) => {
  cell.addEventListener("click", afficherImage);
});

function afficherImage(event) {
  const idCellule = event.currentTarget.id;
  console.log(idCellule);

  if (idCellule == "0") {
    const cellule = event.currentTarget;
    const image = cellule.querySelector("img");
    image.src = tableaux1[0];
    console.log(image.src);
  } else if (idCellule == "1") {
    const cellule = event.currentTarget;
    const image = cellule.querySelector("img");
    image.src = tableaux1[1];
    console.log(image.src);
  } else if (idCellule == "2") {
    const cellule = event.currentTarget;
    const image = cellule.querySelector("img");
    image.src = tableaux1[2];
  }
  console.log(image.src);
  console.log("pas cellule 0");
}
console.log(idCellule);

//-----------Remplacer l'image par un élément du tableau1 -----//
// Si idCellule === 0 afficher Tableau1[0];
// le tableaux1 est mélangé.s
*/

//-------------------NIVEAU 5---OK------------------------------------------------//
const tableaux1 = [
  "ressources/memory-legume/1.svg",
  "ressources/memory-legume/2.svg",
  "ressources/memory-legume/3.svg",
  "ressources/memory-legume/4.svg",
  "ressources/memory-legume/5.svg",
  "ressources/memory-legume/6.svg",
  "ressources/memory-legume/1.svg",
  "ressources/memory-legume/2.svg",
  "ressources/memory-legume/3.svg",
  "ressources/memory-legume/4.svg",
  "ressources/memory-legume/5.svg",
  "ressources/memory-legume/6.svg",
];

let cells = document.querySelectorAll("#plateauLegumes td");
console.log(cells);

// Comprendre For Each
cells.forEach((cell) => {
  cell.addEventListener("click", afficherImage);
});

function afficherImage(event) {
  let idCellule = event.currentTarget.id;
  console.log(idCellule);

  const cellule = event.currentTarget;
  const image = cellule.querySelector("img");

  for (let i = 0; i < tableaux1.length; i++) {
    if (idCellule == i) {
      image.src = tableaux1[i];
      console.log(image.src);
    }
  }
  console.log(image.src);
  console.log("pas cellule 0");
}
console.log(idCellule);

/*
// condition pour les couples

  for (let i = 0; i < tableaux1.length; i++) {
    if (image.src === image.src) {
     
      console.log(identiques);
    }else {

        console.log(differents);

    }
  }
  console.log(image.src);
  console.log("pas cellule 0");
}
console.log(idCellule);

//-----------Remplacer l'image par un élément du tableau1 -----//

// le tableaux1 est mélangé.s
*/
