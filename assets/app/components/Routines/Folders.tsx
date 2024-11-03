import { Folder } from '../../class/Folder'
import RoutineComponent from '../../components/Routines/Routine'

interface FolderProps {
    folders: Folder[]
}

function Folders({ folders }: FolderProps) {
    return (
        <>
            <div className="folders-area">
                {folders.map((folder) => (
                    <div className="folder" key={`folder-${folder.id}`}>
                        <div className="folder-container">
                            <div className="folder-header">
                                <p>
                                    {folder.title} ({folder.routines.length})
                                </p>
                                <i
                                    className="fa-light fa-ellipsis"
                                    role="button"
                                ></i>
                            </div>
                            <div className="folder-routines">
                                {folder.routines.map((routine) => (
                                    <RoutineComponent
                                        routineUri={routine}
                                        key={routine}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Folders
