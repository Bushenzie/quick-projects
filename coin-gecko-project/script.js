
const valueHeading = document.querySelector("h3.value");
const value_btc = document.querySelector("span#output_btc");
const value_eur = document.querySelector("span#output_eur");
const input_field = document.querySelector("input.input_field");
const input_button = document.querySelector("button.input_button");

let currency = "eur";
const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`

//DEFAULT
GetData(1).then(data => {
    value_btc.textContent = data.value;
    value_eur.textContent = data.inputed;
    console.log(data);
});

input_button.addEventListener("click", ()=> {
    if(input_field.value) {
        GetData(Number(input_field.value)).then(data => {
            value_btc.textContent = data.value;
            value_eur.textContent = data.inputed;
        }).catch(err=> {
            valueHeading.textContent = "Something went wrong";
            console.log(err);
        })
        input_field.value = "";
    }
})




async function GetData(value) {
    const data = await fetch(url);
    const parsed = await data.json();
    let inputResult = (Number(parsed.bitcoin.eur)* value).toFixed(2);

    return {
        value: value,
        BTC: parsed.bitcoin.eur,
        inputed: inputResult
    }
}


