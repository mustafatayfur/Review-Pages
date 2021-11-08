const scientists = [
    {
      id: 1,
      name: 'Cahit Arf',
      country: 'Turkey',
      img: 'https://img.bilgihanem.com/wp-content/uploads/2017/04/cahit-arf-kimdir.jpg',
      text: 'Cahit Arf is one of the best mathematicians to grow in our country. He is also a well-known name thanks to his various duties. As a result of the studies, terms with their own inventions have emerged. Cahit Arf introduced mathematical terms such as Arf rings, Arf invariants and Arf closures to the scientific world.',
    },
    {
      id: 2,
      name: 'Felix Edouard Emil Borel',
      country: 'France',
      img: 'https://alchetron.com/cdn/mile-borel-9f8c8ba0-ad20-42d6-98c2-32b72629e6d-resize-750.jpg',
      text: 'He made very important discoveries in analysis and probability theory. He is also considered the founder of game theory. More than three hundred scientific articles have been published. Each of these articles is groundbreaking. One of the most important of these is the well-known and widely used Heine-Borel theorem in analysis. This conclusion is part of the famous thesis prepared by Borel.'
    },
    {
      id: 3,
      name: 'Carl Friedrich Gauss',
      country: 'Germany',
      img: 'https://i5.walmartimages.com/asr/2e57db61-6e6e-4920-af78-70e3acfae92a_1.69a3713e47c9eb276a90d4e1b94a49e9.jpeg',
      text: 'German astronomer, mathematician and physicist. Also known as the "prince of mathematicians" and "the greatest mathematician since antiquity", Gauss has left an impact on many fields of mathematics and science, and is considered one of the most influential mathematicians in history.'
    },
    {
      id: 4,
      name: 'Bolzano',
      country: 'Czechoslovakia',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/BBolzano.jpg/1200px-BBolzano.jpg',
      text: "Bolzano was a Czech philosopher of Italian origin. He was also a good logician and a very good mathematician. Bolzano was accused of more rationalism in 1820. He had a philosophy and thought based on mathematics. Therefore, he opposed Kant's idealism. After 1805 he taught philosophy of religion at the University of Prague. In mathematics, he worked on infinity and infinitesimal calculus. His book \"Paradoxes of Eternity\" was published in 1851. He has also worked on point clusters."
    },
  ];

const img= document.querySelector("#person-img");
const scientist= document.querySelector(".card-title");
const country = document.getElementById("country");
const bio = document.getElementById("card-text");
const buttonPrev = document.querySelector(".button-previous");
const buttonNext = document.querySelector(".button-next");
const buttonRand = document.querySelector(".btn-random");


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    const item = scientists[currentItem];
    img.src = item.img;
    scientist.textContent =  item.name;
    country.textContent = item.country;
    bio.textContent = item.text;

});

function displayScientist(person){
    const item = scientists[person];
    img.src = item.img;
    scientist.textContent = item.name;
    country.textContent = item.country;
    bio.textContent = item.text;
}

buttonPrev.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = scientists.length -1
    }
    displayScientist(currentItem);
});
buttonNext.addEventListener('click', function(){
    currentItem++;
    if(currentItem > scientists.length -1){
        currentItem = 0;
    }
    displayScientist(currentItem);
});

buttonRand.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * scientists.length);
    displayScientist(currentItem);
});


