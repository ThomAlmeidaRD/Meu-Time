//import loadCountries from "../components/loadCountries"

import TeamInformation from '../components/teamInformation'
import SoccerInfos from "../components/soccerInfos"
import SideBar from "../components/sideBar"

function Home() {

    //loadCountries()


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

