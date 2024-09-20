import { useState } from 'react';

let getUser = {};
const Login = () => {

  const [user, setUser] = useState({
    name: '',
    city: '',
    country: ''
  });

  const onChangeHAndler = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault();

    localStorage.setItem('user',JSON.stringify(user));
    
    getUser = JSON.parse(localStorage.getItem('user'));

    setUser({
      name: '',
      city: '',
      country: ''
    });

    localStorage.removeItem('user');
  
  };


  
  return (
    <div>
      <h1>Login</h1>
      <p>This is login screen</p>

      <form onSubmit={submitHandler}>
        <input className="placeholder: Name bg-slate-400 m-5 text-white" name="name" value={user.name} onChange={onChangeHAndler} /> <br />
        <input className="placeholder: City bg-slate-400 m-6" name="city" value={user.city} onChange={onChangeHAndler} /> <br />
        <input className="placeholder: Country bg-slate-400 m-5" name="country" value={user.country} onChange={onChangeHAndler} /> <br />
        <button className="bg-blue-400 p-4 m-5" type='submit'>submit</button>

      </form>

      <div className='text-black m-6 text-5xl font-bold'>

        <p>name : {getUser?.name} </p>
        <p>city : {getUser?.city} </p>
        <p>country: {getUser?.country} </p>
      </div >
    </div>
  )
}

export default Login
