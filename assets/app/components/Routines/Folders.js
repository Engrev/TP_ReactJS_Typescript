import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import RoutineComponent from '../../components/Routines/Routine';
function Folders({ folders }) {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "folders-area", children: folders.map((folder) => (_jsx("div", { className: "folder", children: _jsxs("div", { className: "folder-container", children: [_jsxs("div", { className: "folder-header", children: [_jsxs("p", { children: [folder.title, " (", folder.routines.length, ")"] }), _jsx("i", { className: "fa-light fa-ellipsis", role: "button" })] }), _jsx("div", { className: "folder-routines", children: folder.routines.map((routine) => (_jsx(RoutineComponent, { routineUri: routine }, routine))) })] }) }, `folder-${folder.id}`))) }) }));
}
export default Folders;
