import React from "react";
export default function Card(props){
    let datos = props.datos;
    return(
        <>
            {
                datos.map((item, index)=>(                    
                <div className="flex flex-row mb-32" key={index}>
                    <div className="w-2/5">
                        <img 
                            src={item.url}
                            style={{ width: "100px"}}
                        />
                    </div>
                    <div className="w-2/5">
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                        <p className="text-md">{item.description}</p>
                        <p className="text-sm text-center">Short description</p>
                    </div>
                </div>))
            }   
        </>
    );
}