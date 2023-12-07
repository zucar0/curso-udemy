import React from 'react'

export default function Button({setValor, valor}){
    return(
        <div>
            <button class="text-white bg-blue-700 hover:bg-blue-800"
                onClick={()=>setValor(valor + 2)}>
                Mi botón
            </button>
        </div>
    )
} 