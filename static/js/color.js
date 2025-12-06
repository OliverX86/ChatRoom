document.addEventListener("DOMContentLoaded", () => {
    const picker = document.getElementById("user-color-input");
    const hidden = document.getElementById("color-hidden");

    console.log("DOM loaded, picker:", picker, "hidden:", hidden);

    if (picker && hidden) {
        picker.addEventListener("input", (e) => {
            hidden.value = e.target.value;
            console.log("Color chosen:", e.target.value);
        });
    }
});
