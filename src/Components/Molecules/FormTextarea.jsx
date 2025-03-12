// FORM TEXTAREA PAGINA SUPPORT

import Label from "../Atoms/Label.jsx";
import Textarea from "../Atoms/Textarea.jsx";

export default function FormTextarea({ id, text, placeholder, required = false }) {
    return (

        <>

            <div className="flex flex-col text-left w-full mt-2">
                <Label htmlFor={id} required={required}>{text}</Label>
                <Textarea id={id} placeholder={placeholder} />
            </div>


        </>

    )

}