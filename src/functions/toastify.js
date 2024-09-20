
import { toast } from 'react-toastify';


const successToast = (message) => {

    toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "colored",
    })
}


const warnToast = (message) => {

    toast.warn(message, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light"
    })
}



const errorToast = (message) => {

    toast.error(message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "colored"
    })
}


export { successToast, warnToast, errorToast }