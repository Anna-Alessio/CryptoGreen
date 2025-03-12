//SCRITTA DEI MODULI DEL FORM

import "../../App.css";

export default function Input({ id, placeholder, type = "text", value = "" }) {

        return (

                <>

                        <input
                                id={id}
                                name={id}
                                placeholder={placeholder}
                                type={type}
                                defaultValue={value}
                                className="py-2 px-4 border border-secondario rounded-xl mt-2 focus:border-primario 12 focus-visible:border-primario font-bold"
                        />

                </>


        )
}