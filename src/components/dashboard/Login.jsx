import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const EMAIL_FIELD = "email";
const PASSWORD_FIELD = "password";

export default function Login() {
    const [signupDetails, setSignupDetails] = useState({
        [EMAIL_FIELD]: "",
        [PASSWORD_FIELD]: ""
    });

    function handleChange(e) {
        setSignupDetails((oldDetails) => {
            return {
                ...oldDetails,
                [e.target.id]: e.target.value
            }
        })
    }

    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <Input
                value={signupDetails[EMAIL_FIELD]}
                onChange={handleChange}
                label="Email"
                id={EMAIL_FIELD}
                type="email"
            />
            <Input
                value={signupDetails[PASSWORD_FIELD]}
                onChange={handleChange}
                label="Password"
                id={PASSWORD_FIELD}
                type="password"
            />
            <Button label="Login" variant="primary" />
            <text style={{ fontSize: "14px" }}> New user? <span onClick={() => navigate("/signup")} className="link">Signup</span></text>
        </div>
    )
}