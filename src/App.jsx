import { RoutesApp } from "./routes.jsx"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
export function App() {
    return (
        <div>
        <ToastContainer autoClose={2000} />
        <RoutesApp ></RoutesApp>
        </div>
    )
}