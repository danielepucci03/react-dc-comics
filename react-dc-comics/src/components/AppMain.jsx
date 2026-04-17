import MainDC from '../assets/dc-comics-1/img/buy-comics-digital-comics.png'
import MainM from '../assets/dc-comics-1/img/buy-comics-merchandise.png'
import MainSL from '../assets/dc-comics-1/img/buy-comics-shop-locator.png'
import MainS from '../assets/dc-comics-1/img/buy-comics-subscriptions.png'
import MainPV from '../assets/dc-comics-1/img/buy-dc-power-visa.svg'



export default function AppMain() {

    return (
        <main>

            <section>

            </section>

            <section className="image">
                <img src={MainDC} alt="" />
                <img src={MainM} alt="" />
                <img src={MainSL} alt="" />
                <img src={MainS} alt="" />
                <img src={MainPV} alt="" />
            </section>
        </main>
    )

}