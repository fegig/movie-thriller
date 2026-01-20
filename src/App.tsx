import { BrowserRouter, Route, Routes } from "react-router"
import { Body } from "./layout/_index"
import Home from "./routes/home"
import Discover from "./routes/discover"
import Library from "./routes/library"
import Settings from "./routes/settings"
import Movie from "./routes/$movie"

function App() {

  return (
    
      <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} >

          <Route index element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/library" element={<Library />} />
          <Route path="/settings" element={<Settings />} />
       

          </Route>  
           <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App



//
