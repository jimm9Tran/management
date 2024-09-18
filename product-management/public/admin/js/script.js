const url = new URL(window.location.href);

// Pagination
const buttonsPagination = document.querySelectorAll("[button-pagination]");
// console.log(buutonPagination);
if (buttonsPagination){
    buttonsPagination.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagination");
            // console.log(page);
            
            url.searchParams.set("page", page);
            window.location.href = url.href;
            
        });
    })
}

// EndPagination