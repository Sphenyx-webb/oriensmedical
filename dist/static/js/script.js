const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const year = new Date().getFullYear();


header.innerHTML = `
<nav class="bg-white border-gray-200 py-2.5 rounded dark:bg-gray-900">
<div class="container flex flex-wrap justify-between items-center mx-auto">
<a href="/dist/pages/index.html" class="flex items-center">
    <img src="/dist/static/images/logo/Oriens-main-logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
</a>

<div class="hidden uppercase font-bold text-blue-dark justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta">
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
      <a href="/dist/pages/products.html" class="block py-2 px-3 hover:text-blue-light dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Products</a>
    </li>
    <li class="nav-link">
        <a href="/dist/pages/quality.html" class="block py-2 px-3 hover:text-blue-light dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Quality</a>
    </li>
    <li class="nav-link">
        <a href="/dist/pages/contact-us.html" class="block py-2 px-3 hover:text-blue-light dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact Us</a>
    </li>
  </ul>
</div>

<div class="flex">
    <button data-collapse-toggle="navbar-cta" type="button" class="block p-2 text-sm text-gray-500 rounded-lg lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <span class="text-3xl md:text-4xl text-blue-light"><i class="fa-solid fa-bars"></i></span>
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
    <div class="flex flex-col sm:flex-row justify-between sm:mt-10 lg:mt-0">
    <div class="mt-10 md:mt-0 lg:mx-20 w-max text-lg text-gray-300">
    <h6 class="text-white text-2xl font-semibold mb-4 md:mb-6">Categories</h6>
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
   <div class="mt-6 md:mt-0 lg:pl-10 text-lg text-gray-300 leading-loose">
    <h6 class="text-white text-2xl font-semibold mb-4 md:mb-6">Contacts</h6>
    <p>+(91) 9999 32 3200</p>
    <p>info@oriensmedical.com</p>
    <a href="/dist/pages/quote-request.html" class="inline-flex w-max items-center uppercase mt-10 py-3 px-5 text-sm font-medium text-center text-white bg-blue-light rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Quote a request
    </a>
   </div>
  </div>
</div>

<div class="flex flex-col sm:flex-row justify-between pt-6 text-gray-400">
    <div class="order-1 sm:order-1 mt-4 sm:mt-0">
        Copyright &copy; <span id="year">${year}</span> Oriens Medical. All rights reserved
    </div>
    <div class="flex gap-4 text-xl sm:order-2">
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
