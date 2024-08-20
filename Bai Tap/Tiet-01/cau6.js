console.log("\nCâu 06: Một hình tròn và hai hình vuông");
console.log("Đề bài:");
console.log("Hãy tưởng tượng một hình tròn nằm giữa và có hai hình vuông: một hình vuông nhỏ hơn và một hình vuông lớn hơn.");
console.log("Đối với hình vuông nhỏ hơn, thì hình tròn là ngoại tiếp.");
console.log("Đối với hình vuông lớn hơn, thì hình tròn là nội tiếp.");

console.log("Tạo một hàm nhận vào một số nguyên (bán kính hình tròn) và trả về hiệu của diện tích hai hình vuông (Diện tích phần màu đỏ).");

function solve(r){
    var St = 4*r*r;
    var Sn = 2*r*r;

    return St - Sn;
}

function solve2(R){
    var S = 2*R**2;

    return S;
}

var test1 = solve(5);
console.log(test1);
var test2 = solve(6);
console.log(test2);
var test3 = solve(7);
console.log(test3);
var test4 = solve2(5);
console.log(test4);