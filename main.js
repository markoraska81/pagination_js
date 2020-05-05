

var galleryItems = document.querySelector('.gallery-items').children;
var prev = document.querySelector('.left');
var next = document.querySelector('.right');
var page = document.querySelector('.page-num');


var maxItem = 12;
var index = 1;

var pagination = galleryItems.length/maxItem;
// ukoliko imamo ukupno elemenata, koji kada se podele sa elementima po jednoj strani
// i ne dobije se ceo broj, onda radimo sledece da zaokruzimo na gornji broj
// var pagination = Math.ceil(galleryItems.length/maxItem);

prev.addEventListener('click', function () {
  index--;
  chek();
  showItems();
})

next.addEventListener('click', function () {
  index++;
  chek();
  showItems();
})

// ova f-ja nam odredjuje da ne mozeme da idemo dalje od zadate stranico
// na pocetku ne moze ici na stranicu isred 1,
// na kraju ne moze ici posle zadate stranice, u ovom slucaju 3
function chek() {
  if(index==pagination) {
    next.classList.add("disabled")
  } else {
    next.classList.remove("disabled")
  }
  if (index==1) {
    prev.classList.add("disabled")
  } else {
    prev.classList.remove("disabled")
  }
}



function showItems() {
  console.log(galleryItems)
  for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].classList.remove('show');
    galleryItems[i].classList.add('hide');
    if (i >= (index*maxItem)-maxItem && i < index*maxItem) {
      // ako je index=1 (1*12)-12=0  ako je index=2 (2*12)-12=12
        galleryItems[i].classList.remove('hide');
        galleryItems[i].classList.add('show');
    }
    page.innerHTML = index;
  }

}


function getPage() {
  showItems();
  chek();
}

getPage();
