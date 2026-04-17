import FooterFb from '../assets/dc-comics-1/img/footer-facebook.png'
import FooterPer from '../assets/dc-comics-1/img/footer-periscope.png'
import FooterPin from '../assets/dc-comics-1/img/footer-pinterest.png'
import FooterTw from '../assets/dc-comics-1/img/footer-twitter.png'
import FooterYt from '../assets/dc-comics-1/img/footer-youtube.png'

export default function AppFooter() {

    return (
        <footer>
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
        </footer>
    )
}