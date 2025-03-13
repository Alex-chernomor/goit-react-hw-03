import css from './Contact.module.css'

export default function Contact({id, name, number, onDelete}) {

    return (
    <li key={id} className={css.contact}>
        <p className={css.name}>{name}</p>
        <p>{number}</p>
        <button onClick={()=>onDelete(id)}>Delete</button>
    </li>
  )
}
