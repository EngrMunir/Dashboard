import { Outlet } from "react-router-dom";
import Register from "../pages/Register/Register";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;