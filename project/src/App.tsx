import './App.css'
import { BrowserRouter as Router ,  Routes , Route} from 'react-router-dom'
import Header from './components/header/Header'
import { Footer } from './components/footer/Footer'
import HomePage from './pages/Home/homePage'
import { RegisterView } from './Auth/Login/signIn'

function App() {
  return (
    <Router>
      <div className=''>
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register/SignIn" element={<RegisterView />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )

}

export default App
