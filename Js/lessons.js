const mathCard = document.querySelector('.math-card');
const mathExpanded = document.querySelector('.math-expanded');
const codeCard = document.querySelector('.code-card');
const codeExpanded = document.querySelector('.code-expanded');
const musicCard = document.querySelector('.music-card');
const musicExpanded = document.querySelector('.music-expanded');
const otherCard = document.querySelector('.other-card');
const otherExpanded = document.querySelector('.other-expanded');


//FUNÇÃO PARA REMOVER TODAS OS CONTEÚDOS EXPANDIDOS
function removeAllExpand() {
    mathExpanded.classList.remove('math-expanded-ativa')
    codeExpanded.classList.remove('code-expanded-ativa')
    musicExpanded.classList.remove('music-expanded-ativa')
    otherExpanded.classList.remove('other-expanded-ativa')
}
function expandMath() { //FUNÇÃO PARA ATIVAR CONTEÚDO EXPANDIDO DO CARD MATH
    if (mathExpanded.classList.contains('math-expanded-ativa')) {
        mathExpanded.classList.remove('math-expanded-ativa');
        removeAllExpand();
    } else {
        removeAllExpand();
        mathExpanded.classList.add('math-expanded-ativa');
    }
}
mathCard.addEventListener('click', expandMath);

function expandCode() { //FUNÇÃO PARA ATIVAR CONTEÚDO EXPANDIDO DO CARD CODE
    if (codeExpanded.classList.contains('code-expanded-ativa')) {
        codeExpanded.classList.remove('code-expanded-ativa');
        removeAllExpand();
    } else {
        removeAllExpand();
        codeExpanded.classList.add('code-expanded-ativa');
    }
}
codeCard.addEventListener('click', expandCode);

function expandMusic() { //FUNÇÃO PARA ATIVAR CONTEÚDO EXPANDIDO DO CARD MUSIC
    if (musicExpanded.classList.contains('music-expanded-ativa')) {
        musicExpanded.classList.remove('music-expanded-ativa');
        removeAllExpand();
    } else {
        removeAllExpand();
        musicExpanded.classList.add('music-expanded-ativa');
    }
}
musicCard.addEventListener('click', expandMusic);

function expandOther() { //FUNÇÃO PARA ATIVAR CONTEÚDO EXPANDIDO DO CARD OTHER
    if (otherExpanded.classList.contains('other-expanded-ativa')) {
        otherExpanded.classList.remove('other-expanded-ativa');
        removeAllExpand();
    } else {
        removeAllExpand();
        otherExpanded.classList.add('other-expanded-ativa');
    }
}
otherCard.addEventListener('click', expandOther);

const mathLessons = document.querySelectorAll(".math-lesson");
const codeLessons = document.querySelectorAll(".code-lesson");
const musicLessons = document.querySelectorAll(".music-lesson");
const otherLessons = document.querySelectorAll(".other-lesson");
const squareMath = document.querySelector(".square-math");
const squareCode = document.querySelector(".square-code");
const squareMusic = document.querySelector(".square-music");
const squareOther = document.querySelector(".square-other");
//CONTADOR DE CONTEÚDOS DE CADA CARD, QUANDO ADICIONAR NOVOS CONTEÚDOS, O NUMERO DE LESSONS DO CARD MUDA AUTOMÁTICO
squareMath.querySelector("h2").textContent = mathLessons.length;
squareCode.querySelector("h2").textContent = codeLessons.length;
squareMusic.querySelector("h2").textContent = musicLessons.length;
squareOther.querySelector("h2").textContent = otherLessons.length;


const mathSpan = document.querySelectorAll('.count span');

mathSpan.forEach((e) => {
    e.addEventListener('click', () => {
        e.style.transform = 'rotate(-135deg)';
    });
});

        
/* ------------curator-feed-default-feed-layout */
(function(){
    var i,e,d=document,s="script";
    i=d.createElement("script");
    i.async=1;
    i.charset="UTF-8";
    i.src="https://cdn.curator.io/published/ca041c73-6845-4385-930a-2ab072c8dbdd.js";
    e=d.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e);
  })();