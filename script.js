
const regex = /^[0-9 ]+$/;
const cardholderValue = document.getElementById("cardholder");
const CardNumber = document.getElementById("CardNumber");
const MM = document.getElementById("MM");
const YY = document.getElementById("YY");
const cvc = document.getElementById("cvc");
const confirmbtn = document.getElementById("confirmbtn");
const cardValue = document.getElementById("cardValue");
const mmValue = document.getElementById("mmValue");
const yyValue = document.getElementById("yyValue");
const cardholderFull = document.getElementById("cardholderFull");
const cvcValue = document.getElementById("cvcValue");

function cardHodername() {
    cardholderFull.innerText = cardholderValue.value.toUpperCase();
    checkEmptyInputs();
}

function checkcardval() {
    CardNumber.value = CardNumber.value.replace(/\s/g, '');
    if (!regex.test(CardNumber.value)) {
        document.getElementById("Wrong_format").style.display = "block";

    } else {
        document.getElementById("Wrong_format").style.display = "none";
        const formattedCardNumber = CardNumber.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
        CardNumber.value = formattedCardNumber;
        cardValue.innerText = formattedCardNumber;
    }
    checkcardvalidity();
}

function validateExpDate() {
    const mmValueInt = parseInt(MM.value, 10);
    if (isNaN(mmValueInt) || mmValueInt < 1 || mmValueInt > 12) {
        document.getElementById("Wrong_exp_date").style.display = "block";
    } else {
        document.getElementById("Wrong_exp_date").style.display = "none";
        mmValue.innerText = MM.value;
        yyValue.innerText = YY.value;
    }
    checkEmptyInputs();
}

function validateCVC() {
    cvc.value = cvc.value.replace(/[^0-9]/g, '');
    if (!regex.test(cvc.value)) {
        document.getElementById("Wrong_cvc").style.display = "block";
    } else {
        document.getElementById("Wrong_cvc").style.display = "none";
        cvcValue.innerText = cvc.value;
    }
    checkEmptyInputs();
}
function checkEmptyInputs() {
    const cardNumberValue = CardNumber.value.trim();
    const MMValue = MM.value.trim();
    const YYValue = YY.value.trim();
    const cvcValueTrimmed = cvc.value.trim();

    if (
        cardholderValue.value !== '' &&
        cardNumberValue !== '' &&
        MMValue.length >= 2 && // Check if MM has at least 2 characters
        YYValue.length >= 2 && // Check if YY has at least 2 characters
        cvcValueTrimmed.length >= 3 && // Check if cvc has at least 3 characters
        cvcValueTrimmed !== '' &&
        regex.test(cardNumberValue) &&
        regex.test(MMValue) &&
        regex.test(YYValue) &&
        regex.test(cvcValueTrimmed)
    ) {
        confirmbtn.classList.remove("notallowed");
    } else {
        confirmbtn.classList.add("notallowed");
    }
    checkcardvalidity();
}
function checkcardvalidity() {
    if (CardNumber.value.trim().length < 18) {
        document.getElementById("Wrong_format").style.display = "block";
        confirmbtn.classList.add("notallowed");
    } else {
        document.getElementById("Wrong_format").style.display = "none";

    }

}

function ConfirmCard() {

    document.getElementById("fillCard").classList.add("hidden");
    document.getElementById("ShowSubmit").classList.remove("hidden");
    document.getElementById("ShowSubmit").classList.add("flex");
}

function ContinueBack() {
    cardValue.innerText = "0000 0000 0000 0000";
    mmValue.innerText = "00";
    yyValue.innerText = "00";
    cardholderFull.innerText = "JANE APPLESEED";
    cvcValue.innerText = "000";
    cardholderValue.value = null;
    CardNumber.value = null;
    MM.value = null;
    YY.value = null;
    cvc.value = null;
    document.getElementById("fillCard").classList.remove("hidden");
    document.getElementById("ShowSubmit").classList.add("hidden");
    confirmbtn.classList.add("notallowed");

}

