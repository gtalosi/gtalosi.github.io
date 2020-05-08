
let currentPhoto = 0;
let imagesData = [{photo: 'images/photo1.jpg',
                  title: 'szőlőhegyi panoráma',
                  description: 'Balatonakali, "Fenye" hegyen készült kép'},
                  {photo: 'images/photo2.jpg',
                  title: 'a Balaton látképe Akaliból',
                  description: 'Balatonakali, "Fenye" hegyen készült kép'},
                  {photo: 'images/photo3.jpg',
                  title: 'tihanyi utcakép',
                  description: 'Tihany főutcáján készült kép'},
                  {photo: 'images/photo4.jpg',
                  title: 'a tihanyi Belső Tó látképe',
                  description: 'a Tihanyi Apátság dombjáról készült kép'},
                  {photo: 'images/photo5.jpg',
                  title: 'a tihanyi Belső tó a túloldarlól',
                  description: 'a Tihanyi levendulemzők domboldaláról készült kép'},
                  {photo: 'images/photo6.jpg',
                  title: 'a Balaton látképe Tihanyból',
                  description: 'a Tihanyi Apátság kilátójánál készült panorámakép'},
                  {photo: 'images/photo7.jpg',
                  title: 'a Badacsony-hegy látképe',
                  description: 'Kisapáti, Szent Gyögy-hegyeről készült kép'}];

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('#photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description);
}

$('#leftarrow').click(() => {
  currentPhoto--;
  if (currentPhoto < 0) {currentPhoto = 6}
  loadPhoto(currentPhoto);
});

$('#rightarrow').click(() => {
  currentPhoto++;
  if (currentPhoto > 6) {currentPhoto = 0}
  loadPhoto(currentPhoto);
});

loadPhoto(currentPhoto);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

imagesData.forEach((item, index) => {
  $('#thumbnail-container').append(`
  <div class="thumbnailFrame" data-index="${index}">
  <img class="thumbnail" src =${item.photo} data-index="${index}">
  <span class="thumbnailTitle">${item.title}</span>
  </div>`);
  $('.thumbnailFrame').click((event) => {
      var indexClicked = $(event.target).attr('data-index');
      // indexClicked konvertálása számmá:
      var numberIndex = parseInt(indexClicked);
      $('#photo').attr('src', imagesData[indexClicked].photo);
      $('#photo-title').text(imagesData[indexClicked].title);
      $('#photo-description').text(imagesData[indexClicked].description);
      currentPhoto = indexClicked;
  });
});