let mygtAtgal = document.getElementById('back');
let mygtPirmyn = document.getElementById('next');
let SelectedImage = document.querySelector('.selected-image')
let cardItemName= 'card-item'
let cardDabar = 1;
let cardViso = 5;

function changeDivBGImg(source) {
    SelectedImage.style.background = `url(${source})`;
    SelectedImage.style.backgroundSize = `cover`;
    SelectedImage.style.backgroundPosition = `center`;
    
}
mygtAtgal.addEventListener('click', () => {
	if (cardDabar == 1) {
  	cardDabar = cardViso;
  } else {
  	cardDabar--;
  }

  let imgSource = document
  .querySelector(`.${cardItemName}${cardDabar} img`).getAttribute('src');
  changeDivBGImg(imgSource)

  document.querySelector('.card.active').classList.remove('active');
  document.querySelector('.' + cardItemName + cardDabar).classList.add('active');
});

mygtPirmyn.addEventListener('click', () => {
  if (cardDabar == cardViso) {
  	cardDabar = 1;
  } else {
  	cardDabar++;
  }

  let imgSource = document
  .querySelector(`.${cardItemName}${cardDabar} img`).getAttribute('src');
  changeDivBGImg(imgSource)


  document.querySelector('.card.active').classList.remove('active');
  document.querySelector('.' + cardItemName  + cardDabar).classList.add('active');
  
});


let elementai = document.querySelectorAll('.image-gallery .card');

elementai.forEach(elementas => {
	elementas.addEventListener('click', () => {
        let imgSource = elementas.querySelector('img').getAttribute('src');
        changeDivBGImg(imgSource);
console.log(imgSource)

        cardDabar = [...elementas.classList]
            .find(elementas => elementas.includes(cardItemName))
            .slice(cardItemName.length)

        document.querySelector('.image-gallery .card.active').classList.remove('active');
    
    elementas.classList.add('active');

    });
  });

  

