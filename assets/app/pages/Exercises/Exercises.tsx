import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiResponse } from '../../class/ApiResponse'
import { Exercise } from '../../class/Exercise'
import { Loader } from '../../components/Loader/Loader'
import ExerciseComponent from '../../components/Exercises/Exercise'
import LibraryComponent from '../../components/Exercises/Library'
import './exercises.css'

function Exercises() {
    /*** ALL EXERCISES IN LIBRARY ***/
    const url = `${process.env.REACT_APP_API_URL}/exercises`
    const [dataExercises, setDataExercises] = useState({})
    const [isLoadingExercises, setLoadingExercises] = useState(true)
    const [errorExercises, setErrorExercises] = useState(false)
    useEffect(() => {
        if (!url) return
        setLoadingExercises(true)
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setDataExercises(new ApiResponse(data))
            } catch (err) {
                //console.error(err)
                setErrorExercises(true)
            } finally {
                setLoadingExercises(false)
            }
        }
        fetchData()
    }, [url])
    //console.info(dataExercises)
    // @ts-ignore
    const exercises: Exercise[] =
        dataExercises instanceof ApiResponse ? dataExercises.hydraMember : []
    //console.info(exercises)

    /*** LOAD EXERCISE ON CLICK IN LIBRARY ***/
    const { exerciseId = '' } = useParams<string>()
    //console.info(exerciseId)
    const [dataExercise, setDataExercise] = useState({})
    const [isLoadingExercise, setLoadingExercise] = useState(false)
    const [errorExercise, setErrorExercise] = useState(false)
    useEffect(() => {
        if (exerciseId.match(/^[0-9]+$/) === null) {
            setDataExercise({})
            return
        }
        setLoadingExercise(true)
        async function fetchData() {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/exercises/${exerciseId}`,
                )
                const data = await response.json()
                setDataExercise(new Exercise(data))
            } catch (err) {
                //console.error(err)
                setErrorExercise(true)
            } finally {
                setLoadingExercise(false)
            }
        }
        fetchData()
    }, [exerciseId])
    //console.info(dataExercise)
    // @ts-ignore
    const exercise: Exercise = dataExercise
    //console.info(exercise)

    if (errorExercises || errorExercise) {
        return (
            <section id="exercises">
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <h2>Exercise</h2>

                        <p>Oups il y a eu un problème.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="exercises">
            <div className="row">
                <div className="col-12 col-lg-9">
                    <h2>Exercise</h2>

                    {isLoadingExercises || isLoadingExercise ? (
                        <div className="d-flex justify-content-center">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {Object.keys(exercise).length > 0 ? (
                                <ExerciseComponent exercise={exercise} />
                            ) : (
                                <div className="exercise-container">
                                    <div className="select-exercise">
                                        <i className="fa-regular fa-dumbbell"></i>
                                        <h6>Select Exercise</h6>
                                        <p>
                                            Click on an exercise to see
                                            statistics about it.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div className="col-12 col-lg-3">
                    <LibraryComponent exercises={exercises} />
                </div>
            </div>
        </section>
    )
}

export default Exercises
