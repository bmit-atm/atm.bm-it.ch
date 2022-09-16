//Menü button funkton
const mobileMenu = () =>{
    let menu = document.querySelector('header .nav ul');
    let btn = document.querySelector('header .nav button');
   
    if(btn.innerText === 'MENÜ'){
        menu.style.display = 'block';
        btn.innerText = 'schliessen';
    }else{
        menu.style.display = 'none';
        btn.innerText = 'MENÜ';
    }
}
/*
AnimationText
*/
let textTag = document.querySelector('.nav .textAnim h1');
let text = textTag.innerText;

let splittedText = text.split('');

textTag.innerHTML = ' '

for(let zehler = 0; zehler < splittedText.length; zehler++){
    if(splittedText[zehler] == ' '){
        splittedText[zehler]= '&nbsp;'
    }
    textTag.innerHTML += `<span>${splittedText[zehler]}<span>`
}
let k = 0;
let interval = setInterval(()=>{
    let spans = textTag.querySelectorAll('span');
    let singleSpan = spans[k];

    singleSpan.className = 'fadeMove';
    k++;

    if(k === spans.length){
        clearInterval(interval);
    }
},200)
/*Slider 
*/
let rechtsBtn = document.querySelector('#rechtsBtn');
let linksBtn = document.querySelector('#linksBtn');
let Fotos = document.querySelectorAll('.sliderImg img');

let imgNum =0;

const bewegenRechts =()=>{
    displayNone()
    imgNum++;

    if(imgNum === Fotos.length){
        imgNum =0;
    }
    Fotos[imgNum].style.display = 'block';
};

const bewegenLinks= () =>{
    displayNone()
    imgNum--;

    if(imgNum === -1){
        imgNum = Fotos.length -1;
    }

    Fotos[imgNum].style.display = 'block';
};

rechtsBtn.addEventListener('click', bewegenRechts)
linksBtn.addEventListener('click', bewegenLinks) 

const displayNone =() =>{
    Fotos.forEach(img => {
        img.style.display = 'none';
    })
};
/*
Slider2
*/
let zweiteRechtsBtn = document.querySelector('#rechtsBtn2');
let zweiteLinksBtn = document.querySelector('#linksBtn2');
let zweiteFotos = document.querySelectorAll('.sliderImg2 img');
let imgNum2 =0;

const bewegenRechts2 =()=>{
    displayNone2()
    imgNum2++;

    if(imgNum2 === zweiteFotos.length){
        imgNum2 =0;
    }
    zweiteFotos[imgNum2].style.display = 'block';
};
const bewegenLinks2 = () =>{
    displayNone2()
    imgNum2--;

    if(imgNum2 === -1){
        imgNum2 = zweiteFotos.length -1;
    }

    zweiteFotos[imgNum2].style.display = 'block';
};
zweiteRechtsBtn.addEventListener('click', bewegenRechts2)
zweiteLinksBtn.addEventListener('click', bewegenLinks2) 
const displayNone2 =() =>{
    zweiteFotos.forEach(img => {
        img.style.display = 'none';
    })
};

/*Portfolio*/
const portfolioSort = (button) =>{
    let Kat = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolioSingleItem');

    portfolioItems.forEach((item)=>{
        item.style.display = 'none';
    });

    if(Kat === 'alles'){
        portfolioItems.forEach((item)=>{
            item.style.display = 'block';
        });
    }

    portfolioItems.forEach((item)=>{
        if(item.getAttribute('data-category').includes(Kat)){
            item.style.display = 'block';
        }
    });
}