const categoryList = document.querySelectorAll(".category-list-item");
// const subCategoryList = document.querySelectorAll(".category-sub-list-group");

categoryList.forEach(catList => {
    catList.addEventListener("click", () => {
        const listItem = catList.querySelector(".category-sub-list-group")
        listItem.classList.toggle("hide-list");
        if(!listItem.classList.contains("hide-list")){
            catList.querySelector(".category-list-icon").innerHTML = `<i class="fas fa-angle-up"></i>`;
        } else {
            catList.querySelector(".category-list-icon").innerHTML = `<i class="fas fa-angle-down"></i>`;
        }
    });
});