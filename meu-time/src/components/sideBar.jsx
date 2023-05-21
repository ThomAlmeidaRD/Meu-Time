
import { useEffect } from "react"



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


function SideBar() {

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


    return (
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
    )
}

export default SideBar