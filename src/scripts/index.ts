document.addEventListener("DOMContentLoaded", (event) => {
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
