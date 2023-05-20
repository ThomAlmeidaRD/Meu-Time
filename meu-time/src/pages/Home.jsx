//import loadCountries from "../components/loadCountries"
import { useEffect } from "react"

function Home() {

    //    loadCountries()

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

    useEffect(() => {

        var leagueList = document.querySelector('#league-list')

        var next = document.querySelector('#next')
        var prev = document.querySelector('#prev')

        var maxLimit = (leagueList.childNodes.length * 19)
        var limit = 0
        var velocity = maxLimit / leagueList.childNodes.length
        console.log(velocity)

        next.addEventListener('click', function () {

            console.log(limit + ' / ' + maxLimit)

            if (limit == maxLimit) {
                leagueList.style.transform += 'translateX(-0%)'
                limit = maxLimit
            } else {
                limit += velocity
                leagueList.style.transform += 'translateX(-' + velocity + '%)'
                next.style.display = 'flex'
            }

        })

        prev.addEventListener('click', function () {

            console.log(limit + ' / ' + maxLimit)

            if (limit <= 0) {
                leagueList.style.transform += 'translateX(0%)'
                limit = 0
            } else {
                limit -= velocity
                leagueList.style.transform += 'translateX(' + velocity + '%)'
                prev.style.display = 'flex'
            }

        })

    })



    return (
        <>
            <div className="container">
                <div className="container-content">
                    <nav className="side-bar" id="countries">
                        <h2>Paises</h2>
                        <section className="search-bar">
                            <input type="text" placeholder="..." />
                            <ion-icon name="search"></ion-icon>
                        </section>

                        <hr />
                        <ul id="countries-list">
                            <li className="country-item">
                                <h3>Brazil</h3>
                            </li>
                            <li className="country-item">
                                <h3>Brazil</h3>
                            </li>
                            <li className="country-item">
                                <h3>Brazil</h3>
                            </li>
                        </ul>
                    </nav>

                    <main className="soccer-infos">
                        <div className="content-square" id="leagues">
                            <h2 className="nameof" id="league-nameof">Ligas e Temporadas do</h2>
                            <div className="carr">
                                <ul id="league-list">
                                    <li className="league-item" id="item">
                                        <section className="league-brand">
                                            <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                                            <h3 className="title">Serie A</h3>
                                            <h3 className="league-type">League</h3>
                                        </section>

                                        <p>Temporadas</p>
                                        <section className="accordion">
                                            <ul>
                                                <li className="league-season-item">2017</li>
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
                                    <li className="league-item" id="item">
                                        <section className="league-brand">
                                            <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                                            <h3 className="title">Serie A</h3>
                                            <h3 className="league-type">League</h3>
                                        </section>

                                        <p>Temporadas</p>
                                        <section className="accordion">
                                            <ul>
                                                <li className="league-season-item">2017</li>
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
                                    <li className="league-item" id="item">
                                        <section className="league-brand">
                                            <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                                            <h3 className="title">Serie A</h3>
                                            <h3 className="league-type">League</h3>
                                        </section>

                                        <p>Temporadas</p>
                                        <section className="accordion">
                                            <ul>
                                                <li className="league-season-item">2017</li>
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
                                    <li className="league-item" id="item">
                                        <section className="league-brand">
                                            <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                                            <h3 className="title">Serie A</h3>
                                            <h3 className="league-type">League</h3>
                                        </section>

                                        <p>Temporadas</p>
                                        <section className="accordion">
                                            <ul>
                                                <li className="league-season-item">2017</li>
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
                                    <li className="league-item" id="item">
                                        <section className="league-brand">
                                            <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                                            <h3 className="title">Serie A</h3>
                                            <h3 className="league-type">League</h3>
                                        </section>

                                        <p>Temporadas</p>
                                        <section className="accordion">
                                            <ul>
                                                <li className="league-season-item">2017</li>
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
                                    <li className="league-item" id="item">
                                        <section className="league-brand">
                                            <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                                            <h3 className="title">Serie A</h3>
                                            <h3 className="league-type">League</h3>
                                        </section>

                                        <p>Temporadas</p>
                                        <section className="accordion">
                                            <ul>
                                                <li className="league-season-item">2017</li>
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
                                    <li className="league-item" id="item">
                                        <section className="league-brand">
                                            <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                                            <h3 className="title">Serie A</h3>
                                            <h3 className="league-type">League</h3>
                                        </section>

                                        <p>Temporadas</p>
                                        <section className="accordion">
                                            <ul>
                                                <li className="league-season-item">2017</li>
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
                            <button className="carousel-control prev" id="prev"><ion-icon name="chevron-back"></ion-icon></button>
                            <button className="carousel-control next" id="next"><ion-icon name="chevron-forward"></ion-icon></button>
                        </div>
                        <div className="content-square" id="times">
                            <h2 className="nameof" id="team-nameof">Times do</h2>
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