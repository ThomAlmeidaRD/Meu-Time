
import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";


Chart.register(CategoryScale)

const gols = [
    { label: "0-15 min", value: 18 },
    { label: "16-30 min", value: 26 },
    { label: "31-45", value: 20 },
    { label: "46-60 min", value: 10 },
    { label: "60-75 min", value: 32 },
    { label: "76-90", value: 17 },
];


const data = {
    labels: gols.map(item => item.label),
    datasets: [
        {
            label: 'Gols',
            data: gols.map(item => item.value),
        }
    ]
};

const options = {
    responsive: true,
    maintainAspectRatio: true,
    borderColor: '#5d27db',
};




function TeamInformation() {

    useEffect(() => {

        var close = document.querySelector('#close-stats')
        close.addEventListener('click', function () {
            var team_info_container = document.querySelector('#team-info-container')
            team_info_container.style.display = 'none'
        })

    }, [])


    return (
        <div className="team-info-container" id='team-info-container'>
            <div className="team-info-content">
                <header>
                    <img src="https://logodetimes.com/times/corinthians/logo-corinthians-4096.png" alt="" />
                    <section className="team-info">
                        <h2>Team Name</h2>
                        <b>UEFA Champions League - 2023</b>
                    </section>
                    <ion-icon name="close" id="close-stats"></ion-icon>
                </header>

                <div className="team-lists">
                    <div className="players">
                        <h2>Players</h2>
                        <ul>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>

                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                            <li className="player">
                                <img src="../public/vite.svg" alt="" />
                                <span>
                                    <h4>Player Name</h4>
                                    <b>30 Anos</b>
                                    <b>Brazil</b>
                                </span>
                            </li>
                        </ul>
                    </div>


                    <div className="team-stats">

                        <div className="team-lineup">
                            <h2>Line-up mais usada  4-4-2</h2>
                            <section className="line-up">

                            </section>

                        </div>

                        <div className='stats-graph'>

                            <h2>Sobre a Temporada</h2>

                            <div>
                                <h3>Resultados</h3>

                                <section className="stats">
                                    <span>
                                        <h4>Jogos</h4>
                                        <h3>22</h3>
                                    </span>
                                    <span id="victory">
                                        <h4>Vitórias</h4>
                                        <h3>22</h3>
                                    </span>
                                    <span id="loses">
                                        <h4>Derrotas</h4>
                                        <h3>22</h3>
                                    </span>
                                    <span id="draw">
                                        <h4>Empates</h4>
                                        <h3>22</h3>
                                    </span>
                                </section>

                            </div>

                            <div>
                                <h3>Gols por tempo de jogo</h3>
                                <div>
                                    <Line data={data} options={options} />
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