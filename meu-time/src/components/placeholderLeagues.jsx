function PlaceLeagues() {



    useEffect(() => {

        var leagueList = document.querySelector('#league-list')

        var next = document.querySelector('#next')
        var prev = document.querySelector('#prev')

        var maxLimit = (leagueList.childNodes.length * 19)
        var limit = 0
        var velocity = maxLimit / leagueList.childNodes.length
        //console.log(velocity)


        next.addEventListener('click', function () {

            console.log(limit + ' / ' + maxLimit)

            if (limit == maxLimit) {
                leagueList.style.transform += 'translateX(-0%)'
                limit = maxLimit
            } else {
                limit += velocity
                leagueList.style.transform += 'translateX(-' + velocity + '%)'
                next.style.display = 'flex'
            }

        })

        prev.addEventListener('click', function () {

            console.log(limit + ' / ' + maxLimit)

            if (limit <= 0) {
                leagueList.style.transform += 'translateX(0%)'
                limit = 0
            } else {
                limit -= velocity
                leagueList.style.transform += 'translateX(' + velocity + '%)'
                prev.style.display = 'flex'
            }

        })

    })




    return (
        <>


            <li className="league-item" id="item">
                <section className="league-brand">
                    <img src="https://brandslogo.net/wp-content/uploads/2013/06/uefa-champions-league-eps-vector-logo.png" alt="" />
                    <h3 className="title">Champions League</h3>
                    <h3 className="league-type">71</h3>
                </section>

                <p>Temporadas</p>
                <section className="accordion">
                    <ul>
                        <li className="league-season-item">2017</li>
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



            <button className="carousel-control prev" id="prev"><ion-icon name="chevron-back"></ion-icon></button>
            <button className="carousel-control next" id="next"><ion-icon name="chevron-forward"></ion-icon></button>


        </>
    )
}

export default PlaceLeagues