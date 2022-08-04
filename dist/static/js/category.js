const categoryListIcons = document.querySelectorAll(".category-list-icon");
// const categoryList = document.querySelectorAll(".category-list-item");
// const subCategoryList = document.querySelectorAll(".category-sub-list-group");

categoryListIcons.forEach(categoryListIcon => {
    categoryListIcon.addEventListener("click", () => {
        // const subListItem = categoryListIcon.nextElementSibling;
        const subListItem = categoryListIcon.parentElement.querySelector(".category-sub-list-group");
        subListItem.classList.toggle("hide-list");
        if(!subListItem.classList.contains("hide-list")){
            categoryListIcon.innerHTML = `<i class="fas fa-angle-up"></i>`;
        } else {
            categoryListIcon.innerHTML = `<i class="fas fa-angle-down"></i>`;
        }
    });
});