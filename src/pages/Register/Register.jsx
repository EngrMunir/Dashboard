import { useForm } from "react-hook-form";
import { json, Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
    console.log(data);
    const res= await fetch('http://localhost:5000/users',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({data})
    })
  }
    return (
       <div>
         <div className="mx-auto md:w-1/2">
            <h2 className="text-center mb-6 text-3xl">Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name', {required:true})} placeholder='Your Name' className="border w-full mb-4 px-2 py-2 mx-4"/><br />
                {
                    errors.email && <span className="text-red-500">Email is required</span>
                }
                <input type="text" {...register('email', {required:true})} placeholder='Your Email' className="border w-full mb-4 px-2 py-2 mx-4"/><br />
                {
                    errors.email && <span className="text-red-500">Email is required</span>
                }
                <input type="number" {...register('mobile', {required:true})} placeholder='Your Mobile' className="border w-full mb-4 px-2 py-2 mx-4"/>
                <br />
                {
                    errors.mobile && <span className="text-red-500">Mubile Number is required</span>
                }
                <input type="text" {...register('pin', {required:true, minLength:5, maxLength:5})} placeholder='Five digit pin' className="border w-full mb-4 px-2 py-2 mx-4"/>
                <br />
                {
                    errors.pin?.type === 'required' && <p className="text-red-500">Pin must be required</p>
                }
                {
                    errors.pin?.type ==='minLength' && <p className="text-red-500">Pin must be five digit</p>
                }
                {
                    errors.pin?.type ==='maxLength' && <p className="text-red-500">Pin must be five digit</p>
                }
                <input className='btn btn-secondary w-full mb-4' type="submit" value="Register" />
            </form>
            <p className="text-center mb-5">Already Registered? Please <Link to="/login" className="text-blue-500">Login</Link></p>
        </div>
       </div>
    );
};

export default Register;