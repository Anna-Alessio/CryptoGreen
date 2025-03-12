// LAYOUT DELLA PAGINA WALLET INTESTAZIONE + MENU CON SCRITTE

import Navbar from "../Components/Organisms/Navbar.jsx";

export default function MainLayout({ children, header }) {
    return (

        <>

            <div className="min-h-screen flex flex-col bg-bianco justify-between p-6">

                {header}

                <div className="grow">
                    {children}
                </div>
                <Navbar />
            </div>

        </>
    )
}
