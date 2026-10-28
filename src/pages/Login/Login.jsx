import {Link} from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
    return (
        <div className={styles.LoginPage}>

            <div className={styles.loginImage}>
                <img src="/loginImage.jpg" alt="welcome"/>
            </div>


            <div className={styles.loginForm}>
            <h1>Sign In</h1>
            <p>Don't have an account ? <Link to="/Register" className={styles.RegisterLink}>Register</Link></p>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id ="email" className={styles.loginInput} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className={styles.loginInput}/>
                        </div>

                        <p><Link to="/ForgotPassword" className={styles.RegisterLink}>Forgot password ?</Link></p>

                        <button type="submit">Sign In</button>
            </form>
            </div>

        </div>
    );
}

export default Login;