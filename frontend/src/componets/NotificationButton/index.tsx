import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/icon-notification.svg';
import { BASE_URL } from '../../utils/request';
import './style.css';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(Response => {
            toast.info("SMS enviado com sucesso");
        });
}


function NotificationButton({saleId} : Props) {
    return (
        <div className="dsmeta-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default NotificationButton;