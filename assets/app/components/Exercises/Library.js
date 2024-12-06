import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Collection } from '../../ApiResponse';
import { useQuery } from '@tanstack/react-query';
import LibraryExercise from './LibraryExercise';
const EXERCISES_URL = `${process.env.REACT_APP_API_URL}/exercises`;
/**
 * The `Library` component fetches and displays a collection of exercises.
 * It provides filtering options by equipment type and muscle group.
 *
 * It uses the `useQuery` hook to fetch exercise data and renders a list of exercises,
 * along with loading indicators.
 *
 * @return {JSX.Element} A React component that displays a library of exercises with filtering options.
 */
function Library() {
    const { isLoading, data } = useQuery({
        queryKey: ['exercises'],
        queryFn: getExercises,
        refetchOnWindowFocus: false,
        initialData: new Collection([]),
    });
    //console.log('DATA', data)
    const exercises = new Collection(data);
    //console.log('EXERCISES', exercises)
    const handleChange = (e) => { };
    return (_jsx("div", { className: "library-container", children: _jsxs("div", { className: "library", children: [_jsxs("div", { className: "library-form", children: [_jsx("h2", { children: "Library" }), _jsxs("select", { className: "form-select mt-3", id: "select-equipment", defaultValue: "all_equipment", onChange: handleChange, children: [_jsx("option", { value: "all_equipment", children: "All Equipment" }), _jsx("option", { value: "none", children: "None" }), _jsx("option", { value: "barbell", children: "Barbell" }), _jsx("option", { value: "dumbbell", children: "Dumbbell" }), _jsx("option", { value: "kettlebell", children: "Kettlebell" }), _jsx("option", { value: "machine", children: "Machine" }), _jsx("option", { value: "plate", children: "Plate" }), _jsx("option", { value: "resistance_band", children: "Resistance Band" }), _jsx("option", { value: "suspension", children: "Suspension" }), _jsx("option", { value: "other", children: "Other" })] }), _jsxs("select", { className: "form-select mt-2", id: "select-muscles", defaultValue: "all_muscles", onChange: handleChange, children: [_jsx("option", { value: "all_muscles", children: "All Muscles" }), _jsx("option", { value: "abdominals", children: "Abdominals" }), _jsx("option", { value: "abductors", children: "Abductors" }), _jsx("option", { value: "adductors", children: "Adductors" }), _jsx("option", { value: "biceps", children: "Biceps" }), _jsx("option", { value: "lower_back", children: "Lower Back" }), _jsx("option", { value: "upper_back", children: "Upper Back" }), _jsx("option", { value: "cardio", children: "Cardio" }), _jsx("option", { value: "chest", children: "Chest" }), _jsx("option", { value: "calves", children: "Calves" }), _jsx("option", { value: "forearms", children: "Forearms" }), _jsx("option", { value: "glutes", children: "Glutes" }), _jsx("option", { value: "hamstrings", children: "Hamstrings" }), _jsx("option", { value: "lats", children: "Lats" }), _jsx("option", { value: "quadriceps", children: "Quadriceps" }), _jsx("option", { value: "shoulders", children: "Shoulders" }), _jsx("option", { value: "triceps", children: "Triceps" }), _jsx("option", { value: "traps", children: "Traps" }), _jsx("option", { value: "neck", children: "Neck" }), _jsx("option", { value: "full_body", children: "Full Body" }), _jsx("option", { value: "other", children: "Other" })] })] }), _jsxs("div", { className: "library-exercises", children: [_jsx("p", { children: "All exercises" }), isLoading ? (_jsx(LibraryExercise, { isLoading: true })) : (exercises.members?.map((exercise) => (_jsx(LibraryExercise, { id: exercise.id, name: exercise.name, primaryMuscleGroup: exercise.primaryMuscleGroup, image: exercise.image }, exercise.id))))] })] }) }));
}
function getExercises() {
    return fetch(EXERCISES_URL).then((response) => response.json());
}
export default Library;
