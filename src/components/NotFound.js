import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <header className="bg-dark text-white p-5 hero-container">
            <h1 className="hero-text">404: The page that you're looking for does not exist!</h1>
            <Link to="/">
            Go Home
            </Link>
        </header>        
    )
}

export default NotFound;