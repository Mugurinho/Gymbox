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

var pha_workout = "<h3>";
var pha_group = "<h4>";

//pha_circuits
for (var i = 0; i < pha_circuits.length; i++) {
  pha_workout += "<div class='row'><div class='column'><div class='card'>" + "<h3>" + pha_circuits[i][0] + "</h3>" + "<hr id='hr1'>" + "<h4>" + 
  pha_focus[i][0] + "</h4>" + "<hr>" + "<p>" + pha_exercises[i][0] + "<p>" + pha_exercises[i][1] + "<p>" + pha_exercises[i][2] + "<p>" + pha_exercises[i][3] + 
  "<p>" + pha_exercises[i][4] + "<p>" + pha_exercises[i][5] + "<p>" + pha_exercises[i][6] + "<p>" + pha_exercises[i][7] + "</p>" + 
  "</div></div></div>";
};

// switch input btns between 3 days and 4 days per week and pha_circuits workouts
function Pha() {
  if(pha_workout){
    document.getElementById("demo").innerHTML = pha_workout + pha_group;
    document.getElementById("pha").value = "PHA circuits";
  }
}