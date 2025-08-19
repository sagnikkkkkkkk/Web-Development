//  Comparison Operator 

let n1 = 10 , n2 = 20 , n3 = 10 ;
let s1 = "10" , s2 = "20" ;
let result1 , result2 , result3 , result4 , result5 , result6 , result7 , result8 , result9 ,result10 , result11 , result12 , result13 , result14 , result15 , result16 , result17 , result18 , result19 , result20 , result21 , result22 , result23 , result24 , result25 , result26 , result27 , result28 , result29 ,result30 , result31 , result32 , result33 , result34 , result35 , result36 , result37 , result38 , result39 , result40 ;
// n1 = number-1
// s1 = string-1


//  1>      //  Equal to
console.log("Case 1")

result1 =  n1 == n2     //  F
result2 =  n1 == n3     //  T
result3 =  n1 == s1
result4 =  n1 == s2
console.log("\t " + 1 + ".  " + result1);
console.log("\t " + 2 + ".  " + result2);
console.log("\t " + 3 + ".  " + result3);
console.log("\t " + 4 + ".  " + result4);


//  2>      // Strict Equal
console.log("Case 2")

result5 =  n1 === n2
result6 =  n1 === n3    //  T
result7 =  n1 === s1    //  F
result8 =  n1 === s2
console.log("\t " + 5 + ".  " + result5);
console.log("\t " + 6 + ".  " + result6);
console.log("\t " + 7 + ".  " + result7);
console.log("\t " + 8 + ".  " + result8);


//  3>      // Not Equal
console.log("Case 3")

result9  =  n1 != n2    //  T
result10 =  n1 != n3    //  F
result11 =  n1 != s1
result12 =  n1 != s2
console.log("\t " + 9 + ".  " + result9);
console.log("\t" + 10 + ".  " + result10);
console.log("\t" + 11 + ".  " + result11);
console.log("\t" + 12 + ".  " + result12);


//  4>      // Strict Not Equal
console.log("Case 4")

result13 =  n1 !== n2
result14 =  n1 !== n3   //  F
result15 =  n1 !== s1   //  T
result16 =  n1 !== s2
console.log("\t" +  13 + ".  " + result13);
console.log("\t" +  14 + ".  " + result14);
console.log("\t" +  15 + ".  " + result15);
console.log("\t" +  16 + ".  " + result16);


//  5>      // Greater than   
console.log("Case 5")

result17 =  n1 > n3     //  F
result18 =  n2 > n3     //  T
result19 =  n1 > s1   
result20 =  n1 > s2
console.log("\t" + 17 + ".  " + result17);
console.log("\t" + 18 + ".  " + result18);
console.log("\t" + 19 + ".  " + result19);
console.log("\t" + 20 + ".  " + result20);


//  6>      // Greater than or equal to
console.log("Case 6")

result21 =  n1 >= n3    //  T
result22 =  n2 >= n3    //  T
result23 =  n1 >= s1   
result24 =  n1 >= s2
console.log("\t" + 21 + ".  " + result21);
console.log("\t" + 22 + ".  " + result22);
console.log("\t" + 23 + ".  " + result23);
console.log("\t" + 24 + ".  " + result24);


//  7>      // Lesser than
console.log("Case 7")

result25 =  n1 < n3     //  F
result26 =  n2 < n3     //  F
result27 =  n1 < s1   
result28 =  n1 < s2
console.log("\t" + 25 + ".  " + result25);
console.log("\t" + 26 + ".  " + result26);
console.log("\t" + 27 + ".  " + result27);
console.log("\t" + 28 + ".  " + result28);


//  8>      // Lesser than or equal to 
console.log("Case 8")

result29 =  n1 <= n3    //  T
result30 =  n2 <= n3    //  F
result31 =  n1 <= s1   
result32 =  n1 <= s2
console.log("\t" + 29 + ".  " + result29);
console.log("\t" + 30 + ".  " + result30);
console.log("\t" + 31 + ".  " + result31);
console.log("\t" + 32 + ".  " + result32);