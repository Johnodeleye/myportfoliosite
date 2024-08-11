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
// Loader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
    }, 5000); // 5000ms = 5 seconds
});

//A progress bar functionality

window.addEventListener('load', function() {
    const progress = document.getElementById('progress');
    const percentage = document.getElementById('percentage');
    let count = 0;
    const interval = setInterval(() => {
        if (count <= 100) {
            progress.style.width = count + '%';
            percentage.textContent = count + '%';
            count++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                document.querySelector('.preloader').style.display = 'none';
            }, 500); // wait 0.5s before hiding the preloader
        }
    }, 40); // update progress every 40ms
});

function HubAlert() {
    alert("Thank you for your feedback and subscription! You will now be redirected to the confirmation page. Remember to come back and follow us on social media for the latest updates and insights from HubPost!");
}

// Accordion functionality

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});