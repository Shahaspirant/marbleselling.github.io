/* =========================================
   SHAHZAD MARBLE
   JAVASCRIPT
   ========================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE MENU
       ===================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener(
            "click",
            function () {

                navbar.classList.toggle("show");


                if (navbar.classList.contains("show")) {

                    menuToggle.innerHTML = "✕";

                } else {

                    menuToggle.innerHTML = "☰";

                }

            }
        );


        const navLinks =
            navbar.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navbar.classList.remove("show");

                    menuToggle.innerHTML = "☰";

                }
            );

        });

    }


    /* =====================================
       CURRENT YEAR
       ===================================== */

    const yearElement =
        document.getElementById("year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================
       MARBLE SEARCH
       ===================================== */

    const searchInput =
        document.getElementById("marbleSearch");


    if (searchInput) {

        const productCards =
            document.querySelectorAll(
                ".product-card"
            );


        searchInput.addEventListener(
            "input",
            function () {

                const searchText =
                    searchInput.value
                    .toLowerCase()
                    .trim();


                productCards.forEach(
                    function (card) {

                        const productName =
                            card
                            .getAttribute("data-name")
                            .toLowerCase();


                        if (
                            productName
                            .includes(searchText)
                        ) {

                            card.style.display = "";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }


    /* =====================================
       CONTACT FORM
       ===================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const formMessage =
        document.getElementById(
            "formMessage"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                    .getElementById("name")
                    .value
                    .trim();


                const phone =
                    document
                    .getElementById("phone")
                    .value
                    .trim();


                const message =
                    document
                    .getElementById("message")
                    .value
                    .trim();


                /* Required fields */

                if (
                    name === "" ||
                    phone === "" ||
                    message === ""
                ) {

                    formMessage.textContent =
                        "Please fill in all required fields.";

                    formMessage.style.color =
                        "#a00000";

                    return;

                }


                /* Phone validation */

                const phonePattern =
                    /^[0-9]{10}$/;


                if (
                    !phonePattern.test(phone)
                ) {

                    formMessage.textContent =
                        "Please enter a valid 10-digit phone number.";

                    formMessage.style.color =
                        "#a00000";

                    return;

                }


                /* Success */

                formMessage.textContent =
                    "Thank you! Your enquiry has been received. We will contact you soon.";

                formMessage.style.color =
                    "#568000";


                contactForm.reset();

            }
        );

    }


});
