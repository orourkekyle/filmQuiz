// var startTitle = document.getElementsByClassName(".opening-title")
// var showQ = document.getElementsByClassName(".ask-question");
$(document).ready(function() {
var questions = [
    {
        question: "What are the dying words of Charles Foster Kane in 'Citizen Kane'?",
        choices: ["Rosebud", "Banana", "I dont want to die", "The movie is now over"],
        answer: "Rosebud",
    },
    {
        question: "In The Matrix, does Neo take the blue pill or the red pill?",
        choices: ["Oragne", "Green", "Red", "Blue"],
        answer: "Red",
    },
     {
        question: "For what movie did Tom Hanks score his first Academy Award nomination?",
        choices: ["Big", "Cast Away", "Forest Gump", "Saving Private Ryan"],
        answer: "Big",
    },
    {
        question: "What flavor of Pop Tarts does Buddy the Elf use in his spaghetti in Elf?",
        choices: ["Stawberry", "Chocolate", "Cookies & Cream", "Cinnamon"],
        answer: "Chocolate",
    },
    {
        question: "The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
        choices: ["Frog", "Dog", "Horse", "Sea Horse"],
        answer: "Horse",
    },
    {
        question: "What person was Jack Nicholson referencing when he ad-libbed “Here’s Johnny!” in The Shining?",
        choices: ["Johnny Depp", "Johnny Carson", "Johnny Cash", "Johnny Hallyday"],
        answer: "Johnny Carson",
    },
    {
        question: "Who played park owner John Hammond in Jurassic Park?",
        choices: ["Richard Attenborough", "Tom Hanks", "Sam Neill", "jeff Goldblum"],
        answer: "Richard Attenborough",
    },
    {
        question: "In what 1976 thriller does Robert De Niro famously say 'You talkin’ to me?'",
        choices: ["The Godfather", "Cape Fear", "Taxi Driver", "Raging Bull"],
        answer: "Taxi Driver",
    },
    {
        question: "What’s the name of the anthemic dance near the beginning of The Rocky Horror Picture Show?",
        choices: ["Science Fiction", "The Time Warp", "Damn It, Janet", "Sweet Transvestite"],
        answer: "The Time Warp",
    },
    {
        question: "For what movie did Steven Spielberg win his first Oscar for Best Director?",
        choices: ["Gremlins", "Raiders of the Lost Ark", "E.T.", "Schindler's List"],
        answer: "Schindler's List",
    }

];

// $(".ask-question").hide();
// $(".btn-warning").hide();



    var score = 0;
    var time = 25;
    var result = 0;
    var userChoice = false;
    var timesUp = false;
    var quesCounter = 0;
    var timerInterval;

    var askQeustion = document.querySelector(".ask-question");
    var giveChoices = document.querySelector(".btn-warning");

    $("#questions").hide();
    $("#end-game").hide();

   /* function startQuiz() {
        askQeustion.addEventListener("click", function() {
            $(".opening-title").hide();
        })
        // $("#start").onClick(function() {
        //     $(".opening-title").hide();
        //     $("#start").hide();
        //     $(".ask-question").show();
        //     $(".btn-warning").show();
        // // $(".ask-question").show.replaceWith(questions.question[i]);
        // $(".btn-warning").show();
        // for (var i=0;i<questions.length;i++) {
        //     var askQuestion = questions.question[i];
        //     var giveChoices = questions.choices[i];
        //     var rightAns = question.answer[i];
        //     $(".ask-questoin").text().replace(askQuestion, '');
        }*/

        $("#start").on("click", function(){
            $("#start-div").hide();
            $("#questions").show();
            

            dispQues();
            function startTime() {
                 timerInterval = setInterval(function() {
                    time--;
                    $("#time").text(time);

                    if( time === 0){
                        gameOver();
                        clearTimeout(timerInterval);
                    }
                }, 1000);
            }
            startTime();            
        })

        function dispQues(){
            $("#que").empty();

            var p_ques = $("<p>");
            p_ques.text(questions[quesCounter].question);
            $("#que").append(p_ques);

            for(var i=0;i<questions[quesCounter].choices.length;i++){
                var btn = $("<button>");
                btn.addClass("answerBtn");
                btn.attr("data-ans", questions[quesCounter].choices[i]);
                btn.text(questions[quesCounter].choices[i]);
                $("#que").append(btn);
            }
        }

        $(document).on("click", ".answerBtn", function(){
            console.log("Inside button click");
            var uInput = $(this).attr("data-ans");

            
            
            if(uInput === questions[quesCounter].answer){
                score += 10;
                $("#score").text(score);
            }
            else{
                time -= 5;
                $("#time").text(time);

                if(time === 0 || time<0){
                    gameOver();
                    clearTimeout(timerInterval);
                }
            }

            quesCounter++;
            if(quesCounter === questions.length){
                gameOver();
                clearTimeout(timerInterval);
            }
            dispQues();
        })

        function gameOver(){
            $("#que").hide()
            $("#end-game").show();
            }

            $("#ini-submit").on("click", function(){
                var uData = JSON.parse(localStorage.getItem("Users")) || [];

                var temp = {
                    initial: $("#initial").val(),
                    socre: score,
                    time: time
                };

                $("#initial").val("");

                uData.push(temp);

                localStorage.setItem("Users", JSON.stringify(uData));

                
            })
        })