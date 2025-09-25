(() => {
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
        form.addEventListener("submit", (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    });
})();

// نجاح
const successAlert = document.createElement("div");
successAlert.className = "alert alert-success mt-3";
successAlert.innerHTML = "✅ تم إرسال الرسالة بنجاح!";
form.appendChild(successAlert);

form.reset();
