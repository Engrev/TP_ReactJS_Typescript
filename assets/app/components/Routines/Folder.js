import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Routine from './Routine';
function LoadingPlaceholder() {
    return (_jsx("p", { className: "placeholder-glow", children: _jsx("span", { className: "placeholder col-12" }) }));
}
/**
 * Represents a Folder component that displays a list of routines.
 *
 * @param {Object} FolderInterface - The properties for the Folder component.
 * @param {string} FolderInterface.id - The unique identifier for the folder.
 * @param {string} FolderInterface.title - The title of the folder.
 * @param {Array<string>} FolderInterface.routines - The list of routines to be displayed in the folder.
 * @param {boolean} [FolderInterface.isLoading=false] - Indicates whether the folder is in a loading state.
 *
 * @return {JSX.Element} The rendered Folder component.
 */
function Folder({ id, title, routines, isLoading = false }) {
    return (_jsx("div", { className: "folder", id: `folder-${id}`, children: _jsxs("div", { className: "folder-container", children: [_jsxs("div", { className: "folder-header", children: [isLoading ? (_jsx("p", { className: "placeholder-glow", children: _jsx("span", { className: "placeholder col-4" }) })) : (_jsxs("p", { children: [title, " (", routines?.length, ")"] })), _jsx("i", { className: "fa-light fa-ellipsis", role: "button" })] }), _jsx("div", { className: "folder-routines", children: isLoading ? (_jsx(LoadingPlaceholder, {})) : (routines?.map((routine) => (_jsx(Routine, { routineUri: routine }, routine)))) })] }) }));
}
export default Folder;
