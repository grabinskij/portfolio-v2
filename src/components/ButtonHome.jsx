import { useNavigate } from 'react-router-dom';

function ButtonHome() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <button onClick={handleClick}>Go to Home</button>
    );
}

export default ButtonHome;
