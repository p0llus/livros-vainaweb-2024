import s from '../inicio/inicio.module.scss'

export default function Inicio () {
    return (
        <main>
            <section className={s.topSection}>
                <h2>
                    VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO
                </h2>
                {/* <img src={} alt=""/> */}
            </section>
            <section className={s.bottomSection}>
                <h2>
                    Por que devo doar?
                </h2>
                <div>
                    <figure>
                        {/* <img src={} alt=""/> */}
                        <figcaption>

                        </figcaption>
                    </figure>
                    <figure>
                        {/* <img src={} alt=""/> */}
                        <figcaption>

                        </figcaption>
                    </figure>
                    <figure>
                        {/* <img src={} alt=""/> */}
                        <figcaption>

                        </figcaption>
                    </figure>
                    <figure>
                        {/* <img src={} alt=""/> */}
                        <figcaption>

                        </figcaption>
                    </figure>
                </div>
            </section>
        </main>
    )
}