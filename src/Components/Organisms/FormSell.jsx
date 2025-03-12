// FORM PAGINA SELL

import FormInput from "../Molecules/FormInput";
import Button from "../Atoms/Button";



export default function FormSell() {
    return (

        <>

            <form className="flex flex-col gap-8 h-full items-center py-10">
                <FormInput
                    id="amount"
                    text="Amount in BTC"
                    type="number"
                    required={true}
                    placeholder="Insert amount in BTC"
                />
                <FormInput
                    id="conversion"
                    text="Conversion in USD"
                    type="number"
                    required={false}
                    placeholder="Amount in USD"
                />
                <div className="mt-16">
                    <Button to="/market">Sell</Button>
                </div>
            </form>

        </>
    )
}
