
import API_KEY from "../keys";

function loadCountries() {

    fetch("https://v3.football.api-sports.io/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": API_KEY
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

                countryItem.addEventListener('click', function () {

                    if (label.innerText != '') {

                        var country_name = this.childNodes[1].innerText
                        var league_nameOf = document.querySelector('#league-nameof')
                        league_nameOf.innerText = 'Ligas e Temporadas: ' + country_name

                        label.innerHTML = '<ion-icon id="loading" name="refresh"></ion-icon>'
                        label.style.left = '50%'
                        label.style.fontSize = '2.3em'

                        var graus = 0

                        var loop = setInterval(function () {
                            graus = (graus + 1) % 360
                            label.style.transform = `rotate(${graus}deg)`
                        }, 2)

                        fetch("https://v3.football.api-sports.io/leagues", {
                            "method": "GET",
                            "headers": {
                                "x-rapidapi-host": "v3.football.api-sports.io",
                                "x-rapidapi-key": API_KEY
                            }
                        })
                            .then(response => response.json())
                            .then(data => {


                                var league_list = document.querySelector('#league-list')
                                league_list.innerHTML = ''
                                var country_name_List = []

                                for (var i = 0; i < data.response.length; i++) {
                                    if (data.response[i].country.name === country_name) {
                                        country_name_List.push(data.response[i])
                                    }
                                }

                                //                            console.log(country_name_List[0].seasons[0].year)

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

                                    //  console.log(country_name_List[j].seasons)

                                    for (var l = 0; l < country_name_List[j].seasons.length; l++) {
                                        // console.log(country_name_List[j].seasons[l].year)
                                        var li = document.createElement('li')
                                        li.innerText = country_name_List[j].seasons[l].year
                                        leagueSeasonsUL.appendChild(li)

                                        //
                                        li.addEventListener('click', function () {


                                            var this_ul = this.parentNode
                                            var this_acc = this_ul.parentNode
                                            var id_liga = this_acc.parentNode.childNodes[0].childNodes[2].innerText
                                            var nome_liga = this_acc.parentNode.childNodes[0].childNodes[1].innerText

                                            console.log('ID da liga: ' + id_liga + ', season: ' + this.innerText)

                                            var square_leagues = document.getElementById('leagues')
                                            var square_teams = document.getElementById('teams')
                                            var teams_nameOf = document.getElementById('team-nameof')
                                            teams_nameOf.innerText = this.innerText + ' - ' + nome_liga

                                            square_leagues.style.height = '42%'
                                            square_teams.style.height = '42%'
                                            square_teams.style.display = 'block'


                                            fetch(`https://v3.football.api-sports.io/teams?league=${id_liga}&season=${this.innerText}`, {
                                                "method": "GET",
                                                "headers": {
                                                    "x-rapidapi-host": "v3.football.api-sports.io",
                                                    "x-rapidapi-key": API_KEY
                                                }
                                            })
                                                .then(response => response.json())
                                                .then(data => {


                                                    var team_list = document.querySelector('#team-list')
                                                    team_list.innerHTML = ''

                                                    for(var i = 0; i < data.response.length; i++){

                                                        var teamItem = document.createElement('li')
                                                        var teamLogo = document.createElement('img')
                                                        var teamName = document.createElement('h3')

                                                        

                                                    }


                                                    console.log(data.response)
                                                })
                                                .catch(err => {
                                                    console.log(err);
                                                });


                                        })

                                    }


                                    leagueItem.appendChild(leagueBrand)
                                    leagueItem.appendChild(leagueP)
                                    leagueItem.appendChild(leagueSeasons)
                                    leagueSeasons.appendChild(leagueSeasonsUL)

                                    leagueBrand.appendChild(leagueBrand_logo)
                                    leagueBrand.appendChild(leagueBrand_name)
                                    leagueBrand.appendChild(leagueBrand_id)


                                    league_list.appendChild(leagueItem)
                                }


                            })


                        setTimeout(function () {
                            clearInterval(loop)
                            label.innerText = ''
                            label.style.left = '50%'
                            label.style.fontSize = '1.9em'
                            label.style.transform = 'rotate(0deg)'
                        }, 8000)


                    } else {

                        var leagueList = document.getElementById('league-list')
                        var listOfLI = document.querySelectorAll('.league-item')
                        console.log(listOfLI)

                        label.innerText = 'Selecione um País'

                        for (var item of listOfLI) {
                            leagueList.removeChild(item)
                        }



                    }



                })
            }

        })
        .catch(err => {
            console.log(err);
        });
}

export default loadCountries