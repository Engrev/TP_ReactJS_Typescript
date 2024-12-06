import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*interface TrainingCardProps {
    exercises: Array<Exercise | object>
}*/
function TrainingCard( /*{ exercises }: TrainingCardProps*/) {
    return (_jsx("div", { className: "card", children: _jsxs("div", { className: "card-body", children: [_jsx("h5", { className: "card-title", children: "Card title" }), _jsx("h6", { className: "card-subtitle mb-2 text-body-secondary", children: "Card subtitle" }), _jsx("p", { className: "card-text", children: "Some quick example text to build on the card title and make up the bulk of the card's content." }), _jsx("a", { href: "#", className: "card-link", children: "Card link" }), _jsx("a", { href: "#", className: "card-link", children: "Another link" })] }) }));
}
export default TrainingCard;
