import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
function LoadingPlaceholder() {
    return (_jsxs("p", { className: "placeholder-glow", children: [_jsx("span", { className: "placeholder col-12" }), _jsx("span", { className: "placeholder col-12" }), _jsx("span", { className: "placeholder col-12" })] }));
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
function LybraryExercise({ id, name, primaryMuscleGroup, image, isLoading = false }) {
    const imgSrc = `/build/images/thumbnails/${image?.replace('mp4', 'jpg')}`;
    return (isLoading ? (_jsx(LoadingPlaceholder, {})) : (_jsx(NavLink, { 
        // @ts-ignore
        to: `/exercises/${id}`, className: ({ isActive, isPending }) => isPending
            ? 'pending nav-link'
            : isActive
                ? 'active nav-link'
                : 'nav-link', children: _jsxs("div", { className: "exercise", children: [_jsx("img", { src: imgSrc, alt: name }), _jsxs("div", { className: "texts", children: [_jsx("h6", { children: name }), _jsx("p", { children: primaryMuscleGroup })] })] }) }, `exercise-${id}`)));
}
export default LybraryExercise;
