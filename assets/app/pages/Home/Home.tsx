import './home.css'

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

    return (
        <section id="home">
            <div className="row">
                <div className="col-12 col-lg-10">
                    <h1>Home</h1>

                    {/*{isLoading ? (
                        <div className="d-flex justify-content-center">
                            <Loader />
                        </div>
                    ) : (
                        trainings.map((training) => (
                            <TrainingCard
                                key={`training-${training.id}`}
                                exercises={training.exercises}
                            />
                        ))
                    )}*/}
                </div>
                <div className="col-12 col-lg-2"></div>
            </div>
        </section>
    )
}

export default Home
