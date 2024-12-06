import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Resource } from '../../ApiResponse';
const API_URL = process.env.REACT_APP_API_URL;
function LoadingPlaceholder() {
    return (_jsx("div", { className: "routine", children: _jsx("a", { href: "#", children: _jsx("div", { className: "routine-content", children: _jsx("p", { className: "placeholder-glow", children: _jsx("span", { className: "placeholder col-6" }) }) }) }) }));
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
function Routine({ routineUri }) {
    const url = API_URL + routineUri.replace('/api', '');
    const { isLoading, data } = useQuery({
        queryKey: ['routine'],
        queryFn: () => getRoutine(url),
        refetchOnWindowFocus: false,
        initialData: new Resource([])
    });
    //console.log(data)
    const routine = new Resource(data);
    //console.log(routine)
    return _jsx(_Fragment, { children: isLoading ? (_jsx(LoadingPlaceholder, {})) : (_jsx("div", { className: "routine", children: _jsx(Link
            // @ts-ignore
            , { 
                // @ts-ignore
                to: `/routines/${routine.attributes.id}`, children: _jsxs("div", { className: "routine-content", children: [_jsx("p", { children: 
                            // @ts-ignore
                            routine.attributes.title }), _jsx("i", { className: "fa-light fa-ellipsis", role: "button" })] }) }, `routine-${routine.attributes.id}`) })) });
}
function getRoutine(url) {
    return fetch(url).then((response) => response.json());
}
export default Routine;
