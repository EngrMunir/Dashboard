import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
        <div className="mx-auto md:w-1/2">
           <h2 className="text-center mb-6 text-3xl">Please Login</h2>
           <form>
               <input type="text" name="name" placeholder='Your Name' className="border w-full mb-4 px-2 py-2 mx-4" />
               <input type="text" name="name" placeholder='Your Email' className="border w-full mb-4 px-2 py-2 mx-4"/>
               <input type="text" name="name" placeholder='Your Mobile' className="border w-full mb-4 px-2 py-2 mx-4"/>
               <input type="text" name="name" placeholder='Five digit pin' className="border w-full mb-4 px-2 py-2 mx-4"/>
           </form>
           <p className="text-center mb-5">New to Account? Please <Link to="/register" className="text-blue-500">Register</Link></p>
       </div>
      </div>
    );
};

export default Login;