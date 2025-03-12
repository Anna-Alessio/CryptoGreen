// TEXT LG SI RIFERISCE AL TESTO GENERALIZZATO IN GRASSETTO E COLORE GRIGIO CHE ATTUALMENTE E' INSERITO NELLA PAGINA OTP

export default function TextLg({ children, className }) {

    return (

        <>


            <p className={`text-lg ${className}`}>{children}</p>


        </>


    )

}