// var button = document.querySelector("button");
//     button.onclick = function(){
//         alert("Hello World!");
//     }


// var a = 10;
// var b = 20;
// var fullname = "jfsdfsdlfs"
// var c = a + b;
// var ans = b + " " + fullname
// console.log(ans);

// var results = prompt("Nhap n:");
// console.log(results);

// setTimeout(function(){
//     console.log("5s");
// }, 500);

// setInterval(function (){
//     //code
//     console.log("A");
// }, 1000);

// var b = setInterval(function (){
//     console.log("B");
// }, 1000);

// setTimeout(function(){
//     clearInterval(b);
// }, 5000);


// setTimeout(function (){
//     clearInterval(setInterval(function(){
//         console.log("Jimm9 Tran");
//     }, 1000));
// }, 5000);

// var a = 10;
// var b = "Nothing ..."
// var c
// var d = null

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof a == "number")

// string.indexOf("something", int);
// string.lastIndexOf("something", int);

//string.slice(start, and)
// start: vi tri bat dau (bat buoc)
// end: vi tri ket thuc cat(khong bat buoc)

// mystring.slice(10, 21);
// mystring.slice(0); lay toan bo chuoi


// replace()
// dung de thay the 1 chuoi thanh mot chuoi moi, nhung chi thay the chuoi dau tien ma no tim thay
// string.replace(searchValue, newValue);

//regex tim` hieu them

// toUpperCase();
// toLowerCase();

// trim();
// dung de bodi khong trang o 2 dau


// charAt()
// dung de lay ky tu thong qua index
// string.charAt(index);

// split()
// chuyen mot chuoi thanh mot array
// nhung can tim ra diem chung cua chuoi do

// toFixed()

//array.toString()
// array.join()
// array.pop()
// array.push()

// array.shift()
// Dung de xoa phan tu dau mang
// tra ve phan tu dau mang

// array.unshift()

// array.splice()
// xoa hoac chen phan tu moi vao mang
// tra ve mang bi xoa

// var tenHam = (thamso1, thamso2) => {
//     //code

// }

// setTimeout(() => console.log("OK", 3000))

// var tinhTong = (array) => {
//     let tong = 0;
//     for (let i = 0; i< array.length; i++){
//         if (array[i] % 2 == 0){
//             tong += array[i];
//         }
//     }
//     return tong;
// }

// const results = tinhTong(mang);

// try catch


// const a = 10;
// try{
//     console.log("a = " + a);
// } catch (error){
//     console.log(error);
// } finally{
//     console.log("luon chay vao day");
// }

// const oLaiLop = monHoc.some((item) => {
//     return item.diem < 4;
// });

// if (oLaiLop === true){
//     console.log("ow lai lop");
// } else{
//     console.log("Day khong la hoc sinh gioi!");
// }

// find()


// const MonHoc = [
//     {
//         TenMonHoc: "Toan",
//         Diem: 9.6
//     },
//     {
//         TenMonHoc: "Tin",
//         Diem: 9.6
//     },
//     {
//         TenMonHoc: "Hoa",
//         Diem: 9.6
//     },
// ]

// console.log(MonHoc);

// const monTin = MonHoc.find((item) => {
//     return item.TenMonHoc === "Tin";
// });
// console.log(monTin);

// const monTin = MonHoc.filter((item) => {
//     return item.TenMonHoc === "Tin";
// });
// console.log(monTin);

// const newArr = MonHoc.map((item) => {
//     return item;
// })

// console.log(newArr);

// const number = [1, 2, 3, 4, 5];

// const sum = number.reduce((total, item) => {
//     console.log(total);
//     console.log(item);
//     console.log("--------------------");
//     return total + item;
// })

//     KHAI NIEM VE DOM

// Lay ra cac the HTML
// Thay doi cac thuoc tinh cua the HTML

// Cac loai DOM trong Javascript
    // *DOM document: Để chứa toàn bộ các phần tử HTML
        // getElementById
            // Để lấy ra một thẻ HTML theo id
            // Kết quả sẽ trả về 1 phần tử.
            // Cú pháp:
            // var element = document.getElementById('idName');

    // *DOM element: Để lấy ra các thẻ HTML

    // *DOM HTML: Để thay đổi nội dung và thuộc tính của các thẻ HTML

    // DOM CSS: Để thay đổi CSS của thẻ HTML

    // DOM Event: Để gán các sự kiện vào thẻ HTML

    // *DOM Listener: Để lắng nghe các sự kiện tác động lên thẻ HTMl.

    // DOM Navigation: THể hiện mối quan hệ cha - con của các thẻ HTML.

    // DOM Nodes: Để thao tác với HTMl thông qua đối tướng(Object).


    