console.log("lev1_1: Array sort()");

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
  ];
//  languages.sort();
//  console.log(languages);

 function sortierung(array) {
   languages.sort();
 }
 const returnValue = sortierung(languages);
 console.log(returnValue);
 console.log(languages);



console.log('');
console.log('');
console.log("lev1_2: Array reverse()");

const sortierung2 = languages
.sort()
.reverse();
console.log(sortierung2);

console.log('');
console.log('');
console.log("lev1_13: Arrays join()");
let meinText1=["Hello", "World"];
let meinText2=["Anass", "Elaine", "Eric", "Georg"];
let meinText3= ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"];

{
const join1=meinText1.join();
const join2=meinText1.join("");
const join3=meinText1.join(" ");
const join4=meinText1.join("+");
console.log(join1);
console.log(join2);
console.log(join3);
console.log(join4);
}

{
  const join1=meinText2.join();
  const join2=meinText2.join("");
  const join3=meinText2.join(" ");
  const join4=meinText2.join("+");
  console.log(join1);
  console.log(join2);
  console.log(join3);
  console.log(join4);
}
{
  const join1=meinText3.join();
  const join2=meinText3.join("");
  const join3=meinText3.join(" ");
  const join4=meinText3.join("+");
  console.log(join1);
  console.log(join2);
  console.log(join3);
  console.log(join4);
}

console.log('');
console.log('');
console.log("lev2_2: sort() bigger numbers");

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

const result= numArray2.sort((a,b)=> {
  return a-b
});
console.log(result);

console.log('');
console.log('');
console.log("lev3_1: Reverse Name, Words");

// const words= ['Michal', 'Hannah','Regallager', 'Reliefpfeiler', 'Rentner','Ella mag alle Bohnen','Hanne sah Hasen nah', 'Nie solo sein'];
const word2=new Array();
word2[0]='Michal';
word2[1]='Hannah';
word2[2]='Regallager';
word2[3]='Reliefpfeiler';
word2[4]='Rentner';
word2[5]='Ella mag alle Bohnen';
word2[6]='Hanne sah Hasen nah';
word2[7]='Nie solo sein';


{
  console.log(word2);

  const result= word2
  .join()
  // .sort((a,b) =>a-b)
  // .reverse();
  console.log(result);
  

}
