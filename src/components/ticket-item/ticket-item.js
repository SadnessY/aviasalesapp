import React, { Component } from "react";

import './ticket-item.css'
import {addMinutes, format} from "date-fns";

export default class TicketItem extends Component {
    render(){
        const stopsCount = (arr) => {
            const count = arr.length;
            if (count === 0) {
                return 'Без пересадок';
            } else if (count === 1) {
                return '1 пересадка';
            } else if (count < 5) {
                return `${count} пересадки`;
            } else {
                return `${count} пересадок`;
            }
        };
        return (
            <div className="ticketItem">
                <div className="info">
                    <span className="ticketItem__price">{this.props.ticketProps.price} Р</span>
                    <span style={{
                        // eslint-disable-next-line no-useless-concat
                        backgroundImage: "url" + "(" + `https://images.daisycon.io/airline/?width=110&height=36&color=ffffff&iata=${this.props.ticketProps.carrier}` + ")",
                        height: '36px',
                        width: '110px'
                    }} className="ticketItem__carrier"></span>
                </div>
                <div className="fullInfo">
                    <div className="routes">
                        <div className="block">
                            <span>{this.props.ticketProps.segments[0].origin} - {this.props.ticketProps.segments[0].destination}</span>
                            <span className="secondSpan">{format(this.props.ticketProps.segments[0].date, 'HH:mm')} - { format(addMinutes(this.props.ticketProps.segments[0].date, this.props.ticketProps.segments[0].duration), 'HH:mm') }</span>
                        </div>
                        <div className="block">
                            <span>{this.props.ticketProps.segments[1].origin} - {this.props.ticketProps.segments[1].destination}</span>
                            <span className="secondSpan">{format(this.props.ticketProps.segments[1].date, 'HH:mm')} - { format(addMinutes(this.props.ticketProps.segments[1].date, this.props.ticketProps.segments[1].duration), 'HH:mm') } </span>
                        </div>
                    </div>
                    <div className="inrouteTimes">
                        <div className="block">
                            <span>В ПУТИ</span>
                            <span className="secondSpan">{ Math.floor(this.props.ticketProps.segments[0].duration / 60)}ч { this.props.ticketProps.segments[0].duration - Math.floor(this.props.ticketProps.segments[0].duration / 60) * 60 }м</span>
                        </div>
                        <div className="block">
                            <span>В ПУТИ</span>
                            <span className="secondSpan">{Math.floor(this.props.ticketProps.segments[1].duration / 60)}ч { this.props.ticketProps.segments[1].duration - Math.floor(this.props.ticketProps.segments[1].duration / 60) * 60 }м</span>
                        </div>
                    </div>
                    <div className="stops">
                        <div className="block">
                            <span>{ stopsCount(this.props.ticketProps.segments[0].stops) }</span>
                            <span className="secondSpan">{this.props.ticketProps.segments[0].stops.join(", ")}</span>
                        </div>
                        <div className="block">
                            <span>{ stopsCount(this.props.ticketProps.segments[1].stops) }</span>
                            <span className="secondSpan">{this.props.ticketProps.segments[1].stops.join(", ")}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
