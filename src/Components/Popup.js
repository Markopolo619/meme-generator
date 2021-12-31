import './Popup.css';
import {FaTimes} from 'react-icons/fa'

const Popup = (props, {ClosePopup}) => {


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" ><FaTimes onClick={() => {console.log("Hello world"); props.setTrigger(!ClosePopup); console.log(`Logging ${ClosePopup}`)}}/></button>
                { props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
