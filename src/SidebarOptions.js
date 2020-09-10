import React from 'react'
import './sidebarOptions.css'
export default function Sidebaroptions({
    title, Icon
}) {
    return (
        <div className="sidebarOption">
            {
                Icon && <Icon className="sidebaroption__icon" />
            }
            {
                Icon ? <h5>{title}</h5> : <p>{title}</p>
            }
        </div>
    )
}
