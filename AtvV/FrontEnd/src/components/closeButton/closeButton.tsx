import { faBackward, faCircleXmark, faLeftLong, faLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './closeButton.css';
import { useNavigate } from 'react-router-dom';

export default function CloseButton() {
    const navigate = useNavigate();

    const closeForm = () => {
        navigate(-1);
    }
    return (
        <FontAwesomeIcon icon={faLeftLong} onClick={closeForm} className='closeButton' />
    )
}