import { Link, useOutletContext } from "react-router-dom";
const DirectorList = () => {
    // Replace me
    const { directors } = useOutletContext();

    

    return (
    <div>
        <ul>
            {directors.map((director) => (
                <li key={director.id}>
                    <Link to={`/directors/${director.id}`}>
                        {director.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default DirectorList;
