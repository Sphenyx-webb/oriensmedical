const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const year = new Date().getFullYear();


header.innerHTML = `
<nav class="bg-white border-gray-200 px-5 sm:px-4 py-2.5 rounded dark:bg-gray-900">
<div class="container flex flex-wrap justify-between items-center mx-auto">
<a href="/dist/pages/index.html" class="flex items-center">
    <img src="/dist/static/images/logo/Oriens-main-logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
</a>

<div class="hidden uppercase font-bold text-blue-dark justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
  <ul class="flex flex-col mt-4 md:flex-row  md:mt-0 md:text-sm md:font-medium">
    <li class="nav-link active">
      <a href="/dist/pages/index.html" class="block py-2 px-3 hover:text-blue-light dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
    </li>
    <li class="nav-link">
      <a href="/dist/pages/about-us.html" class="block py-2 px-3 hover:text-blue-light dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">About Us</a>
    </li>
    <li class="nav-link">
      <a href="/dist/pages/manufacturing-unit.html" class="block py-2 px-3 hover:text-blue-light dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Manufacturing unit</a>
    </li>
    <li class="nav-link">
      <a href="#" class="block py-2 px-3 hover:text-blue-light dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Products</a>
    </li>
    <li class="nav-link">
        <a href="/dist/pages/quality.html" class="block py-2 px-3 hover:text-blue-light dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Quality</a>
      </li>
  </ul>
</div>

<div class="hidden flex">
    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  </button>
</div>
</div>
</nav>`




footer.innerHTML = `
<div class="container">
<div class="flex flex-col lg:flex-row justify-between border-b border-blue-light pb-8">
    <div class="lg:pr-10">
        <div>
            <img src="../static/images/logo/Oriens-white-logo.png" alt="">
        </div>
        <div class="mt-6 text-lg text-gray-300">
            We are a leading manufacturer and global supplier for high quality and ISO compliant Orthopedic Implants.
        </div>
    </div>
    <div class="mt-6 md:mt-0 lg:mx-20 w-max text-gray-300">
        <h6 class="text-white text-xl font-semibold mb-6">Categories</h6>
        <div class="grid grid-cols-1 w-max text-lg leading-loose">
          <a href="#" class="hover:text-white">Trauma</a>
          <a href="#" class="hover:text-white">Maxillofacial System</a>
          <a href="#" class="hover:text-white">Hip Fixation System</a>
          <a href="#" class="hover:text-white">Cannulated Screw System</a>
          <a href="#" class="hover:text-white">External Fixators</a>
          <a href="#" class="hover:text-white">Nailing System</a>
          <a href="#" class="hover:text-white">Wire and Pins</a>
        </div>
    </div>
    <div class="mt-6 md:mt-0 lg:pl-10 text-gray-300 leading-loose">
        <h6 class="text-white text-xl font-semibold mb-6">Contacts</h6>
        <p>+(91) 9999 32 3200</p>
        <p>info@oriensmedical.com</p>
        <a href="/dist/pages/quote-request.html" class="inline-flex w-max items-center uppercase mt-10 py-3 px-5 text-sm font-medium text-center text-white bg-blue-light rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Quote a request
        </a>
    </div>
</div>

<div class="flex justify-between pt-6 text-gray-400">
    <div>
        Copyright &copy; <span id="year">${year}</span> Oriens Medical. All rights reserved
    </div>
    <div class="grid grid-cols-4 gap-4 text-xl">
        <a href="#">
            <i class="fa-brands fa-facebook-square"></i>
        </a>
        <a href="#">
            <i class="fa-brands fa-instagram-square"></i>
        </a>
        <a href="#">
            <i class="fa-brands fa-twitter-square"></i>
        </a>
        <a href="#">
            <i class="fa-brands fa-youtube"></i>
        </a>
    </div>
</div>
</div>`

window.addEventListener("load", () => {
    document.querySelector("#preloader").classList += " hidden";
});