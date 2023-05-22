import { API_KEY_RAPIDAPI, API_KEY_APISPORTS, API_HOST_APISPORTS, API_HOST_RAPDIAPI } from '../../keys'
import getTeams from "./getTeams";

function getLeagues() {

    var country_list = document.querySelector('#countries')
    var menu_button = document.querySelector('#menu-button')
    var screen_width = window.screen.width
    var label = document.getElementById('label')

    if (label.innerText == 'Selecione um País') {

        fetch("https://api-football-beta.p.rapidapi.com/leagues", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
                "x-rapidapi-key": "23e07d05d4mshf6d5c7d4497e61ap15e2c2jsnaed65a8bcb1e"
            }
        })
            .then(response => response.json())
            .then(data => {

                label.innerText = 'Países'

                var league_list = document.querySelector('#league-list')
                league_list.innerHTML = ''
                var country_name_List = []

                for (var i = 0; i < data.response.length; i++) {
                    if (data.response[i].country.name === country_name) {
                        country_name_List.push(data.response[i])
                    }
                }


                for (var j = 0; j < country_name_List.length; j++) {

                    var leagueItem = document.createElement('li')
                    var leagueBrand = document.createElement('section')

                    var leagueBrand_logo = document.createElement('img')
                    var leagueBrand_name = document.createElement('h3')
                    var leagueBrand_id = document.createElement('h3')

                    var leagueP = document.createElement('p')
                    var leagueSeasons = document.createElement('section')
                    var leagueSeasonsUL = document.createElement('ul')

                    leagueItem.classList.add('league-item')
                    leagueBrand.classList.add('league-brand')
                    leagueSeasons.classList.add('accordion')
                    leagueP.innerText = 'Temporadas'

                    leagueBrand_name.classList.add('title')
                    leagueBrand_id.classList.add('league-type')

                    leagueBrand_logo.src = country_name_List[j].league.logo
                    leagueBrand_name.innerText = country_name_List[j].league.name
                    leagueBrand_id.innerText = country_name_List[j].league.id


                    for (var l = 0; l < country_name_List[j].seasons.length; l++) {

                        var li = document.createElement('li')
                        li.innerText = country_name_List[j].seasons[l].year
                        leagueSeasonsUL.appendChild(li)

                        li.addEventListener('click', getTeams)

                    }


                    leagueItem.appendChild(leagueBrand)
                    leagueItem.appendChild(leagueP)
                    leagueItem.appendChild(leagueSeasons)
                    leagueSeasons.appendChild(leagueSeasonsUL)

                    leagueBrand.appendChild(leagueBrand_logo)
                    leagueBrand.appendChild(leagueBrand_name)
                    leagueBrand.appendChild(leagueBrand_id)


                    league_list.appendChild(leagueItem)

                    if (screen_width <= 900) {
                        country_list.style.width = '8%'
                        country_list.childNodes[1].style.display = 'none'
                        country_list.childNodes[2].style.display = 'none'
                        country_list.childNodes[3].style.display = 'none'
                        country_list.childNodes[4].style.display = 'none'
                        country_list.childNodes[5].style.display = 'none'
                        menu_button.name = 'menu'
                        menu_button.style.right = '3px'
                    }

                }
            })

    } else {

        var leagueList = document.getElementById('league-list')
        var listOfLI = document.querySelectorAll('.league-item')

        for (var item of listOfLI) {
            leagueList.removeChild(item)
        }

        label.innerText = 'Selecione um País'

    }




}

export default getLeagues