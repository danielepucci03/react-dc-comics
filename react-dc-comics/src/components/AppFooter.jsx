import FooterFb from '../assets/dc-comics-1/img/footer-facebook.png'
import FooterPer from '../assets/dc-comics-1/img/footer-periscope.png'
import FooterPin from '../assets/dc-comics-1/img/footer-pinterest.png'
import FooterTw from '../assets/dc-comics-1/img/footer-twitter.png'
import FooterYt from '../assets/dc-comics-1/img/footer-youtube.png'



export default function AppFooter() {

    return (
        <footer>





            <section className='footer'>

                <div className="container-footer">

                    <div className="row">

                        <section className="dc-link">

                            <h3>
                                DC COMICS
                            </h3>
                            <a href="">Characters</a>
                            <a href="">Comics</a>
                            <a href="">Movies</a>
                            <a href="">TV</a>
                            <a href="">Games</a>
                            <a href="">Videos</a>
                            <a href="">News</a>
                            <h3>
                                SHOP
                            </h3>
                            <a href="">Shop DC</a>
                            <a href="">Shop DC Collectibles</a>
                            <h3>
                                DC
                            </h3>
                            <a href="">Terms Of Use</a>
                            <a href="">Privacy policy (New)</a>
                            <a href="">Ad Choices</a>
                            <a href="">Advertising</a>
                            <a href="">Jobs</a>
                            <a href="">Subscriptions</a>
                            <a href="">Talent Workshops</a>
                            <a href="">CPSC Certificates</a>
                            <a href="">Ratings</a>
                            <a href="">Shop Help</a>
                            <a href="">Contact Us</a>
                            <h3>
                                SITES
                            </h3>
                            <a href="">DC</a>
                            <a href="">MAD Magazine</a>
                            <a href="">DC Kids</a>
                            <a href="">DC Universe</a>
                            <a href="">DC Power Visa</a>

                        </section>

                    </div>

                </div>


                <section className='footer-link'>

                    <button>SIGN-UP NOW!</button>

                    <a href="">FOLLOW US</a>

                    <a href="">
                        <img src={FooterFb} alt="" />
                    </a>
                    <a href="">
                        <img src={FooterTw} alt="" />
                    </a>
                    <a href="">
                        <img src={FooterYt} alt="" />
                    </a>
                    <a href="">
                        <img src={FooterPin} alt="" />
                    </a>
                    <a href="">
                        <img src={FooterPer} alt="" />
                    </a>

                </section>

            </section>


        </footer>
    )
}