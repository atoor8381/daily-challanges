let form = document.querySelector("form");

async function convertCurrency(amount, toCurrency, tocurrencyamount) {
  let Data = await fetch(' https://api.fastforex.io/fetch-all?from=USD', {
    method: "GET",
    headers: {
      "X-API-Key": "23b24a51aa-a71b2677b5-t7oil2"
    }
  }).then(response => response.json());
  let oneUSDtogivencurrency = Data.results[toCurrency];
  let finalamount = oneUSDtogivencurrency * amount;
  console.log(finalamount)
  tocurrencyamount.innerHTML = finalamount.toFixed(2);
  return Data;
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let toCurrencyamount = document.getElementById("to-currency-amount");
  let tocurrency = document.getElementById("toCurrency").value;
  let amount = parseFloat(document.getElementById("Dollars").value);
  let finalanswer = await convertCurrency(amount, tocurrency, toCurrencyamount);
  console.log(finalanswer)
});