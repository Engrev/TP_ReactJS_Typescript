import { NavLink } from 'react-router-dom'

interface LibraryExerciseInterface {
    id?: number;
    name?: string;
    primaryMuscleGroup?: string;
    image?: string;
    isLoading?: boolean;
}

function LoadingPlaceholder() {
    return (
        <p className="placeholder-glow">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-12"></span>
            <span className="placeholder col-12"></span>
        </p>
    );
}

/**
 * Renders a library exercise component which can display a loading placeholder or a navigable exercise link.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.id - The unique identifier for the exercise.
 * @param {string} props.name - The name of the exercise.
 * @param {string} props.primaryMuscleGroup - The primary muscle group targeted by the exercise.
 * @param {string} props.image - The image filename associated with the exercise, used for the thumbnail.
 * @param {boolean} [props.isLoading=false] - Indicates whether the component should display a loading state.
 *
 * @return {JSX.Element} A JSX element representing either a loading placeholder or an exercise link.
 */
function LybraryExercise({ id, name, primaryMuscleGroup, image, isLoading = false }: LibraryExerciseInterface) {
    const imgSrc = `/build/images/thumbnails/${image?.replace('mp4', 'jpg')}`

    return (
        isLoading ? (
            <LoadingPlaceholder />
        ) : (
            <NavLink
                key={`exercise-${id}`}
                // @ts-ignore
                to={`/exercises/${id}`}
                className={({ isActive, isPending }) =>
                    isPending
                        ? 'pending nav-link'
                        : isActive
                            ? 'active nav-link'
                            : 'nav-link'
                }
            >
                <div className="exercise">
                    <img src={imgSrc} alt={name}/>
                    <div className="texts">
                        <h6>{name}</h6>
                        <p>{primaryMuscleGroup}</p>
                    </div>
                </div>
            </NavLink>
        )
    )
}

export default LybraryExercise
