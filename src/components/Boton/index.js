import React from 'react'

export default function Boton(props){
    let numero = props.numero
    return(
        <button class="bg-blue-500 hover:bg-blue-700 text-white 
        font-bold py-2 px-4 rounded">
            Mi nuevo botón {numero}
        </button>
    )
}