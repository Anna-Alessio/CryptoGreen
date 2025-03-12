// PAGINA DI ROTTA PER INSTRADARE LE VARIE PAGINE ATTRAVERSO "OUTLET" NON VISIBILE SUL SERVER

import { Outlet } from "react-router-dom";

export default function Root() {

    return (

        <>
            <Outlet />
        </>
    )
}