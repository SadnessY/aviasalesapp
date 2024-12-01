import React from "react";
import './ticket-item.css'

const TicketItem = ({ ticketProps }) => {
    return (
        <div className="ticketItem">
            <div className="info">
                <span className="ticketItem__price">{ticketProps.price} Р</span>
                <span className="ticketItem__carrier">{ticketProps.carrier}</span>
            </div>
            <div className="fullInfo">
                <div className="routes">
                    <div className="block">
                        <span>{ticketProps.segments[0].origin} - {ticketProps.segments[0].destination}</span>
                        <span className="secondSpan">{ticketProps.segments[0].date}</span>
                    </div>
                    <div className="block">
                        <span>{ticketProps.segments[1].origin} - {ticketProps.segments[1].destination}</span>
                        <span className="secondSpan">{ticketProps.segments[1].date}</span>
                    </div>
                </div>
                <div className="inrouteTimes">
                    <div className="block">
                        <span>В ПУТИ</span>
                        <span className="secondSpan">{ticketProps.segments[0].duration}</span>
                    </div>
                    <div className="block">
                        <span>В ПУТИ</span>
                        <span className="secondSpan">{ticketProps.segments[1].duration}</span>
                    </div>
                </div>
                <div className="stops">
                    <div className="block">
                        <span>{ticketProps.segments[0].stops.length} {ticketProps.segments[0].stops.length > 1 ? "ПЕРЕСАДКИ" : ticketProps.segments[0].stops.length < 1 ? "БЕЗ ПЕРЕСАДОК" : "ПЕРЕСАДКА"}</span>
                        <span className="secondSpan">{ticketProps.segments[0].stops.join(", ")}</span>
                    </div>
                    <div className="block">
                        <span>{ticketProps.segments[1].stops.length} {ticketProps.segments[1].stops.length > 1 ? "ПЕРЕСАДКИ" : ticketProps.segments[1].stops.length < 1 ? "БЕЗ ПЕРЕСАДОК" : "ПЕРЕСАДКА"}</span>
                        <span className="secondSpan">{ticketProps.segments[1].stops.join(", ")}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketItem