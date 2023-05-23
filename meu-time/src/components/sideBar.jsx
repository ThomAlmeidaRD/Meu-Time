
import { useEffect } from "react"

function SideBar() {

    useEffect(() => {

        const updateSearch = (event) => {
            var countries_list = document.querySelectorAll('#countries-list .country-item')
            for (var country of countries_list) {

                var country_name = country.innerText.toLowerCase()

                if (!country_name.includes(input.value.toLowerCase())) {

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
            <ion-icon class="hide-desktop" name="close" id="menu-button"></ion-icon>
            <section id="logo">
                <ion-icon name="analytics"></ion-icon>
                <p>Meu Time</p>
            </section>
            <h2 id="label">Selecione um País</h2>
            <section className="search-bar">
                <input type="text" placeholder="..." />
                <ion-icon name="search"></ion-icon>
            </section>

            <hr />

            <ul id="countries-list">

            </ul>
        </nav>
    )
}

export default SideBar