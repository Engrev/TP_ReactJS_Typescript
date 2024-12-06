import './exercises.css'
import Library from '../../components/Exercises/Library'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Resource } from '../../ApiResponse'
import Exercise from '../../components/Exercises/Exercise'

const EXERCISE_URL = `${process.env.REACT_APP_API_URL}/exercises`

function LoadingPlaceholder() {
    return (
        <div className="exercise-container">
            <div className="exercise">
                <div className="row">
                    <p className="placeholder-glow mb-3">
                        <span className="placeholder col-6"></span>
                    </p>
                    <p className="placeholder-glow">
                        <span className="placeholder col-3"></span>
                    </p>
                    <p className="placeholder-glow">
                        <span className="placeholder col-3"></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

function Exercises() {
    const { exerciseId = '' } = useParams<string>()
    //console.log(exerciseId)
    let exercise

    const { isLoading, data } = useQuery({
        queryKey: ['exercise', exerciseId],
        queryFn: () => getExercise(exerciseId),
        refetchOnWindowFocus: false,
        initialData: null
    })
    //console.log('DATA', data)
    if (data !== null) {
        exercise = new Resource(data)
        //console.log('EXERCISE', exercise)
    }

    return (
        <section id="exercises">
            <div className="row">
                <div className="col-12 col-lg-9">
                    <h2 className="mb-3">Exercise</h2>

                    {isLoading ? (
                        <LoadingPlaceholder />
                    ) : exercise ? (
                        // @ts-ignore
                        <Exercise exercise={exercise.attributes} />
                    ) : (
                        <div className="exercise-container">
                            <div className="select-exercise">
                                <i className="fa-regular fa-dumbbell"></i>
                                <h6>Select Exercise</h6>
                                <p>
                                    Click on an exercise to see statistics about
                                    it.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-12 col-lg-3">
                    <Library />
                </div>
            </div>
        </section>
    )
}

function getExercise(exerciseId: string) {
    if (exerciseId.match(/^[0-9]+$/) !== null) {
        return fetch(`${EXERCISE_URL}/${exerciseId}`).then((response) => response.json())
    }
    return Promise.resolve(null)
}

export default Exercises
