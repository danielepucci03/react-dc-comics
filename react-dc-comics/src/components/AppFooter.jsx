import FooterFb from '../assets/dc-comics-1/img/footer-facebook.png'
import FooterPer from '../assets/dc-comics-1/img/footer-periscope.png'
import FooterPin from '../assets/dc-comics-1/img/footer-pinterest.png'
import FooterTw from '../assets/dc-comics-1/img/footer-twitter.png'
import FooterYt from '../assets/dc-comics-1/img/footer-youtube.png'



export default function AppFooter() {

    return (
        <footer>

            <section className='footer'>

                <section className="container-footer">

                    <div className="footer-column">

                        <h3>
                            DC COMICS
                        </h3>
                        <ul>
                            <li><a href="">Characters</a></li>
                            <li><a href="">Comics</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">TV</a></li>
                            <li><a href="">Games</a></li>
                            <li><a href="">Videos</a></li>
                            <li><a href="">News</a></li>
                        </ul>

                    </div>

                    <div className="footer-column">

                        <h3>
                            SHOP
                        </h3>
                        <ul>
                            <li><a href="">Shop DC</a></li>
                            <li><a href="">Shop DC Collectibles</a></li>
                        </ul>

                    </div>

                    <div className="footer-column">

                        <h3>
                            DC
                        </h3>
                        <ul>
                            <li><a href=''>Terms Of Use </a></li>
                            <li><a href="">Privacy policy (New)</a></li>
                            <li><a href="">Ad Choices</a></li>
                            <li><a href="">Advertising</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Subscriptions</a></li>
                            <li><a href="">Talent Workshops</a></li>
                            <li><a href="">CPSC Certificates</a></li>
                            <li><a href="">Ratings</a></li>
                            <li><a href="">Shop Help</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>

                    </div>

                    <div className="footer-column">

                        <h3>
                            SITES
                        </h3>
                        <ul>
                            <li><a href="">DC</a></li>
                            <li><a href="">MAD Magazine</a></li>
                            <li><a href="">DC Kids</a></li>
                            <li><a href="">DC Universe</a></li>
                            <li><a href="">DC Power Visa</a></li>
                        </ul>

                    </div>
                </section>

                <section className='footer-link'>

                    <button>
                        <a href="">SIGN-UP NOW!</a>
                    </button>

                    <section className='second-container-footer'>

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

            </section>


        </footer>
    )
}