
import { APISPORTS_API_HOST } from "../../keys";
import getLeagues from "./getLeagues";


function getCountries() {

    //Trazer países
    fetch("https://v3.football.api-sports.io/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": APISPORTS_API_HOST,
            "x-rapidapi-key": localStorage.getItem('my_api_key')
        }
    })
        .then(response => response.json())
        .then(data => {

            console.log(data)


            for (var i = 0; i < data.response.length; i++) {


                var label = document.getElementById('label')


                var countriesList = document.querySelector('#countries-list')

                var countryItem = document.createElement('li')
                var countryFlag = document.createElement('img')
                var countryTitle = document.createElement('h3')
                var icon = document.createElement('ion-icon')

                countryItem.classList.add('country-item')
                countryTitle.classList.add('title')

                countryFlag.src = data.response[i].flag
                countryTitle.innerText = data.response[i].name
                icon.name = 'chevron-forward'

                countryItem.appendChild(countryFlag)
                countryItem.appendChild(countryTitle)
                countryItem.appendChild(icon)

                countriesList.appendChild(countryItem)

                //Trazer ligas conforme o país
                countryItem.addEventListener('click', getLeagues)

            }

        })
        .catch(err => {
            console.log(err);
        });
}

export default getCountries