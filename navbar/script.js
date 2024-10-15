let isMenuActive = false;
let isSearchActive = false;
let listItemActive = false

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById("menu-icon");
    const menuContent = document.getElementById("menu");
    const search = document.getElementById("search-icon");
    const smallSearch = document.getElementById('small-search');
    const menuItems = document.getElementsByClassName("menu-item");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {
            // Remove active class from all items
            for (let j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove("active");
            }
            // Add active class to the clicked item
            this.classList.add("active");
            this.style.transition = "all 0.7s ease-in-out";
        });
        
    }

    // menu position
    const menuContentPosition = (y) => {
        menuContent.style.display = 'block';
        menuContent.style.top = `${y}px`;
        menuContent.style.transition = 'all 0.7s ease-in-out';
    };

    // position relative to the header
    const rect = (btn) => {
        const top = btn.getBoundingClientRect().top;
        const height = btn.getBoundingClientRect().height;

        if (btn === menu) {
            menuContentPosition(top + height + 35);
        }
    };

    // click event for menu
    menu.addEventListener("click", () => {
        if (!isMenuActive) {
            isMenuActive = true;
            rect(menu);
        } else {
            menuContent.style.top = `-450px`;
            menuContent.style.transition = 'all 0.7s ease-in-out';
            isMenuActive = false;
        }
    });

    // click event for search
    search.addEventListener('click', () => {
        if (!isSearchActive) {
            smallSearch.style.visibility = 'visible';
            isSearchActive = true;
        } else {
            smallSearch.style.visibility = 'hidden';
            isSearchActive = false;
        }
    });

    // Media query for width change
    const handleWidthChange = (event) => {
        if (event.matches) {
            menuContent.style.top = '-450px';
            smallSearch.style.visibility = 'hidden';
            menuContent.style.transition = 'all 0.7s ease-in-out';
            isSearchActive = false;
            isMenuActive = false;
        } else {
            menuContent.style.top = '-450px';
            smallSearch.style.visibility = 'hidden';
            menuContent.style.transition = 'all 0.7s ease-in-out';
            isSearchActive = false;
            isMenuActive = false;
        }
    };

    // Listen for screen width changes
    const mediaQuery = window.matchMedia('(min-width: 1200px)');
    handleWidthChange(mediaQuery);
    mediaQuery.addEventListener('change', handleWidthChange);
});
