import logotip from "../logo/S7 Logo (1).svg";
import React from "react";
import Segment from "../Segment/Segment";

export default function List ({dataBase}) {
    let arr = dataBase.map((item) => {
        let price = item.price + '';

        return (
            <li className={'card'}>
                <div className={'card__header'}>
                    <div className={'price'}>
                        {price.slice(0,2)+' '+price.slice(2,price.length)+ ' Р'}
                    </div>
                    <div className={'logotip'}>
                        <img src={logotip} alt={'Logotip'}/>
                    </div>
                </div>
                <Segment
                    segments={item.segments[0]}
                />
                <Segment
                    segments={item.segments[1]}
                />
            </li>

        )
    });
    return arr;
}