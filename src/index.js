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

const accentImg = document.querySelector("#middle-img");
accentImg.src = "http://localhost:9000/img/accent.png";

//NAVIGATION BAR

const navLinks = document.querySelectorAll("nav a");
//console.log(navLinks);
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navLinks[i].classList.add("italic");
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

const ctaTitle = document.querySelector(".cta-text");
//console.log(ctaTitle.children[1]);
ctaTitle.children[0].textContent = siteContent.cta.h1;
ctaTitle.children[1].textContent = siteContent.cta.button;

// TOP CONTENT

const topContent = document.querySelector(".top-content");
topContent.children[0].children[0].textContent =
  siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent =
  siteContent["main-content"]["features-content"];
topContent.children[1].children[0].textContent =
  siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent =
  siteContent["main-content"]["about-content"];

// BOTTOM CONTENT

const bottomContent = document.querySelector(".bottom-content");
bottomContent.children[0].children[0].textContent =
  siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent =
  siteContent["main-content"]["services-content"];
bottomContent.children[1].children[0].textContent =
  siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent =
  siteContent["main-content"]["product-content"];
bottomContent.children[2].children[0].textContent =
  siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent =
  siteContent["main-content"]["vision-content"];

// CONTACT INFO

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent.contact["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent.contact["address"];
contactInfo[1].textContent = siteContent.contact["phone"];
contactInfo[2].textContent = siteContent.contact["email"];

// COPYRIGHT
const copyrightText = document.querySelector("footer a");
copyrightText.textContent = siteContent.footer.copyright;
copyrightText.classList.add("bold");
