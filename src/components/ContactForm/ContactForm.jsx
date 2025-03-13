import { Field, Formik, Form , ErrorMessage} from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css'

const ContactSchema = Yup.object().shape({
    contactName: Yup.string()
    .min(3, 'Must be min 3 chars')
    .trim()
    .required('This field is required'),
    contactNumber:Yup.string()
    .max(50, 'Must be max 50 chars')
    .required('This field is required'),
})

export default function ContactForm({onAdd}) {
   const handleSubmit = (e,actions)=>{
   
    onAdd({
        id: Date.now(),
        name:e.contactName,
        number:e.contactNumber
    })
        actions.resetForm()
   }

  return (
    <Formik  initialValues={{
        contactName:"",
        contactNumber:""
    }}

    validationSchema={ContactSchema}
    onSubmit={handleSubmit}>
    <Form className={css.form}>
        <div className={css.formContainer}> 
            <label className={css.label}>Name</label>
            <Field className={css.inputField}type = "text" name = "contactName"></Field>
            <ErrorMessage className={css.error} name ="contactName" component="p"/>
            <label className={css.label}>Phone number</label>
            <Field className={css.inputField}type = "tel" name = "contactNumber"></Field>
            <ErrorMessage className={css.error} name ="contactNumber" component="p"/>
            <button className={css.submitButton} type="submit">Add contact</button>
        </div>
        
    </Form>
    </Formik>
  )
}
