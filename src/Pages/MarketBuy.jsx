import MainLayout from "../Layout/MainLayout.jsx";
import ActionHeader from "../Components/Organisms/ActionHeader.jsx";
import FormBuy from "../Components/Organisms/FormBuy.jsx";


export default function MarketBuy() {

    return (

        <>

            <MainLayout
                header={<ActionHeader title="Buy" />}
            >

                <FormBuy />

            </MainLayout>

        </>
    )
}