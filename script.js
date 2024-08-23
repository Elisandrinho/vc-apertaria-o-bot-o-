const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Você prefere encontrar o cônjuge da sua vida no próximo mês e só poder se relacionar com essa pessoa, mas se você se relacionar com qualquer outra pessoa, o seu cônjuge morrerá.",
                afirmacao: "Você prefere encontrar o cônjuge da sua vida no próximo mês e só poder se relacionar com essa pessoa, mas se você se relacionar com qualquer outra pessoa, o seu cônjuge morrerá.",
            },
            {
                texto: "Você prefere ter inúmeros amores incríveis, o problema é que a cada nova pessoa que você conhecer, você será obrigado a terminar com a última que conheceu.",
                afirmacao: "Você prefere ter inúmeros amores incríveis, o problema é que a cada nova pessoa que você conhecer, você será obrigado a terminar com a última que conheceu.",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Você prefere ser o responsável por acabar com o aquecimento global, sem ter os créditos.",
                afirmacao: "Você prefere ser o responsável por acabar com o aquecimento global, sem ter os créditos.",
            },
            {
                texto: "Você prefere ser o responsável por acabar com a economia de um país inteiro, porém receberá todo o dinheiro desse país, sem que ninguém saiba o que você fez.",
                afirmacao: "Você prefere ser o responsável por acabar com a economia de um país inteiro, porém receberá todo o dinheiro desse país, sem que ninguém saiba o que você fez.",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Você prefere que acabe a fome do mundo, porém as IA 's dominarão o mundo e te farão escravo.",
                afirmacao: "Você prefere que acabe a fome do mundo, porém as IA 's dominarão o mundo e te farão escravo.",
            },
            {
                texto: "Você prefere ser o maior influenciador do mundo, porém a internet acaba.ef",
                afirmacao: "Você prefere ser o maior influenciador do mundo, porém a internet acaba.ef",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa() {
    for (const pergunta of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = pergunta.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(pergunta));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(pergunta) {
    const afirmacoes = pergunta.afirmacao;
    historiaFinal += afirmacoes +" ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo, você escolheu... ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();