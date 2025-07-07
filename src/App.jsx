import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import Watchlist from "./pages/Watchlist"
import { WatchListProvider } from "./context/WatchListContext"

function App() {


  return (
    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
  )
}

export default App
