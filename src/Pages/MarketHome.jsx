// PAGINA MENU MARKET

import MainLayout from "../Layout/MainLayout.jsx";
import MainHeader from "../Components/Organisms/MainHeader.jsx";
import DashboardCard from "../Components/Molecules/DashboardCard.jsx";
import TextSM from "../Components/Atoms/TextSM.jsx";
import IconButton from "../Components/Atoms/IconButton.jsx";
import Send from "../Components/Atoms/Send.jsx";
import Receive from "../Components/Atoms/Receive.jsx";

export default function MarketHome() {

    return (

        <>
            <MainLayout
                header={
                    <MainHeader
                        title="Market"
                        subtitle={
                            <span>Welcome, <span className="font-bold">Name</span></span>
                        }
                    />
                }
            >
                <DashboardCard
                    title="+ 1.234 USD"
                    subtitle="0.000043 BTC" />

                {/* SEZIONE MERCATO */}

                <div className="pt-2 container mx-auto w-full flex flex-col flex-wrap">
                    <img className="container max-w-2xl"
                        src="./src/assets/media/market.png" alt="market" />
                    <div className="flex justify-between font-semibold text-secondario">
                        <TextSM>24H</TextSM>
                        <TextSM>1W</TextSM>
                        <TextSM className=" bg-secondario rounded-full text-white">1M</TextSM>
                        <TextSM>3M</TextSM>
                        <TextSM>1Y</TextSM>
                        <TextSM className="font-bold">All</TextSM>
                    </div>
                </div>

                <div className="flex justify-center gap-10 py-6">
                    <IconButton to="/market/buy" text="Buy" icon={<Receive />}></IconButton>
                    <IconButton to="/market/sell" text="Sell" icon={<Send />}></IconButton>
                </div>



            </MainLayout>



        </>
    )
}