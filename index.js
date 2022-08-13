const personContainer = document.getElementById("personContainer")
const preview = document.querySelector("#previus");
const next = document.querySelector("#next");

let offset = 1;
let limit =7;

preview.addEventListener('click', () => {
  if(offset != 1){
    offset -= 8;
    removeChildNodes(personContainer);
    personajes(offset, limit);
  }
});

next.addEventListener('click', () => {
  offset += 8;
  removeChildNodes(personContainer);
  personajes(offset, limit);
});

function rickAndMorty(personaje){ 
fetch(`https://rickandmortyapi.com/api/character/${personaje}/`)
.then((res) => res.json())
.then((data) =>{
  createPersonaje(data);
});
}

function personajes(offset,limit){
  for(let i = offset; i <= offset + limit; i++){
    rickAndMorty(i);
   }

  }
  
  
  function createPersonaje(person){
    const flipCard = document.createElement('div');
    flipCard.classList.add('flipCard');
    
    const CardContainer = document.createElement('div');
    CardContainer.classList.add('CardContainer');
    flipCard.appendChild(CardContainer);

    const cards = document.createElement('div');
    cards.classList.add("personaje-block");
    
    const imagenContainer = document.createElement("div");
    imagenContainer.classList.add("img-personaje");
  
    const imagen = document.createElement("img");
    imagen.src = person.image
    imagenContainer.appendChild(imagen);
    
    const number =document.createElement('P')
    number.textContent = `id : ${person.id} `
  
    const name = document.createElement('P');
    name.classList.add('name');
    name.textContent = person.name

    const status = document.createElement('P');
    status.classList.add('status');
    status.textContent = `Status : ${person.status}`
  
    const species = document.createElement('p');
    species.classList.add('origen')
    species.textContent =`Species :  ${person.species}`

    cards.appendChild(number);
    cards.appendChild(imagenContainer);
    cards.appendChild(name);
    cards.appendChild(status);
    cards.appendChild(species);

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.textContent = "carta de atras";


   CardContainer.appendChild(cards)
   CardContainer.appendChild(cardBack)
   personContainer.appendChild(flipCard);
  }

function removeChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild)
  }
};


personajes(offset, limit);


// -------------------------------------------------------------------------------------------------------


