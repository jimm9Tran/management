

// From Search

const formSearch = document.querySelector("#form-search");
if (formSearch){
    let url = new URL(window.location.href);

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        
        if (keyword){
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");
        }
        
        window.location.href = url.href;
    });
}


// End Form Search

// Pagination
const buttonsPagination = document.querySelectorAll("[button-pagination]");
// console.log(buutonPagination);
if (buttonsPagination){
    let url = new URL(window.location.href);

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
