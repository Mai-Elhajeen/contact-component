import React from 'react'

function Contact(props) {
    return (
        <div className='contact-card'>
            <img src= {props.img} alt='cat' />
            <h3>{props.name}</h3>
            <div className='info-group'>
                <i class="ri-phone-fill"></i>
                <p>{props.phone}</p>
            </div>

            <div className='info-group'>
                <i class="ri-mail-fill"></i>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contact