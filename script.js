const caixaPrincipal = document.querySelector( '.caixa-principal');
const caixaPerguntas = document.querySelector( '.caixa-perguntas');
const caixaAlternativas = document.querySelector( '.caixa-alternativas');
const caixaResultado = document.querySelector( '.caixa-resultado');
const textoResultado = document.querySelector( '.texto-resultado');

const perguntas = [
    {
        enunciado: "No Âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Você prefere estar casado com um cônjuge do qual você gosta,porém seus pais não irão apoiar o relacionamento de vocês.",
                afirmacao: "afirmação",
            },
            {
                texto: "Você prefere ter um relacionamento diferente a cada mês que passar com uma pessoa que você ama,porém, sempre que vocês terminarem, ela morre.",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No Âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Você prefere ser o responsável por desmatar a Amazônia, porém para benefício próprio.",
                afirmacao: "afirmação",
            },
            {
                texto: "Você prefere acabar com o aquecimento global, porém a pessoa que você mais odeia receberá os créditos por você.",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No Âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Você prefere que acabe a fome do mundo, porém as IA 's dominarão o mundo e te farão escravo.",
                afirmacao: "afirmação",
            },
            {
                texto: "Você prefere ser o maior influenciador do mundo, porém a internet acaba.ef",
                afirmacao: "afirmação",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
lethistoriaFinal = "";

function mostraPergunta (){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativa();
}

function mostraAlternativas () {
    for (const pergunta of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent= pergunta.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(pergunta))
        caixaAlternativas.appendChild(botaoAlternativa);
    
    }
}

function respostaSelecionada (pergunta){
    const afirmacoes= pergunta.afirmacao;
    historiaFinal += afirmacoes + = " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado(){
 caixaPerguntas.textContent = "Em resumo, você escolheu..."
 caixaResultado.textContent = historiaFinal;
 caixaAlternativas.textContent = " ";

}

mostraPergunta();