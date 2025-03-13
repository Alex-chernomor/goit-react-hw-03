import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

export default function ContactList({contacts, onDelete}) {
  
    return (
    <ul className={css.contactLst}>      
       {
        contacts.map((contact)=>{
        return <Contact       
        id = {contact.id}
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete ={onDelete}/>
        }) 
        }
    </ul>
  )
}
