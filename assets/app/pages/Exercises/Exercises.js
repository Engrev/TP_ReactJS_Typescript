import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './exercises.css';
import Library from '../../components/Exercises/Library';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Resource } from '../../ApiResponse';
import Exercise from '../../components/Exercises/Exercise';
const EXERCISE_URL = `${process.env.REACT_APP_API_URL}/exercises`;
function LoadingPlaceholder() {
    return (_jsx("div", { className: "exercise-container", children: _jsx("div", { className: "exercise", children: _jsxs("div", { className: "row", children: [_jsx("p", { className: "placeholder-glow mb-3", children: _jsx("span", { className: "placeholder col-6" }) }), _jsx("p", { className: "placeholder-glow", children: _jsx("span", { className: "placeholder col-3" }) }), _jsx("p", { className: "placeholder-glow", children: _jsx("span", { className: "placeholder col-3" }) })] }) }) }));
}
function Exercises() {
    const { exerciseId = '' } = useParams();
    //console.log(exerciseId)
    let exercise;
    const { isLoading, data } = useQuery({
        queryKey: ['exercise', exerciseId],
        queryFn: () => getExercise(exerciseId),
        refetchOnWindowFocus: false,
        initialData: null
    });
    //console.log('DATA', data)
    if (data !== null) {
        exercise = new Resource(data);
        //console.log('EXERCISE', exercise)
    }
    return (_jsx("section", { id: "exercises", children: _jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-12 col-lg-9", children: [_jsx("h2", { className: "mb-3", children: "Exercise" }), isLoading ? (_jsx(LoadingPlaceholder, {})) : exercise ? (
                        // @ts-ignore
                        _jsx(Exercise, { exercise: exercise.attributes })) : (_jsx("div", { className: "exercise-container", children: _jsxs("div", { className: "select-exercise", children: [_jsx("i", { className: "fa-regular fa-dumbbell" }), _jsx("h6", { children: "Select Exercise" }), _jsx("p", { children: "Click on an exercise to see statistics about it." })] }) }))] }), _jsx("div", { className: "col-12 col-lg-3", children: _jsx(Library, {}) })] }) }));
}
function getExercise(exerciseId) {
    if (exerciseId.match(/^[0-9]+$/) !== null) {
        return fetch(`${EXERCISE_URL}/${exerciseId}`).then((response) => response.json());
    }
    return Promise.resolve(null);
}
export default Exercises;
