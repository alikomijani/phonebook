import React from 'react'
import './ContactItem.style.scss'
interface ContactItemProps {
    title: string,
    subtitle?: string,
    imgSrc?: string
}
const ContactItem: React.FC<ContactItemProps> = ({ title, subtitle = '', imgSrc = '' }) => {
    return (
        <div className='contact-item'>
            <div className='container' >
                <div className='avatar-container'>
                    <div className='avatar-container_image'>
                        {
                            imgSrc ?
                                <img className='contact-avatar' src={imgSrc} alt={'contact avatar'} />
                                :
                                <div className='default-avatar'>
                                    {title.slice(0, 1).toUpperCase()}
                                </div>
                        }
                    </div>
                </div>
                <div className='title-container'>
                    <div className='title-container__title'>
                        {title}
                    </div>
                    {subtitle ? <div className='title-container__subtitle'>
                        {subtitle}
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default ContactItem
