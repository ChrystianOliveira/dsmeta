import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";

import NotificationButton from '../NotificationButton';
import './style.css';

function SalesCard() {

    const max = new Date()
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => { 

        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                setSales(response.data.content);
             })
    }, [minDate, maxDate]);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div className="dsmeta-box-container">
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className="dsmeta-box"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="dsmeta-box-container">
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="dsmeta-box"
                    dateFormat="dd/MM/yyyy"
                />
            </div>


            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="media992">ID</th>
                            <th className="media576">Data</th>
                            <th>Vendedor</th>
                            <th className="media992">Visitas</th>
                            <th className="media992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                            <tr key={sale.id}>
                                    <td className="media992">{sale.id}</td>
                                <td className="media576">{new Date(sale.date).toLocaleDateString()}</td>
                                <td>{sale.sellerName}</td>
                                    <td className="media992">{sale.visited}</td>
                                    <td className="media992">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                <td>
                                    <div className="dsmeta-btn-container">
                                        <NotificationButton  saleId={sale.id} />
                                    </div>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard;
