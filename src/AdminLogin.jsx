import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminLogin.css'

function AdminLogin(){
    const [data, setData] = useState({ username: "", password: "" })
    const [error, setError] = useState({ username: "", password: "" })
    const[showpass,setShowPass] = useState(true)
    const navigate = useNavigate()
    function handleChange(event) {
      const { name, value } = event.target
      setData({ ...data, [name]: value })
    }
    function handleSubmit(event) {
      event.preventDefault()
      console.log(data)
      if((data.username==="admin@12345") && (data.password==="admin12345")){
        setError({...error,username:"",password:""})
        navigate("/AdminIndex")
      }
      else if((data.username!=="admin@12345") && (data.password!=="admin12345")){
        setError({...error,username:"Invalid Username",password:"Invalid Password"})
      }
      else if(data.username!=="admin@12345"){
        setError({...error,username:"Invalid Username",password:""})
      }
      else if(data.password!=="admin12345"){
        setError({...error,username:"",password:"Invalid Password"})
      }
    }
    return (
      <div className='container-fluid'>
        <form className='row justify-content-center align-items-center admform' onSubmit={handleSubmit}>
          <fieldset className='col-10 col-sm-6 col-lg-4 col-xl-3 h-75 p-5 d-flex flex-column justify-content-center admfieldset'>
            <h3 className='text-white fw-bold text-center mb-5'>Login</h3>
            <div class="form-floating">
              <input name="username" value={data.username} onChange={handleChange} type="text" class="form-control shadow-lg" id="floatingInput" placeholder="name@example.com" required />
              <label for="floatingInput">Username</label>
              <p className='text-danger'>{error.username}</p>
            </div>
            <div class="form-floating mt-3 position-relative">
              <input name="password" value={data.password} onChange={handleChange} type={showpass?"password":"text"} class="form-control" id="floatingPassword" placeholder="Password" required/>
              <label for="floatingPassword">Password</label>
              <i class="bi bi-eye-fill position-absolute fs-4 absl" type="button" onClick={() => setShowPass(!showpass)}></i>
              <p className='text-danger'>{error.password}</p>
            </div>
            <div className='text-center mt-3'>
              <input type='submit' value="Login" className='bg-success rounded-pill text-white fw-bold p-2 w-50 border-0' />
            </div>
          </fieldset>
        </form>
      </div>
    )
}

export default AdminLogin;