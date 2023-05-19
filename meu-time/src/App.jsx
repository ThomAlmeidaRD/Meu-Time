import './assets/css/main.css'
import API_KEY from './keys'

function auth() {

  var txtAPI = document.querySelector('input')
  var displayError = document.querySelector('h3')

  if (txtAPI.value == '') {
    displayError.style.display = 'block'
    displayError.innerText = 'Vazio!, é necessário uma Chave de API.'
  } else if (txtAPI.value != API_KEY) {
    displayError.style.display = 'block'
    displayError.innerText = 'Insira uma chave de API válida.'
  } else if (txtAPI.value == API_KEY) {
    txtAPI.value = ''
    window.location.href = '/home'
    
  }
}

function App() {

  return (
    <>
      <main className='main-login'>
        <div className='content'>
          <h4>Meu Time</h4>
          <h1>Todos os Dados do seu Time Favorito com uma Interface Incrível</h1>
          <p>Veja estatísticas, classficação das ligas e muito mais do seu time preferido á pouquissimos cliques e não perca mais nada sobre o seu time.</p>
          <input type="text" placeholder='API KEY aqui' />
          <button onClick={auth}>Entrar</button>
          <h3 id='display-error'>display error</h3>
        </div>
      </main>
    </>
  )
}

export default App

