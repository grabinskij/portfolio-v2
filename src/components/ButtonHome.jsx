import { useNavigate } from 'react-router-dom';

function ButtonHome() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <button onClick={handleClick} className="inline-block px-5 py-2 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-700 mb-12 lg:mb-0">Go to Home</button>
    );
}

export default ButtonHome;
