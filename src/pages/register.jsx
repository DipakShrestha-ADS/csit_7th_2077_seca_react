import CustomFormField from "../components/custom_form_field";
import "../styles/register.css"
const Register = () => {
    return (
        <div className="register-container">
            <form >
                <div id="register-box">
                    <h1>Registration</h1>
                    <div className="reg-row-field">
                        <CustomFormField
                            label="Full Name"
                            cName="full-name"
                            type="text"
                            placeholder="Enter Full Name"
                        />
                        <CustomFormField
                            label="User Name"
                            cName="user-name"
                            type="text"
                            placeholder="Enter your user name"
                        />
                    </div>
                    <div className="reg-row-field">
                        <CustomFormField
                            label="Email"
                            cName="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <CustomFormField
                            label="Phone Number"
                            cName="phone-number"
                            type="number"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="reg-row-field">
                        <CustomFormField
                            label="Password"
                            cName="password"
                            type="password"
                            placeholder="Enter strong password"
                        />
                        <CustomFormField
                            label="Confirm Password"
                            cName="confirm-password"
                            type="password"
                            placeholder="Re-enter your password"
                        />
                    </div>
                    <div className="gender-field">
                        <h3>Gender</h3>
                        <div className="gender-options">
                            <div className="gender">
                                <input type="radio" value="Male" name="gender" />
                                <p>Male</p>
                            </div>
                            <div className="gender">
                                <input type="radio" value="Female" name="gender" />
                                <p>Female</p>
                            </div>
                            <div className="gender">
                                <input type="radio" value="PreferNotToSay" name="gender" />
                                <p>Prefer not to say</p>
                            </div>
                        </div>
                    </div>
                    <div id="register-button">
                        <input type="submit" value={"Register"} />
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Register