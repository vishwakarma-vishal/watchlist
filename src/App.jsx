import { Routes, Route } from "react-router-dom";
import { Layout } from "./common/Layout";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Movie } from "./pages/Movie";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { NotFound } from "./pages/NotFound";
import {Watchlist} from './pages/WatchList';

function App() {

  return (
    <Routes>
     <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="/movie/:movieId" element={<Movie />} /> 
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
