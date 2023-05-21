

function spacing() {

    var square_leagues = document.getElementById('leagues')
    var square_teams = document.getElementById('teams')
    var this_item = document.getElementById('this-item')

    square_leagues.style.height = '42%'
    square_teams.style.height = '42%'
    square_teams.style.display = 'block'

    //console.log(this_item.parentNode)
    var this_ul = this_item.parentNode
    var this_acc = this_ul.parentNode
    var id_liga = this_acc.parentNode.childNodes[0].childNodes[2].innerText
    var season = this_item.innerText
    console.log('ID da Liga : ' + id_liga + ', season: ' + season)

}


function openTeam() {
    console.log('aa')
}

function SoccerInfos() {
    return (
        <main className="soccer-infos">
            <div className="content-square" id="leagues">
                <h2 className="nameof" id="league-nameof"></h2>

                <ul className="list" id="league-list">
                    <li className="league-item" id="item">
                        <section className="league-brand">
                            <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                            <h3 className="title">Champions League</h3>
                            <h3 className="league-type">71</h3>
                        </section>

                        <p>Temporadas</p>
                        <section className="accordion">
                            <ul>
                                <li className="league-season-item" id="this-item" onClick={spacing}>2017</li>
                                <li className="league-season-item">2018</li>
                                <li className="league-season-item">2019</li>
                                <li className="league-season-item">2020</li>
                                <li className="league-season-item">2021</li>
                                <li className="league-season-item">2022</li>
                                <li className="league-season-item">2020</li>
                                <li className="league-season-item">2021</li>
                                <li className="league-season-item">2022</li>
                            </ul>
                        </section>
                    </li>
                </ul>
            </div>
            <h2 id="label"></h2>
            <div className="content-square" id="teams">
                <h2 className="nameof" id="team-nameof">2017 - Champions League</h2>
                <ul className="list" id="team-list">

                    <li className="league-item team" onClick={openTeam}>
                        <img src="https://logodetimes.com/times/corinthians/logo-corinthians-4096.png" alt="" />
                        <h3 className="title">Corinthians</h3>
                    </li>

                </ul>
            </div>



        </main>
    )
}


export default SoccerInfos;