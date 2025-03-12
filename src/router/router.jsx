// CREATA LA CARTELLA ROUTER CON IL COLLEGAMENTO ALLA PAGINA PRINCIPALE ATTRAVERSO createBrowserRouter E L'ARRAY DELLE PAGINE DA COLLEGARE

import { createBrowserRouter } from "react-router-dom";
import Welcome from "../Pages/Welcome.jsx";
import Root from "../Pages/Root.jsx";
import AccessData from "../Pages/AccessData.jsx";
import UserData from "../Pages/UserData.jsx";
import UploadDocuments from "../Pages/UploadDocuments.jsx";
import Login from "../Pages/Login.jsx";
import OTP from "../Pages/Login/OTP.jsx";
import WalletHome from "../Pages/WalletHome.jsx";
import WalletSend from "../Pages/WalletSend.jsx";
import WalletReceive from "../Pages/WalletReceive.jsx";
import WalletMovement from "../Pages/WalletMovement.jsx";
import MarketHome from "../Pages/MarketHome.jsx";
import MarketBuy from "../Pages/MarketBuy.jsx";
import MarketSell from "../Pages/MarketSell.jsx";
import ProfileHome from "../Pages/ProfileHome.jsx";
import EditUserData from "../Pages/EditUserData.jsx";
import ProfileEditPassword from "../Pages/EditPassword.jsx";
import ProfileSupport from "../Pages/ProfileSupport.jsx";
import ProfileFAQ from "../Pages/ProfileFAQ.jsx";


const router = createBrowserRouter([

    {

        path: '/',
        element: <Welcome />,

    },

    {
        path: '/register',
        element: <Root />,
        children: [
            {
                path: '/register/access-data',
                element: <AccessData />
            },

            {
                path: '/register/user-data',
                element: <UserData />
            },
            {
                path: '/register/upload-documents',
                element: <UploadDocuments />
            },

        ]

    },

    {
        path: '/login',
        element: <Root />,
        children: [
            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/login/otp',
                element: <OTP />
            },

        ]
    },

    {
        path: '/wallet',
        element: <Root />,
        children: [
            {

                path: '/wallet',
                element: <WalletHome />
            },
            {
                path: '/wallet/send',
                element: <WalletSend />
            },
            {
                path: '/wallet/receive',
                element: <WalletReceive />
            },
            {
                path: '/wallet/movement',
                element: <WalletMovement />
            },

        ]

    },

    {
        path: '/market',
        element: <Root />,
        children: [
            {
                path: '/market',
                element: <MarketHome />
            },
            {
                path: '/market/buy',
                element: <MarketBuy />
            },
            {
                path: '/market/sell',
                element: <MarketSell />
            },
        ]
    },

    {
        path: '/profile',
        element: <Root />,
        children: [
            {
                path: '/profile',
                element: <ProfileHome />
            },
            {
                path: '/profile/edit-user-data',
                element: <EditUserData />
            },
            {
                path: '/profile/edit-password',
                element: <ProfileEditPassword />
            },
            {
                path: '/profile/support',
                element: <ProfileSupport />
            },
            {
                path: '/profile/FAQ',
                element: <ProfileFAQ />
            },

        ]
    },



]);


export default router;