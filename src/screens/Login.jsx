import { successToast, warnToast, errorToast } from "../functions/toastify"


const Login = () => {


  
  return (
    <div>
      <h1>Login</h1>
      <p>This is login screen</p>

<button className=" rounded-md m-5 p-4 bg-green-400 hover:bg-green-700 hover:animate-bounce" 
                    onClick={() => successToast('great achivement')}>success</button>
<button className="m-5 p-4 bg-orange-400 hover:bg-orange-700 hover:animate-bounce"
                   onClick={() => warnToast('be aware')}>warn</button>
<button className="m-5 p-4 bg-red-400 hover:bg-red-700 hover:animate-bounce" 
                   onClick={() => errorToast('someting went wrong')}>error</button>
    </div>
  )
}

export default Login
