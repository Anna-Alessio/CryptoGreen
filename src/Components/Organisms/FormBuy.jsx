// FORM DELLA PAGINA BUY

import FormInput from "../Molecules/FormInput";
import Button from "../Atoms/Button";

export default function FormBuy() {
    return (

        <>

            <form className="flex flex-col gap-8 h-full items-center py-10">
                <FormInput
                    id="amount"
                    text="Amount in USD"
                    type="number"
                    required={true}
                    placeholder="Insert amount in USD"
                />
                <FormInput
                    id="conversion"
                    text="Amount in BTC"
                    type="number"
                    required={false}
                    placeholder="Amount in BTC"
                />
                <div className="mt-16">
                    <Button to="/market">Buy</Button>
                </div>
            </form>
        </>
    )
}