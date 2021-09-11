let chooseAlbum = document.querySelector('.albums-list');
let pictures = document.querySelector('.pictures');


async function getAlbumList() {
    let albums = await fetch('https://jsonplaceholder.typicode.com/albums')
    let albumsArray = await albums.json();
    chooseAlbum.innerHTML = albumsArray.map(function (obj) {
        let li = `<option class="albumsId" value="${obj.id}">${obj.id}</option>`;
        return li;
    }).join('');

};


async function showPictures(id) {
    let albumPictures = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    let picturesArray = await albumPictures.json();
    pictures.innerHTML = picturesArray.map(function (obj) {
        let img = `<img src="${obj.url}"></img>`;
        return img;
    }).join('');
}



getAlbumList().then(() => showPictures(1))
// let albumsId = document.querySelector('.albumsId');

chooseAlbum.addEventListener('click', () => showPictures(chooseAlbum.value))