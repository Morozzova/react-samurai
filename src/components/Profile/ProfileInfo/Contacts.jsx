import React from "react";

const Contacts = ({profile}) => {
    return (
        <div>
            <h3>Контакты:</h3>
            <ul>
{/*                {(profile.contacts.facebook) ? <li><b>Facebook:</b> {profile.contacts.facebook}</li> : null}
                {(profile.contacts.website) ? <li><b>Website:</b> {profile.contacts.website}</li> : null}
                {(profile.contacts.vk) ? <li><b>VK:</b> {profile.contacts.vk}</li> : null}
                {(profile.contacts.twitter) ? <li><b>Twitter:</b> {profile.contacts.twitter}</li> : null}
                {(profile.contacts.instagram) ?
                    <li><b>Instagram:</b> {profile.contacts.instagram}</li> : null}
                {(profile.contacts.youtube) ? <li><b>Youtube:</b> {profile.contacts.youtube}</li> : null}
                {(profile.contacts.github) ? <li><b>Github:</b> {profile.contacts.github}</li> : null}*/}

                {Object.keys(profile.contacts).map(key => {
                   return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}

            </ul>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default Contacts;