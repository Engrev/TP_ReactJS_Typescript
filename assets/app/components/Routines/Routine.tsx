import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Resource } from '../../ApiResponse'

interface RoutineProps {
    routineUri: string;
}

const API_URL = process.env.REACT_APP_API_URL;

function LoadingPlaceholder() {
    return (
        <div className="routine">
            <a href="#">
                <div className="routine-content">
                    <p className="placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </p>
                </div>
            </a>
        </div>
    );
}

/**
 * Fetches routine data and displays it using a loading placeholder during the fetch.
 * Utilizes a query to retrieve routine information and renders a set of links with the fetched data.
 *
 * @param {object} props - The properties object.
 * @param {string} props.routineUri - The URI used to fetch the routine data.
 *
 * @return {JSX.Element} A React component that conditionally renders a loading placeholder or routine data.
 */
function Routine({ routineUri }: RoutineProps) {
    const url = API_URL + routineUri.replace('/api', '')
    const { isLoading, data } = useQuery({
        queryKey: ['routine'],
        queryFn: () => getRoutine(url),
        refetchOnWindowFocus: false,
        initialData: new Resource([])
    })
    //console.log(data)
    const routine = new Resource(data)
    //console.log(routine)

    return <>
        {isLoading ? (
            <LoadingPlaceholder />
        ) : (
            <div className="routine">
                <Link
                    // @ts-ignore
                    to={`/routines/${routine.attributes.id}`}
                    // @ts-ignore
                    key={`routine-${routine.attributes.id}`}
                >
                    <div className="routine-content">
                        <p>{
                            // @ts-ignore
                            routine.attributes.title
                        }</p>
                        <i
                            className="fa-light fa-ellipsis"
                            role="button"
                        ></i>
                    </div>
                </Link>
            </div>
        )}
    </>
}

function getRoutine(url: string) {
    return fetch(url).then((response) => response.json())
}

export default Routine
