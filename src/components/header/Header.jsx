import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import s from '../header/header.module.scss'
import Inicio from '../../pages/inicio/Inicio.jsx'
import Doados from '../../pages/doados/Doados.jsx'
import Doar from '../../pages/doar/Doar.jsx'
import livrosVnW from '../../assets/logo-livrosVnW.png'
import lupa from '../../assets/lupa.png'


export default function Header () {
    return (
        <BrowserRouter>
            <header>
                <section className={s.logoHeader}>
                    <img src={livrosVnW} alt='Logo da Livros Vai na Web'/>
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav>
                    <Link className={s.link} to='/'>Início</Link>
                    <Link className={s.link} to='/doados'>Livros Doados</Link>
                    <Link className={s.link} to='/doar'>Quero Doar</Link>
                </nav>
                <section className={s.busca}>
                    <input type='search' name='' id='' placeholder='O que você procura?'></input>
                    <button>
                        <img src={lupa} alt='Uma lupa'/>
                    </button>
                </section>
            </header>
            <Routes>
                <Route path='/' element={<Inicio />}/>
                <Route path='/doados' element={<Doados />}/>
                <Route path='/doar' element={<Doar />}/>
            </Routes>
        </BrowserRouter>
    )
}