// .concat()
// .indexOf()
// .lastIndexOf()
// .match()
// .replace()
// .slice()
// .split()
// .toLowerCase()
// .toUpperCase()
// .substr()
// strunctions exersize
// Implement all of the listed String Methods below using at least 3 unique Functions.

// concat #1
var str1 = "Crystal and ";
var str2 = "John "; 

function love(str1, str2) {
    if (str1.length >= str2.length){
        return str1.concat(str2);
    } else if (str1.length <= str2.length){
        return str2.concat(str1)
    }
}
console.log(love(str1, str2) + "are in love");

//.concat()#2

var num1 = "38 ";
var num2 = "42 ";

function ages(num1, num2){
    if(num1 <= num2){
        
        return num1.concat(num2)
    } else if (num2 <= num1){
        return num2.concat(num1)
    }
    console.log(num1, num2)
}
console.log(ages(num1 + "and " + num2 + " is their age"));

// .concat # 3
var str3 = " Lets be friends "
var str4 = " What do you say ?"

function sentence(str3, str4){
    if (str3.length >= str4.length){
    return str3.concat(str4)

    } else if (str3.length <= str4.length){
            return str4.concat(str3)
    }
    console.log(str3, str4)
}
console.log(sentence(str3, str4));

// indexOf()Implement all of the listed String Methods below using at least 3 unique Functions.
// #1

var str5 = " what did you do last night? "
var str6 = " when will you be free?"

function which(str5, str6){
    if(str5.length >= str6.length){
        return str6.indexOf("free")
    }
    console.log(str5, str6)
}
console.log(which(str5, str6))

// #2

var nums = "1, 2, 3, 4, 5, 6, 7, 8, 9";

function what(nums){
    if (nums.length >= 0){
        return nums.indexOf("5")
    }
    console.log(nums)
}
console.log(what(nums));

// #3 indexOf  finding the first e
var str7 = "Hello world, welcome to the universe.";
var n = str7.indexOf("e");
console.log(n)

// .lastIndexOf()
// #1
var str8 = "Hello planet earth, you are a great planet.";
var p = str8.lastIndexOf("planet");
console.log(p)
// #2
var str9 = "Hello planet earth, you are a great planet.";
var m = str9.lastIndexOf("Mars");
console.log(m)
// 3
var str9 = "Hello planet earth, you are a great planet.";
var o = str9.lastIndexOf("planet", 20);
console.log(o)
// .match()
// 1
var str10 = "The rain in SPAIN stays mainly in the plain";
var res = str10.match(/ain/g);
console.log(res)
// 2
var str11 = "The rain in SPAIN stays mainly in the plain";
var res2 = str11.match(/ain/gi);
console.log(res2)
// 3
var str11 = "Hello planet earth, you are a great planet";
var res2 = str11.match(/net/gi);
console.log(res2)

// .replace()
// 1
var str12 = "Visit Microsoft!";
var res3 = str12.replace("Microsoft", "W3Schools");
console.log(res3)
// 2
var str13 = "Mr Blue has a blue house and a blue car";
var res4 = str13.replace(/blue/g, "red");
console.log(res4)
// 3
var str14 = "Mr Blue has a blue house and a blue car";
var res5 = str14.replace(/blue/gi, "red");
console.log(res5)
// .slice()
// 1
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus)
// 2
var fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1);
console.log(myBest)

// 3
var fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(0, 4);
console.log(myBest)

// .split()
// 1
var str15 = "How are you doing today?";
var res5 = str15.split(" ");
console.log(res5)
// 2
var str16 = "How are you doing today?";
var res6 = str16.split();
console.log(res6)
// 3
var str17 = "How are you doing today?";
var res7 = str17.split("o");
console.log(res7)

// .toLowerCase()
// 1
var str18 = "Hello World!";
var res8 = str18.toLowerCase();
console.log(res8)

// .toUpperCase()
var str19 = "Hello World!";
var res9 = str19.toUpperCase();
console.log(res9)

// .substr()
var str20 = "Hello world!";
var res10 = str20.substr(1, 4);
console.log(res10)

var str21 = "Hello world!";
var res11 = str21.substr(2);
console.log(res11)
// strunctions exersize