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
        // getElementsByTagName
            // Để lấy ra một thẻ HTML theo tên thẻ.
            // Kết quả sẽ trả về 1 mảng các object.
            // cú pháp:
            // var element = document.getElementsByTagName('tagName');
        // getElemetsByClassName
            // Để lấy ra một thẻ HTML theo class.
            // Kết quả sẽ trả về 1 mảng các objects.
            // Cú pháp:
            // var element = document.getElementsByClassName('className');
    // *DOM element: Để lấy ra các thẻ HTML

    // *DOM HTML: Để thay đổi nội dung và thuộc tính của các thẻ HTML

    // DOM CSS: Để thay đổi CSS của thẻ HTML

    // DOM Event: Để gán các sự kiện vào thẻ HTML

    // *DOM Listener: Để lắng nghe các sự kiện tác động lên thẻ HTMl.

    // DOM Navigation: THể hiện mối quan hệ cha - con của các thẻ HTML.

    // DOM Nodes: Để thao tác với HTMl thông qua đối tướng(Object).


    // const h1_01 = document.getElementById("h1-01");
    // console.log(h1_01);

    // const h1s = document.getElementsByTagName("h1");
    // console.log(h1s);
    // for (const h2 of h1s){
    //     console.log(h2);
    // }

    // const listTile = document.getElementsByClassName("title");
    // console.log(listTile);

    //const innerHTML_H2_01 = document.querySelector("#h2-01").innerHTML;
    // const innerText_H2_01 = document.querySelector("#h2-01").innerText;
    // document.querySelector("#h1-01").innerHTML = "Test";
    // console.log(innerText_H2_01);


    //----------------------------------------------
    // const h101 = document.querySelector("#h1test");
    // const classH2_03 = h101.getAttribute("class");
    // const idH2_03 = h101.getAttribute("id");
    // const idH203 = h101.getAttribute("test");
    // console.log(h101);
    // console.log(classH2_03);
    // console.log(idH203);
    
//-----------------------------------------------------------------
    // const h1_1 = document.querySelector("#h1-01");
    // h1_1.setAttribute("class", "test2")
//----------------------------------------------------
    setTimeout(() =>{
        const ads1 = document.querySelector("#ads-01");
        //ads1.setAttribute("class", "ads ads-display");
        ads1.classList.add("ads-display");
        ads1.classList.remove("ads");
    },3000);

// --------------------------------------------------------------------
// DOM CSS
    