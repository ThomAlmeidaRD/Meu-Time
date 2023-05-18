import './assets/css/main.css'

function App() {

  var print = document.querySelector('p')

  fetch("https://v3.football.api-sports.io/status", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "c0c99d1d10c719c858bcdcdf31134c83"
    }
  })
    .then(response => response.text())
    .then(data => {
      console.log(data)
      print.innerHTML = data
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <>
      <h1>hello</h1>
      <p>

      </p>
    </>
  )
}

export default App
