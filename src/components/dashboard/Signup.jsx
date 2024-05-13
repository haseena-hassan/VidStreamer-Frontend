import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const EMAIL_FIELD = "email";
const NAME_FIELD = "name";
const PASSWORD_FIELD = "password";

export default function Signup() {
    const [signupDetails, setSignupDetails] = useState({
        [EMAIL_FIELD]: "",
        [NAME_FIELD]: "",
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
                value={signupDetails[NAME_FIELD]}
                onChange={handleChange}
                label="Name"
                id={NAME_FIELD}
            />
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
            <Button label="Signup" variant="primary" />
            <text style={{ fontSize: "14px" }}> Already have an account? <span onClick={() => navigate("/login")} className="link">Login</span></text>
        </div>
    )
}