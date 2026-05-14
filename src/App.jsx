import {
    BrowserRouter, 
    Routes,
    Route,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import DirectorContainer from "./pages/DirectorContainer";
import DirectorList from "./pages/DirectorList";
import DirectorCard from "./pages/DirectorCard";
import DirectorForm from "./pages/DirectorForm";
import MovieCard from "./pages/MovieCard";
import MovieForm from "./pages/MovieForm";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>

            <NavBar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                    />
                    
                <Route
                    path="/about"
                    element={<About />}
                    />
                    <Route path="/directors" element={<DirectorContainer />}>

                    <Route index element={<DirectorList />} />

                    <Route path="new" element={<DirectorForm />} />

                    <Route path=":id" element={<DirectorCard />} >

                        <Route path="movies/new" element={<MovieForm />} />

                        <Route path="movies/:movieId" element={<MovieCard />} />
            
                    </Route>

                </Route>

                <Route path="*" element={<h1>404 - Page Not Found</h1>} />

            </Routes>

        </BrowserRouter>
    );
};

export default App
