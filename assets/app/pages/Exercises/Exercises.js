import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiResponse } from '../../class/ApiResponse';
import { Exercise } from '../../class/Exercise';
import { Loader } from '../../components/Loader/Loader';
import ExerciseComponent from '../../components/Exercises/Exercise';
import LibraryComponent from '../../components/Exercises/Library';
import './exercises.css';
function Exercises() {
    /*** ALL EXERCISES IN LIBRARY ***/
    const url = `${process.env.REACT_APP_API_URL}/exercises`;
    const [dataExercises, setDataExercises] = useState({});
    const [isLoadingExercises, setLoadingExercises] = useState(true);
    const [errorExercises, setErrorExercises] = useState(false);
    useEffect(() => {
        if (!url)
            return;
        setLoadingExercises(true);
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDataExercises(new ApiResponse(data));
            }
            catch (err) {
                //console.error(err)
                setErrorExercises(true);
            }
            finally {
                setLoadingExercises(false);
            }
        }
        fetchData();
    }, [url]);
    //console.info(dataExercises)
    // @ts-ignore
    const exercises = dataExercises instanceof ApiResponse ? dataExercises.hydraMember : [];
    //console.info(exercises)
    /*** LOAD EXERCISE ON CLICK IN LIBRARY ***/
    const { exerciseId = '' } = useParams();
    //console.info(exerciseId)
    const [dataExercise, setDataExercise] = useState({});
    const [isLoadingExercise, setLoadingExercise] = useState(false);
    const [errorExercise, setErrorExercise] = useState(false);
    useEffect(() => {
        if (exerciseId.match(/^[0-9]+$/) === null) {
            setDataExercise({});
            return;
        }
        setLoadingExercise(true);
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/exercises/${exerciseId}`);
                const data = await response.json();
                setDataExercise(new Exercise(data));
            }
            catch (err) {
                //console.error(err)
                setErrorExercise(true);
            }
            finally {
                setLoadingExercise(false);
            }
        }
        fetchData();
    }, [exerciseId]);
    //console.info(dataExercise)
    // @ts-ignore
    const exercise = dataExercise;
    //console.info(exercise)
    if (errorExercises || errorExercise) {
        return (_jsx("section", { id: "exercises", children: _jsx("div", { className: "row", children: _jsxs("div", { className: "col-12 col-lg-10", children: [_jsx("h2", { children: "Exercise" }), _jsx("p", { children: "Oups il y a eu un probl\u00E8me." })] }) }) }));
    }
    return (_jsx("section", { id: "exercises", children: _jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-12 col-lg-9", children: [_jsx("h2", { children: "Exercise" }), isLoadingExercises || isLoadingExercise ? (_jsx("div", { className: "d-flex justify-content-center", children: _jsx(Loader, {}) })) : (_jsx(_Fragment, { children: Object.keys(exercise).length > 0 ? (_jsx(ExerciseComponent, { exercise: exercise })) : (_jsx("div", { className: "exercise-container", children: _jsxs("div", { className: "select-exercise", children: [_jsx("i", { className: "fa-regular fa-dumbbell" }), _jsx("h6", { children: "Select Exercise" }), _jsx("p", { children: "Click on an exercise to see statistics about it." })] }) })) }))] }), _jsx("div", { className: "col-12 col-lg-3", children: _jsx(LibraryComponent, { exercises: exercises }) })] }) }));
}
export default Exercises;
