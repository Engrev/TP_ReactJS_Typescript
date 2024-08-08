import { NavLink } from 'react-router-dom'
import { Exercise } from '../../class/Exercise'
import RequireContext = __WebpackModuleApi.RequireContext

function importAll(r: RequireContext): string[] {
    // @ts-ignore
    return r.keys().map(r)
}
const urls = importAll(
    require.context('../../img/exercises/thumbnails/', false, /\.(webp|svg)$/),
)
//console.log(urls)
const images: string[] = []
urls.forEach((url) => {
    const key: RegExpMatchArray | null = url.match(/[0-9]{1,3}-[a-z_]+/)
    if (key !== null) {
        // @ts-ignore
        images[`${key.toString()}.jpg`] = url
    } else {
        // @ts-ignore
        images['default.svg'] = url
    }
})
//console.log(images)

interface LibraryProps {
    exercises: Exercise[]
}

function Library({ exercises }: LibraryProps) {
    return (
        <div className="library-container">
            <div className="library">
                <div className="library-form">
                    <h3>Library</h3>
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
                                {exercise.image === 'default.svg' ? (
                                    <img
                                        src={
                                            images[
                                                // @ts-ignore
                                                'default.svg'
                                            ]
                                        }
                                        alt={exercise.name}
                                    />
                                ) : (
                                    <img
                                        src={
                                            images[
                                                // @ts-ignore
                                                exercise.image.replace(
                                                    'mp4',
                                                    'jpg',
                                                )
                                            ]
                                        }
                                        alt={exercise.name}
                                    />
                                )}
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
