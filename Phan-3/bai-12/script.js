// fetch("https://dummyjson.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//         const newArr = data.products.map((item) => {
//             return `
//             <li>${item.title}</li>
//             `;
//         });

//         const htmls = newArr.join("");
//         const productList = document.querySelector("#product-list");
//         productList.innerHTML = htmls;

//     });


    const fetchApi = async (api) => {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }

    fetchApi("http://localhost:3000/product")
        .then((data) => {
            console.log(data);
        })