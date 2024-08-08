import { useFetch } from '../../utils/hooks'
import { ApiResponse } from '../../class/ApiResponse'
import TrainingCard from '../../components/Home/TrainingCard'
import { Training } from '../../class/Training'
import { Loader } from '../../components/Loader/Loader'
import './home.css'

function Home() {
    const { data, isLoading, error } = useFetch(
        `${process.env.REACT_APP_API_URL}/trainings`,
    )
    console.info(data)
    // @ts-ignore
    const trainings: Training[] =
        data instanceof ApiResponse ? data.hydraMember : []
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
    }

    return (
        <section id="home">
            <div className="row">
                <div className="col-12 col-lg-10">
                    <h1>Home</h1>

                    {isLoading ? (
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
                    )}
                </div>
                <div className="col-12 col-lg-2"></div>
            </div>
        </section>
    )
}

export default Home
