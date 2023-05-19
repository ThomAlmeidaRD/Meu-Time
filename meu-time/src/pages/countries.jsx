
import loadCountries from "../components/loadCountries"

function Countries() {

    loadCountries()

    return (

        <main className="no-vh-full">
            <div className="content wd-80">
                <h1>Selecione um País</h1>
                <p>Selecione um país para encontrar a liga do seu time favorito:</p>
                <ul id="print">
                                    
                </ul>
            </div>
        </main>

    )
}

export default Countries