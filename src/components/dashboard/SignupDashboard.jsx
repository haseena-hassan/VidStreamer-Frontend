import Signup from "./Signup";
import Robot from "../../assets/images/robot.png"

export function SignupDashboard({children}) {
    const style={
        width:"70%",
        height:"80%",
        minWidth:"600px"
    }

    return (
        <div className="page-container">
            <div style={style} className="card">
                <div className="center-card-grid">
                    <img src={Robot} className="dashboard-image"/>
                {children}
                </div>
            </div>
        </div>
    )
}