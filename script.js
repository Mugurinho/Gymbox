/*this is my js file*/
var days = [
  ['Monday'], 
  ['Tuesday'], 
  ['Wednesday'],
  ['Thursday'],
  ['Friday'],
  ['Saturday'],
  ['Sunday']
];

var groups = [
  ['Chest, Biceps, Cardio, Abs'], 
  ['off'], 
  ['Back, Triceps, Cardio, Abs'],
  ['off'],
  ['PHA Circuits for Fat burn'],
  ['off'],
  ['Chest, Biceps, Cardio, Abs']
];

var exercises = [
  ['Incline barbell bench press', 'Incline dumbell bench press', 'Chest fly machine', '', 'Horizontal Dips chest bench press', 'Biceps x 4-5 reps', 'Cardio steps 200 cals', 'Abs 10 minutes'], 
  ['-', '-', '-', '-', '-', '-', '-', '-'], 
  ['cable lat pulldown narrow grip', 'Cable lat pulldown normal grip', 'machine row pull', 'dumbell row single arm', 'horizontal bench dumbell pull over', 'barbell deadlifts', 'triceps 4-5 reps', 'Cardio steps 200 cals', 'Abs 10 minutes'],
  ['-', '-', '-', '-', '-', '-', '-', '-'],
  ['Shoulders', 'Kettlebell russian swings', 'chest incline pushups', 'lunges', 'dumbell row single arm', 'abs', 'horizontal chest pushup with shoulder tap', 'jumps'],
  ['-', '-', '-', '-', '-', '-', '-', '-'],
  ['Horizontal barbell bench press', 'Incline barbell bench press', 'Incline Cable Dumbell flyes', '', 'Incline Dips chest bench press', 'Biceps x 4-5 reps', 'Cardio steps 200 cals', 'Abs 10 minutes']
];

var groups2 = [
  ['off'], 
  ['Chest, Biceps, Cardio, Abs'], 
  ['off'], 
  ['Back, Triceps, Cardio, Abs'],
  ['off'],
  ['PHA Circuits for Fat burn'],
  ['off']
];

var exercises2 = [
  ['-', '-', '-', '-', '-', '-', '-', '-'], 
  ['Incline barbell bench press', 'Incline dumbell bench press', 'Chest fly machine', '', 'Horizontal Dips chest bench press', 'Biceps x 4-5 reps', 'Cardio steps 200 cals', 'Abs 10 minutes'], 
  ['-', '-', '-', '-', '-', '-', '-', '-'], 
  ['cable lat pulldown narrow grip', 'Cable lat pulldown normal grip', 'machine row pull', 'dumbell row single arm', 'horizontal bench dumbell pull over', 'barbell deadlifts', 'triceps 4-5 reps', 'Cardio steps 200 cals', 'Abs 10 minutes'],
  ['-', '-', '-', '-', '-', '-', '-', '-'],
  ['Shoulders', 'Kettlebell russian swings', 'chest incline pushups', 'lunges', 'dumbell row single arm', 'abs', 'horizontal chest pushup with shoulder tap', 'jumps'],
  ['-', '-', '-', '-', '-', '-', '-', '-']
];

var workout = "<h3>";
var group = "<h4>";

for (var i = 0; i < days.length; i++) {
  workout += "<div class='row'><div class='column'><div class='card'>" + "<h3>" + days[i][0] + "</h3>" + "<hr id='hr1'>" + "<h4>" + 
  groups[i][0] + "</h4>" + "<hr>" + "<p>" + exercises[i][0] + "<p>" + exercises[i][1] + "<p>" + exercises[i][2] + "<p>" + exercises[i][3] + 
  "<p>" + exercises[i][4] + "<p>" + exercises[i][5] + "<p>" + exercises[i][6] + "<p>" + exercises[i][7] + "</p>" + 
  "</div></div></div>";
};
document.getElementById("demo").innerHTML = workout + group;

var workout2 = "<h3>";
var group2 = "<h4>";

for (var i = 0; i < days.length; i++) {
  workout2 += "<div class='row'><div class='column'><div class='card'>" + "<h3>" + days[i][0] + "</h3>" + "<hr id='hr1'>" + "<h4>" + 
  groups2[i][0] + "</h4>" + "<hr>" + "<p>" + exercises2[i][0] + "<p>" + exercises2[i][1] + "<p>" + exercises2[i][2] + "<p>" + exercises2[i][3] + 
  "<p>" + exercises2[i][4] + "<p>" + exercises2[i][5] + "<p>" + exercises2[i][6] + "<p>" + exercises2[i][7] + "</p>" + 
  "</div></div></div>";
};


function Switch() {
  if(workout){
    document.getElementById("demo").innerHTML = workout2 + group2;
    document.getElementById("btn").value = "Gymbox x 3";
    document.getElementById("btn2").value = "Gymbox x 4";
  }
}

function Switch2() {
  if(workout2){
    document.getElementById("demo").innerHTML = workout + group;
    document.getElementById("btn2").value = "Gymbox x 4";
    document.getElementById("btn").value = "Gymbox x 3";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
