import './Login.css'
function LoginPage() {
    return ( 
        <section>
            <div className="box">
                <form action="">
                    <h2>Login</h2>
                    <div className="inputBox">
                        <span></span>
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div className="inputBox">
                        <span></span>
                        <input type="password" placeholder='Password'/>
                    </div>
                    <div className="inputBox">
                        <input type='submit' value={"Sign In"}/>
                    </div>
                    <div className="group">
                        <a href="#">Forget Password</a>
                        <a href="#">Sign Up</a>
                    </div>
                </form>
            </div>
        </section>
     );
}

export default LoginPage;