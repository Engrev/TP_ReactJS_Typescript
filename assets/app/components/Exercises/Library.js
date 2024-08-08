import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
function importAll(r) {
    // @ts-ignore
    return r.keys().map(r);
}
const urls = importAll(require.context('../../img/exercises/thumbnails/', false, /\.(webp|svg)$/));
//console.log(urls)
const images = [];
urls.forEach((url) => {
    const key = url.match(/[0-9]{1,3}-[a-z_]+/);
    if (key !== null) {
        // @ts-ignore
        images[`${key.toString()}.jpg`] = url;
    }
    else {
        // @ts-ignore
        images['default.svg'] = url;
    }
});
function Library({ exercises }) {
    return (_jsx("div", { className: "library-container", children: _jsxs("div", { className: "library", children: [_jsx("div", { className: "library-form", children: _jsx("h3", { children: "Library" }) }), _jsxs("div", { className: "library-exercises", children: [_jsx("p", { children: "All exercises" }), exercises.map((exercise) => (_jsx(NavLink, { 
                            // @ts-ignore
                            to: `/exercises/${exercise.id}`, className: ({ isActive, isPending }) => isPending
                                ? 'pending nav-link'
                                : isActive
                                    ? 'active nav-link'
                                    : 'nav-link', children: _jsxs("div", { className: "exercise", children: [exercise.image === 'default.svg' ? (_jsx("img", { src: images[
                                        // @ts-ignore
                                        'default.svg'], alt: exercise.name })) : (_jsx("img", { src: images[
                                        // @ts-ignore
                                        exercise.image.replace('mp4', 'jpg')], alt: exercise.name })), _jsxs("div", { className: "texts", children: [_jsx("h6", { children: exercise.name }), _jsx("p", { children: exercise.primaryMuscleGroup })] })] }) }, `exercise-${exercise.id}`)))] })] }) }));
}
export default Library;
