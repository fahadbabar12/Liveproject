
import React , {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Registeruser = () => {

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const Registeruser = async(e) =>{
        e.preventDefault()

        try {
            let response = await fetch('http://localhost:8082/api/v1/auth/register' ,{
                method:"POST",
                body: JSON.stringify({name , email , password}),
                headers:{
                    'Content-Type':'application/json'
                }

              
            })
            const data = await response.json()

             if (data){
                toast( data.Message, {
                    duration: 4000,
                    position: 'top-center',
                  
                    // Styling
                    style: {},
                    className: '',
                  
                    // Custom Icon
                    icon: '👏',
                  
                    // Change colors of success/error/loading icon
                    iconTheme: {
                      primary: '#000',
                      secondary: '#fff',
                    },
                  
                    // Aria
                    ariaProps: {
                      role: 'status',
                      'aria-live': 'polite',
                    },
                  });
             }
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
     <div>
  <div className="mb-3 row">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control-plaintext" id="name" defaultValue="name" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com"
      value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword"
      value={password} onChange={(e)=>setPassword(e.target.value)} />
    </div>
  </div>

  <div className='d-flex justify-content-center item-center'>
    <button onClick={Registeruser} className='mt-5 btn btn-danger'>REGISTER</button>
  </div>
  <Toaster />
</div>

    </>
  )
}

export default Registeruser
