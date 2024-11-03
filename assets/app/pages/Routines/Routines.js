import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import ModalPortal from '../../components/Modal/ModalPortal';
import { useEffect, useState } from 'react';
import { ApiResponse } from '../../class/ApiResponse';
import { Loader } from '../../components/Loader/Loader';
import FoldersComponent from '../../components/Routines/Folders';
import './routines.css';
function Routines() {
    const [showModal, setShowModal] = useState(false);
    const url = `${process.env.REACT_APP_API_URL}/folders`;
    const [dataFolders, setDataFolders] = useState({});
    const [isLoadingFolders, setLoadingFolders] = useState(true);
    const [errorFolders, setErrorFolders] = useState(false);
    useEffect(() => {
        if (!url)
            return;
        setLoadingFolders(true);
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDataFolders(new ApiResponse(data));
            }
            catch (err) {
                //console.error(err)
                setErrorFolders(true);
            }
            finally {
                setLoadingFolders(false);
            }
        }
        fetchData();
    }, [url]);
    //console.info(dataFolders)
    // @ts-ignore
    const folders = dataFolders instanceof ApiResponse ? dataFolders.hydraMember : [];
    //console.info(folders)
    if (errorFolders) {
        return (_jsx("section", { id: "routines", children: _jsx("div", { className: "row", children: _jsxs("div", { className: "col-12", children: [_jsx("h2", { children: "Routines" }), _jsx("p", { children: "Oups il y a eu un probl\u00E8me." })] }) }) }));
    }
    return (_jsxs("section", { id: "routines", children: [_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-12 col-lg-3", children: _jsxs("div", { className: "routines-menu", children: [_jsx("h1", { children: "Routines" }), _jsxs(NavLink, { to: "/routines/new", className: ({ isActive, isPending }) => isPending
                                        ? 'pending nav-link'
                                        : isActive
                                            ? 'active nav-link'
                                            : 'nav-link', children: [_jsx("i", { className: "fa-regular fa-clipboard-list" }), _jsx("span", { children: "New Routine" })] }, "routine-new"), _jsxs("div", { className: "nav-link", onClick: () => setShowModal(true), children: [_jsx("i", { className: "fa-regular fa-folder-plus" }), _jsx("span", { children: "New Folder" })] })] }) }), _jsx("div", { className: "col-12 col-lg-9", children: _jsxs("div", { className: "list", children: [isLoadingFolders ? (_jsx("div", { className: "d-flex justify-content-center", children: _jsx(Loader, {}) })) : (_jsx(_Fragment, { children: folders.length > 0 && (_jsx(FoldersComponent, { folders: folders })) })), _jsx("p", { children: "My Routines" })] }) })] }), _jsx(ModalPortal, { modalName: "NewFolder", showModal: showModal, setShowModal: setShowModal })] }));
}
export default Routines;
