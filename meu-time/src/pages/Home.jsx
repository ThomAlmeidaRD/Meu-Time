
import SideBar from "../components/sideBar"
import TeamInformation from '../components/teamInformation'
import SoccerInfos from "../components/SoccerInfos"
import { API_HOST_APISPORTS } from "../keys";

import getCountries from '../components/getters/getCountries'

function Home() {


    function validAuthentication() {

        fetch("https://v3.football.api-sports.io/status", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": API_HOST_APISPORTS,
                "x-rapidapi-key": localStorage.getItem('my_api_key')
            }
        })
            .then(response => response.json())
            .then(data => {

                if (data.response.length == 0) {

                    alert('usuario nao logado, voltando para o login')
                    window.location.href = '/'

                } else {
                    getCountries()                    
                }

            })
            .catch(err => {
                console.log(err);
            });
    }

    validAuthentication()

    //getCountries()    

    return (
        <>
            <div className="container">
                <div className="container-content">
                    <SideBar />
                    <SoccerInfos />
                    <TeamInformation/>                    
                </div>
            </div>
        </>
    )

}

export default Home

