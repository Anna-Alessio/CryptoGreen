// TEXT LG SI RIFERISCE AL TESTO GENERALIZZATO IN GRASSETTO

export default function TextLg({ children, className }) {

    return (

        <>


            <p className={`text-lg ${className}`}>{children}</p>


        </>


    )

}
