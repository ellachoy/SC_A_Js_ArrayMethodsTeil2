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







