
function spacing() {

    var square_leagues = document.getElementById('leagues')
    var square_teams = document.getElementById('teams')
    var this_item = document.getElementById('this-item')

    square_leagues.style.height = '42%'
    square_teams.style.height = '42%'
    square_teams.style.display = 'block'

    var this_ul = this_item.parentNode
    var this_acc = this_ul.parentNode
    var id_liga = this_acc.parentNode.childNodes[0].childNodes[2].innerText
    var season = this_item.innerText
    console.log('ID da Liga : ' + id_liga + ', season: ' + season)

}
function openTeam() {

    var team_info_container = document.querySelector('#team-info-container')
    team_info_container.style.display = 'flex'

    //


}

function SoccerInfos() {

    return (
        <main className="soccer-infos">
            <div className="content-square" id="leagues">
                <h2 className="nameof" id="league-nameof"></h2>

                <ul className="list" id="league-list">

                </ul>

            </div>

            <div className="content-square" id="teams">
                <h2 className="nameof" id="team-nameof"></h2>
                <ul className="list" id="team-list">

                </ul>
            </div>



        </main>
    )
}


export default SoccerInfos;