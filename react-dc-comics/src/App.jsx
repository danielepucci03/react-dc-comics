import AppLogo from './assets/dc-comics-1/img/dc-logo.png'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {


  return (
    <>

      <img src={AppLogo} alt="" />

      <AppHeader />
      <AppMain />
      <AppFooter />


    </>
  )
}

export default App
