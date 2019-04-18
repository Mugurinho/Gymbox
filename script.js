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


//pha circuits
var pha_circuits = [
  ['Circuit 1'], 
  ['Circuit 2'], 
  ['Circuit 3'],
  ['Circuit 4']
];

var pha_focus = [
  ['Chest'],
  ['Back'],
  ['Cardio + fat burn'],
  ['Cardio + fat burn']
];

var pha_exercises = [
  ['Shoulders', 'Kettlebell swings', 'chest incline pushups', 'lunges', 'chest decline pushups', 'abs', 'horizontal chest pushup with shoulder tap', 'jumps'],
  ['Shoulders', 'Barbell deadlifts', 'Barbell back pull-ups', 'lunges', 'dumbell row single arm', 'abs', 'horizontal chest pushup with back dumbells pull', 'jumps'],
  ['Shoulders', 'Kettlebell russian swings', 'chest incline pushups', 'bulgarian squats', 'dumbell row single arm', 'abs', 'horizontal chest pushup with shoulder tap', 'jumps'],
  ['Jumps', 'shoulders with squats', 'narrow barbell deadlifts', 'pushups mixed with dumbell back pull', 'walking lunges', 'abs', 'jumps', 'hit the bag']
];

var workout = "<h3>";
var group = "<h4>";
var workout2 = "<h3>";
var group2 = "<h4>";
var pha_workout = "<h3>";
var pha_group = "<h4>";
var checkbox = "<input type='checkbox' id='chk'>";

//4 days a week
for (var i = 0; i < days.length; i++) {
  workout += "<div class='row'><div class='column'><div class='card'>" + "<h3>" + days[i][0] + "</h3>" + "<hr id='hr1'>" + "<h4>" + 
  groups[i][0] + "</h4>" + "<hr>" + "<p>" + checkbox + exercises[i][0] + "<p>" + exercises[i][1] + "<p>" + exercises[i][2] + "<p>" + exercises[i][3] + 
  "<p>" + exercises[i][4] + "<p>" + exercises[i][5] + "<p>" + exercises[i][6] + "<p>" + exercises[i][7] + "</p>" + 
  "</div></div></div>";
};
document.getElementById("demo").innerHTML = workout + group;


//3 days a week
for (var i = 0; i < days.length; i++) {
  workout2 += "<div class='row'><div class='column'><div class='card'>" + "<h3>" + days[i][0] + "</h3>" + "<hr id='hr1'>" + "<h4>" + 
  groups2[i][0] + "</h4>" + "<hr>" + "<p>" + exercises2[i][0] + "<p>" + exercises2[i][1] + "<p>" + exercises2[i][2] + "<p>" + exercises2[i][3] + 
  "<p>" + exercises2[i][4] + "<p>" + exercises2[i][5] + "<p>" + exercises2[i][6] + "<p>" + exercises2[i][7] + "</p>" + 
  "</div></div></div>";
};


//pha_circuits
for (var i = 0; i < pha_circuits.length; i++) {
  pha_workout += "<div class='row'><div class='column'><div class='card'>" + "<h3>" + pha_circuits[i][0] + "</h3>" + "<hr id='hr1'>" + "<h4>" + 
  pha_focus[i][0] + "</h4>" + "<hr>" + "<p>" + pha_exercises[i][0] + "<p>" + pha_exercises[i][1] + "<p>" + pha_exercises[i][2] + "<p>" + pha_exercises[i][3] + 
  "<p>" + pha_exercises[i][4] + "<p>" + pha_exercises[i][5] + "<p>" + pha_exercises[i][6] + "<p>" + pha_exercises[i][7] + "</p>" + 
  "</div></div></div>";
};


// switch input btns between 3 days and 4 days per week workout
function Switch1() {
  if(workout){
    document.getElementById("demo").innerHTML = workout + group;
    document.getElementById("4d").value = "Gymbox x 4 days/week";
    document.getElementById("3d").value = "Gymbox x 3 days/week";
  }
}

// switch input btns between 3 days and 4 days per week workout
function Switch2() {
  if(workout2){
    document.getElementById("demo").innerHTML = workout2 + group2;
    document.getElementById("3d").value = "Gymbox x 3 days/week";
    document.getElementById("4d").value = "Gymbox x 4 days/week";
  }
}

// switch input btns between 3 days and 4 days per week and pha_circuits workouts
function Switch3() {
  if(pha_workout){
    document.getElementById("demo").innerHTML = pha_workout + pha_group;
    document.getElementById("pha").value = "PHA circuits";
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
