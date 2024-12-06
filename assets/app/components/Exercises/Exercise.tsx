interface ExerciseInterface {
    exercise: {
        id: number;
        name: string;
        equipment: string;
        primaryMuscleGroup: string;
        secondaryMuscleGroup: string | null;
        image: string;
        comment: string | null;
        createdAt: string;
        updatedAt: string;
        routines: Array<string>;
        trainings: Array<string>;
    };
}

/**
 * Displays detailed information about a specific exercise.
 *
 * @param {Object} param - Parameter object.
 * @param {ExerciseInterface} param.exercise - An object representing exercise details including its name, equipment, and muscle groups.
 *
 * @return {JSX.Element} A JSX element that contains formatted information about the exercise including name, equipment, muscle groups, and an image or video.
 */
function Exercise({ exercise }: ExerciseInterface) {
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
                <h2>Statistics</h2>
            </div>
        </div>
    )
}

export default Exercise
