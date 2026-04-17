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

                <section className="image">
                    <img src={MainDC} className="maindc" alt="" />
                    <a href=''>DIGITAL COMICS</a>
                    <img src={MainM} className='mainm' alt="" />
                    <a href=''>DC MERCHANDISE</a>
                    <img src={MainSL} className='mainsl' alt="" />
                    <a href=''>SUBSCRIPTION</a>
                    <img src={MainS} className='mains' alt="" />
                    <a href=''>COMIC SHOP LOCATOR</a>
                    <img src={MainPV} className='mainpv' alt="" />
                    <a href=''>DC POWER VISA</a>
                </section>

            </div>


        </main>
    )

}