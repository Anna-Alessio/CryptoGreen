// BOTTONE VERDE GENERALIZZATO

import { Link } from 'react-router-dom';

export default function Button({ children, to }) {

    return (

        <>
            <button className="w-48">
                <Link to={to} className="w-full bg-accento shadow-xl fill-white flex justify-center items-center py-3 rounded-3xl">
                    <p className='text-white text-2xl font-bold uppercase'>{children}</p>

                </Link>
            </button>
        </>
    )
}