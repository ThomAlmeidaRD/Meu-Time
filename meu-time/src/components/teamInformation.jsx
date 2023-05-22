
import React, { useEffect } from 'react';

function TeamInformation() {

    useEffect(() => {

        var close = document.querySelector('#close-stats')
        close.addEventListener('click', function () {
            var team_info_container = document.querySelector('#team-info-container')
            var chart_field = document.querySelector('#chart-field')
            team_info_container.style.display = 'none'
            chart_field.innerHTML = ''


        })


    }, [])


    useEffect(() => {

        var show_players = document.querySelector('#show-players')
        var show_lineup = document.querySelector('#show-lineup')
        var show_stats = document.querySelector('#show-stats')

        var div_players = document.querySelector('#players-div')
        var div_lineup = document.querySelector('#lineup-div')
        var div_stats = document.querySelector('#chart-div')


        show_players.addEventListener('click', function () {

            div_lineup.style.display = 'none'
            div_stats.style.display = 'none'

            div_players.style.display = 'block'

        })

        show_lineup.addEventListener('click', function () {

            div_players.style.display = 'none'
            div_stats.style.display = 'none'

            div_lineup.style.display = 'block'

        })

        show_stats.addEventListener('click', function () {

            div_lineup.style.display = 'none'
            div_players.style.display = 'none'

            div_stats.style.display = 'block'

        })

    }, [])

    return (
        <div className="team-info-container" id='team-info-container'>
            <div className="team-info-content">
                <header>
                    <img id='team-logo' src="" alt="" />
                    <section className="team-info">
                        <h2 id='team-name'>Team Name</h2>
                        <b id='team-season-league'>UEFA Champions League - 2023</b>

                    </section>
                    <ion-icon name="close" id="close-stats"></ion-icon>
                </header>

                <nav className='stats-menu'>
                    <ion-icon class="hide-desktop" name="person" id="show-players"></ion-icon>
                    <ion-icon class="hide-desktop" name="tablet-portrait" id="show-lineup"></ion-icon>
                    <ion-icon class="hide-desktop" name="stats-chart" id="show-stats"></ion-icon>
                </nav>

                <div className="team-lists">
                    <div className="players" id='players-div'>
                        <h2>Jogadores</h2>
                        <ul id='player-list'>


                        </ul>
                    </div>

                    <div className="team-stats">

                        <div className="team-lineup" id='lineup-div'>
                            <h2 id='most-used-lineup'>Formacão mais usada 4-4-2 - 30 vezes</h2>
                            <section className="line-up" id='lineup-img'>

                            </section>

                        </div>

                        <div className='stats-graph' id='chart-div'>

                            <h2>Sobre a Temporada</h2>

                            <div>
                                <h3>Resultados</h3>

                                <section className="stats">
                                    <span>
                                        <h4>Jogos</h4>
                                        <h3 id='results-games'></h3>
                                    </span>
                                    <span id="victory">
                                        <h4>Vitórias</h4>
                                        <h3 id='results-wins'></h3>
                                    </span>
                                    <span id="loses">
                                        <h4>Derrotas</h4>
                                        <h3 id='results-loses'></h3>
                                    </span>
                                    <span id="draw">
                                        <h4>Empates</h4>
                                        <h3 id='results-draws'></h3>
                                    </span>
                                </section>

                            </div>

                            <div>
                                <h3>Gols por tempo de jogo</h3>
                                <div id='chart-field'>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TeamInformation