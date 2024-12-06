import Routine from './Routine'

interface FolderInterface {
    id?: number;
    title?: string;
    routines?: Array<string>;
    isLoading?: boolean;
}

function LoadingPlaceholder() {
    return (
        <p className="placeholder-glow">
            <span className="placeholder col-12"></span>
        </p>
    );
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
function Folder({ id, title, routines, isLoading = false }: FolderInterface) {
    return (
        <div className="folder" id={`folder-${id}`}>
            <div className="folder-container">
                <div className="folder-header">
                    {isLoading ? (
                        <p className="placeholder-glow">
                            <span className="placeholder col-4"></span>
                        </p>
                    ) : (
                        <p>{title} ({routines?.length})</p>
                    )}
                    <i className="fa-light fa-ellipsis" role="button"></i>
                </div>
                <div className="folder-routines">
                    {isLoading ? (
                        <LoadingPlaceholder />
                    ) : (
                        routines?.map((routine: string) => (
                            <Routine
                                key={routine}
                                routineUri={routine}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Folder
