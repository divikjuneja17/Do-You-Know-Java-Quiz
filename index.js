import chalk from 'chalk';
import readlineSync from 'readline-sync';

var score = 0;

console.log(chalk.black.bold.bgCyan("Do you know Java? Quiz Begins!\n"));
console.log(chalk.bgBlack("You are in ") + chalk.black.bold.bgGreen("Level-1\n"));
console.log(chalk.bgBlack(chalk.black.bold.bgMagenta("Instructions:") + " Give answer in a, b, c or d\n"));

var quiz_Level1 = [ //Array of objects
  {
   name: "Q1. Number of primitive data types in Java are? ",
   mcq: ["a) 6","b) 7","c) 8","d) 9"],
   answer: "c",
   explanation: "There are 8 types of primitive data types- int, char, boolean, byte, long, float, short, double.",
},

  {
    name: "Q2. What is the size of float and double in java? ",
    mcq: ["a) 32 and 64","b) 32 and 32","c) 64 and 64","d) 64 and 32"],
    answer: "a",
    explanation: "The size of float and double in java is 32 and 64.",
  },

  {
    name: "Q3. Select the valid statement. ",
    mcq: ["a) char[] ch = new char(5)","b) char[] ch = new char[5]","c) char[] ch = new char()","d) char[] ch = new char[]"],
    answer: "b",
    explanation: "When an array is passed to a method, a reference of the array is received by the method.",
  }
];
  var quiz_Level2 = [ 
  {
    name: "Q4. When an array is passed to a method, what does the method receive? ",
    mcq: ["a) The reference of the array","b) A copy of the array","c) Length of the array","d) Copy of first element"],
    answer: "a",
    explanation: "int[] A = {1, 2, 3} is the valid way of declaring arrays.",
  },

  {
    name: "Q5. Select the valid statement to declare and initialize an array. ",
    mcq: ["a) int[] A = {}","b) int[] A = {1, 2, 3}","c) int[] A = (1, 2, 3)","d) int[][] A = {1,2,3}"],
    answer: "b",
  },

  {
    name: "Q6. Arrays in java are? ",
    mcq: ["a) Object references","b) objects","c) Primitive data type","c) None"],
    answer: "b",
    explanation: "Arrays are objects in java. It is a container that holds a fixed number of items of a single type.",
  }
];

var quiz_Level3 = [ 
  {
    name: "Q7. When is the object created with new keyword? ",
    mcq: ["a) At run time","b) At compile time","c) Depends on the code","d) None"],
    answer: "a",
    explanation: "The object created with new keyword during run-time.",
  },

  {
    name: "Q8. Identify the corrected definition of a package. ",
    mcq: ["a) A package is a collection of editing tools","b) A package is a collection of classes","c) A package is a collection of classes and interfaces","d) A package is a collection of interfaces"],
    answer: "c",
    explanation: "A package is a collection of classes and interfaces."
  },

  {
    name: "Q9. In which of the following is toString() method defined? ",
    mcq: ["a) java.lang.Object","b) java.lang.String","c) java.lang.util","c) None"],
    answer: "a",
    explanation: "toString() is defined in java.lang.Object.",
  }
];
var highScore = [
  {
    name: "Manav",
    score: "7",
  },

  {
    name: "Sahil",
    score: "5",
  }
];

function play(question, answer, mcq, explanation){
  console.log(question + "\n");
  
  console.log("Select one: ");
  for(var i=0; i<mcq.length; i++){
    console.log(mcq[i]);
  }
  var userAnswer = readlineSync.question(chalk.underline("\nAnswer is:") + " ");
  

  if(userAnswer === answer){
    console.log("You are " + chalk.green.bgBlack("right!\n"));
    score = score + 1;
  }
  else{
    console.log("You are " + chalk.red.bgBlack("wrong!\n"));
  }

  console.log(chalk.underline("Explanation:") + " " + explanation + "\n");
}

for(var i=0; i<quiz_Level1.length; i++){
  play(quiz_Level1[i].name, quiz_Level1[i].answer, quiz_Level1[i].mcq, quiz_Level1[i].explanation);
}

if(score == 3){
  console.log(chalk.bgBlack("You advance to ") + chalk.black.bold.bgGreen("Level-2\n"));
  for(var i=0; i<quiz_Level2.length; i++){
  play(quiz_Level2[i].name, quiz_Level2[i].answer, quiz_Level2[i].mcq, quiz_Level2[i].explanation);
}
}
if(score == 6){
  console.log(chalk.bgBlack("You advance to ") + chalk.black.bold.bgGreen("Level-3"));
  for(var i=0; i<quiz_Level3.length; i++){
  play(quiz_Level3[i].name, quiz_Level3[i].answer, quiz_Level3[i].mcq, quiz_Level3[i].explanation);
}
}


console.log(chalk.cyan.bgBlack("Your final score is: ", score));

for(var i=0; i<highScore.length; i++){
  if(score === highScore[i].score || score > highScore[i].score){
    console.log(chalk.magenta.bgBlack("You have beaten " + highScore[i].name + "'s score:", highScore[i].score));
  }
   else {
  console.log(chalk.red.bgBlack("You failed to beat highest score."));
     break;
    }
}

