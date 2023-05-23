import './assets/css/main.css'
import { API_HOST_APISPORTS } from './keys'

function auth() {

  var txt_api = document.querySelector('input')
  var display_error = document.querySelector('#display-error')
  localStorage.setItem("my_api_key", txt_api.value)

  fetch("https://v3.football.api-sports.io/status", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": API_HOST_APISPORTS,
      "x-rapidapi-key": txt_api.value
    }
  })
    .then(response => response.json())
    .then(data => {

      if (data.response.length == 0) {
        console.log(data.response.length)
        display_error.style.display = 'block'
        display_error.innerText = 'Insira uma chave de API válida.'
       
      } else {
        console.log(data.response.account)
        window.location.href = '/home'
      }

      txt_api.value = ''

    })
    .catch(err => {
      console.log(err);
    });


}

function App() {

  return (
    <>
      <main className='main-login'>
        <div className='content'>
          <h3>Meu Time</h3>
          <h1>Todos os Dados do seu Time Favorito com uma Interface Incrível</h1>
          <p>Veja estatísticas, classficação das ligas e muito mais do seu time preferido á pouquissimos cliques e não perca mais nada sobre o seu time.</p>
          <input type="text" placeholder='Insira sua chave de API' />
          <button onClick={auth}>Entrar</button>
          <br />
          <a href="https://www.api-football.com/documentation-v3" target='blank' className='link'>Não tem uma chave de API ? <ion-icon name="help-circle"></ion-icon></a>
          <h3 id='display-error'>display error</h3>
        </div>
      </main>
    </>
  )
}

export default App

