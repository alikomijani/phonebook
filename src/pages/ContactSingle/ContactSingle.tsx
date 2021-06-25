import React from 'react'
const contacts = [
    { first_name: 'Ali', last_name: 'Komijani', subtitle: 'My Card', imgSrc: '' },
    { first_name: 'Hassan', last_name: 'Haddai', subtitle: 'Father', imgSrc: '' },
    { first_name: 'Seyed', last_name: 'Ali', subtitle: 'Friend', imgSrc: '' },
]
function ContactSingle(props:any) {
    const contact = contacts[parseInt(props.match.params.id)-1]


    return (
        <div>
            <div>{contact.first_name}</div>
            <div>{contact.last_name}</div>
            <div>{contact.subtitle}</div>
            

        </div>
    )
}

export default ContactSingle
