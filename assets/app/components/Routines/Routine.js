import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Routine } from '../../class/Routine';
import { Loader } from '../Loader/Loader';
function RoutineComponent({ routineUri }) {
    const url = process.env.REACT_APP_API_URL + routineUri.replace('/api', '');
    const [dataRoutine, setDataRoutine] = useState({});
    const [isLoadingRoutine, setLoadingRoutine] = useState(true);
    const [errorRoutine, setErrorRoutine] = useState(false);
    useEffect(() => {
        if (!url)
            return;
        setLoadingRoutine(true);
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDataRoutine(new Routine(data));
            }
            catch (err) {
                //console.error(err)
                setErrorRoutine(true);
            }
            finally {
                setLoadingRoutine(false);
            }
        }
        fetchData();
    }, [url]);
    //console.info(dataRoutine)
    // @ts-ignore
    const routine = dataRoutine;
    //console.info(routine)
    return (_jsx(_Fragment, { children: isLoadingRoutine ? (_jsx("div", { className: "d-flex justify-content-center", children: _jsx(Loader, {}) })) : (_jsx("div", { className: "routine", children: _jsx(Link, { to: `/routines/${routine.id}`, children: _jsxs("div", { className: "routine-content", children: [_jsx("p", { children: routine.title }), _jsx("i", { className: "fa-light fa-ellipsis", role: "button" })] }) }, `routine-${routine.id}`) })) }));
}
export default RoutineComponent;
