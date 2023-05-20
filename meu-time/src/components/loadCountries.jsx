
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

                    var country_name = this.childNodes[1].innerText

                    var league_nameOf = document.querySelector('#league-nameof')

                    league_nameOf.innerText = 'Ligas do ' + country_name

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
                                var leagueBrand_type = document.createElement('h3')

                                var leagueP = document.createElement('p')
                                var leagueSeasons = document.createElement('section')
                                var leagueSeasonsUL = document.createElement('ul')

                                leagueItem.classList.add('league-item')
                                leagueBrand.classList.add('league-brand')
                                leagueSeasons.classList.add('accordion')
                                leagueP.innerText = 'Temporadas'

                                leagueBrand_name.classList.add('title')
                                leagueBrand_type.classList.add('league-type')

                                leagueBrand_logo.src = country_name_List[j].league.logo
                                leagueBrand_name.innerText = country_name_List[j].league.name
                                leagueBrand_type.innerText = country_name_List[j].league.type

                              //  console.log(country_name_List[j].seasons)

                                for(var l = 0; l < country_name_List[j].seasons.length; l++){
                                   // console.log(country_name_List[j].seasons[l].year)
                                    var li = document.createElement('li')
                                    li.innerText = country_name_List[j].seasons[l].year
                                    leagueSeasonsUL.appendChild(li)
                                }


                                leagueItem.appendChild(leagueBrand)
                                leagueItem.appendChild(leagueP)
                                leagueItem.appendChild(leagueSeasons)
                                leagueSeasons.appendChild(leagueSeasonsUL)

                                leagueBrand.appendChild(leagueBrand_logo)
                                leagueBrand.appendChild(leagueBrand_name)
                                leagueBrand.appendChild(leagueBrand_type)


                                league_list.appendChild(leagueItem)
                            }


                        })



                })
            }

        })
        .catch(err => {
            console.log(err);
        });
}

export default loadCountries