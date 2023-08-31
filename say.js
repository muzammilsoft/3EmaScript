'use strict'


function tanfez() {
//تعريف الدوال و المتغيرات

var code = document.getElementById("codes").value; 


var result = " "




function check(code) {

if(!code){
throw new Error("ما كاتب ولا حاجة انت! ")
}

/*
function replaceWord(string, word, replacement) {
    var wordsArray = string.split(" "); // تحويل السلسلة النصية إلى مصفوفة مكونة من الكلمات
    
    for (var i = 0; i < wordsArray.length; i++) {
        if (
            wordsArray[i].includes("'") ||
            wordsArray[i].includes('"') ||
            wordsArray[i].includes(',') ||
            wordsArray[i].includes('.')
        ) { // التحقق مما إذا كانت الكلمة تحتوي على علامات الاقتباس أو علامات الترقيم
            continue; // تجاهل الكلمة والانتقال إلى الكلمة التالية
        }
        
        if (wordsArray[i].replace(/["']/g, '') === word) { // استخدام replace() لتجاهل علامات الاقتباس
            wordsArray[i] = replacement; // استبدال الكلمة المطلوبة بكلمة أخرى
        }
    }
    
    return wordsArray.join(" "); // تحويل المصفوفة إلى سلسلة نصية
}  */



function replaceWord(str, searchWord, replaceWord) {
 let regex = new RegExp(searchWord, 'g');
  return str.replace(regex, replaceWord);
}

let text = code;
let replacedText = replaceWord(text, "خلي", "let");
let replace2 = replaceWord(replacedText, "تبقى", "=");
let replace3 = replaceWord(replace2,"يبقى", "=");
let replace4 = replaceWord(replace3, "دالة", "function")
let replace5 = replaceWord(replace4, "لو", "if")
let replace6 = replaceWord(replace5, "ما كدا", "else")
let replace7 = replaceWord(replace6, "،", ",")
let replace8 = replaceWord(replace7, "رجعلي", "return")
let replace9 = replaceWord(replace8, "طالما", "while")
var truee = replaceWord(replace9,"صح", "true")
var falsee = replaceWord(truee, "غلط", "false")
let bigger = replaceWord(falsee, ">", "<")
let smaller = replaceWord(bigger, "<", ">")


let breaking = replaceWord(smaller, "خلاص", "break")
let dot = replaceWord(breaking, "؛", ";");
let nulll = replaceWord(dot, "ماف", "null")
//دوال المصفوفات
let including = replaceWord(nulll, "عندها", "includes")
let lengths = replaceWord(including, "طولها", "length")
let concatit = replaceWord(lengths, "لصقها", "concat")
let finding = replaceWord(concatit, "فتش", "find")
let pushing = replaceWord(finding, "دخل", "push")



function convertToEnglishNumbers(numb) {
 let  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
  let englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < arabicNumbers.length; i++) {
    numb = numb.replace(arabicNumbers[i], englishNumbers[i]);
  }

  return numb;
}


function convertToArabicNumbers(number) {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];

  for (let i = 0; i < englishNumbers.length; i++) {
    number = number.replace(englishNumbers[i], arabicNumbers[i]);
  }

  return number;
}

let arnumbers = convertToEnglishNumbers(pushing);


return arnumbers; 

}


function convertToArabicNumbers(number) {
  let arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  let englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];

  for (let i = 0; i < englishNumbers.length; i++) {
    number = number.replace(englishNumbers[i], arabicNumbers[i]);
  }

  return number;
}



/********************************/
function نفذ(args) {
if(args == null){
throw new Error("ماف مدخلات! ")
}


return alert(`${args}`)

}



//*********التنفيذ********

try{

var result = eval(check(code))
console.log(String(check(code)))
document.getElementById("codes").value = code;
}catch(err){
alert(`يا زول انت دعامي ولا شنو؟  الكود بتاعك دا غلط
السبب:  ${err.message}`)

console.log(err.stack)
}
finally{
console.log("الكود المنفذ\n"+"*".repeat(30)); 
console.log(String(check(code)))
}

}

