// LAYOUT GENERICO PER EVENTUALI ALTRI COMPONENTI

export default function GuestLayout({ children }) {

    return (
        <>
            <div className="min-h-screen bg-bianco flex flex-col justify-between p-8 ">


                <div>

                    {children}

                </div>

            </div>

        </>

    )
}
