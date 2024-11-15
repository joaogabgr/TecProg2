import { Link } from "react-router-dom";
import './navigateButtons.css';

type navigateButtonsProps = {
    navigateButtonName: string;
    navigateLink: string;
    onClick?: () => void;
}

export default function NavigateButtons(props: navigateButtonsProps) {

    if (props.onClick) {
        return (
            <button onClick={props.onClick} className="navigateButton">{props.navigateButtonName}</button>
        )
    }
    
    return (
        <Link to={props.navigateLink} className="navigateButton">{props.navigateButtonName}</Link>
    )
}