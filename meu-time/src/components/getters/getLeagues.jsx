import { APISPORTS_API_HOST } from '../../keys'
import getTeams from "./getTeams";

function getLeagues() {

    var country_name = this.childNodes[1].innerText
    var country_list = document.querySelector('#countries')
    var menu_button = document.querySelector('#menu-button')
    var screen_width = window.screen.width
    var label = document.getElementById('label')

    if (label.innerText == 'Selecione um País') {

        //Trazer ligas conforme o país
        fetch("https://v3.football.api-sports.io/leagues", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": APISPORTS_API_HOST,
                "x-rapidapi-key": localStorage.getItem('my_api_key')
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


                    //Trazer toas as temporadas das ligas listadas
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

        var leagueList = document.querySelector('#league-list')
        var teamsList = document.querySelector('#team-list')
        var listOfLeagues = document.querySelectorAll('.league-item')
        var listOfTeams = document.querySelectorAll('.league-item team')

        label.innerText = 'Selecione um País'

        for (var league of listOfLeagues) {
            leagueList.removeChild(league)
        }

        for (var team of listOfTeams) {
            teamsList.removeChild(team)
        }



    }




}

export default getLeagues