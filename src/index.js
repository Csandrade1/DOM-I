const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//IMAGES

const logoImg = document.querySelector("#logo-img");
logoImg.src = "http://localhost:9000/img/logo.png";

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = "http://localhost:9000/img/cta.png";

const middleImg = document.querySelector("#middle-img");
middleImg.src = "http://localhost:9000/img/accent.png";

//NAVIGATION BAR

const navLinks = document.querySelectorAll("nav a");
console.log(navLinks);
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = "test";
}
// navLinks[0].textContent = "Services";
// navLinks[1].textContent = "Products";
// navLinks[2].textContent = "Vision";
// navLinks[3].textContent = "Features";
// navLinks[4].textContent = "About";
// navLinks[5].textContent = "Contact";
// navLinks[0].classList.add("italic");
// navLinks[1].classList.add("italic");
// navLinks[2].classList.add("italic");
// navLinks[3].classList.add("italic");
// navLinks[4].classList.add("italic");
// navLinks[5].classList.add("italic");

//CTA

const ctaTitle = document.querySelectorAll(".cta-text");
ctaTitle[0].textContent = "DOM Is Awesome";

// TOP CONTENT
