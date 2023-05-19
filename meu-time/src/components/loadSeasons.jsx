
import API_KEY from "../keys";

function loadSeason() {

 

    fetch("https://v3.football.api-sports.io/leagues/seasons", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": API_KEY
        }
    })
        .then(response => response.json())
        .then(data => {
            
            console.log(data.response)

            for(var i = 0; i < data.response.length; i++){

                var seasonsList = document.querySelector('#seasons-list')
              
                var printLI = document.createElement('li')
                var seasonDiv = document.createElement('div')
                var seasonNumber = document.createElement('h3')
                var icon = document.createElement('ion-icon')

                countriesDiv.classList.add('countries')
                icon.name = 'chevron-forward'
                
                seasonNumber.innerText = data.response[i]

                printLI.appendChild(seasonDiv)
                countriesDiv.appendChild(seasonNumber)
                countriesDiv.appendChild(icon)

                seasonsList.appendChild(printLI)

            }
            
        })
        .catch(err => {
            console.log(err);
        });
}

export default loadSeasons