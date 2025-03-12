//MODULI DEL FORM


import Label from "../Atoms/Label.jsx";
import Input from "../Atoms/Input.jsx";

export default function FormInput({ id, text, placeholder, type = 'text', required = false, value = '' }) {

    return (

        <>

            <div className="flex flex-col gap-1 text-left w-full mt-2">

                <Label htmlFor={id} required={required}>{text}</Label>
                <Input value={value} id={id} placeholder={placeholder} type={type} />
            </div>

        </>
    )
}