// PRIMA PAGINA DEL WALLET

import "../App.css";
import DashboardCard from "../Components/Molecules/DashboardCard.jsx";
import { Link } from "react-router-dom";
import TextSM from "../Components/Atoms/TextSM.jsx";
import Transaction from "../Components/Molecules/Transaction.jsx";
import Send from "../Components/Atoms/Send.jsx";
import Receive from "../Components/Atoms/Receive.jsx";
import IconButton from "../Components/Atoms/IconButton.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import MainHeader from "../Components/Organisms/MainHeader.jsx";




export default function WalletHome() {


     const transactions = [
          { type: 'send', amount: 1.234 },
          { type: 'received', amount: 1.234 },
          { type: 'send', amount: 1.234 },
     ]

     return (

          <>
               <MainLayout
                    header={
                         <MainHeader
                              title="Wallet"
                              subtitle={<span>Welcome, <span className="font-bold"> Name</span></span>}>
                         </MainHeader>
                    }
               >

                    <DashboardCard
                         title="1.234 USD"
                         subtitle="0.000043 BTC"
                    />

                    <div className="mx-auto w-full flex flex-col flex-wrap">
                         <div className="container mx-auto flex justify-between">
                              <TextSM className="text-primario font-bold text-lg">Last Transactions</TextSM>
                              <Link to="/wallet/movement" className="text-accento font-bold text-lg hover:underline transition-all">
                                   View All
                              </Link>
                         </div>



                         {/* APPLICAZIONE ARROW FUNCTION E .MAP */}

                         {
                              transactions.map((transaction, index) => {

                                   return (
                                        <Transaction
                                             key={index}
                                             type={transaction.type}
                                             amount={transaction.amount}
                                        />
                                   )

                              })
                         }

                    </div>

                    {/* FINE APPLICAZIONE ARROW FUNCTION E .MAP */}

                    <div className="flex justify-center gap-10 py-5">


                         <IconButton to="/wallet/send" text="Send" icon={<Send />}></IconButton>

                         <IconButton to="/wallet/receive" text="Receive" icon={<Receive />}></IconButton>

                    </div>

               </MainLayout>
          </>
     )
}
