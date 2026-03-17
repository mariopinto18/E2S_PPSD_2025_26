// Jogo Adininha o numero


let resposta = ""
do 
{
    // limite inferior + ramdom() * (lim superior - limite inferior)
    let numero = parseInt(1+ Math.random()*49)

    let palpite = 0
    // O jogo decorre enquanto o palpite inserido pelo user for diferente do numero a adivinha

    let tentativas = 0
    while( palpite != numero && tentativas <10) {

        palpite = +prompt("Indique o número a adivinhar: ")
        tentativas++

        if (palpite < numero) {
            alert("O número é MAIOR")
        }
        else if (palpite > numero) {
            alert("O número é MENOR")
        }
        else {
            alert(`PARABÉNS!!! ACERTAS-TE em ${tentativas} tentativas! `)
        }
    
        
    }   //  fim do while da linha 11
    if (tentativas == 10) {
        alert("Esgotou as 10 tentativas :( ")

    }

    // Perguntar se deseja reiniciar o Jogo do Adivinha o numero 
    resposta = prompt("Novo Jogo(S/N)?  ")
}
while (resposta.toUpperCase() == "S")

alert("Volte Sempre para ganhar mais XP !!!")