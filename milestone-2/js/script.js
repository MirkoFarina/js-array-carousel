const arrayImg = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
]

// "CHIAMO" I MIEI CONTENITORI DELLE IMG
const containerImgLg = document.querySelector('.img-lg');
const containerImgXs = document.querySelector('.img-xs');
let imgLg = "";
let imgXs = "";
let counterImg = 0;

// "SCOMPONGO" L'ARRAY
for(let i = 0; i < arrayImg.length; i++){
  //CREO IL TAG IMG PER IL BOX XL
  imgLg = `
  <img class="xl hide" src="img/${arrayImg[i]}" alt="${arrayImg[i]}">
  `;
  //CREO IL TAG IMG PER IL BOX XS 
  imgXs = `
  <img class="xs" src="img/${arrayImg[i]}" alt="${arrayImg[i]}">
  `;
  
  // STAMPO I TAG CREATI NEI BOX NEL HTML
  containerImgLg.innerHTML += imgLg;
  containerImgXs.innerHTML += imgXs;
}

// CREO LA SITUAZIONE DI DEFAULT CHE MI OCCORRE

// PRENDO I CONTENITORI CHE MI SERVIRANNO
const arrayImgLg = document.getElementsByClassName('xl');
const arrayImgXs = document.getElementsByClassName('xs');

// AGGIUNGO E TOLGO CLASSI PER AVERE LA VISUALIZZAZIONE DI DEFAULT
arrayImgLg[counterImg].classList.remove('hide');
arrayImgLg[counterImg].classList.add('active');

arrayImgXs[counterImg].classList.add('active');


