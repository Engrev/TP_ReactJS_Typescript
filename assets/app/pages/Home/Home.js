import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './home.css';
function Home() {
    /*const {
        data: responseData,
        isLoading,
        error,
    } = useFetch(`${process.env.REACT_APP_API_URL}/trainings`)
    console.info(responseData)
    // @ts-ignore
    const trainings: Training[] =
        responseData instanceof ApiResponse ? responseData.hydraMember : []
    console.info(trainings)

    if (error) {
        return (
            <section id="home">
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <h1>Home</h1>

                        <p>Oups il y a eu un problème.</p>
                    </div>
                </div>
            </section>
        )
    }*/
    return (_jsx("section", { id: "home", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-12 col-lg-10", children: _jsx("h1", { children: "Home" }) }), _jsx("div", { className: "col-12 col-lg-2" })] }) }));
}
export default Home;
