import s from "./Paginator.module.css";
import React, {useState} from "react";

let Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let firstPageOfPortion = (portionNumber - 1) * portionSize + 1;
    let lastPageOfPortion = portionNumber * portionSize;

    let prevButtonAction = () => {
        onPageChanged(firstPageOfPortion - portionSize);
        setPortionNumber(portionNumber - 1);
    }
    let nextButtonAction = () => {
        onPageChanged(firstPageOfPortion + portionSize);
        setPortionNumber(portionNumber + 1);
    }

    return (
        <div className={s.paginatorList}>
            {portionNumber > 1 &&
                <button className={s.prevButton} onClick={prevButtonAction}>Prev</button>}
            {pages
                .filter(p => p >= firstPageOfPortion && p <= lastPageOfPortion)
                .map((p) => {
                return <span className={currentPage === p && s.selectedPage} onClick={(e) => {
                    onPageChanged(p)
                }}>{p}</span>
            })}
            {portionNumber < portionCount &&
            <button className={s.nextButton} onClick={nextButtonAction}>Next</button>}
        </div>
    )
}

export default Paginator;