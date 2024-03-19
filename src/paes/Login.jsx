import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    const navigate = useNavigate()
    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()
    const [ruser,setuser] = useState(true)
    const user = props.user
 
    function handleuinput(evt)
    {

        seteusername(evt.target.value)
    }
    function handlepinput(evt)
    {
        setepassword(evt.target.value)

    }
    function checkuser()
    {
        var userfound = false
        user.forEach(function(item){
            if(item.username === eusername && item.password === epassword)
            {
                console.log("login succ")
                userfound = true
                navigate("/landing",{state:{user:eusername}})  
            }
            
        })
        if(userfound ===false)
        {
            console.log("login failed")
            setuser(false)
          
        }
   

    }
    return(
        <div className="bg-black p-10">
            <div className=" bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className=" text-3xl font-medium">Hey hi</h1>
                {ruser? <p>I help you manage your activities after you login :)</p>:<p className=" text-red-600">"Please signup before you login"</p>}
                <div className=" flex flex-col gap-2 my-2">
                    <input type="text"
                        className=" w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username" onChange={handleuinput} />

                    <input type="text"
                        className=" w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="password" onChange={handlepinput} /> 

                        <button onClick={checkuser} className=" bg-[#8272DA] w-24 p-1 rounded-md">Login</button>
                        <p>Don't  have an account? <Link to={"/Signup"}className= "underline">Signup</Link></p>

                </div>

            </div>
        </div>

    )
}
export default Login