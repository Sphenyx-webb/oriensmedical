document.querySelector("#mobileMenuOpenBtn").addEventListener("click", () => {
    toggleMobileMenu();
});

document.querySelector("#mobileMenuCloseBtn").addEventListener("click", () => {
    toggleMobileMenu();
});

function toggleMobileMenu(){
    document.querySelector("#mobileMenuCloseBtn").classList.toggle("hidden");
    document.querySelector("#navbarCollapse").classList.toggle("hidden");
    document.querySelector("#mobileMenuOpenBtn").classList.toggle("hidden");
}