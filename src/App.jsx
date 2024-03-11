
// import './assets/'
import { useContext } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SideBar from './components/SideBar/SideBar'
import HomePage from './pages/Home/HomePage'
import AlbumPage from './pages/Album/AlbumPage.jsx';
import SongPage from './pages/Song/SongPage.jsx';
import ProtectedRoute from './pages/Login/ProtectedRoute.jsx';
import LoginPage from './pages/Login/LoginPage';
import Header from './components/Header/Header';
import UserPage from './pages/User/UserPage';
import ArtistPage from './pages/Artist/ArtistPage';
import Footer from './components/Footer/Footer';
import {AuthContext} from './pages/Login/AuthContext.jsx';
import PublicationPage from './pages/Publication/PublicationPage.jsx';
import KaraokePage from './pages/Karaoke/KaraokePage.jsx';
import LyricPage from './pages/Lyric/LyricPage.jsx';
import { Toaster } from "./components/UI/Toaster"

function App() {

  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {/* <AuthProvider> */}
      <BrowserRouter>
      {isAuthenticated&&<SideBar></SideBar>}
      
      <main className='bg-background text-foreground border'>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          
          {/* <Route path="/user" element={<ProtectedRoute path="/user" element={<UserPage/>}/>}/> */}
          {/* <ProtectedRoute path="/" element={<UserPage/>}/> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/song" element={<SongPage />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/album" element={<AlbumPage/>}/>
          <Route path="/lyric" element={<LyricPage/>}/>
          <Route path="/karaoke" element={<KaraokePage/>}/>
          <Route path="/publication" element={<PublicationPage/>}/>
        </Route>
      </Routes>
      <Footer></Footer>
      </main>
    </BrowserRouter>
    <Toaster />
    {/* </AuthProvider> */}
    </>
  )
}

export default App
