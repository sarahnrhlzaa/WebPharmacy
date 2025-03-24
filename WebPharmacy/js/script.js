function submitLogin(){
    let username = document.getElementById("idusername").value.trim();
    let password = document.getElementById("idpassword").value.trim();

    if (username === "" || password === ""){
        alert("Username and password required!");
        return;
    }

    sessionStorage.setItem("username", username);
    window.location.href = "home.html";
}

function togglePassword(){
    let passwordField = document.getElementById("idpassword");
    if (passwordField.type === "password"){
        passwordField.type = "text";
    } else{
        passwordField.type = "password";
    }

}

document.addEventListener("DOMContentLoaded", function(){
    let username = sessionStorage.getItem("username");
    let currentPage = window.location.pathname.split("/").pop();

    if (!username && currentPage !== "login.html") {
        window.location.href = "login.html";
    } else if (username && currentPage === "login.html") {
        window.location.href = "home.html";
    }

    let usernameElement = document.getElementById("idusername");
    if (usernameElement && username) {
        usernameElement.textContent = username;
    }

    if (currentPage !== "login.html") {
        loadLayout();
    }
});

function loadLayout() {
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "login.html") return;

    if (document.querySelector(".sidebar")) return;

    fetch("index.html")
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, "text/html");
        
            let header = doc.querySelector(".header-main");
            let sidebar = doc.querySelector(".sidebar");

            if (header && sidebar) {
                let existingSidebar = document.querySelector(".sidebar");
                if (existingSidebar) existingSidebar.remove();
                
                document.body.insertAdjacentElement("afterbegin", header);
                document.body.insertAdjacentElement("afterbegin", sidebar);

            }
            updateUsername();
        })
        .catch(error => console.error("Error loading layout:", error));
}


function toggleSidebar() {
    let sidebar = document.querySelector(".sidebar");
    let content = document.querySelector(".content");

    sidebar.classList.toggle("collapsed");

    if (sidebar.classList.contains("collapsed")) {
        if (window.innerWidth <= 768) {
            sidebar.style.width = "0px";
            content.style.marginLeft = "0px";
            document.querySelectorAll(".menu-text").forEach(el => el.style.display = "none");
        } else {
            sidebar.style.width = "70px";
            content.style.marginLeft = "70px";
            document.querySelectorAll(".menu-text").forEach(el => el.style.display = "none");
        }
    } else {
        sidebar.style.width = "200px";
        content.style.marginLeft = "200px";
        document.querySelectorAll(".menu-text").forEach(el => el.style.display = "inline");
    }
}

function updateUsername() {
    let username = sessionStorage.getItem("username");
    let usernameElement = document.getElementById("username");

    if (usernameElement && username) {
        usernameElement.textContent = username;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadLayout();
});

function toggleSearch() {
    let searchbar = document.getElementById("idsearchbar");
    let searchicon = document.querySelector(".search-icon");

    let toggleSearch = function() {
        if (searchbar.style.display === "none" || searchbar.style.display === "") {
            searchbar.style.display = "block";
        } else {
            searchbar.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let transactionMenu = document.querySelector(".dropdown-trxlist");
    let subMenu = document.querySelector(".dropdown-trxlist .submenu");

    if (transactionMenu && subMenu) {
        subMenu.style.display = "none"; 

        transactionMenu.addEventListener("click", function (event) {
            event.preventDefault();

            if (subMenu.style.display === "none" || subMenu.style.display === "") {
                subMenu.style.display = "block";
            } else {
                subMenu.style.display = "none";
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var homeSwiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
});

const data = [10, 15, 20, 25, 30, 27, 35];
        const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const chartContainer = document.getElementById('barChart');
        
        const maxDataValue = Math.max(...data);
        const scaleFactor = 265 / maxDataValue;
        
        data.forEach((value, index) => {
            const barContainer = document.createElement('div');
            barContainer.classList.add('bar-container');
            
            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = `${value * scaleFactor}px`;
            bar.innerText = value;
            
            const label = document.createElement('div');
            label.classList.add('bar-label');
            label.innerText = labels[index];
            
            barContainer.appendChild(bar);
            barContainer.appendChild(label);
            chartContainer.appendChild(barContainer);
});

// var swiper = new Swiper(".review-slider", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 5500,
//     disableOnInteraction: false,
//   },
//   loop: true,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });
