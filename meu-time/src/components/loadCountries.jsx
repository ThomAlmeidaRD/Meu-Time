
import API_KEY from "../keys";

function loadCountries() {

 

    fetch("https://api-football-beta.p.rapidapi.com/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
            "x-rapidapi-key": API_KEY
        }
    })
        .then(response => response.json())
        .then(data => {
            
            console.log(data)

            for(var i = 0; i < data.response.length; i++){

                var print = document.querySelector('#print')
              
                var printLI = document.createElement('li')
                var countriesDiv = document.createElement('div')
                var countriesFlag = document.createElement('img')
                var countriesName = document.createElement('h3')
                var countriesCode = document.createElement('h3')
                var icon = document.createElement('ion-icon')

                countriesDiv.classList.add('countries')
                icon.name = 'chevron-forward'
                
                countriesFlag.src = data.response[i].flag
                countriesName.innerText = data.response[i].name
                countriesCode.innerText = data.response[i].code

                printLI.appendChild(countriesDiv)
                countriesDiv.appendChild(countriesFlag)
                countriesDiv.appendChild(countriesName)
                countriesDiv.appendChild(countriesCode)
                countriesDiv.appendChild(icon)

                print.appendChild(printLI)

                printLI.onclick = function(){
                    var curent_country_name = this.childNodes[0].childNodes[1].innerText
                    console.log(curent_country_name)
                    window.location.href = '/paises/ligas?=' + curent_country_name
                }

            }
            
        })
        .catch(err => {
            console.log(err);
        });
}

export default loadCountries