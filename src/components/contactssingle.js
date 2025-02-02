import React,{ useEffect,useState }  from 'react'


const ContactsSingle = ({}) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
     const rndInt = Math.floor(Math.random() * 8) + 1
     fetch('http://jsonplaceholder.typicode.com/users/'+String(rndInt))
            .then(res => res.json())
            .then((contacts) => {    
                setContacts([contacts]);
        })
        .catch(console.log)
    }, [])
    return (
        <div>
            <center><h1>Single Contact List</h1></center>
            {contacts.map((contact) => (                            
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p class="card-text">{contact.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ContactsSingle