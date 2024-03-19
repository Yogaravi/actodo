import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const navigate = useNavigate()
    const user = props.user
    const setuser = props.setuser
    
    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()

    
    function handleuinput(evt)
    {

        seteusername(evt.target.value)
    }
    function handlepinput(evt)
    {
        setepassword(evt.target.value)

    }
    function adduser()
    {
        setuser([...user,{username:eusername,password:epassword}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className=" bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className=" text-3xl font-medium">Hey hi</h1>
                <p>Sign up here :)</p>
                <div className=" flex flex-col gap-2 my-2">
                    <input type="text"
                        className=" w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username" onChange={handleuinput} />

                    <input type="text"
                        className=" w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="password" onChange={handlepinput} /> 

                    <input type="text"
                        className=" w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="confirm password" />
                        <button onClick={adduser} className=" bg-[#FCA201] w-24 p-1 rounded-md">Sign up</button>
                        <p>Already have an account? <Link to={"/"}className= "underline">Login</Link></p>

                </div>

            </div>
        </div>
    )
}
export default Signup