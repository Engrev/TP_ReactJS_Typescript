import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Exercise({ exercise }) {
    return (_jsxs("div", { className: "exercise-container", children: [_jsx("div", { className: "exercise", children: _jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-12 col-lg-6", children: [_jsx("h1", { children: exercise.name }), _jsxs("p", { className: "equipment", children: [_jsx("span", { children: "Equipment :" }), " ", exercise.equipment] }), _jsxs("p", { className: "pmg", children: [_jsx("span", { children: "Primary Muscle Group :" }), ' ', exercise.primaryMuscleGroup] }), exercise.secondaryMuscleGroup && (_jsxs("p", { className: "smg", children: [_jsx("span", { children: "Secondary Muscle Group :" }), ' ', exercise.secondaryMuscleGroup] }))] }), _jsx("div", { className: "col-12 col-lg-6", children: exercise.image.match(/(mp4|webm)$/) ? (_jsx("video", { loop: true, autoPlay: true, playsInline: true, className: "rounded img-fluid d-block mx-auto", children: _jsx("source", { src: `/build/images/${exercise.image}`, type: "video/mp4" }) })) : (_jsx("div", { className: "bg-white p-5 rounded", children: _jsx("img", { src: `/build/images/${exercise.image}`, alt: exercise.name, className: "img-fluid d-block mx-auto" }) })) })] }) }), _jsx("div", { className: "statistics", children: _jsx("h3", { children: "Statistics" }) })] }));
    /*return exercise instanceof ExerciseClass ? (
        <div className="exercise-container">
            <div className="exercise">
                <div className="col-12 col-lg-6">
                    <h1>{exercise.name}</h1>
                    <p className="equipment">
                        <span>Equipment :</span> {exercise.equipment}
                    </p>
                    <p className="pmg">
                        <span>Primary Muscle Group :</span>{' '}
                        {exercise.primaryMuscleGroup}
                    </p>
                    {exercise.secondaryMuscleGroup && (
                        <p className="smg">
                            <span>Secondary Muscle Group :</span>{' '}
                            {exercise.secondaryMuscleGroup}
                        </p>
                    )}
                </div>
                <div className="col-12 col-lg-6">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="statistics">
                <h3>Statistics</h3>
            </div>
        </div>
    ) : (
        <div className="exercise-container">
            <div className="select-exercise">
                <i className="fa-regular fa-dumbbell"></i>
                <h6>Select Exercise</h6>
                <p>Click on an exercise to see statistics about it.</p>
            </div>
        </div>
    )*/
}
export default Exercise;
