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

            <section className="container">

                <section className="image">

                    <a href=''> <img src={MainDC} className="maindc" alt="" /> DIGITAL COMICS</a>

                    <a href=''><img src={MainM} className='mainm' alt="" />DC MERCHANDISE</a>

                    <a href=''><img src={MainSL} className='mainsl' alt="" />SUBSCRIPTION</a>

                    <a href=''><img src={MainS} className='mains' alt="" />COMIC SHOP LOCATOR</a>

                    <a href=''><img src={MainPV} className='mainpv' alt="" />DC POWER VISA</a>
                </section>

            </section>


        </main>
    )

}