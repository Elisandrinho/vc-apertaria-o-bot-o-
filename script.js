const caixaPrincipal = document.querySelector('caixa-principal');
const caixaPerguntas = document.querySelector('caixa-pergumtas');
const caixaAlternativas = document.querySelector('caixa-alternativas');
const caixaResultado = document.querySelector('caixa-resultado');
const textoResultado = document.querySelector('texto-principal');

const pergumtas = [ 
    { 
        enunciado: "no âmbito social, você prefere:",
        alternativas: [ 
            { 
                texto: "alternativa 1",
                afirmação: "afirmação", 
            },
            { 
                texto: "alternativa 2",
                afirmação: "afirmação", 
            }, 
        ] 
    },
    { 
        enunciado: "no âmbito ambieltal, você prefere:",
        alternativas: [ 
            { 
                texto: "alternativa 1",
                afirmação: "afirmação", 
            },
            { 
                texto: "alternativa 2",
                afirmação: "afirmação", 
            }, 
        ] 
    },
    { 
        enunciado: "no âmbito tecnologico, você prefere:",
        alternativas: [ 
            { 
                texto: "alternativa 1",
                afirmação: "afirmação", 
            },
            { 
                texto: "alternativa 2",
                afirmação: "afirmação", 
            }, 
        ] 
    },
]

let atual = 0;
let pergtunaAtual;
