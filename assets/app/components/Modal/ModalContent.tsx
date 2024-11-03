export function NewFolderModalContent({ onClose }: any) {
    //let formData: FormData
    //console.log(formData)
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()

        // @ts-ignore
        const form: HTMLElement = document.getElementById('form-new-folder')
        // @ts-ignore
        const submitter: HTMLButtonElement = document.querySelector(
            '#form-new-folder button[type="submit"]',
        )
        // @ts-ignore
        formData = new FormData(form, submitter)
        //console.log(formData)

        /*const { responseData, isLoading, error } = useFetch(
            `${process.env.REACT_APP_API_URL}/folders`,
            { title: formData.get('title') },
            {
                method: 'POST',
            },
        )
        console.info(responseData)*/
    }

    /*const url = `${process.env.REACT_APP_API_URL}/folders`
    const [dataExercises, setDataExercises] = useState({})
    const [isLoadingExercises, setLoadingExercises] = useState(true)
    const [errorExercises, setErrorExercises] = useState(false)
    useEffect(() => {
        if (!url) return
        setLoadingExercises(true)
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setDataExercises(new ApiResponse(data))
            } catch (err) {
                //console.error(err)
                setErrorExercises(true)
            } finally {
                setLoadingExercises(false)
            }
        }
        fetchData()
    }, [formData])*/
    //console.info(dataExercises)

    return (
        <div className="ReactModal_Overlay">
            <div className="ReactModal_Dialog" role="dialog">
                <form
                    action=""
                    method="POST"
                    id="form-new-folder"
                    className="ReactModal_Content"
                    onSubmit={handleSubmit}
                >
                    <p>Create New Folder</p>
                    <input
                        type="text"
                        name="title"
                        placeholder="Folder Title"
                        required={true}
                        autoComplete="off"
                    />
                    <div className="d-flex gap-3">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Create Folder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
