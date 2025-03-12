// ATOMO RIGUARDANTE I QUADRATINI DELL'OTP QUI HO RIDEFINITO IL ROUNDED DA XL A MD E ISERITO UN M-1 PER CREARE LO SPAZIO TRA I QUADRATINI

import "../../App.css";

export default function InputOTP(params) {

    return (


        <>

            <input placeholder=''
                type='number'
                className="w-12 h-12 border border-secondario rounded-md mt-2 focus:border-primario focus-visible:border-primario text-center text-2xl m-1"
            />


        </>



    )

}