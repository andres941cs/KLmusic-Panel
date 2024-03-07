
// import './assets/'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SideBar from './components/SideBar/SideBar'
import HomePage from './pages/Home/HomePage'
import SongPage from './pages/Song/SongPage.jsx';
import ProtectedRoute from './pages/Login/ProtectedRoute';
import LoginPage from './pages/Login/LoginPage';
import Header from './components/Header/Header';
import UserPage from './pages/User/UserPage';
import ArtistPage from './pages/Artist/ArtistPage';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './pages/Login/AuthContext';

function App() {


  return (
    <>
      <AuthProvider>
      <BrowserRouter>
      <SideBar></SideBar>
      
      <main className='bg-background text-foreground border'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<ProtectedRoute path="/user" element={<UserPage/>}/>}/>
        {/* <ProtectedRoute path="/user" element={<UserPage/>}/> */}
        <Route path="/song" element={<SongPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        
      </Routes>
      <Footer></Footer>
      </main>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
