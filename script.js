document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[name='subjects']");
    const amountText = document.getElementById("amountText");

    function updateAmount() {
        let count = 0;
        checkboxes.forEach(cb => { if (cb.checked) count++; });
        amountText.textContent = "Total: " + (count * 800) + " BDT";
    }

    checkboxes.forEach(cb => cb.addEventListener("change", updateAmount));
});
