const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll  = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

function blogAlert() {
    alert("HubPost Tech Community - Coming Soon! We're building a vibrant community for tech enthusiasts, developers, and innovators. Stay tuned for our launch! Please check back soon.");
}

function contactAlert() {
    alert("Your Message has been recevied you will get a mail shortly!")
}
