import s from '../doados/doados.module.scss'

export default function Doados () {
    return (
        <section className={s.doados}>
            <h2>Livros Doados</h2>
            <div>
                <section>
                    <img src="" alt="livro - O Protagonista"/>
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </div>
        </section>
    )
}