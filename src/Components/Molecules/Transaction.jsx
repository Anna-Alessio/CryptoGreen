// TRANSAZIONI GENERALIZZATE CON IF O ELSE

import "../../App.css";
import ArrowUp from "../Atoms/ArrowUp.jsx";
import ArrowDown from "../Atoms/ArrowDown.jsx";
import TextSM from "../Atoms/TextSM.jsx";


export default function Transaction({ type, amount }) {
    let arrowIcon;
    let prefix;

    if (type === 'send') {
        arrowIcon = <ArrowUp className="text-red-500 fa-2x" />;
        prefix = '-';
    } else {
        arrowIcon = <ArrowDown className="text-accento fa-2x" />;
        prefix = '+';
    }

    return (

        <>

            <div className="flex justify-between items-center">
                <div className="flex items-center my-2">
                    {arrowIcon}
                    <div className="ml-2">
                        <TextSM className="text-primary font-semibold capitalize">{type}</TextSM>
                        <p className="text-secondario text-sm">01/01/2023</p>
                    </div>
                </div>
                <div>
                    <TextSM className="text-primary font-semibold">{prefix} {amount} USD</TextSM>
                    <p className="text-secondario text-sm">0.0000123 BTC</p>
                </div>
            </div>

        </>
    )
}