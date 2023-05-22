
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


    useEffect(() => {
        var country_list = document.querySelector('#countries')
        var menu_button = document.querySelector('#menu-button')

        menu_button.addEventListener('click', function () {
            console.log(country_list.style.width)
            if (country_list.style.width == '') {
                country_list.style.width = '8%'
                country_list.childNodes[1].style.display = 'none'
                country_list.childNodes[2].style.display = 'none'
                country_list.childNodes[3].style.display = 'none'
                country_list.childNodes[4].style.display = 'none'
                country_list.childNodes[5].style.display = 'none'
                menu_button.name = 'menu'
                menu_button.style.right = '3px'
            } else {
                country_list.style.width = ''
                country_list.childNodes[1].style.display = 'flex'
                country_list.childNodes[2].style.display = 'block'
                country_list.childNodes[3].style.display = 'flex'
                country_list.childNodes[4].style.display = 'block'
                country_list.childNodes[5].style.display = 'block'
                menu_button.name = 'close'
                menu_button.style.right = '10px'
            }
        })

    }, [])

    return (
        <nav className="side-bar" id="countries">
            <ion-icon name="close" id="menu-button"></ion-icon>
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>

                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>
                <li className="country-item" onClick={load}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="" />
                    <h3 className="title">Brazil</h3>
                </li>

            </ul>
        </nav>
    )
}

export default SideBar