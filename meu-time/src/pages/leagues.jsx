
import loadLeagues from "../components/loadLeagues"

function Leagues() {

   loadLeagues()

    return (

        <main className="no-vh-full">
            <div className="content wd-80">
                <h1>Selecione uma Liga</h1>
                <p>Ao selecionar uma liga, você poderá ver os times que se encontram nela</p>
                <ul id="print">
                   
                </ul>
            </div>
        </main>

    )
}

export default Leagues