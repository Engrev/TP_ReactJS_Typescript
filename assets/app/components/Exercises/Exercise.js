import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Displays detailed information about a specific exercise.
 *
 * @param {Object} param - Parameter object.
 * @param {ExerciseInterface} param.exercise - An object representing exercise details including its name, equipment, and muscle groups.
 *
 * @return {JSX.Element} A JSX element that contains formatted information about the exercise including name, equipment, muscle groups, and an image or video.
 */
function Exercise({ exercise }) {
    return (_jsxs("div", { className: "exercise-container", children: [_jsx("div", { className: "exercise", children: _jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-12 col-lg-6", children: [_jsx("h1", { children: exercise.name }), _jsxs("p", { className: "equipment", children: [_jsx("span", { children: "Equipment :" }), " ", exercise.equipment] }), _jsxs("p", { className: "pmg", children: [_jsx("span", { children: "Primary Muscle Group :" }), ' ', exercise.primaryMuscleGroup] }), exercise.secondaryMuscleGroup && (_jsxs("p", { className: "smg", children: [_jsx("span", { children: "Secondary Muscle Group :" }), ' ', exercise.secondaryMuscleGroup] }))] }), _jsx("div", { className: "col-12 col-lg-6", children: _jsx("div", { className: exercise.image.startsWith('default')
                                    ? 'img-container img-default'
                                    : 'img-container', children: exercise.image.match(/(mp4|webm)$/) ? (_jsx("video", { loop: true, autoPlay: true, playsInline: true, width: "100%", children: _jsx("source", { src: `/build/images/${exercise.image}`, type: "video/mp4" }) })) : (_jsx("img", { src: `/build/images/${exercise.image}`, alt: exercise.name })) }) })] }) }), _jsx("div", { className: "statistics", children: _jsx("h2", { children: "Statistics" }) })] }));
}
export default Exercise;
