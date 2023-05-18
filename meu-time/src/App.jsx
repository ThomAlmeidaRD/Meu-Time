import './assets/css/main.css'

function App() {

  var print = document.querySelector('p')
  const API_KEY = 'c0c99d1d10c719c858bcdcdf31134c83'

  return (
    <>
      <main>
        <div className='content'>
          <h4>Meu Time</h4>
          <h1>Todos os Dados do seu Time Favorito com uma Interface Incrível</h1>
          <p>Veja estatísticas, classficação das ligas e muito mais do seu time preferido á pouquissimos cliques e não perca mais nada sobre o seu time.</p>
          <input type="text" placeholder='API KEY aqui' />
          <button>Entrar</button>
        </div>
      </main>
    </>
  )
}

export default App


/* 

  fetch("https://v3.football.api-sports.io/status", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": ""
    }
  })
    .then(response => response.text())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });


*/