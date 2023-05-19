
import API_KEY from "../keys";

function loadLeagues() {



    fetch("https://v3.football.api-sports.io/leagues", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": API_KEY
        }
    })
        .then(response => response.json())
        .then(data => {

            var url = window.location.href
            var parts_url = url.split('/')
            var only_country = parts_url[4].split('?=')

            var selectedCountry = []
           
            for (var i = 0; i < data.response.length; i++) {
                if (data.response[i].country.name === only_country[1]) {
                    selectedCountry.push(data.response[i])
                }
            }

            console.log(selectedCountry)

            //console.log(selectedCountry[0].league)
            for (var j = 0; j < selectedCountry.length; j++) {

                var leaguesList = document.querySelector('#leagues-list')

                var leagueItem = document.createElement('li')
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

                leaguesList.appendChild(leaguesDiv)
                leaguesDiv.appendChild(leaguesLogo)
                leaguesDiv.appendChild(leaguesName)
                leaguesDiv.appendChild(leaguesType)
                leaguesDiv.appendChild(icon)

                leaguesList.appendChild(leagueItem)

                leagueItem.onclick = function(){
                    console.log('hello')
                }

            }


        })
        .catch(err => {
            console.log(err);
        });
}

export default loadLeagues