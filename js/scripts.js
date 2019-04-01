var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var answered = 0;
var blank = 0;
var score = 0;
var answer = 0;
var verdict = "";
var advice = "";
var percentage = 0
//Checks to see how many questions were attempted and how many left blank
var checkAll = function() {
  for (i = 0; i < numbers.length; i++) {
    if ($("input:radio[name=question" + numbers[i] + "]").is(":checked")) {
      answered = answered + 1;
    } else {
      blank = blank + 1;
    }
  }
};
//Adds score when radio selected, else doesn't
var add = function() {
  if (answer == 0 || answer == 1) {
    score = score + answer;
  } else {
    score = score + 0;
  }
};
//Calculates percentage
var per = function() {
  percentage = Math.round(score / 10 * 100);
};
//Generates final comments
var result = function() {
  if (percentage >= 80) {
    verdict = "This is excellent."
    advice = "No need to retake the test."
  } else if (percentage >= 50 && percentage < 80) {
    verdict = "This is fairly good."
    advice = "You may retake the test to improve your score."
  } else {
    verdict = "This is a poor score."
    advice = "It is advisable you retake the test."
  }
};
//User Interface Logic
// $(document).ready(function() {
//   function loop() {
//     var questions = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eigth", "ninth", "tenth"];
//     var i = 0;
//     $('#next').click(function() {
//       $("." + questions[i]).show();
//       $("." + questions[i - 1]).hide();
//       i = i + 1;
//     });
//     $('#previous').click(function() {
//       $("." + questions[i - 1]).show();
//       $("." + questions[i]).hide();
//       i = i - 1;
//     });
//     $('#view').click(function() {
//       questions.forEach(function(question) {
//         $('.' + question).show();
//       })
//       ;
//     });
//   }
//   loop();
  $(document).ready(function() {
    $("button#button1").click(function() {
      $(".second").toggle();
      $(".first").hide();
    });

    $("button#button2").click(function() {
      $(".second").hide();
      $(".third").toggle();
    });
    $("button#button2p").click(function() {
      $(".first").toggle();
      $(".second").hide();
    });

    $("button#button3").click(function() {
      $(".third").hide();
      $(".fourth").toggle();
    });
    $("button#button3p").click(function() {
      $(".third").hide();
      $(".second").toggle();
    });

    $("button#button4").click(function() {
      $(".fourth").hide();
      $(".fifth").toggle();
    });
    $("button#button4p").click(function() {
      $(".fourth").hide();
      $(".third").toggle();
    });

    $("button#button5").click(function() {
      $(".fifth").hide();
      $(".sixth").toggle();
    });
    $("button#button5p").click(function() {
      $(".fifth").hide();
      $(".fourth").toggle();
    });

    $("button#button6").click(function() {
      $(".sixth").hide();
      $(".seventh").toggle();
    });
    $("button#button6p").click(function() {
      $(".sixth").hide();
      $(".fifth").toggle();
    });

    $("button#button7").click(function() {
      $(".seventh").hide();
      $(".eighth").toggle();
    });
    $("button#button7p").click(function() {
      $(".seventh").hide();
      $(".sixth").toggle();
    });

    $("button#button8").click(function() {
      $(".eighth").hide();
      $(".ninth").toggle();
    });
    $("button#button8p").click(function() {
      $(".eighth").hide();
      $(".seventh").toggle();
    });

    $("button#button9").click(function() {
      $(".ninth").hide();
      $(".tenth").toggle();
    });
    $("button#button9p").click(function() {
      $(".ninth").hide();
      $(".eighth").toggle();
    });

    $("button#button10p").click(function() {
      $(".tenth").hide();
      $(".ninth").toggle();
    });
    $("button#button11").click(function() {
      location.reload(true);
    });

  $("#form-container").submit(function(event) {

    event.preventDefault();
    $("#submit").attr("disabled", true);
    numbers.forEach(function(number) {
      answer = parseInt($("input:radio[name=question" + number + "]:checked").val());
      add();
      checkAll();
      per();
      result();
      $("#score").text(score + "/10" + " - " + percentage + "%");
      $("#attempt").text("You attempted " + answered + " question(s) and left " + blank + " blanks.");
      $("#final").text("You scored " + score + " out of 10. " + verdict + " " + advice);
    });

  });
  $('#reload').click(function() {
    location.reload(true);
  });
});
