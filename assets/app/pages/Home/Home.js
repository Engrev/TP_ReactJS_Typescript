import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFetch } from '../../utils/hooks';
import { ApiResponse } from '../../class/ApiResponse';
import TrainingCard from '../../components/Home/TrainingCard';
import { Loader } from '../../components/Loader/Loader';
import './home.css';
function Home() {
    const { data, isLoading, error } = useFetch(`${process.env.REACT_APP_API_URL}/trainings`);
    console.info(data);
    // @ts-ignore
    const trainings = data instanceof ApiResponse ? data.hydraMember : [];
    console.info(trainings);
    if (error) {
        return (_jsx("section", { id: "home", children: _jsx("div", { className: "row", children: _jsxs("div", { className: "col-12 col-lg-10", children: [_jsx("h1", { children: "Home" }), _jsx("p", { children: "Oups il y a eu un probl\u00E8me." })] }) }) }));
    }
    return (_jsx("section", { id: "home", children: _jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-12 col-lg-10", children: [_jsx("h1", { children: "Home" }), isLoading ? (_jsx("div", { className: "d-flex justify-content-center", children: _jsx(Loader, {}) })) : (trainings.map((training) => (_jsx(TrainingCard, { exercises: training.exercises }, `training-${training.id}`))))] }), _jsx("div", { className: "col-12 col-lg-2" })] }) }));
}
export default Home;
