// BOM Window
// window la mot doi tuong co nhung phuong thuc va thuoc tinh duoc xu ly trinh duyet
// window co cap do cao nhat

// console.log(window);

// window.alert("OK");

// const inforUser = {
//     name: "Tran Minh Hien",
//     renderName: () => {
//         console.log(inforUser.name);
//     }
// };

// inforUser.renderName();

// innerHeight de lay kich thuoc chieu cao cua tai lieu
// innerWidth de lay kich thuoc chieu rong cua tai lieu

// window.innerHeight;
// window.innerWidth;


window.open();

//window.open(url, name, options);
//Ex
    // var tab;
    // const openTab = () => {
    //     tab = window.open(
    //         "https://www.youtube.com/",
    //         "_blank",
    //         "witdh = 1200", "height=600", "lef=100", "top=50" 
    //     );
    // };

    // const closeTab = () => {
    //     tab.close();
    // };

// BOM Sreem

    // console.log(screen.width);
    // console.log(screen.height);

// BOM Location

    // location la mot doi tuong duoc su dung de xy ly cac van de lien quan de URL cua trang web
    console.log(location);

// reload()

    // const reloadTab = () => {
    //     location.reload();
    // };

    // setInterval(reloadTab, 5000);

// history
    window.history;
    

// 9

    const fullname = prompt("nhap ten: ");

    document.cookie = 'fullName=${fullname}';
    