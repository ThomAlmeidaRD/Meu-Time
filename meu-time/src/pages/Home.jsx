import loadCountries from "../components/loadCountries"
import { useEffect } from "react"

function Home() {

    loadCountries()

    useEffect(() => {

        const updateSearch = (event) => {
            var countries_list = document.querySelectorAll('#countries-list .country-item')
            for (var country of countries_list) {

                var country_name = country.innerText.toLowerCase()

                if (!country_name.includes(input.value.toLowerCase())) {
                    //console.log(country_name)
                    var thisCountry = country
                    thisCountry.style.display = 'none'
                } else {
                    var thisCountry = country
                    thisCountry.style.display = 'flex'
                }

            }
        }

        var input = document.querySelector('input')

        input.addEventListener('input', updateSearch)

    }, [])


    function load() {

        var label = document.getElementById('label')
        var leagueList = document.getElementById('league-list')

        if (label.innerText != '') {

            label.innerHTML = '<ion-icon id="loading" name="refresh"></ion-icon>'
            label.style.left = '45%'
            label.style.fontSize = '2.3em'

            var graus = 0
            var item = document.createElement('li')
            item.innerText = 'Lista carregada'

            var loop = setInterval(function () {
                graus = (graus + 1) % 360
                label.style.transform = `rotate(${graus}deg)`
            }, 2)

            var loadL = setInterval(function () {

                leagueList.appendChild(item)
            }, 5000)

            setTimeout(function () {
                clearInterval(loop)
                clearInterval(loadL)
                label.innerText = ''
                label.style.left = '35%'
                label.style.fontSize = '1.9em'
                label.style.transform = `rotate(0deg)`
            }, 5000)


        } else {
            label.innerText = 'Selecione um País'

            var listOfLI = document.querySelectorAll('#league-list li')

            for (item of listOfLI) {
                leagueList.removeChild(item)
            }

        }

    }


    function spacing() {

        var square_leagues = document.getElementById('leagues')
        var square_teams = document.getElementById('teams')
        var this_item = document.getElementById('this-item')

        square_leagues.style.height = '42%'
        square_teams.style.height = '42%'
        square_teams.style.display = 'block'

        //console.log(this_item.parentNode)
        var this_ul = this_item.parentNode
        var this_acc = this_ul.parentNode
        var id_liga = this_acc.parentNode.childNodes[0].childNodes[2].innerText
        var season = this_item.innerText
        console.log('ID da Liga : ' + id_liga + ', season: ' + season)

    }

    return (
        <>
            <div className="container">
                <div className="container-content">
                    <nav className="side-bar" id="countries">
                        <section id="logo">
                            <ion-icon name="analytics"></ion-icon>
                            <p>Meu Time</p>
                        </section>
                        <h2>Países</h2>
                        <section className="search-bar">
                            <input type="text" placeholder="..." />
                            <ion-icon name="search"></ion-icon>
                        </section>

                        <hr />
                        <ul id="countries-list">
                            <li className="country-item" onClick={load}>
                                <h3 className="title">Brazil</h3>
                            </li>
                        </ul>
                    </nav>

                    <main className="soccer-infos">
                        <div className="content-square" id="leagues">
                            <h2 className="nameof" id="league-nameof"></h2>

                            <ul id="league-list">
                                <li className="league-item" id="item">
                                    <section className="league-brand">
                                        <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                                        <h3 className="title">Champions League</h3>
                                        <h3 className="league-type">71</h3>
                                    </section>

                                    <p>Temporadas</p>
                                    <section className="accordion">
                                        <ul>
                                            <li className="league-season-item" id="this-item" onClick={spacing}>2017</li>
                                            <li className="league-season-item">2018</li>
                                            <li className="league-season-item">2019</li>
                                            <li className="league-season-item">2020</li>
                                            <li className="league-season-item">2021</li>
                                            <li className="league-season-item">2022</li>
                                            <li className="league-season-item">2020</li>
                                            <li className="league-season-item">2021</li>
                                            <li className="league-season-item">2022</li>
                                        </ul>
                                    </section>
                                </li>
                            </ul>
                        </div>
                        <h2 id="label">Selecione um País</h2>
                        <div className="content-square" id="teams">
                            <h2 className="nameof" id="team-nameof">2017 - Champions League</h2>
                            <ul id="team-list">

                                <li className="league-item team">
                                    <section className="league-brand team-brand">
                                        <img src="https://logodetimes.com/times/corinthians/logo-corinthians-4096.png" alt="" />
                                        <h3 className="title">Corinthians</h3>
                                    </section>
                                </li>
                            </ul>
                        </div>
                    </main>

                </div>
            </div>
        </>
    )

}

export default Home


// 