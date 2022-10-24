'use strict';

/*
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione

Creare un carosello come nella foto allegata.
Milestone 0:
x Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
x Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
x Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, 
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
x Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const btnLeft = document.getElementById('btn1');
const btnRight = document.getElementById('btn2');
let index = 0;

//creo la funzione che stamperà dentro il container principale
//i contenuti (img, testo)
function printImage() {
    //creo la variabile che andrà a stampare il div con i contenuti
    const carouselHtml = `
    <div class="position-relative">
        <img src=" ${images[index].url}" alt="${images[index].title}" class="img-fluid">
        <div class="description w-75 p-3">
            <h2>${images[index].title}</h2>
            <p>${images[index].description}</p>
        </div>
    </div>
    `; //metto le variabili key+value dove andranno le informazioni dinamiche

    //ora per fare in modo che la funzione printCarousel SAPPIA cosa stampare
    //devo inserire il return di carousel
    return carouselHtml;
}
//estraggo il container dal DOM
const container = document.getElementById('container');
container.innerHTML = printImage();

//imposto un timer per far scorrere automaticamente le slide
const sliderInterval = setInterval(sliderNext, 5000);
//e subito dopo creo la funzione che farà scorrere le slide
function sliderNext(){
    index++; //incremento l'index, che al momento ho settato a 0
    if(index > images.length -1){ //SE l'index è maggiore di 4(index totale dell'array)
        index = 0; //setto l'index a 0
    }
    //altrimenti stampo nel DOM
    container.innerHTML = printImage(); //e stampo nel DOM tramite la funzione
    // console.log(index);
    // console.log(printImage());
}
btnRight.addEventListener('click', sliderNext);
// ora creo la funzione per tornare indietro
function sliderPre(){
    index--; //decremento l'index che è sempre a 0 come l'altro
    if(index < 0){ //SE l'index è minore di 0
        index = images.length -1; //allora l'index sarà la length dell'array -1
    }
    console.log(index)
    container.innerHTML = printImage(); //e stampo nel DOM tramite la funzione
}
btnLeft.addEventListener('click', sliderPre);
//ora ho bisogno di estrarre le thumbs dall'html
const thumbnail = document.getElementsByClassName('imageThumb');
//e creare una funzione che al click sulla thumb visualizzi l'immaggine
function clickOnThumb(){
    console.log('thumb');
    
}
thumbnail[index].addEventListener('click', clickOnThumb);

const btnStop = document.getElementById('btn3');
function stop(){
    console.log('sono stop')
    clearInterval(sliderInterval);
    sliderInterval = 0;
}
btnStop.addEventListener('click', stop);