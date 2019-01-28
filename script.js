let pitanje = document.getElementById("pitanje");
let answA = document.getElementById("a");
let answB = document.getElementById("b");
let answC = document.getElementById("c");
let answD = document.getElementById("d");
let answers = document.getElementById("grid");

let data = [
{question: "are you looking to hire a developer?",
answer: ["not now", "no", "yes", "mayb's lataa"],
correct: "c"
}, 
{question: "how do you like your developers?",
answer: ["smart and talented", "tall", "loud", "i dont"],
correct: "a"
}, 
{question: "as an employer you are?",
answer: ["the worst", "kind and fair", "exploitative", "no comment"],
correct: "b"
}, 
{question: "do you want your developers to be?",
answer: ["drug addicts", "proactive and self-sufficient", "cristians", "philosophically sound"],
correct: "b"
}, 
{question: "are you ready to embark on this proffesional journey with me?",
answer: ["i'd be happy to", "nooooo", "hmm...", "this is moving too fast"],
correct: "a"
}
];

let i = 0;

answers.onclick = function (event) {
    
    let target = event.target;
    
    answA.innerHTML = data[i].answer[0];
    answB.innerHTML = data[i].answer[1];
    answC.innerHTML = data[i].answer[2];
    answD.innerHTML = data[i].answer[3];
    pitanje.innerHTML = data[i].question;
    if (target.id == "grid") {
        i = i;
    }
    else if (target.id == data[i].correct) {
        document.getElementById(target.id).classList.add('trap-orange');
        setTimeout(()=> document.getElementById(target.id).classList.remove('trap-orange'), 500);
        setTimeout(()=> document.getElementById(target.id).classList.add('trap-orange'), 1000);
        setTimeout(()=> document.getElementById(target.id).classList.remove('trap-orange'), 1500);
        setTimeout(()=> document.getElementById(target.id).classList.add('trap-green'), 1500);
        setTimeout(()=> document.getElementById(target.id).classList.remove('trap-green'), 3000);
        i++;
    } else {
        document.getElementById(target.id).classList.add('trap-orange');
        setTimeout(()=> document.getElementById(target.id).classList.remove('trap-orange'), 500);
        setTimeout(()=> document.getElementById(target.id).classList.add('trap-orange'), 1000);
        setTimeout(()=> document.getElementById(target.id).classList.remove('trap-orange'), 1500);
        setTimeout(()=> document.getElementById(target.id).classList.add('trap-red'), 1500);
        setTimeout(()=> document.getElementById(target.id).classList.remove('trap-red'), 3000);
       i = 0; 
    }
    if (i == 5) {
        console.log("youwin");
        setTimeout(()=> document.getElementById("win").style.visibility = "visible", 3000);
    } else {
    setTimeout(()=> answA.innerHTML = data[i].answer[0], 3000);
    setTimeout(()=> answB.innerHTML = data[i].answer[1], 3000);
    setTimeout(()=> answC.innerHTML = data[i].answer[2], 3000);
    setTimeout(()=> answD.innerHTML = data[i].answer[3], 3000);
    setTimeout(()=> pitanje.innerHTML = data[i].question, 3000);
    }

    console.log(i);
}
