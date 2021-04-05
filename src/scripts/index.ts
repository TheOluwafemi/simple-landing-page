/**
 * index.ts; Main typescript file
 * waits for the initial HTML document to be completely loaded and parsed,
 */
document.addEventListener("DOMContentLoaded", (event) => {
    /** get hamburger element
     * get nav__menu element
     * get all nav__link elements
     */
    const hamburger = document.querySelector(".hamburger") as HTMLElement;
    const navMenu = document.querySelector(".nav__menu") as HTMLElement;
    const navLink = document.querySelectorAll(".nav__link") as NodeListOf<
        HTMLElement
    >;

    /** adds click event listener */
    hamburger.addEventListener("click", toggleMobileMenu);
    navLink.forEach((link) => link.addEventListener("click", closeMobileMenu));

    /** Toggles the hamburger on click, to add or remove the active class. */
    function toggleMobileMenu(): void {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    /** Closes the mobile menu on click of any of the navigation links */
    function closeMobileMenu(): void {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    /** get contact form as contactForm */
    const contactForm = document.getElementById(
        "contact-form"
    ) as HTMLFormElement;

    /** throw error if form is not present in html */
    if (!contactForm) {
        throw new Error("The form does not exist!");
    }

    /**
     * Add an on submit event listener to the contact form, which logs the form entries in the console
     * @return {Boolean}
     */
    contactForm.onsubmit = (): Boolean => {
        const formData = new FormData(contactForm);
        for (let entry of formData.entries()) {
            console.log(`${entry[0]} : ${entry[1]}`);
        }
        /** prevent page refresh by returning false */
        return false;
    };
});
