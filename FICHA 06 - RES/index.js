

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps(); 
//Allows imagemaps to be used in a responsive design 
// by recalculating the area coordinates 
// to match the actual image size on load and window.resize
});


let renderImage = 0   // 0 - Esqueleto SEM legendas
                        // 1 - esqueleto COM legendas

/*
ShowDialog : m+étodo invocado sempre que pretendo abrir uma Dialog
recebe texto e imagem a renderizar na dialog / modal
*/
function showDialog(texto, img) {
    document.querySelector("#imgDialog").src = img;
     document.querySelector('#txtDialog1').textContent = texto
    document.querySelector("#dlgContent").showModal();

}

//1º Dialog a ser invocada ao abrir a aplicação
//----------------------------------------------
showDialog('Entra neste laboratório digital! \n Explora o corpo humano e testa o teu conhecimento sobre anatomia humana!\n Boa Sorte... !!',
        img= './images/logoAnatomy.png');

// -------------------------------------------


// Função para fechar a Dialog / Modal
document.querySelector("#btnClosedlgContent").addEventListener("click", function () {
    document.querySelector("#dlgContent").close();
});





//  Cranio
document.getElementById('IDcranio').addEventListener('click', function() {
    texto = 'Crânio: frontal, temporal, parietal, occipital, esfenoide, etmoide, martelo, bigorna, estribo'
    img= './images/cranio.jpg';
    showDialog(texto, img)
    
});


// Femur
document.getElementById('IDfemur').addEventListener('click', function() {
    texto = 'O fêmur é o osso mais longo, forte e pesado do corpo humano, \nlocalizado na coxa e fundamental para a sustentação de peso e locomoção. \nEstruturalmente dividido em três partes — epífise proximal, diáfise (corpo) e epífise distal —, \narticula-se superiormente com o quadril (acetábulo) e inferiormente com a tíbia e patela'
    img= './images/femur.jpg';
    showDialog(texto, img)
});

// Tibia
document.getElementById('IDtibia').addEventListener('click', function() {
    texto = 'Assim como os outros ossos longos, a tíbia possui três partes: \numa parte proximal, a diáfise ou corpo e uma parte distal. \nA parte proximal participa da articulação do joelho, \nenquanto a parte distal contribui com a articulação do tornozelo'
    img= './images/tibia_peronio.jpg';
    showDialog(texto, img)
});

// Perónio
document.getElementById('IDperonio').addEventListener('click', function() {
    texto = 'O perónio (ou fíbula) é um osso longo e fino localizado na parte lateral da perna, \ncorrendo paralelo à tíbia, desde o joelho até ao tornozelo. \nEmbora não suporte o peso principal do corpo, é crucial para a estabilidade do tornozelo, \ninserção muscular e formação da articulação talocrural (tornozelo'
    img= './images/tibia_peronio.jpg';
    showDialog(texto, img)
});


// shape poly - Vídeo promo
document.getElementById('videoPromo').addEventListener('click', function() {
    DialogVideo()
});



// Button para rendrizar imagem com legendas
//--------------------------------------
document.getElementById('btnTrocaImagem').addEventListener('click', function() {

    if (renderImage==0) {
        renderImage=1 
        document.getElementById('IDesqueleto').src = "./images/esqueletoLegendas.png";
    }
    else {
        renderImage=0 
        document.getElementById('IDesqueleto').src = "./images/esqueleto.png";

    }

});



//------------------ DIALOG BAG ----------------------
function DialogVideo() {
 
//document.querySelector('#iframeVideo').src = "https://www.youtube.com/watch?v=w52gYLgsPA4"


document.getElementById('dlgVideo').innerHTML= `
<iframe 
    width="560" 
    height="315"
    src="https://www.youtube.com/embed/w52gYLgsPA4?si=NVSMP6i5uDq9yLd3" 
    title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture; 
    web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
 </iframe>
  <br>
  <button id="btnClosedlgVideo">FECHAR</button>`;

 document.querySelector("#dlgVideo").showModal();
}


document.getElementById('btnClosedlgVideo').addEventListener('click', function() {
    document.querySelector('#dlgVideo').close();

});




