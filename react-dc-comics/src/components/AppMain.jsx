import MainDC from '../assets/dc-comics-1/img/buy-comics-digital-comics.png'
import MainM from '../assets/dc-comics-1/img/buy-comics-merchandise.png'
import MainSL from '../assets/dc-comics-1/img/buy-comics-shop-locator.png'
import MainS from '../assets/dc-comics-1/img/buy-comics-subscriptions.png'
import MainPV from '../assets/dc-comics-1/img/buy-dc-power-visa.svg'



export default function AppMain() {

    return (
        <main>

            <section className='text'>
                CIAO
            </section>

            <div className="container">
                <div className="row">
                    <section className="image">
                        <img src={MainDC} alt="" />
                        <p>DIGITAL COMICS</p>
                        <img src={MainM} alt="" />
                        <p>DC MERCHANDISE</p>
                        <img src={MainSL} alt="" />
                        <p>SUBSCRIPTION</p>
                        <img src={MainS} alt="" />
                        <p>COMIC SHOP LOCATOR</p>
                        <img src={MainPV} className='mainpv' alt="" />
                        <p>DC POWER VISA</p>
                    </section>
                </div>
            </div>

        </main>
    )

}