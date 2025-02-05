document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".lg\\:hidden button")
    const closebutton  = document.querySelector(".fixed .flex button")
    const mobilMenu = document.querySelector(".lg\\:hidden[role='dialog']")
    const content = document.getElementById("content")
    const navlinks = document.getElementById(".lg\\:hidden a")

    menuButton.addEventListener("click", function () {
        mobilMenu.style.display = "block";
    })

    closebutton.addEventListener("click", function () {
        mobilMenu.style.display = "none";
    })

    function closemenu() {
        if(mobilMenu){
            mobilMenu.style.display = "none";
        }
    }

    if(menuButton){
        menuButton.addEventListener("click", function(){
            if(mobilMenu){
                mobilMenu.style.display = "block";
            }
        })
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    }); 

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default page reload

            const url = this.getAttribute("href"); // Get the link URL

            content.innerHTML = "<p class='text-center text-gray-500'>Loading...</p>";  

            fetch(url)
                .then(response => response.text()) // Get HTML content
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, "text/html");
                    const newContent = doc.getElementById("content").innerHTML; // Extract new content
                    content.innerHTML = newContent; // Update the page content
                    history.pushState(null, "", url); // Update browser history
                })
                .catch(error => console.error("Error loading page:", error));
        });
    });

    window.addEventListener("popstate", function () {
        fetch(location.pathname)
            .then(response => response.text())
            .then(html => {
                const doc = new DOMParser().parseFromString(html, "text/html");
                content.innerHTML = doc.getElementById("content").innerHTML;
            });
    });
    

})
