import 'bootstrap'
import FooterFb from '../assets/dc-comics-1/img/footer-facebook.png'
import FooterPer from '../assets/dc-comics-1/img/footer-periscope.png'
import FooterPin from '../assets/dc-comics-1/img/footer-pinterest.png'
import FooterTw from '../assets/dc-comics-1/img/footer-twitter.png'
import FooterYt from '../assets/dc-comics-1/img/footer-youtube.png'
import LogoDC from '../assets/dc-comics-1/img/dc-logo-bg.png'


export default function AppFooter() {

    const footerBottom = [
        {
            id: 1,
            text: 'SIGN-UP NOW!',
            path: '/sign-up'

        }

    ]

    const footerFb = [
        {
            id: 1,
            text: 'FOLLOW US',
            path: '/follow'

        }
    ]

    const footerBottomLink = [

        {
            id: 1,
            img: FooterFb,
            path: '/facebook'

        },
        {
            id: 2,
            img: FooterTw,
            path: '/twitter'

        },
        {
            id: 3,
            img: FooterYt,
            path: '/youtube'

        },
        {
            id: 4,
            img: FooterPin,
            path: '/pinterest'

        },
        {
            id: 5,
            img: FooterPer,
            path: '/periscope'

        }
    ]

    const footerDcComics = [
        {
            id: 1,
            text: 'Characters',
            path: '/characters'

        },
        {
            id: 2,
            text: 'Comics',
            path: '/comics'

        },
        {
            id: 3,
            text: 'Movies',
            path: '/movies'

        },
        {
            id: 4,
            text: 'Tv',
            path: '/tv'

        },
        {
            id: 5,
            text: 'Games',
            path: '/games'

        },
        {
            id: 6,
            text: 'Collectibles',
            path: '/collectibles'

        },
        {
            id: 7,
            text: 'Videos',
            path: '/videos'

        },
        {
            id: 8,
            text: 'Fans',
            path: '/fans'

        },
        {
            id: 9,
            text: 'News',
            path: '/news'

        },
        {
            id: 10,
            text: 'Shop',
            path: '/shop'

        }
    ]

    const footerShop = [
        {
            id: 1,
            text: 'Shop DC',
            path: '/shop-dc'

        },
        {
            id: 2,
            text: 'Shop DC Collectibles',
            path: '/shop-col'

        }
    ]

    const footerDc = [
        {
            id: 1,
            text: 'Terms of use',
            path: '/terms'

        },
        {
            id: 2,
            text: 'Privacy policy (NEW)',
            path: '/privacy-pol'

        },
        {
            id: 3,
            text: 'Ad Choices',
            path: '/ad-choices'

        },
        {
            id: 4,
            text: 'Advertising',
            path: '/ad'

        },
        {
            id: 5,
            text: 'Jobs',
            path: '/jobs'

        },
        {
            id: 6,
            text: 'Subscriptions',
            path: '/sub'

        },
        {
            id: 7,
            text: 'Talent Workshops',
            path: '/talent-work'

        },
        {
            id: 8,
            text: 'CPSC Certificates',
            path: '/cpsc'

        },
        {
            id: 9,
            text: 'Ratings',
            path: '/ratings'

        },
        {
            id: 10,
            text: 'Shop Help',
            path: '/shop-help'

        },
        {
            id: 11,
            text: 'Contact Us',
            path: '/contact-us'

        }
    ]

    const footerSites = [
        {
            id: 1,
            text: 'DC',
            path: '/dc'

        },
        {
            id: 2,
            text: 'MAD Magazine',
            path: '/mad'

        },
        {
            id: 3,
            text: 'DC Kids',
            path: '/dc-kids'

        },
        {
            id: 4,
            text: 'DC Universe',
            path: '/dc-universe'

        },
        {
            id: 5,
            text: 'DC Power Visa',
            path: '/dc-power-visa'
        }
    ]

    return (
        <footer>

            <section className='footer'>

                <section className="container-footer">

                    <div className="footer-left">

                        <div className="footer-column">

                            <h3>
                                DC COMICS
                            </h3>
                            <ul>

                                {footerDcComics.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.path}>{item.text}</a>
                                    </li>

                                ))
                                }

                            </ul>

                        </div>

                        <div className="footer-column">

                            <h3>
                                SHOP
                            </h3>
                            <ul>
                                {footerShop.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.path}>{item.text}</a>
                                    </li>
                                ))
                                }

                            </ul>

                        </div>

                    </div>

                    <div className="footer-column">

                        <h3>
                            DC
                        </h3>
                        <ul>
                            {footerDc.map((item) => (
                                <li key={item.id}>
                                    <a href={item.path}>{item.text}</a>
                                </li>
                            ))
                            }

                        </ul>

                    </div>

                    <div className="footer-column">

                        <h3>
                            SITES
                        </h3>
                        <ul>
                            {footerSites.map((item) => (
                                <li key={item.id}>
                                    <a href={item.path}>{item.text}</a>
                                </li>
                            ))
                            }

                        </ul>

                    </div>

                    <img src={LogoDC} className='logodc' alt="" />

                </section>

                <section className='footer-link'>

                    <button>

                        {footerBottom.map((item) => (
                            <a href={item.path} key={item.id}>{item.text}</a>
                        ))
                        }

                    </button>

                    <section className='second-container-footer'>

                        {footerFb.map((item) => (
                            <a href={item.path} key={item.id}>{item.text}</a>
                        ))}

                        {footerBottomLink.map((item) => (
                            <a href={item.path} key={item.id}>
                                <img src={item.img} />
                            </a>
                        ))
                        }

                    </section>

                </section>

            </section>


        </footer>
    )
}