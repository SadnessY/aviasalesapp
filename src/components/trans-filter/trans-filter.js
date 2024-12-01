import React from "react";
import "./trans-filter.css"

function TransFilter() {
    return (
        <div className="transFilter">
            <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
            <label className="check">
                <input className="check__input" type="checkbox"/>
                <span className="check__box"></span>
                Все
            </label>
            <label className="check">
                <input className="check__input" type="checkbox"/>
                <span className="check__box"></span>
                Без пересадок
            </label>
            <label className="check">
                <input className="check__input" type="checkbox"/>
                <span className="check__box"></span>
                1 пересадка
            </label>
            <label className="check">
                <input className="check__input" type="checkbox"/>
                <span className="check__box"></span>
                2 пересадки
            </label>
            <label className="check">
                <input className="check__input" type="checkbox"/>
                <span className="check__box"></span>
                3 пересадки
            </label>
        </div>
    )
}

export default TransFilter