
let currentPhoto = 0;
let imagesData = [{photo: 'https://cdn.pixabay.com/photo/2020/05/04/16/05/mckenzie-river-5129717_960_720.jpg',
                  title: 'Mckenzie Folyó',
                  description: 'Közép-Oregon, Erdő, Buja, River'},
                  {photo: 'https://cdn.pixabay.com/photo/2015/01/08/15/48/creek-593146_960_720.jpg',
                  title: 'Patak',
                  description: 'River, Természet, Erdő, Víz, Természetes'},
                  {photo: 'https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_960_720.jpg',
                  title: 'Napnyugta',
                  description: 'Mező, Mák, Nap, Priroda, Horizont'},
                  {photo: 'https://cdn.pixabay.com/photo/2013/11/28/10/03/autumn-219972_960_720.jpg',
                  title: 'Ősz',
                  description: 'Természet, Golden, Szeptember, River, Erdő'},
                  {photo: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_960_720.jpg',
                  title: 'Az Út',
                  description: 'Gerendák, Elérési Út, Erdő, Természet, Csend'},
                  {photo: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_960_720.jpg',
                  title: 'Ősz újra',
                  description: 'Fall, Ősz, Vörös, Évad, Erdő, Természet, Levelek, Fa'},
                  {photo: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_960_720.jpg',
                  title: 'Park',
                  description: 'Zöld, Évad, Természet, Kültéri, Fekvő'}];

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