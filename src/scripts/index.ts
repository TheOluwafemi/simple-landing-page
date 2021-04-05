document.addEventListener("DOMContentLoaded", (event) => {
    const hamburger = document.querySelector(".hamburger") as HTMLElement;
    const navMenu = document.querySelector(".nav__menu") as HTMLElement;
    const navLink = document.querySelectorAll(".nav__link") as NodeListOf<
        HTMLElement
    >;

    hamburger.addEventListener("click", toggleMobileMenu);
    navLink.forEach((link) => link.addEventListener("click", closeMobileMenu));

    function toggleMobileMenu(): void {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function closeMobileMenu(): void {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    const contactForm = document.getElementById(
        "contact-form"
    ) as HTMLFormElement;

    if (!contactForm) {
        throw new Error("The form does not exist!");
    }

    contactForm.onsubmit = (): Boolean => {
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        console.log({ name, email, message });
        return false;
    };
});
