import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Routine } from '../../class/Routine'
import { Loader } from '../Loader/Loader'
import FoldersComponent from './Folders'

interface RoutineProps {
    routineUri: string
}

function RoutineComponent({ routineUri }: RoutineProps) {
    const url = process.env.REACT_APP_API_URL + routineUri.replace('/api', '')
    const [dataRoutine, setDataRoutine] = useState({})
    const [isLoadingRoutine, setLoadingRoutine] = useState(true)
    const [errorRoutine, setErrorRoutine] = useState(false)
    useEffect(() => {
        if (!url) return
        setLoadingRoutine(true)
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setDataRoutine(new Routine(data))
            } catch (err) {
                //console.error(err)
                setErrorRoutine(true)
            } finally {
                setLoadingRoutine(false)
            }
        }
        fetchData()
    }, [url])
    //console.info(dataRoutine)
    // @ts-ignore
    const routine: Routine = dataRoutine
    //console.info(routine)

    return (
        <>
            {isLoadingRoutine ? (
                <div className="d-flex justify-content-center">
                    <Loader />
                </div>
            ) : (
                <div className="routine">
                    <Link
                        to={`/routines/${routine.id}`}
                        key={`routine-${routine.id}`}
                    >
                        <div className="routine-content">
                            <p>{routine.title}</p>
                            <i
                                className="fa-light fa-ellipsis"
                                role="button"
                            ></i>
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}

export default RoutineComponent
