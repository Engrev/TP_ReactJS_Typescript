import { NavLink } from 'react-router-dom'
import { Exercise } from '../../class/Exercise'
import { ChangeEvent } from 'react'

interface LibraryProps {
    exercises: Exercise[]
}

function Library({ exercises }: LibraryProps) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {}

    return (
        <div className="library-container">
            <div className="library">
                <div className="library-form">
                    <h3>Library</h3>
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
                    {exercises.map((exercise) => (
                        <NavLink
                            key={`exercise-${exercise.id}`}
                            // @ts-ignore
                            to={`/exercises/${exercise.id}`}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending nav-link'
                                    : isActive
                                      ? 'active nav-link'
                                      : 'nav-link'
                            }
                        >
                            <div className="exercise">
                                <img
                                    src={`/build/images/thumbnails/${exercise.image.replace('mp4', 'jpg')}`}
                                    alt={exercise.name}
                                />
                                <div className="texts">
                                    <h6>{exercise.name}</h6>
                                    <p>{exercise.primaryMuscleGroup}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Library
