//
import { APISPORTS_API_HOST } from '../../keys'
import Chart from "chart.js/auto";

function getTeams() {


    var this_ul = this.parentNode
    var this_acc = this_ul.parentNode
    var id_liga = this_acc.parentNode.childNodes[0].childNodes[2].innerText
    var nome_liga = this_acc.parentNode.childNodes[0].childNodes[1].innerText
    var number_season = this.innerText

    console.log('ID da liga: ' + id_liga + ', season: ' + this.innerText)

    var square_leagues = document.getElementById('leagues')
    var square_teams = document.getElementById('teams')
    var teams_nameOf = document.getElementById('team-nameof')
    teams_nameOf.innerText = this.innerText + ' - ' + nome_liga

    square_leagues.style.height = '42%'
    square_teams.style.height = '42%'
    square_teams.style.display = 'block'

    //Trazer estatísticas do time: Times da Temporada Selecionada
    fetch(`https://v3.football.api-sports.io/teams?league=${id_liga}&season=${number_season}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": APISPORTS_API_HOST,
            "x-rapidapi-key": localStorage.getItem('my_api_key')
        }
    })
        .then(response => response.json())
        .then(data => {


            var team_list = document.querySelector('#team-list')
            team_list.innerHTML = ''

            for (var i = 0; i < data.response.length; i++) {

                var teamItem = document.createElement('li')
                var teamLogo = document.createElement('img')
                var teamName = document.createElement('h3')
                var teamId = document.createElement('b')

                teamName.innerText = data.response[i].team.name
                teamLogo.src = data.response[i].team.logo
                teamId.innerText = data.response[i].team.id

                teamItem.classList.add('league-item')
                teamItem.classList.add('team')
                teamName.classList.add('title')

                teamItem.appendChild(teamLogo)
                teamItem.appendChild(teamName)
                teamItem.appendChild(teamId)

                team_list.appendChild(teamItem)

                teamItem.addEventListener('click', function () {


                    var player_list = document.querySelector('#player-list')
                    var team_info_container = document.querySelector('#team-info-container')

                    var this_team_id = this.childNodes[2].innerText
                    var this_team_name = this.childNodes[1].innerText
                    var this_team_logo = this.childNodes[0].src

                    var team_logo = document.getElementById('team-logo')
                    var team_name = document.getElementById('team-name')
                    var team_season_league = document.getElementById('team-season-league')

                    console.log(teamLogo)
                    console.log(team_name)
                    console.log(team_season_league)

                    team_logo.src = this_team_logo
                    team_name.innerText = this_team_name
                    team_season_league.innerText = nome_liga + ' - ' + number_season

                    team_info_container.style.display = 'flex'
                    player_list.innerHTML = ''

                    //Trazer estatísticas do time: Jogadores do Time naquela temporada
                    fetch(`https://v3.football.api-sports.io/players?league=${id_liga}&season=${number_season}&team=${this_team_id}`, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": APISPORTS_API_HOST,
                            "x-rapidapi-key": localStorage.getItem('my_api_key')
                        }
                    })
                        .then(response => response.json())
                        .then(data => {

                            console.log(data.response)

                            for (var i = 0; i < data.response.length; i++) {

                                var player_list = document.querySelector('#player-list')

                                var playerItem = document.createElement('li')
                                var playerImg = document.createElement('img')
                                var playerInfoSpan = document.createElement('span')
                                var playerName = document.createElement('h4')
                                var playerAge = document.createElement('b')
                                var playerCountry = document.createElement('b')

                                playerItem.classList.add('player')

                                playerImg.src = data.response[i].player.photo
                                playerName.innerText = data.response[i].player.name
                                playerAge.innerText = data.response[i].player.age + ' Anos'
                                playerCountry.innerText = data.response[i].player.birth.country

                                playerItem.appendChild(playerImg)
                                playerItem.appendChild(playerInfoSpan)
                                playerInfoSpan.appendChild(playerName)
                                playerInfoSpan.appendChild(playerAge)
                                playerInfoSpan.appendChild(playerCountry)

                                player_list.appendChild(playerItem)

                            }

                        })

                    //Trazer estatísticas do time: Resultados da temporada
                    fetch(`https://v3.football.api-sports.io/teams/statistics?league=${id_liga}&season=${number_season}&team=${this_team_id}`, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": APISPORTS_API_HOST,
                            "x-rapidapi-key": localStorage.getItem('my_api_key')
                        }
                    })
                        .then(response => response.json())
                        .then(data => {

                            var results_games = document.querySelector('#results-games')
                            var results_wins = document.querySelector('#results-wins')
                            var results_loses = document.querySelector('#results-loses')
                            var results_draws = document.querySelector('#results-draws')

                            results_games.innerText = data.response.fixtures.played.total
                            results_wins.innerText = data.response.fixtures.wins.total
                            results_loses.innerText = data.response.fixtures.loses.total
                            results_draws.innerText = data.response.fixtures.draws.total

                        })

                    //Trazer estatísticas do time: Formaçao mais usada
                    fetch(`https://v3.football.api-sports.io/teams/statistics?league=${id_liga}&season=${number_season}&team=${this_team_id}`, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": APISPORTS_API_HOST,
                            "x-rapidapi-key": localStorage.getItem('my_api_key')
                        }
                    })
                        .then(response => response.json())
                        .then(data => {

                            var lineups = data.response.lineups

                            var most_used_lineup = document.querySelector('#most-used-lineup')
                            var mostUsedFormation = ''
                            var maxPlayed = 0

                            for (var i = 0; i < lineups.length; i++) {
                                const lineup = lineups[i]
                                if (lineup.played > maxPlayed) {
                                    mostUsedFormation = lineup.formation
                                    maxPlayed = lineup.played
                                }
                            }

                            most_used_lineup.innerText = 'Formação Mais usada: '
                                + mostUsedFormation + ' - ' + maxPlayed + ' vezes'

                            var lineup_img = document.querySelector('#lineup-img')
                            lineup_img.style.backgroundImage = 'url(/lineups/' + mostUsedFormation + '.png)'


                        })

                    //Trazer estatísticas do time: Gols por tempo de jogo com gráfico usando ChartJS
                    fetch(`https://v3.football.api-sports.io/teams/statistics?league=${id_liga}&season=${number_season}&team=${this_team_id}`, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": APISPORTS_API_HOST,
                            "x-rapidapi-key": localStorage.getItem('my_api_key')
                        }
                    })
                        .then(response => response.json())
                        .then(data => {

                            var api_minutes = data.response.goals.for.minute
                            console.log(data.response)
                            var minutes = ['0-15', '16-30', '31-45', '46-60', '61-75', '76-90', '91-105', '106-120']
                            var total_goals = []

                            for (var i = 0; i < minutes.length; i++) {
                                total_goals.push(api_minutes[minutes[i]].total)
                            }

                            var chart_field = document.querySelector('#chart-field')
                            var canvas = document.createElement('canvas')

                            new Chart(canvas, {
                                type: 'line',
                                data: {
                                    labels: minutes,
                                    datasets: [{
                                        label: '# de Gols',
                                        data: total_goals,
                                        borderWidth: 1
                                    }]
                                },
                                options: {
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    borderColor: '#009104',
                                    scales: {
                                        y: {
                                            beginAtZero: true
                                        }
                                    }
                                }
                            })

                            chart_field.appendChild(canvas)

                        })
                        .catch(err => {
                            console.log(err);
                        });



                })

            }

        })
        .catch(err => {
            console.log(err);
        });



}



export default getTeams
