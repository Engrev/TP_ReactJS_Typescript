import { NavLink } from 'react-router-dom'
import ModalPortal from '../../components/Modal/ModalPortal'
import { useEffect, useState } from 'react'
import { ApiResponse } from '../../class/ApiResponse'
import { Folder } from '../../class/Folder'
import { Loader } from '../../components/Loader/Loader'
import FoldersComponent from '../../components/Routines/Folders'
import './routines.css'

function Routines() {
    const [showModal, setShowModal] = useState(false)
    const url = `${process.env.REACT_APP_API_URL}/folders`
    const [dataFolders, setDataFolders] = useState({})
    const [isLoadingFolders, setLoadingFolders] = useState(true)
    const [errorFolders, setErrorFolders] = useState(false)
    useEffect(() => {
        if (!url) return
        setLoadingFolders(true)
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setDataFolders(new ApiResponse(data))
            } catch (err) {
                //console.error(err)
                setErrorFolders(true)
            } finally {
                setLoadingFolders(false)
            }
        }
        fetchData()
    }, [url])
    //console.info(dataFolders)
    // @ts-ignore
    const folders: Folder[] =
        dataFolders instanceof ApiResponse ? dataFolders.hydraMember : []
    //console.info(folders)

    if (errorFolders) {
        return (
            <section id="routines">
                <div className="row">
                    <div className="col-12">
                        <h2>Routines</h2>

                        <p>Oups il y a eu un problème.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="routines">
            <div className="row">
                <div className="col-12 col-lg-3">
                    <div className="routines-menu">
                        <h1>Routines</h1>
                        <NavLink
                            key="routine-new"
                            to="/routines/new"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? 'pending nav-link'
                                    : isActive
                                      ? 'active nav-link'
                                      : 'nav-link'
                            }
                        >
                            <i className="fa-regular fa-clipboard-list"></i>
                            <span>New Routine</span>
                        </NavLink>
                        <div
                            className="nav-link"
                            onClick={() => setShowModal(true)}
                        >
                            <i className="fa-regular fa-folder-plus"></i>
                            <span>New Folder</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-9">
                    <div className="list">
                        {isLoadingFolders ? (
                            <div className="d-flex justify-content-center">
                                <Loader />
                            </div>
                        ) : (
                            <>
                                {folders.length > 0 && (
                                    <FoldersComponent folders={folders} />
                                )}
                            </>
                        )}
                        <p>My Routines</p>
                    </div>
                </div>
            </div>

            <ModalPortal
                modalName="NewFolder"
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </section>
    )
}

export default Routines
