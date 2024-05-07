import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';
import './Login.css'
import { Button } from "../../components/UI/Button";
import { useToast } from "../../components/UI/UseToast";
import { API_URL } from "@utils/constants";

function LoginPage() {
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
      } = useForm()
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { toast } = useToast()
    const onSubmit = async (data)  =>  {
        try {
            const URL = `${API_URL}login`;
            const response = await fetch(URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
      
            if (response.ok) {
              const data = await response.json();
              // STORE AUTHENTICAION DATA (TOKEN, USERT OBJECT) In Context or Local Storage
              login(data); 
            //   } else {
            //     localStorage.setItem('authToken', data.token); // Example using local storage
            //   }
              // REDIRECT TO => PROTECTED ROUTE
              navigate('/');
            } else {
              /* HANDLE FAILEN LOGIN ATTEMPS */
              // DISPLAY ERROR MESSAGES
              const message = await response.text()
              toast({
                variant: "destructive",
                title: "ERROR",
                description: message,
              })
            //   console.error('Login failed:', );
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }
    
    // console.log(watch("email"))
    return ( 
        <section className="bg-[#ebebeb] dark:bg-[#222]">
            <div className="box after:bg-white after:border-none  after:dark:bg-[#303030]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-foreground text-xl font-semibold">Login</h2>
                    <div className="inputBox">
                        <span className="after:bg-[#ebebeb] after:dark:bg-[#303030]"></span>
                        <input {...register("email")} type="email" placeholder='Email'/>
                    </div>
                    <div className="inputBox">
                        <span className="after:bg-[#ebebeb] after:dark:bg-[#303030]"></span>
                        <input  {...register("password")} type="password" placeholder='Password'/>
                    </div>
                    <div className="inputBox">
                        {/* <input type='submit' value={"Sign In"}/> */}
                        <Button className="w-full rounded font-semibold">Sign In</Button>
                    </div>
                    <div className="group">
                        <a className="font-semibold hover:text-primary" href="#">Forget Password</a>
                        <a href="#">Sign Up</a>
                    </div>
                </form>
            </div>
        </section>
     );
}

export default LoginPage;