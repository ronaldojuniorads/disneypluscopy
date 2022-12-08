let BDFilmes = [
    {
        imgUm: "imagens/mrmarvelcapa.jpg",
        imgDois: "imagens/mrmarveltittle.png"
    },
    {
        imgUm: "imagens/blackish.jpg",
        imgDois: "imagens/blackishtittle.png"
    },
    {
        imgUm: "imagens/buscapa.jpg",
        imgDois: "imagens/bustittle.png"
    },
    {
        imgUm: "imagens/magicCapa.jpg",
        imgDois: "imagens/magicTittle.png"
    },
    {
        imgUm: "imagens/schoolCapa.jpg",
        imgDois: "imagens/schoolTittle.png"
    },
    {
        imgUm: "imagens/sheHulkCapa.jpg",
        imgDois: "imagens/sheHulkTittle.png"
    },
    {
        imgUm: "imagens/blueyCapa.jpg",
        imgDois: "imagens/BlueyTittle.png"
    },
    {
        imgUm: "imagens/valenteCapa.jpg",
        imgDois: "imagens/valenteTittle.png"
    },
    {
        imgUm: "imagens/grootCapa.jpg",
        imgDois: "imagens/grootTittle.png"
    },
    {
        imgUm: "imagens/monstrosCapa.jpg",
        imgDois: "imagens/monstrosTittle.png"
    },
    {
        imgUm: "imagens/spiderCapa.jpg",
        imgDois: "imagens/spiderTittle.png"
    },
    {
        imgUm: "imagens/chibiCapa.jpg",
        imgDois: "imagens/chibiTittle.png"
    }

]


let nextIcon = document.querySelector("main div#container1 >  div.nextIcon")
let previousIcon = document.querySelector("main div#container1 > div.previousIcon")
let slides = document.querySelector("main div#container1 > div#slides")
let slide = slides.querySelector("div.slide")
let btn_slides = document.querySelectorAll("main div#container1 div#btn_slides div")
let cont = 0
let limitador = BDFilmes.length - 1
let divAnterior 

nextIcon.addEventListener("click", ()=>{
    cont = cont + 1
    if(cont > limitador){
        cont = 0
    }
    alteraSlide(BDFilmes[cont], "next")
    animacaoSlide(1)
    alteraBtnSlides(btn_slides[cont])
    divAnterior = btn_slides[cont]
})
previousIcon.addEventListener("click", ()=>{
    cont = cont - 1
    if(cont < 0){
        cont = limitador
    }
    alteraSlide(BDFilmes[cont], "previous")
    animacaoSlide(0)
    alteraBtnSlides(btn_slides[cont])
    divAnterior = btn_slides[cont]
})
for(let posicao = 0; posicao < btn_slides.length; posicao++){
    let div = btn_slides[posicao]
    div.addEventListener("click", ()=>{
        alteraBtnSlides(div)
        divAnterior = div
        if(posicao > cont){
            cont = posicao
            alteraSlide(BDFilmes[posicao], "next")
            animacaoSlide(1)
        }else{
            cont = posicao
            alteraSlide(BDFilmes[posicao], "previous")
            animacaoSlide(0)
        }
        
    })
}
function alteraBtnSlides(divAtual){
    if(divAnterior != undefined){
        divAnterior.style.backgroundColor = "#969EAB"
    }
    divAtual.style.backgroundColor = "#ffffff"

}

function alteraSlide(slideBD, tipoSlide){
    slides.innerHTML = ""
    let slideCriado = criaSlide(slideBD, tipoSlide)
    slides.prepend(slideCriado)
}

function criaSlide(slideAtual, op){
    let slide =  document.createElement("div")
    slide.setAttribute("class", "slide")
    let imgUm = document.createElement("img")
    let imgDois = document.createElement("img")
    imgUm.src = slideAtual.imgUm
    imgDois.src = slideAtual.imgDois
    slide.append(imgUm,imgDois)

    if(op == "primeiro"){
        slide.style.right = ""
        imgDois.style.left = "7%"
    }

    if(op == "previous"){
        slide.style.left = "-100%"
        imgDois.style.left = "4%"
    }
    if(op == "next"){
        slide.style.right = "-100%"
        imgDois.style.left = "10%"
    }
    
    
    return slide
}

function animacaoSlide(tipo){
    let slideAtual = slides.querySelector("div.slide")
        let imgDois = slideAtual.querySelector("img:last-child")
    if(tipo){
        let right = -100
        let leftImgDois = 10
        let animacao = setInterval(()=>{
        if(right > 0){
            clearInterval(animacao)
            right = 0
        }
            slideAtual.style.right = `${right}%`
            right = right + 1
        }, 0.01) 
        let animacao2 = setInterval(()=>{
            if(leftImgDois < 7){
                clearInterval(animacao2)
                leftImgDois = 7
            }
            imgDois.style.left = `${leftImgDois}%`
            leftImgDois = leftImgDois - 0.010
        },1)
        
    }else{
        let slideAtual = slides.querySelector("div.slide")
        let left = -100
        let leftImgDois = 4
        let animacao = setInterval(()=>{
            if(left > 0){
                clearInterval(animacao)
                left = 0
            }
            slideAtual.style.left = `${left}%`
            left = left + 1
        }, 0.01)
        
        let animacao2 = setInterval(()=>{
            if(leftImgDois > 7){
                clearInterval(animacao2)
                leftImgDois = 7
            }
            imgDois.style.left = `${leftImgDois}%`
            leftImgDois = leftImgDois + 0.010
        },1)
    }
}

alteraSlide(BDFilmes[cont], "primeiro")





let nextIconSection = document.querySelectorAll("main div#container3 section div.box-filmes div.nextIcon")
console.log(nextIconSection);
let previousIconSection = document.querySelectorAll("main div#container3 section div.box-filmes div.previousIcon")
let boxFilmes = document.querySelector("main div#container3 section div.box-filmes")

let sc = document.querySelector("main div#container3 section#recomendados")
let margin = 0

for(let icon of nextIconSection){
    icon.addEventListener("click", ()=>{ 
        margin += -1280
        if(margin < -2560){ // width total de todas as div box filmes
            margin = 0
            console.log("ee");
        }
        let boxFilmes = icon.parentElement
        boxFilmes.style.marginLeft = `${margin}px`
        console.log(margin);
    })
}

for(let icon of previousIconSection){
    icon.addEventListener("click", ()=>{
        margin += 1280
        if(margin > 0 ){
            margin = -2560
        }
        let boxFilmes = icon.parentElement
        boxFilmes.style.marginLeft = `${margin}px`
    })
}



























