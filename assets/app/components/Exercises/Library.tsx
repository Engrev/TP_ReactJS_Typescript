import { ChangeEvent } from 'react'
import { Collection } from '../../ApiResponse'
import { useQuery } from '@tanstack/react-query'
import LibraryExercise from './LibraryExercise'

const EXERCISES_URL = `${process.env.REACT_APP_API_URL}/exercises`

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
    })
    //console.log('DATA', data)
    const exercises = new Collection(data)
    //console.log('EXERCISES', exercises)

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {}

    return (
        <div className="library-container">
            <div className="library">
                <div className="library-form">
                    <h2>Library</h2>
                    <select
                        className="form-select mt-3"
                        id="select-equipment"
                        defaultValue="all_equipment"
                        onChange={handleChange}
                    >
                        <option value="all_equipment">All Equipment</option>
                        <option value="none">None</option>
                        <option value="barbell">Barbell</option>
                        <option value="dumbbell">Dumbbell</option>
                        <option value="kettlebell">Kettlebell</option>
                        <option value="machine">Machine</option>
                        <option value="plate">Plate</option>
                        <option value="resistance_band">Resistance Band</option>
                        <option value="suspension">Suspension</option>
                        <option value="other">Other</option>
                    </select>
                    <select
                        className="form-select mt-2"
                        id="select-muscles"
                        defaultValue="all_muscles"
                        onChange={handleChange}
                    >
                        <option value="all_muscles">All Muscles</option>
                        <option value="abdominals">Abdominals</option>
                        <option value="abductors">Abductors</option>
                        <option value="adductors">Adductors</option>
                        <option value="biceps">Biceps</option>
                        <option value="lower_back">Lower Back</option>
                        <option value="upper_back">Upper Back</option>
                        <option value="cardio">Cardio</option>
                        <option value="chest">Chest</option>
                        <option value="calves">Calves</option>
                        <option value="forearms">Forearms</option>
                        <option value="glutes">Glutes</option>
                        <option value="hamstrings">Hamstrings</option>
                        <option value="lats">Lats</option>
                        <option value="quadriceps">Quadriceps</option>
                        <option value="shoulders">Shoulders</option>
                        <option value="triceps">Triceps</option>
                        <option value="traps">Traps</option>
                        <option value="neck">Neck</option>
                        <option value="full_body">Full Body</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="library-exercises">
                    <p>All exercises</p>

                    {isLoading ? (
                        <LibraryExercise isLoading={true} />
                    ) : (
                        exercises.members?.map((exercise: any) => (
                            <LibraryExercise
                                key={exercise.id}
                                id={exercise.id}
                                name={exercise.name}
                                primaryMuscleGroup={exercise.primaryMuscleGroup}
                                image={exercise.image}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

function getExercises() {
    return fetch(EXERCISES_URL).then((response) => response.json())
}

export default Library
