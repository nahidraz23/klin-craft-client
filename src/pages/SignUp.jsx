import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviderComponent";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password};

        if (password.length < 6) {
            toast.error("Password length should be more than 6 charecters long.");
            return;
        }
        if(!/^(?=.*[a-z]).{6,}$/.test(password)){
           return toast.error("Your password should have at least 1 lowercase letter")
        }
        if (!/^(?=.*[A-Z]).{6,}$/.test(password)) {
            toast.error("Your password should have at least 1 uppercase letter");
            return;
        }


        createUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate('/');

            fetch("http://localhost:5300/users", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (

        <div className="flex justify-center">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm dark:text-gray-600">Register your account</p>
                </div>
                <form onSubmit={handleSignUp} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="photoURL" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="photoURL" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-center">
                            <button className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative">Sign Up</span>
                            </button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                            <a rel="noopener noreferrer" href="/signin" className="hover:underline dark:text-violet-600"> Sign In</a>.
                        </p>
                    </div>
                </form>
            </div>
            <Toaster
                    position="bottom-right"
                    toastOptions={
                        {
                            duration: 2000,
                        }
                    }
                />
        </div>
    );
};

export default SignUp;