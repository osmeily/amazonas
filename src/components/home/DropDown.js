import React, { useState } from 'react'
import "../../styles/dropdown.css"


const DropDown = ({selected, setSelected}) => {

const [isActive, setIsActive] = useState(false)

const options = ['Computadoras', 'Moda de niños', 'Arte y artesanías', 'Electrónicos', 'Belleza y cosméticos', 'Hogar', 'Equipaje', 'Bebés', 'Deportes', 'Libros', 'Juguetes', 'Cuidado personal', 'Aire libre', 'Videojuegos']

    return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={(e)=> setIsActive(!isActive)}> {selected}
        <i class="fa-solid fa-caret-down"></i>
        </div>
        {isActive && (
            <div className='dropdown-content'>
                {options.map(option => (
                    <div onClick={(e) =>{ setSelected(option)
                    setIsActive(false)
                    }}
                    className='dropdown-item'>
                    {option}
                    </div>
                ))}
            </div>
        )}
    </div>
    );
}

export default DropDown
