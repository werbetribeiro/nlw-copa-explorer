function createGame(player1, hour, player2) {
  return `
        <li>
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
          <strong>${hour}</strong>
          <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
        <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arabia-saudita") +
      createGame("mexico", "13:00", "polonia")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("uruguai", "10:00", "corea-do-sul") +
      createGame("brasil", "16:00", "servia")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("polonia", "10:00", "arabia-saudita") +
      createGame("argentina", "26/11", "mexico")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camaroes", "07:00", "servia") +
      createGame("brasil", "13:00", "suica")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "franca") +
      createGame("polonia", "16:00", "argentina")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("gana", "12:00", "uruguai") +
      createGame("camaroes", "16:00", "brasil")
  )
