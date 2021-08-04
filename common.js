var counter = 1;
var valueCounter = 0;
var age, describe, becomeMyopic, parent, taskTime, outdoorTime;
var ageText,
  describeText,
  becomeMyopicText,
  parentText,
  taskTimeText,
  outdoorTimeText;

$("body").on("click", ".home-button", function () {
  $(".home").hide();
  $("#question-1").show();
});

$("body").on("click", ".next", function () {
  $(".question").hide();

  counter++;
  valueCounter++;
  $("#question-" + counter + "").show();
  getValue();

  if (counter ===6){
    valueCounter++;
  }
});

$("body").on("click", ".previous", function () {
  counter--;
  valueCounter--;
  $(".question").hide();
  if (counter > 0) {
    $("#question-" + counter).show();
  } else {
    $(".home").show();
  }

  getValue();
  displayResult();
});

$("body").on("click", ".complete", function () {
  // console.log(age);
  // console.log(describe);
  // console.log(becomeMyopic);
  // console.log(parent);
  // console.log(taskTime);
  // console.log(outdoorTime);
  if ((counter === 6)) 
    getValue();
  var score = calculate(0);
  displayResult(score);

  $(".question").hide();
  $("#result").show();
});

function getValue() {
  switch (valueCounter) {
    case 1:
      age = $(".form-select Option:selected").val();
      ageText = $(".form-select Option:selected").text();
      break;
    case 2:
      describe = $('input[name="questionTwoRadio"]:checked').val();
      describeText = $('input[name="questionTwoRadio"]:checked')
        .parent("label")
        .text();
      break;
    case 3:
      becomeMyopic = $('input[name="questionThreeRadio"]:checked').val();
      becomeMyopicText = $('input[name="questionThreeRadio"]:checked')
        .parent("label")
        .text();
      break;
    case 4:
      parent = $('input[name="questionFourRadio"]:checked').val();
      parentText = $('input[name="questionFourRadio"]:checked')
        .parent("label")
        .text();
      break;
    case 5:
      taskTime = $('input[name="questionFiveRadio"]:checked').val();
      taskTimeText = $('input[name="questionFiveRadio"]:checked')
        .parent("label")
        .text();
      break;
    case 6:
      outdoorTime = $('input[name="questionSixRadio"]:checked').val();
      outdoorTimeText = $('input[name="questionSixRadio"]:checked')
        .parent("label")
        .text();
      break;

    default:
      break;
  }
}
function calculate(score) {
  if (age >= 3 && age <= 5) {
    score += 2;
  } else if (age >= 6 && age <= 8) {
    score += 1;
  }

  if (describe === "nearSighted") {
    score += 3;
  }

  if (becomeMyopic === "sevenOrYounger") {
    score += 4;
  } else if (becomeMyopic === "eightToFifteen") {
    score += 3;
  } else {
    score += 2;
  }

  if (parent === "bothParent") {
    score += 3;
  } else if (parent === "oneParent") {
    score += 2;
  }

  if (taskTime === "moreThanThree") {
    score += 5;
  } else if (taskTime === "twoToThree") {
    score += 3;
  } else {
    score += 1;
  }

  if (outdoorTime === "lessThanOneHalf") {
    score += 3;
  } else if (outdoorTime === "oneToTwoHalf") {
    score += 2;
  }
  return score;
}

function displayResult(score) {
  $("#result .answer-1").text(ageText);
  $("#result .answer-2").text(describeText);
  $("#result .answer-3").text(becomeMyopicText);
  $("#result .answer-4").text(parentText);
  $("#result .answer-5").text(taskTimeText);
  $("#result .answer-6").text(outdoorTimeText);

  if(score >=8 && score <=13){
    $(".low").hide()
    $(".medium").show()
  }else if(score >=14) {
    $(".low").hide()
    $(".high").show()
  }
}
