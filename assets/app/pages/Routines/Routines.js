import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import './routines.css';
import { Collection, Resource } from '../../ApiResponse';
import Folder from '../../components/Routines/Folder';
import { useQuery } from '@tanstack/react-query';
import NewFolderModal from '../../components/Routines/NewFolderModal';
import { useToggle } from '../../utils/hooks';
const FOLDERS_URL = `${process.env.REACT_APP_API_URL}/folders`;
function Routines() {
    const { isLoading, data } = useQuery({
        queryKey: ['folders'],
        queryFn: getFolders,
        refetchOnWindowFocus: false,
        initialData: new Collection([]),
    });
    //console.log('DATA', data)
    const folders = new Collection(data);
    //console.log('FOLDERS', folders)
    const [isCreation, toggleCreation] = useToggle(false);
    const handleSave = (data) => {
        const resourceData = new Resource(data);
        folders?.members?.push(resourceData);
        // @ts-ignore
        toggleCreation();
    };
    /*if (error) {
        return (
            <section id="routines">
                <div className="row">
                    <div className="col-12">
                        <h2>Routines</h2>

                        <Alert type="danger">{error.toString()}</Alert>
                    </div>
                </div>
            </section>
        )
    }*/
    return (_jsxs("section", { id: "routines", children: [_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-12 col-lg-3", children: _jsxs("div", { className: "routines-menu", children: [_jsx("h1", { children: "Routines" }), _jsxs(NavLink, { to: "/routines/new", className: ({ isActive, isPending }) => isPending
                                        ? 'pending nav-link'
                                        : isActive
                                            ? 'active nav-link'
                                            : 'nav-link', children: [_jsx("i", { className: "fa-regular fa-clipboard-list" }), _jsx("span", { children: "New Routine" })] }, "routine-new"), _jsxs("div", { className: "nav-link", role: "button", 
                                    // @ts-ignore
                                    onClick: toggleCreation, children: [_jsx("i", { className: "fa-regular fa-folder-plus" }), _jsx("span", { children: "New Folder" })] })] }) }), _jsx("div", { className: "col-12 col-lg-9", children: _jsx("div", { className: "list", children: isLoading ? (_jsx(Folder, { isLoading: true })) : (_jsx("div", { className: "folders-area", children: folders.members?.map((folder) => (_jsx(Folder, { id: folder.id, title: folder.title, routines: folder.routines }, folder.id))) })) }) })] }), isCreation && (_jsx(NewFolderModal
            // @ts-ignore
            , { 
                // @ts-ignore
                onClose: toggleCreation, onSave: handleSave }))] }));
}
function getFolders() {
    return fetch(FOLDERS_URL).then((response) => response.json());
}
export default Routines;
