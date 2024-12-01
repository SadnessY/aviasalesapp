import React from "react";
import './sort-filter.css'

const SortFilter = () => {
    return (
        <div className="sortFilter">
            <button className="sortFilter__btn selected">САМЫЙ ДЕШЕВЫЙ</button>
            <button className="sortFilter__btn">САМЫЙ БЫСТРЫЙ</button>
            <button className="sortFilter__btn">ОПТИМАЛЬНЫЙ</button>
        </div>
    )
}


export default SortFilter