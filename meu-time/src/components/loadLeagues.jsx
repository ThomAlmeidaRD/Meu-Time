
import API_KEY from "../keys";

function loadLeagues() {



    fetch("https://api-football-beta.p.rapidapi.com/leagues", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
            "x-rapidapi-key": API_KEY
        }
    })
        .then(response => response.json())
        .then(data => {


            var url = window.location.href
            var parts_url = url.split('/')
            var only_country = parts_url[4].split('?=')
            console.log(only_country[1])

            console.log(data.response)
            var selectedCountry = []

            for (var i = 0; i < data.response.length; i++) {
                if (data.response[i].country.name === only_country[1]) {
                    selectedCountry.push(data.response[i])
                }
            }

            console.log(selectedCountry)

            //console.log(selectedCountry[0].league)
            for (var j = 0; j < selectedCountry.length; j++) {

                var print = document.querySelector('#print')

                var printLI = document.createElement('li')
                var leaguesDiv = document.createElement('div')
                var leaguesLogo = document.createElement('img')
                var leaguesName = document.createElement('h3')
                var leaguesType = document.createElement('h4')
                var icon = document.createElement('ion-icon')

                leaguesDiv.classList.add('countries')
                leaguesType.classList.add('type')
                leaguesName.classList.add('league-name')

                icon.name = 'chevron-forward'

                leaguesLogo.src = selectedCountry[j].league.logo
                leaguesName.innerText = selectedCountry[j].league.name
                leaguesType.innerText = selectedCountry[j].league.type

                printLI.appendChild(leaguesDiv)
                leaguesDiv.appendChild(leaguesLogo)
                leaguesDiv.appendChild(leaguesName)
                leaguesDiv.appendChild(leaguesType)
                leaguesDiv.appendChild(icon)

                print.appendChild(printLI)

            }


        })
        .catch(err => {
            console.log(err);
        });
}

export default loadLeagues