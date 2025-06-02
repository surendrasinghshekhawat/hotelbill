let tipButtons = document.querySelectorAll(".btn");
let tipInputField = document.getElementById("tipInput");

tipButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        tipButtons.forEach((b) => {
            b.style.backgroundColor = "";
        });
        btn.style.backgroundColor = "rgb(16, 141, 16)";

        let tipValue = parseInt(btn.textContent.replace('%', ''));
        tipInputField.value = tipValue;
    });
});

let generateBillBtn = document.getElementById("generateBill");

generateBillBtn.addEventListener("click", () => {
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let tipPercent = parseFloat(document.getElementById("tipInput").value);
    let peopleCount = parseInt(document.getElementById("peopleCount").value);

    let tipAmountSpan = document.getElementById("tipAmount");
    let totalBillSpan = document.getElementById("totalBill");
    let perPersonSpan = document.getElementById("perPerson");

    if (isNaN(billAmount) || isNaN(tipPercent) || isNaN(peopleCount) || peopleCount <= 0) {
        alert("Please enter your vaild input.");
        return;
    }

    let tipAmount = (billAmount * tipPercent) / 100;
    let total = billAmount + tipAmount;
    let perPerson = total / peopleCount;

    tipAmountSpan.textContent = tipAmount.toFixed(2);
    totalBillSpan.textContent = total.toFixed(2);
    perPersonSpan.textContent = perPerson.toFixed(2);

    tipButtons.forEach((b) => {
        b.style.backgroundColor = "";
    });

    tipInputField.value = "";
});
