console.log("\nCâu 07: Kiểm tra xem một chuỗi có phải là palindrome hay không?");
console.log("Palindrome là từ khi đọc ngược cũng như đọc xuôi.");
console.log("VD: cicic --> True");

function palindrome(string){
    const reverseString = string.split("").reverse().join("");
    console.log(reverseString);
    return string === reverseString;
}

var tmpString = "solos";
console.log(palindrome(tmpString));

tmpString = "cicic";
console.log(palindrome(tmpString));

tmpString = "hello";
console.log(palindrome(tmpString));