
import SideBar from "../components/sideBar"
import TeamInformation from "../components/TeamInformation"

import getCountries from '../components/getters/getCountries'
import SoccerInfos from "../components/SoccerInfos"


function Home() {

    getCountries()    

    return (
        <>
            <div className="container">
                <div className="container-content">
                    <SideBar />
                    <SoccerInfos />
                    <TeamInformation />
                </div>
            </div>
        </>
    )

}

export default Home

