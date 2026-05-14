
import {
    Link,
    Outlet,
    useParams,
    useOutletContext,
} from 'react-router-dom';

function DirectorCard() {
    // Replace me
    const { id } = useParams()
    const { directors } = useOutletContext()

    const director = directors.find((director) => director.id.toString() === id);

    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
        <h2>{director.name}</h2>
        <p>{director.bio}</p>
        <h3>Movies:</h3>
        <ul>
            {director.movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>

                     
            </li>
            ))}
        </ul>
        <Link to={`movies/new`}>Add New Movie</Link>
        <Outlet context={{ director }} />
        {/* Movie compoenents should render here depending on route */}
        </div>
    )
}

export default DirectorCard
