import { NavLink } from 'react-router-dom'
import './routines.css'
import { Collection, Resource } from '../../ApiResponse'
import Folder from '../../components/Routines/Folder'
import { useQuery } from '@tanstack/react-query'
import NewFolderModal from '../../components/Routines/NewFolderModal'
import { useToggle } from '../../utils/hooks'

const FOLDERS_URL = `${process.env.REACT_APP_API_URL}/folders`

function Routines() {
    const { isLoading, data } = useQuery({
        queryKey: ['folders'],
        queryFn: getFolders,
        refetchOnWindowFocus: false,
        initialData: new Collection([]),
    })
    //console.log('DATA', data)
    const folders = new Collection(data)
    //console.log('FOLDERS', folders)
    const [isCreation, toggleCreation] = useToggle(false)

    const handleSave = (data: any) => {
        const resourceData = new Resource(data)
        folders?.members?.push(resourceData)
        // @ts-ignore
        toggleCreation()
    }

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
                            role="button"
                            // @ts-ignore
                            onClick={toggleCreation}
                        >
                            <i className="fa-regular fa-folder-plus"></i>
                            <span>New Folder</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-9">
                    <div className="list">
                        {isLoading ? (
                            <Folder isLoading={true} />
                        ) : (
                            <div className="folders-area">
                                {folders.members?.map((folder: any) => (
                                    <Folder
                                        key={folder.id}
                                        id={folder.id}
                                        title={folder.title}
                                        routines={folder.routines}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isCreation && (
                <NewFolderModal
                    // @ts-ignore
                    onClose={toggleCreation}
                    onSave={handleSave}
                />
            )}
        </section>
    )
}

function getFolders() {
    return fetch(FOLDERS_URL).then((response) => response.json())
}

export default Routines
