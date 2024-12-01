import React from "react";
import TicketItem from "../ticket-item/ticket-item";
import './ticket-list.css'

const TicketList = ({ tickets }) => {
    const items = tickets.map((ticket) => {
        return (<TicketItem key={ticket.id} ticketProps={ticket} />)
    })
    return (
        <div className="ticketList">
            {items}
            <button className='showMoreBtn'>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
        </div>
    )
}

export default TicketList