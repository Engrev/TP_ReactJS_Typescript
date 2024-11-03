import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function NewFolderModalContent({ onClose }) {
    //let formData: FormData
    //console.log(formData)
    const handleSubmit = (event) => {
        event.preventDefault();
        // @ts-ignore
        const form = document.getElementById('form-new-folder');
        // @ts-ignore
        const submitter = document.querySelector('#form-new-folder button[type="submit"]');
        // @ts-ignore
        formData = new FormData(form, submitter);
        //console.log(formData)
        /*const { responseData, isLoading, error } = useFetch(
            `${process.env.REACT_APP_API_URL}/folders`,
            { title: formData.get('title') },
            {
                method: 'POST',
            },
        )
        console.info(responseData)*/
    };
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
    return (_jsx("div", { className: "ReactModal_Overlay", children: _jsx("div", { className: "ReactModal_Dialog", role: "dialog", children: _jsxs("form", { action: "", method: "POST", id: "form-new-folder", className: "ReactModal_Content", onSubmit: handleSubmit, children: [_jsx("p", { children: "Create New Folder" }), _jsx("input", { type: "text", name: "title", placeholder: "Folder Title", required: true, autoComplete: "off" }), _jsxs("div", { className: "d-flex gap-3", children: [_jsx("button", { type: "button", className: "btn btn-secondary", onClick: onClose, children: "Cancel" }), _jsx("button", { type: "submit", className: "btn btn-primary", children: "Create Folder" })] })] }) }) }));
}
