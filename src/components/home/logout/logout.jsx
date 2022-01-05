import { useNavigate } from "react-router-dom";

const Logout = ()=>{
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem("userId");
        navigate("/");
    }
    return(
        <div className="container">
            <div className="logout">
                <div className="row">
                    <div className="d-flex justify-content-end my-3">
                        <button className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Logout;