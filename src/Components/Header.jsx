import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login / Criar</Link>
            </nav>
        </header>
    )
}