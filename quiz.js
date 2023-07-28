// select all elements
const startMat = document.getElementById("startMath");
const quizMat = document.getElementById("quizMath");
const questionMat = document.getElementById("questionMath");
const qImgMat = document.getElementById("qImgMath");
const choiceAMat = document.getElementById("AMath");
const choiceBMat = document.getElementById("BMath");
const choiceCMat = document.getElementById("CMath");
const choiceDMat = document.getElementById("DMath");
const counterMat = document.getElementById("counterMath");
const timeGaugeMat = document.getElementById("timeGaugeMath");
const progressMat = document.getElementById("progressMath");
const scoreDivMat = document.getElementById("scoreContainerMath");

// create our questions
let questionsMath = [
    {
        question: "What is the value of 3x + 7 in the equation 3x + 7 = 4x - 2?",
        choiceA: "5",
        choiceB: "7",
        choiceC: "9",
        choiceD: "11",
        correct: "B"
      },
      {
        question: "What is the circumference of a circle with a diameter of 20 units?",
        choiceA: "10π",
        choiceB: "20π",
        choiceC: "40π",
        choiceD: "80π",
        correct: "C"
      },
      {
        question: "In the equation y = 2x - 5, what is the value of the slope?",
        choiceA: "2",
        choiceB: "-2",
        choiceC: "5",
        choiceD: "-5",
        correct: "A"
      },
      {
        question: "A box contains 5 red balls, 3 blue balls, and 2 green balls. If one ball is randomly selected, what is the probability of getting a red ball?",
        choiceA: "1/3",
        choiceB: "1/2",
        choiceC: "5/10",
        choiceD: "2/5",
        correct: "C"
      },
      {
        question: "If log₂x + log₂(x - 8) = 3, what is the value of x?",
        choiceA: "12",
        choiceB: "16",
        choiceC: "24",
        choiceD: "32",
        correct: "B"
      },
      {
        question: "What is the value of (4!) + 2²?",
        choiceA: "22",
        choiceB: "24",
        choiceC: "26",
        choiceD: "28",
        correct: "D"
      },
      {
        question: "The sum of three consecutive even integers is 138. What is the largest integer?",
        choiceA: "44",
        choiceB: "46",
        choiceC: "48",
        choiceD: "50",
        correct: "D"
      },
      {
        question: "If sin θ = 4/5 and cos θ = 3/5, what is the value of tan θ?",
        choiceA: "3/4",
        choiceB: "4/3",
        choiceC: "1/7",
        choiceD: "3/7",
        correct: "B"
      },
      {
        question: "In a right triangle, the length of one leg is 12 units and the hypotenuse is 20 units. What is the length of the other leg?",
        choiceA: "8",
        choiceB: "12",
        choiceC: "16",
        choiceD: "18",
        correct: "A"
      },
      {
        question: "A car travels 240 miles in 4 hours. If it continues to travel at the same speed, how long will it take to travel 480 miles?",
        choiceA: "4",
        choiceB: "6",
        choiceC: "8",
        choiceD: "10",
        correct: "B"
      },
      {
        question: "If f(x) = 2x² - 3x + 1, what is the value of f(4)?",
        choiceA: "15",
        choiceB: "19",
        choiceC: "21",
        choiceD: "25",
        correct: "C"
      },
      {
        question: "What is the area of a rectangle with sides measuring 7 units and 12 units?",
        choiceA: "19",
        choiceB: "84",
        choiceC: "92",
        choiceD: "144",
        correct: "B"
      },
      {
        question: "If log₃x = 2, what is the value of x?",
        choiceA: "1",
        choiceB: "3",
        choiceC: "6",
        choiceD: "9",
        correct: "D"
      },
      {
        question: "A cylindrical tank has a radius of 6 meters and a height of 10 meters. What is the volume of the tank in cubic meters?",
        choiceA: "120π",
        choiceB: "180π",
        choiceC: "360π",
        choiceD: "600π",
        correct: "B"
      },
      {
        question: "What is the solution to the system of equations:\n2x + y = 10\nx - y = 4",
        choiceA: "(2, 6)",
        choiceB: "(3, 7)",
        choiceC: "(4, 6)",
        choiceD: "(5, 5)",
        correct: "A"
      },
      {
        question: "A book costs $27 after a 10% discount. What was its original price?",
        choiceA: "$29",
        choiceB: "$30",
        choiceC: "$33",
        choiceD: "$37",
        correct: "C"
      },
      {
        question: "In a triangle, one angle measures 75 degrees and the other two angles are in a 2:3 ratio. What are the measures of the other two angles?",
        choiceA: "30°, 45°",
        choiceB: "36°, 54°",
        choiceC: "40°, 60°",
        choiceD: "48°, 72°",
        correct: "B"
      },
      {
        question: "If (a + b)² = 169 and (a - b)² = 25, what is the value of ab?",
        choiceA: "6",
        choiceB: "8",
        choiceC: "10",
        choiceD: "12",
        correct: "D"
      },
      {
        question: "Solve for x: |2x - 3| = 7",
        choiceA: "-2",
        choiceB: "-1",
        choiceC: "2",
        choiceD: "5",
        correct: "C"
      },
      {
        question: "A box contains 5 black pens and 3 red pens. If two pens are randomly selected, what is the probability of getting both black pens?",
        choiceA: "5/28",
        choiceB: "1/6",
        choiceC: "5/12",
        choiceD: "1/4",
        correct: "C"
      },
      {
        question: "What is the value of 2⁵ + 3⁴?",
        choiceA: "28",
        choiceB: "29",
        choiceC: "30",
        choiceD: "31",
        correct: "D"
      },
      {
        question: "What is the value of 3x² + 4x - 5 when x = 2?",
        choiceA: "15",
        choiceB: "17",
        choiceC: "19",
        choiceD: "21",
        correct: "C"
      },
      {
        question: "A triangle has side lengths of 5, 12, and 13 units. What type of triangle is it?",
        choiceA: "Equilateral",
        choiceB: "Isosceles",
        choiceC: "Scalene",
        choiceD: "Right",
        correct: "D"
      },
      {
        question: "If 2x + 5y = 17 and 3x - 2y = 11, what is the value of x + y?",
        choiceA: "4",
        choiceB: "5",
        choiceC: "6",
        choiceD: "7",
        correct: "C"
      },
      {
        question: "What is the area of a circle with a radius of 8 units?",
        choiceA: "16π",
        choiceB: "32π",
        choiceC: "64π",
        choiceD: "128π",
        correct: "C"
      },
      {
        question: "If f(x) = √x + 1, what is the value of f(9)?",
        choiceA: "2",
        choiceB: "3",
        choiceC: "4",
        choiceD: "5",
        correct: "C"
      },
      {
        question: "A bag contains 6 red marbles and 4 blue marbles. If two marbles are randomly selected, what is the probability of getting both red marbles?",
        choiceA: "3/5",
        choiceB: "1/2",
        choiceC: "2/5",
        choiceD: "1/5",
        correct: "B"
      },
      {
        question: "What is the value of 4! ÷ 2²?",
        choiceA: "6",
        choiceB: "8",
        choiceC: "12",
        choiceD: "24",
        correct: "B"
      },
      {
        question: "If log₄x = 3, what is the value of x?",
        choiceA: "64",
        choiceB: "32",
        choiceC: "16",
        choiceD: "8",
        correct: "A"
      },
      {
        question: "A rectangular box measures 6 units by 8 units by 10 units. What is the volume of the box?",
        choiceA: "240 cubic units",
        choiceB: "320 cubic units",
        choiceC: "480 cubic units",
        choiceD: "600 cubic units",
        correct: "A"
      },
      {
        question: "What is the sum of the interior angles of a pentagon?",
        choiceA: "180°",
        choiceB: "360°",
        choiceC: "540°",
        choiceD: "720°",
        correct: "C"
      },
      {
        question: "If 2x - 5y = 10 and 3x + 4y = 4, what is the value of xy?",
        choiceA: "-6",
        choiceB: "-4",
        choiceC: "4",
        choiceD: "6",
        correct: "A"
      },
      {
        question: "A cube has a volume of 125 cubic units. What is the length of each edge of the cube?",
        choiceA: "5 units",
        choiceB: "15 units",
        choiceC: "25 units",
        choiceD: "125 units",
        correct: "A"
      },
      {
        question: "In a geometric sequence, the first term is 3 and the common ratio is 2. What is the 7th term of the sequence?",
        choiceA: "96",
        choiceB: "192",
        choiceC: "384",
        choiceD: "768",
        correct: "C"
      },
      {
        question: "If the system of equations:\n2x + 3y = 7\n4x - y = 3\nhas a unique solution, what is the value of x?",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correct: "B"
      },
      {
        question: "What is the area of a right triangle with legs measuring 5 units and 12 units?",
        choiceA: "15 square units",
        choiceB: "30 square units",
        choiceC: "36 square units",
        choiceD: "60 square units",
        correct: "B"
      },
      {
        question: "If f(x) = log₂(x + 2), what is the value of f(2)?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        correct: "C"
      },
      {
        question: "In a bag of colored marbles, 40% are red, 30% are blue, and the rest are green. If there are 120 green marbles, how many marbles are there in total?",
        choiceA: "200",
        choiceB: "300",
        choiceC: "400",
        choiceD: "500",
        correct: "D"
      },
      {
        question: "What is the value of 2⁵ + 3⁴?",
        choiceA: "28",
        choiceB: "29",
        choiceC: "30",
        choiceD: "31",
        correct: "D"
      },
      {
        question: "What is the value of 3x² + 4x - 5 when x = 2?",
        choiceA: "15",
        choiceB: "17",
        choiceC: "19",
        choiceD: "21",
        correct: "C"
      },
      {
        question: "A triangle has side lengths of 5, 12, and 13 units. What type of triangle is it?",
        choiceA: "Equilateral",
        choiceB: "Isosceles",
        choiceC: "Scalene",
        choiceD: "Right",
        correct: "D"
      },
      {
        question: "If 2x + 5y = 17 and 3x - 2y = 11, what is the value of x + y?",
        choiceA: "4",
        choiceB: "5",
        choiceC: "6",
        choiceD: "7",
        correct: "C"
      },
      {
        question: "What is the area of a circle with a radius of 8 units?",
        choiceA: "16π",
        choiceB: "32π",
        choiceC: "64π",
        choiceD: "128π",
        correct: "C"
      },
      {
        question: "If f(x) = √x + 1, what is the value of f(9)?",
        choiceA: "2",
        choiceB: "3",
        choiceC: "4",
        choiceD: "5",
        correct: "C"
      },
      {
        question: "A bag contains 6 red marbles and 4 blue marbles. If two marbles are randomly selected, what is the probability of getting both red marbles?",
        choiceA: "3/5",
        choiceB: "1/2",
        choiceC: "2/5",
        choiceD: "1/5",
        correct: "B"
      },
      {
        question: "What is the value of 4! ÷ 2²?",
        choiceA: "6",
        choiceB: "8",
        choiceC: "12",
        choiceD: "24",
        correct: "B"
      },
      {
        question: "If log₄x = 3, what is the value of x?",
        choiceA: "64",
        choiceB: "32",
        choiceC: "16",
        choiceD: "8",
        correct: "A"
      },
      {
        question: "A rectangular box measures 6 units by 8 units by 10 units. What is the volume of the box?",
        choiceA: "240 cubic units",
        choiceB: "320 cubic units",
        choiceC: "480 cubic units",
        choiceD: "600 cubic units",
        correct: "A"
      },
      {
        question: "What is the sum of the interior angles of a pentagon?",
        choiceA: "180°",
        choiceB: "360°",
        choiceC: "540°",
        choiceD: "720°",
        correct: "C"
      },
      {
        question: "If 2x - 5y = 10 and 3x + 4y = 4, what is the value of xy?",
        choiceA: "-6",
        choiceB: "-4",
        choiceC: "4",
        choiceD: "6",
        correct: "A"
      },
      {
        question: "A cube has a volume of 125 cubic units. What is the length of each edge of the cube?",
        choiceA: "5 units",
        choiceB: "15 units",
        choiceC: "25 units",
        choiceD: "125 units",
        correct: "A"
      },
      {
        question: "In a geometric sequence, the first term is 3 and the common ratio is 2. What is the 7th term of the sequence?",
        choiceA: "96",
        choiceB: "192",
        choiceC: "384",
        choiceD: "768",
        correct: "C"
      },
      {
        question: "If the system of equations:\n2x + 3y = 7\n4x - y = 3\nhas a unique solution, what is the value of x?",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correct: "B"
      },
      {
        question: "What is the area of a right triangle with legs measuring 5 units and 12 units?",
        choiceA: "15 square units",
        choiceB: "30 square units",
        choiceC: "36 square units",
        choiceD: "60 square units",
        correct: "B"
      },
      {
        question: "If f(x) = log₂(x + 2), what is the value of f(2)?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        correct: "C"
      },
      {
        question: "In a bag of colored marbles, 40% are red, 30% are blue, and the rest are green. If there are 120 green marbles, how many marbles are there in total?",
        choiceA: "200",
        choiceB: "300",
        choiceC: "400",
        choiceD: "500",
        correct: "D"
      },
      {
        question: "What is the value of 2⁵ + 3⁴?",
        choiceA: "28",
        choiceB: "29",
        choiceC: "30",
        choiceD: "31",
        correct: "D"
      },
      {
        question: "What is the value of 3x² + 4x - 5 when x = 2?",
        choiceA: "15",
        choiceB: "17",
        choiceC: "19",
        choiceD: "21",
        correct: "C"
      },
      {
        question: "A triangle has side lengths of 5, 12, and 13 units. What type of triangle is it?",
        choiceA: "Equilateral",
        choiceB: "Isosceles",
        choiceC: "Scalene",
        choiceD: "Right",
        correct: "D"
      },
      {
        question: "If 2x + 5y = 17 and 3x - 2y = 11, what is the value of x + y?",
        choiceA: "4",
        choiceB: "5",
        choiceC: "6",
        choiceD: "7",
        correct: "C"
      },
      {
        question: "What is the area of a circle with a radius of 8 units?",
        choiceA: "16π",
        choiceB: "32π",
        choiceC: "64π",
        choiceD: "128π",
        correct: "C"
      },
      {
        question: "If f(x) = √x + 1, what is the value of f(9)?",
        choiceA: "2",
        choiceB: "3",
        choiceC: "4",
        choiceD: "5",
        correct: "C"
      },
      {
        question: "A bag contains 6 red marbles and 4 blue marbles. If two marbles are randomly selected, what is the probability of getting both red marbles?",
        choiceA: "3/5",
        choiceB: "1/2",
        choiceC: "2/5",
        choiceD: "1/5",
        correct: "B"
      },
      {
        question: "What is the value of 4! ÷ 2²?",
        choiceA: "6",
        choiceB: "8",
        choiceC: "12",
        choiceD: "24",
        correct: "B"
      },
      {
        question: "If log₄x = 3, what is the value of x?",
        choiceA: "64",
        choiceB: "32",
        choiceC: "16",
        choiceD: "8",
        correct: "A"
      },
      {
        question: "A rectangular box measures 6 units by 8 units by 10 units. What is the volume of the box?",
        choiceA: "240 cubic units",
        choiceB: "320 cubic units",
        choiceC: "480 cubic units",
        choiceD: "600 cubic units",
        correct: "A"
      },
      {
        question: "What is the sum of the interior angles of a pentagon?",
        choiceA: "180°",
        choiceB: "360°",
        choiceC: "540°",
        choiceD: "720°",
        correct: "C"
      },
      {
        question: "If 2x - 5y = 10 and 3x + 4y = 4, what is the value of xy?",
        choiceA: "-6",
        choiceB: "-4",
        choiceC: "4",
        choiceD: "6",
        correct: "A"
      },
      {
        question: "A cube has a volume of 125 cubic units. What is the length of each edge of the cube?",
        choiceA: "5 units",
        choiceB: "15 units",
        choiceC: "25 units",
        choiceD: "125 units",
        correct: "A"
      },
      {
        question: "In a geometric sequence, the first term is 3 and the common ratio is 2. What is the 7th term of the sequence?",
        choiceA: "96",
        choiceB: "192",
        choiceC: "384",
        choiceD: "768",
        correct: "C"
      },
      {
        question: "If the system of equations:\n2x + 3y = 7\n4x - y = 3\nhas a unique solution, what is the value of x?",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correct: "B"
      },
      {
        question: "What is the area of a right triangle with legs measuring 5 units and 12 units?",
        choiceA: "15 square units",
        choiceB: "30 square units",
        choiceC: "36 square units",
        choiceD: "60 square units",
        correct: "B"
      },
      {
        question: "If f(x) = log₂(x + 2), what is the value of f(2)?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        correct: "C"
      },
      {
        question: "In a bag of colored marbles, 40% are red, 30% are blue, and the rest are green. If there are 120 green marbles, how many marbles are there in total?",
        choiceA: "200",
        choiceB: "300",
        choiceC: "400",
        choiceD: "500",
        correct: "D"
      }
];

// create some variables

const lastQuestionMath = questionsMath.length - 1;
let runningQuestionMath = 0;
let countMath = 0;
const questionTimeMath = 80; // 80s
const gaugeWidthMath = 150; // 150px
const gaugeUnitMath = gaugeWidthMath / questionTimeMath;
let TIMERMath;
let scoreMath = 0;

// render a question
function renderQuestionMath(){
    let q = questionsMath[runningQuestionMath];
    
    questionMat.innerHTML = "<p>"+ q.question +"</p>";
    //qImgMat.innerHTML = "<img src="+ q.imgSrc +">";
    choiceAMat.innerHTML = q.choiceA;
    choiceBMat.innerHTML = q.choiceB;
    choiceCMat.innerHTML = q.choiceC;
    choiceDMat.innerHTML = q.choiceD;
}

//startMat.addEventListener("click",startQuizMath);

// start quiz
function startQuizMath(){
    startMat.style.display = "none";
    renderQuestionMath();
    quizMat.style.display = "block";
    renderProgressMath();
    renderCounterMath();
    TIMERMath = setInterval(renderCounterMath,1000); // 1000ms = 1s
}

// render progress
function renderProgressMath(){
    for(let qIndex = 0; qIndex <= lastQuestionMath; qIndex++){
        progressMat.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounterMath(){
    if(countMath <= questionTimeMath){
        counterMat.innerHTML = countMath;
        timeGaugeMat.style.width = countMath * gaugeUnitMath + "px";
        countMath++
    }else{
        countMath = 0;
        // change progress color to red
        answerIsWrongMath();
        if(runningQuestionMath < lastQuestionMath){
            runningQuestionMath++;
            renderQuestionMath();
        }else{
            // end the quiz and show the score
            clearInterval(TIMERMath);
            scoreRenderMath();
        }
    }
}

// checkAnwer

function checkAnswerMath(answer){
    if( answer == questionsMath[runningQuestionMath].correct){
        // answer is correct
        scoreMath++;
        // change progress color to green
        answerIsCorrectMath();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrongMath();
    }
    countMath = 0;
    if(runningQuestionMath < lastQuestionMath){
        runningQuestionMath++;
        renderQuestionMath();
    }else{
        // end the quiz and show the score
        clearInterval(TIMERMath);
        scoreRenderMath();
    }
}

// answer is correct
function answerIsCorrectMath(){
    document.getElementById(runningQuestionMath).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrongMath(){
    document.getElementById(runningQuestionMath).style.backgroundColor = "#f00";
}

// score render
function scoreRenderMath(){
    scoreDivMat.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * scoreMath/questionsMath.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDivMat.innerHTML = "<img src="+ img +">";
    scoreDivMat.innerHTML += "<p>"+ scorePerCent +"%</p>";
    scoreDivMat.innerHTML += '<div id="restartButtonMath" onclick="location.reload()">Restart</div>';
}



























//GRAMMAR GAME


// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question: "Choose the option that best maintains the sentence structure and follows the rules of standard written English.\n\nThe hikers set up camp __________ the beautiful lake and explored the surrounding trails.",
        choiceA: "besides",
        choiceB: "among",
        choiceC: "beside",
        choiceD: "between",
        correct: "C"
      },
      {
        question: "Choose the word or phrase that best completes the sentence and improves the clarity and precision of the writing.\n\nThe professor's lecture was so __________ that it put most of the students to sleep.",
        choiceA: "complicated",
        choiceB: "fascinating",
        choiceC: "monotonous",
        choiceD: "insightful",
        correct: "C"
      },
      {
        question: "Choose the option that best maintains the style and tone of the passage.\n\nThe author used humor and wit to __________ the reader's interest throughout the article.",
        choiceA: "maintain",
        choiceB: "sustain",
        choiceC: "capture",
        choiceD: "engage",
        correct: "D"
      },
      {
        question: "Choose the option that best combines the sentences while maintaining coherence and clarity.\n\nThe storm was approaching. We decided to stay indoors.",
        choiceA: "The storm was approaching; therefore, we decided to stay indoors.",
        choiceB: "The storm was approaching, so we decided to stay indoors.",
        choiceC: "The storm was approaching, however, we decided to stay indoors.",
        choiceD: "The storm was approaching, despite that, we decided to stay indoors.",
        correct: "B"
      },
      {
        question: "Choose the word or phrase that best replaces the underlined portion without changing the meaning of the sentence.\n\nThe team's performance was lackluster, _______ the coach's high expectations.",
        choiceA: "meeting",
        choiceB: "surpassing",
        choiceC: "exceeding",
        choiceD: "disappointing",
        correct: "D"
      },
      {
        question: "Choose the option that best maintains the sentence's logical flow and coherence.\n\nThe new company policy has been implemented to reduce costs, improve efficiency, _______ increase customer satisfaction.",
        choiceA: "but also",
        choiceB: "also",
        choiceC: "in addition",
        choiceD: "moreover",
        correct: "B"
      },
      {
        question: "Choose the word that best fits in the blank and maintains the parallel structure of the sentence.\n\nThe students were asked to analyze the data, _______ conclusions, and present their findings.",
        choiceA: "draw",
        choiceB: "drew",
        choiceC: "drawing",
        choiceD: "drawn",
        correct: "A"
      },
      {
        question: "Choose the option that best maintains the tone and meaning of the sentence.\n\nThe author's purpose in this passage is to inform readers about the _______ impact of climate change.",
        choiceA: "adverse",
        choiceB: "favorable",
        choiceC: "beneficial",
        choiceD: "neutral",
        correct: "A"
      },
      {
        question: "Choose the word or phrase that best replaces the underlined portion without changing the meaning of the sentence.\n\nThe politician's speech was filled with _______ promises and empty rhetoric.",
        choiceA: "dubious",
        choiceB: "sincere",
        choiceC: "genuine",
        choiceD: "forthcoming",
        correct: "A"
      },
      {
        question: "Choose the option that best combines the sentences while maintaining coherence and clarity.\n\nThe concert was sold out. We couldn't find any tickets.",
        choiceA: "Although the concert was sold out, we couldn't find any tickets.",
        choiceB: "Despite the concert being sold out, we couldn't find any tickets.",
        choiceC: "Since the concert was sold out, we couldn't find any tickets.",
        choiceD: "Because the concert was sold out, we couldn't find any tickets.",
        correct: "A"
      },
      {
        question: "The committee _______ a decision after hours of debate.",
        choiceA: "reached",
        choiceB: "reaching",
        choiceC: "reach",
        choiceD: "had reached",
        correct: "A"
      },
      {
        question: "Each of the students _______ given a unique assignment.",
        choiceA: "was",
        choiceB: "were",
        choiceC: "are",
        choiceD: "is",
        correct: "D"
      },
      {
        question: "The book, as well as the pen, _______ on the table.",
        choiceA: "is",
        choiceB: "are",
        choiceC: "has",
        choiceD: "have",
        correct: "A"
      },
      {
        question: "He neither plays football _______ watches cricket.",
        choiceA: "or",
        choiceB: "nor",
        choiceC: "but",
        choiceD: "and",
        correct: "B"
      },
      {
        question: "The seminar was _______ long that many people left early.",
        choiceA: "so",
        choiceB: "too",
        choiceC: "very",
        choiceD: "quite",
        correct: "B"
      },
      {
        question: "_______ she arrives on time, we will have to start without her.",
        choiceA: "Though",
        choiceB: "Unless",
        choiceC: "Until",
        choiceD: "After",
        correct: "B"
      },
      {
        question: "I _______ her since we graduated from college.",
        choiceA: "didn't see",
        choiceB: "hadn't seen",
        choiceC: "haven't seen",
        choiceD: "hasn't seen",
        correct: "C"
      },
      {
        question: "John, along with his friends, _______ going on a trip.",
        choiceA: "am",
        choiceB: "is",
        choiceC: "are",
        choiceD: "were",
        correct: "C"
      },
      {
        question: "I can't believe _______ she said that to me!",
        choiceA: "that",
        choiceB: "which",
        choiceC: "what",
        choiceD: "how",
        correct: "C"
      },
      {
        question: "The teacher asked the students _______ not to talk during the exam.",
        choiceA: "their",
        choiceB: "there",
        choiceC: "they're",
        choiceD: "to",
        correct: "D"
      },
      {
        question: "The president, _______ made a speech, addressed important issues.",
        choiceA: "that",
        choiceB: "which",
        choiceC: "who",
        choiceD: "whom",
        correct: "C"
      },
      {
        question: "I could _______ come to the party.",
        choiceA: "barely",
        choiceB: "hardly",
        choiceC: "scarcely",
        choiceD: "mostly",
        correct: "B"
      },
      {
        question: "The professor handed out the exams _______ leaving the room.",
        choiceA: "while",
        choiceB: "when",
        choiceC: "before",
        choiceD: "after",
        correct: "D"
      },
      {
        question: "All the books on the shelf _______ novels.",
        choiceA: "is",
        choiceB: "are",
        choiceC: "was",
        choiceD: "were",
        correct: "B"
      },
      {
        question: "He enjoys reading books and _______ magazines.",
        choiceA: "also",
        choiceB: "to",
        choiceC: "either",
        choiceD: "nor",
        correct: "C"
      },
      {
        question: "Not only the students but also the teacher _______ happy.",
        choiceA: "is",
        choiceB: "am",
        choiceC: "are",
        choiceD: "be",
        correct: "A"
      },
      {
        question: "She worked hard, _______ she failed to achieve her goal.",
        choiceA: "since",
        choiceB: "yet",
        choiceC: "because",
        choiceD: "although",
        correct: "D"
      },
      {
        question: "By the time we reached the station, the train _______.",
        choiceA: "leave",
        choiceB: "leaves",
        choiceC: "left",
        choiceD: "had left",
        correct: "C"
      },
      {
        question: "The manager asked me _______ my computer at the end of the day.",
        choiceA: "to shut down",
        choiceB: "shut down",
        choiceC: "shutting down",
        choiceD: "shutted down",
        correct: "A"
      },
      {
        question: "He said that he _______ the report by tomorrow.",
        choiceA: "finishes",
        choiceB: "finished",
        choiceC: "will finish",
        choiceD: "had finished",
        correct: "C"
      },
      {
        question: "Her singing is _______ beautiful that everyone applauds.",
        choiceA: "so",
        choiceB: "very",
        choiceC: "much",
        choiceD: "such",
        correct: "D"
      },
      {
        question: "The movie, along with the popcorn, _______ the highlight of the evening.",
        choiceA: "was",
        choiceB: "were",
        choiceC: "is",
        choiceD: "are",
        correct: "A"
      },
      {
        question: "I've never seen _______ interesting documentary before.",
        choiceA: "an",
        choiceB: "a",
        choiceC: "some",
        choiceD: "any",
        correct: "D"
      },
      {
        question: "No sooner _______ than the rain started pouring.",
        choiceA: "he leaves",
        choiceB: "had he left",
        choiceC: "he had left",
        choiceD: "did he leave",
        correct: "B"
      },
      {
        question: "_______ coffee I drink, the more I stay awake.",
        choiceA: "The much",
        choiceB: "The most",
        choiceC: "The more",
        choiceD: "More",
        correct: "C"
      },
      {
        question: "You need to work harder _______ your grades.",
        choiceA: "to improve",
        choiceB: "improving",
        choiceC: "improved",
        choiceD: "improves",
        correct: "A"
      },
      {
        question: "The thief confessed _______ the stolen money.",
        choiceA: "to have hidden",
        choiceB: "to hide",
        choiceC: "having hidden",
        choiceD: "having hide",
        correct: "A"
      },
      {
        question: "_______ you study, the better your results will be.",
        choiceA: "More",
        choiceB: "The most",
        choiceC: "The more",
        choiceD: "Most",
        correct: "C"
      },
      {
        question: "The politician's speech was both inspiring _______ informative.",
        choiceA: "also",
        choiceB: "or",
        choiceC: "yet",
        choiceD: "and",
        correct: "D"
      },
      {
        question: "My sister is the only person _______ her wedding dress.",
        choiceA: "fitting",
        choiceB: "fits",
        choiceC: "to fit",
        choiceD: "fitted",
        correct: "C"
      },
      {
        question: "The river _______ through the city is polluted.",
        choiceA: "running",
        choiceB: "ran",
        choiceC: "runs",
        choiceD: "to run",
        correct: "C"
      },
      {
        question: "The teacher asked the students _______ during the exam.",
        choiceA: "not to talk",
        choiceB: "not talking",
        choiceC: "do not talk",
        choiceD: "not talk",
        correct: "A"
      },
      {
        question: "This is the same hotel _______ I stayed in last year.",
        choiceA: "who",
        choiceB: "where",
        choiceC: "which",
        choiceD: "whom",
        correct: "C"
      },
      {
        question: "The concert was _______ good that everyone enjoyed it.",
        choiceA: "so",
        choiceB: "so much",
        choiceC: "such",
        choiceD: "such a",
        correct: "C"
      },
      {
        question: "_______ you're happy with the results, you can leave.",
        choiceA: "Until",
        choiceB: "Unless",
        choiceC: "While",
        choiceD: "After",
        correct: "B"
      },
      {
        question: "He asked me _______ the car keys.",
        choiceA: "where are",
        choiceB: "where were",
        choiceC: "where was",
        choiceD: "where had been",
        correct: "B"
      },
      {
        question: "The train _______ when I arrived at the station.",
        choiceA: "just leaves",
        choiceB: "has just left",
        choiceC: "had just left",
        choiceD: "just left",
        correct: "C"
      },
      {
        question: "The museum _______ for renovations next month.",
        choiceA: "is closed",
        choiceB: "is closing",
        choiceC: "closes",
        choiceD: "will be closed",
        correct: "D"
      },
      {
        question: "She has been learning to play the piano _______ she was six.",
        choiceA: "since",
        choiceB: "for",
        choiceC: "from",
        choiceD: "in",
        correct: "A"
      },
      {
        question: "The _______ students received a scholarship.",
        choiceA: "most high-achieving",
        choiceB: "high-achieving",
        choiceC: "more high-achieving",
        choiceD: "high-achiever",
        correct: "B"
      },
      {
        question: "They will wait for us _______ we arrive.",
        choiceA: "as far",
        choiceB: "until",
        choiceC: "since",
        choiceD: "if",
        correct: "B"
      },
      {
        question: "The project is _______ it was five years ago.",
        choiceA: "nearly complete",
        choiceB: "completed nearly",
        choiceC: "almost completed",
        choiceD: "completed almost",
        correct: "D"
      },
      {
        question: "The teacher suggested _______ the assignment.",
        choiceA: "to postpone",
        choiceB: "postponing",
        choiceC: "postpone",
        choiceD: "postpones",
        correct: "B"
      },
      {
        question: "He didn't have a map, _______ he got lost.",
        choiceA: "so",
        choiceB: "for",
        choiceC: "and",
        choiceD: "yet",
        correct: "A"
      },
      {
        question: "_______ is your favorite movie?",
        choiceA: "Which",
        choiceB: "Where",
        choiceC: "What",
        choiceD: "Who",
        correct: "C"
      },
      {
        question: "The weather _______ when we were on vacation.",
        choiceA: "is bad",
        choiceB: "was bad",
        choiceC: "were bad",
        choiceD: "are bad",
        correct: "B"
      },
      {
        question: "She has been studying for the test _______ two hours.",
        choiceA: "during",
        choiceB: "since",
        choiceC: "for",
        choiceD: "from",
        correct: "C"
      },
      {
        question: "The car, _______ was parked outside, was stolen.",
        choiceA: "that",
        choiceB: "who",
        choiceC: "whom",
        choiceD: "whose",
        correct: "A"
      },
      {
        question: "We will go to the beach _______ it rains.",
        choiceA: "although",
        choiceB: "while",
        choiceC: "unless",
        choiceD: "if",
        correct: "C"
      },
      {
        question: "I don't know _______ she will arrive.",
        choiceA: "what time",
        choiceB: "what's time",
        choiceC: "what's the time",
        choiceD: "what the time",
        correct: "A"
      },
      {
        question: "_______ of the students passed the exam.",
        choiceA: "The most",
        choiceB: "Most",
        choiceC: "The most of",
        choiceD: "Most of",
        correct: "D"
      },
      {
        question: "She has _______ finished her science project.",
        choiceA: "now",
        choiceB: "yet",
        choiceC: "since",
        choiceD: "already",
        correct: "D"
      },
      {
        question: "The movie was _______ interesting _______ exciting.",
        choiceA: "both / and",
        choiceB: "neither / nor",
        choiceC: "not only / but also",
        choiceD: "either / or",
        correct: "C"
      },
      {
        question: "_______ the rain, the event will be held outside.",
        choiceA: "Although",
        choiceB: "Despite",
        choiceC: "However",
        choiceD: "Nevertheless",
        correct: "B"
      },
      {
        question: "He is the best player on the team, _______?",
        choiceA: "isn't he",
        choiceB: "doesn't he",
        choiceC: "wasn't he",
        choiceD: "hasn't he",
        correct: "A"
      },
      {
        question: "The bakery _______ fresh bread every morning.",
        choiceA: "bakes",
        choiceB: "baked",
        choiceC: "has baked",
        choiceD: "is baking",
        correct: "A"
      },
      {
        question: "She _______ to the party if she hadn't been sick.",
        choiceA: "comes",
        choiceB: "came",
        choiceC: "had come",
        choiceD: "would come",
        correct: "D"
      },
      {
        question: "The restaurant, _______ has great reviews, is always crowded.",
        choiceA: "which",
        choiceB: "that",
        choiceC: "who",
        choiceD: "whose",
        correct: "A"
      },
      {
        question: "We would have gone for a walk _______ it was raining.",
        choiceA: "though",
        choiceB: "unless",
        choiceC: "because",
        choiceD: "if",
        correct: "D"
      },
      {
        question: "The box _______ on the shelf contains my old toys.",
        choiceA: "who",
        choiceB: "which",
        choiceC: "whose",
        choiceD: "whom",
        correct: "B"
      },
      {
        question: "The results of the experiment were _______ expected.",
        choiceA: "just as",
        choiceB: "just",
        choiceC: "so much",
        choiceD: "so",
        correct: "A"
      },
      {
        question: "_______ he speaks, he makes everyone laugh.",
        choiceA: "While",
        choiceB: "Because",
        choiceC: "However",
        choiceD: "Whenever",
        correct: "D"
      },
      {
        question: "They _______ the test if they had studied more.",
        choiceA: "will pass",
        choiceB: "would pass",
        choiceC: "pass",
        choiceD: "would have passed",
        correct: "D"
      },
      {
        question: "_______ she arrived at the party, everyone applauded.",
        choiceA: "Until",
        choiceB: "While",
        choiceC: "Because",
        choiceD: "When",
        correct: "D"
      },
      {
        question: "He _______ a book about his travels.",
        choiceA: "wrote",
        choiceB: "has written",
        choiceC: "had written",
        choiceD: "had been writing",
        correct: "A"
      },
      {
        question: "We went to the beach _______ it was raining.",
        choiceA: "although",
        choiceB: "unless",
        choiceC: "however",
        choiceD: "if",
        correct: "A"
      },
      {
        question: "_______ you read, the more you learn.",
        choiceA: "Much",
        choiceB: "Most",
        choiceC: "More",
        choiceD: "The more",
        correct: "D"
      },
      {
        question: "The meeting _______ for 10 a.m. tomorrow.",
        choiceA: "was scheduled",
        choiceB: "has been scheduled",
        choiceC: "is scheduling",
        choiceD: "will be scheduled",
        correct: "B"
      },
      {
        question: "_______ is your sister's name?",
        choiceA: "Which",
        choiceB: "Where",
        choiceC: "What",
        choiceD: "Who",
        correct: "C"
      },
      {
        question: "The team _______ in the championship next week.",
        choiceA: "plays",
        choiceB: "will play",
        choiceC: "played",
        choiceD: "has played",
        correct: "B"
      },
      {
        question: "He will arrive on time _______ he leaves now.",
        choiceA: "if",
        choiceB: "unless",
        choiceC: "since",
        choiceD: "while",
        correct: "A"
      },
      {
        question: "I'm not sure _______ that movie.",
        choiceA: "to have enjoyed",
        choiceB: "having enjoyed",
        choiceC: "enjoying",
        choiceD: "if I enjoyed",
        correct: "D"
      },
      {
        question: "_______ I finish my homework, I will watch TV.",
        choiceA: "Because",
        choiceB: "When",
        choiceC: "While",
        choiceD: "Until",
        correct: "B"
      },
      {
        question: "My sister enjoys _______ books.",
        choiceA: "read",
        choiceB: "reading",
        choiceC: "reads",
        choiceD: "to read",
        correct: "B"
      },
      {
        question: "They would have won the match _______ they played better.",
        choiceA: "if",
        choiceB: "unless",
        choiceC: "while",
        choiceD: "although",
        correct: "A"
      },
      {
        question: "The teacher said that the test _______ next week.",
        choiceA: "will be",
        choiceB: "is",
        choiceC: "has been",
        choiceD: "was",
        correct: "A"
      },
      {
        question: "_______ you come to the party, I will be glad.",
        choiceA: "Because",
        choiceB: "Since",
        choiceC: "Although",
        choiceD: "If",
        correct: "D"
      },
      {
        question: "She is excited about _______ to a new city.",
        choiceA: "move",
        choiceB: "moved",
        choiceC: "moving",
        choiceD: "to move",
        correct: "C"
      },
      {
        question: "_______ students passed the exam.",
        choiceA: "Most",
        choiceB: "The most",
        choiceC: "Most of",
        choiceD: "The most of",
        correct: "A"
      }
];


// create some variables


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 48; // 48s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


// render a question
function renderQuestion(){
    let q = questions
    
    [runningQuestion];
   
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


//start.addEventListener("click",startQuiz);


// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}


// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


// counter render


function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


// checkAnwer


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}


// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}


// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}


// score render
function scoreRender(){
    scoreDiv.style.display = "block";
   
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
   
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
   
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    scoreDiv.innerHTML += '<div id="restartButton" onclick="location.reload()">Restart</div>';
}


















