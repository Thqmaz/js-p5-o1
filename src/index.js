import "./index.scss";

const resultElem    = document.querySelector("#resultaat")
const choiceElem    = document.querySelector("#keuzes")
const choices       = ["steen", "papier", "schaar"]

const handleClick = (e) => {
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}

choices.forEach(choice => {
    const button = document.createElement("button")
    button.innerHTML = choice
    button.addEventListener("click", handleClick)
    choiceElem.appendChild(button)
})

const getResults = (userChoice, botChoice) => {
    switch (userChoice + botChoice) {
        case "schaarpapier":
        case "steenschaar":
        case "papiersteen":
            resultElem.innerHTML = "Jij hebt gekozen voor " + userChoice + " en de computer koos " + botChoice + ", <b>jij wint!</b>"
            break
        case "papierschaar":
        case "schaarsteen":
        case "steenpapier":
            resultElem.innerHTML = "Jij hebt gekozen voor " + userChoice + " en de computer koos " + botChoice + ", <b>jij verliest!</b>"
            break
        case "schaarschaar":
        case "steensteen":
        case "papierpapier":
            resultElem.innerHTML = "Jij hebt gekozen voor " + userChoice + " en de computer koos " + botChoice + ", <b>het is gelijkspel!</b>"
            break
    }
}