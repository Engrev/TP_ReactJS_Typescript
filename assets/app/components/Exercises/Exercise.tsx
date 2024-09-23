import { Exercise as ExerciseClass } from '../../class/Exercise'

interface ExerciseProps {
    exercise: ExerciseClass
}

function Exercise({ exercise }: ExerciseProps) {
    return (
        <div className="exercise-container">
            <div className="exercise">
                <div className="row">
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
                        <div
                            className={
                                exercise.image.startsWith('default')
                                    ? 'img-container img-default'
                                    : 'img-container'
                            }
                        >
                            {exercise.image.match(/(mp4|webm)$/) ? (
                                <video loop autoPlay playsInline width="100%">
                                    {/*<source
                                        src="https://pump-app.s3.eu-west-2.amazonaws.com/exercise-assets/08571201-Wheel-Rollout_Waist.webm"
                                        type="video/webm"
                                    />*/}
                                    <source
                                        src={`/build/images/${exercise.image}`}
                                        type="video/mp4"
                                    />
                                </video>
                            ) : (
                                <img
                                    src={`/build/images/${exercise.image}`}
                                    alt={exercise.name}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistics">
                <h3>Statistics</h3>
            </div>
        </div>
    )
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

export default Exercise
