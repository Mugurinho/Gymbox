//array of week days
var days = [
  ['Monday'], 
  ['Tuesday'], 
  ['Wednesday'],
  ['Thursday'],
  ['Friday'],
  ['Saturday'],
  ['Sunday']
];

//array of muscle groups for Workout 3
var groups = [
  ['off'], 
  ['Chest, Biceps, Cardio, Abs'], 
  ['off'], 
  ['Back, Triceps, Cardio, Abs'],
  ['off'],
  ['PHA Circuits for Fat burn'],
  ['off']
];

//array of exercises for Workout 3
var exercises = [
  ['-', '-', '-', '-', '-', '-', '-', '-'], 
  ['Incline barbell bench press', 'Incline dumbell bench press', 'Chest fly machine', '', 'Horizontal Dips chest bench press', 'Biceps x 4-5 reps', 'Cardio steps 200 cals', 'Abs 10 minutes'], 
  ['-', '-', '-', '-', '-', '-', '-', '-'], 
  ['cable lat pulldown narrow grip', 'Cable lat pulldown normal grip', 'machine row pull', 'dumbell row single arm', 'horizontal bench dumbell pull over', 'barbell deadlifts', 'triceps 4-5 reps', 'Cardio steps 200 cals', 'Abs 10 minutes'],
  ['-', '-', '-', '-', '-', '-', '-', '-'],
  ['Shoulders', 'Kettlebell russian swings', 'chest incline pushups', 'lunges', 'dumbell row single arm', 'abs', 'horizontal chest pushup with shoulder tap', 'jumps'],
  ['-', '-', '-', '-', '-', '-', '-', '-']
];

// heading assignments 
var workout1 = "<h3>";
var group1 = "<h4>";

//Workout3 days a week
for (var i = 0; i < days.length; i++) {
  workout1 += "<div class='row'><div class='column'><div class='card'>" + "<h3>" + days[i][0] + "</h3>" + "<hr id='hr1'>" + "<h4>" + 
  groups[i][0] + "</h4>" + "<hr>" + "<p>" + exercises[i][0] + "<p>" + exercises[i][1] + "<p>" + exercises[i][2] + "<p>" + exercises[i][3] + 
  "<p>" + exercises[i][4] + "<p>" + exercises[i][5] + "<p>" + exercises[i][6] + "<p>" + exercises[i][7] + "</p>" + 
  "</div></div></div>";
};
//document.getElementById("demo").innerHTML = workout + group;

// switch input btns between 3 days and 4 days per week workout
function Workout3() {
  if(workout1){
    document.getElementById("demo").innerHTML = workout1 + group1;
    document.getElementById("3d").value = "Gymbox x 3 days/week";
    document.getElementById("4d").value = "Gymbox x 4 days/week";
  }
}