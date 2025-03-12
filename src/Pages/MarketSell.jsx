import MainLayout from "../Layout/MainLayout.jsx";
import ActionHeader from "../Components/Organisms/ActionHeader.jsx";
import FormSell from "../Components/Organisms/FormSell.jsx";



export default function MarketSell() {

    return (

        <>

            <MainLayout
                header={<ActionHeader title="Sell" />}
            >

                <FormSell />

            </MainLayout>

        </>
    )
}