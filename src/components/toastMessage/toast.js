import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Toast(props) {
  console.log("pop", props);
  return toast[props.type](props.message || props.message.message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
export default Toast;
