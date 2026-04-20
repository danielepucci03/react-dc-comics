import AppLogo from '../assets/dc-comics-1/img/dc-logo.png'


export default function AppHeader() {

    const menu = [
        {
            id: 1,
            text: 'CHARACTERS',
            path: '/characters'

        },
        {
            id: 2,
            text: 'COMICS',
            path: '/comics'

        },
        {
            id: 3,
            text: 'MOVIES',
            path: '/movies'

        },
        {
            id: 4,
            text: 'TV',
            path: '/tv'

        },
        {
            id: 5,
            text: 'GAMES',
            path: '/games'

        },
        {
            id: 6,
            text: 'COLLECTIBLES',
            path: '/collectibles'

        },
        {
            id: 7,
            text: 'VIDEOS',
            path: '/videos'

        },
        {
            id: 8,
            text: 'FANS',
            path: '/fans'

        },
        {
            id: 9,
            text: 'NEWS',
            path: '/news'

        },
        {
            id: 10,
            text: 'SHOP',
            path: '/shop'

        }
    ]

    return (
        <header>

            <section className="container-header">

                <img src={AppLogo} className="logo-header" alt="" />

                <nav>

                    {menu.map((item) => (
                        <a href={item.path} key={item.id}>{item.text}</a>
                    ))
                    }

                </nav>
            </section>
        </header>
    )

}