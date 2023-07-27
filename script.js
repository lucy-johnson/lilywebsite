let score = 0;

quiz = document.forms.Quiz.elements;

/*
function checkAnswers(){
    let score = 10;
    alert ("Well done, your score was " + score);
}
*/

function checkAnswers(){
    let score = 0;
    quiz = document.forms.Quiz.elements;
    answer1= quiz.species.value;
    if (answer1 = "cannaLily"){
        score = score + 1;
    }
    answer2 = quiz.hybrid.value;
    if (answer2 = "stargazerLily"){;
    score = score + 1;
    }
    
    alert ("Well done, your score was " + score + ".");
    
}