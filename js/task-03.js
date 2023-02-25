const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//new
const gallery = document.querySelector('.gallery');

const galleryEl = images.map(image => 
  `<li><img src = ${image.url}, alt = ${image.alt} 
  width = 300px, height = 200px ></li>`
);

gallery.insertAdjacentHTML('afterbegin', galleryEl.join(''));


//accepted
// const galleryEl = document.querySelector('.gallery')
// const galleryItemEl = images.map(element => { return `<li class = image> <img src= ${element.url} alt= ${element.alt}
// width = 300px, height = 200px>
// </li>`
// });
// galleryEl.insertAdjacentHTML('beforeend', galleryItemEl.join(''));
