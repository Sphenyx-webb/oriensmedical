const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const year = new Date().getFullYear();


header.innerHTML =`
 <nav class="bg-white border-gray-200 py-2.5 rounded">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="./index.html" class="flex items-center">
          <img src="../static/images/logo/capital orthopaedic logo.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
      </a>
      <div id="navbarTogglers" class="flex lg:hidden">
        <button type="button" id="mobileMenuOpenBtn" class="rounded-lg bg-none text-blue-light hover:text-blue-dark focus:text-blue-dark focus:outline-none focus:bg-none focus:ring-none">
          <span class="sr-only">Open main menu</span>
          <span class="text-2xl md:text-4xl"><i class="fa-solid fa-bars"></i></span>
        </button>
        <button type="button" id="mobileMenuCloseBtn" class="hidden rounded-lg bg-none text-blue-light hover:text-red-500 focus:text-red-500 focus:outline-none focus:bg-none focus:ring-none">
          <span class="sr-only">Close main menu</span>
          <span class="text-3xl md:text-4xl"><i class="fa-solid fa-times"></i></span>
        </button>
      </div>
      <div id="navbarCollapse" class="hidden uppercase font-bold text-blue-dark justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta">
        <ul class="flex flex-col mt-4 lg:flex-row lg:mt-0 lg:text-sm lg:font-medium">
          <li class="nav-link active">
            <a href="./index.html" class="block py-2 px-3 hover:text-blue-light">Home</a>
          </li>
          <li class="nav-link">
            <a href="./about-us.html" class="block py-2 px-3 hover:text-blue-light">About Us</a>
          </li>
          <li class="nav-link">
            <a href="./manufacturing-unit.html" class="block py-2 px-3 hover:text-blue-light">Manufacturing unit</a>
          </li>
          <li class="nav-link">
            <a href="./products.html" class="block py-2 px-3 hover:text-blue-light">Products</a>
          </li>
          <li class="nav-link">
              <a href="./quality.html" class="block py-2 px-3 hover:text-blue-light">Quality</a>
          </li>
          <li class="nav-link">
              <a href="./contact-us.html" class="block py-2 px-3 hover:text-blue-light">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
</nav>`


footer.innerHTML = `
<div class="container">
<div class="flex flex-col lg:flex-row justify-between border-b border-blue-light pb-8">
    <div class="lg:pr-10">
        <a href="./index.html">
            <img src="../static/images/logo/capital orthopaedic white logo.png" alt="..." class="w-52">
        </a>
        <div class="mt-6 text-lg text-gray-300">
            We are a leading manufacturer and global supplier for high quality and ISO compliant Orthopedic Implants.
        </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between sm:mt-10 lg:mt-0">
    <div class="mt-10 md:mt-0 lg:mx-20 w-max text-lg text-gray-300">
    <h6 class="text-white text-2xl font-semibold mb-4 md:mb-6">Categories</h6>
    <div class="grid grid-cols-1 w-max text-lg leading-loose">
      <a href="./product-category.html" class="hover:text-white">Trauma</a>
      <a href="./product-category.html" class="hover:text-white">Maxillofacial System</a>
      <a href="./product-category.html" class="hover:text-white">Hip Fixation System</a>
      <a href="./product-category.html" class="hover:text-white">Cannulated Screw System</a>
      <a href="./product-category.html" class="hover:text-white">External Fixators</a>
      <a href="./product-category.html" class="hover:text-white">Nailing System</a>
      <a href="./product-category.html" class="hover:text-white">Wire and Pins</a>
    </div>
   </div>
   <div class="mt-6 md:mt-0 lg:pl-10 text-lg text-gray-300 leading-loose">
    <h6 class="text-white text-2xl font-semibold mb-4 md:mb-6">Contacts</h6>
    <p><a href="tel:+9999323200">+(91) 9999 32 3200</a></p>
    <p><a href="mailto:info@oriensmedical.com">info@oriensmedical.com</a></p>
    <a href="./quote-request.html" class="inline-flex w-max items-center uppercase mt-10 py-3 px-5 text-sm font-medium text-center text-white bg-blue-light rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Quote a request
    </a>
   </div>
  </div>
</div>

<div class="flex flex-col sm:flex-row justify-between pt-6 text-gray-400">
    <div class="order-1 sm:order-1 mt-4 sm:mt-0">
        Copyright &copy; <span id="year">${year}</span> Capital Orthopaedic. All rights reserved
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
