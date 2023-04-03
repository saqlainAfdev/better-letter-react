import './register.scss';
import { useFormik } from 'formik';
import { useEffect } from 'react';

const intialValues = {
    name: '',
    email: '',
}

const Register = () => {
    const {values,errors,handleChange,handleBlur,handleSubmit} = useFormik({
        intialValues: intialValues,
        onSubmit: (values) => {
            console.log("values:", values);            
        }
        
    }
        
    );  
    useEffect(() => {
        console.log(intialValues);
    }, [])
    return ( 
        <div className="main">
            
            <div className="container">
            <form className='registerForm' onSubmit={handleSubmit}>
                <div className="input-style">
                    <label>
                        Name
                    </label>
                    <input 
                        type="text"
                        name='name'
                        placeholder="name"
                        onChange={handleChange}
                        value={values.name}
                    />
                </div>
                
                <input className='submit-btn' type="submit" value="Submit" />
            </form>
            </div>
            
        </div>
     );
}
 
export default Register;