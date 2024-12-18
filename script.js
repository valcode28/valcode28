let increment = document.querySelector("#increment")
let numberField = document.querySelector("#inputcount")

let count = 0;

increment.addEventListener('click', function () {
    numberField.value = ++count;
})


