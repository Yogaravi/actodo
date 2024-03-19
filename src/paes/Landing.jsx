import Header from "../components/Header"
import Card from "../components/Card"
import Todocontainer from "../components/Todocontainer"
import { useLocation } from "react-router-dom";

function Landing()
{
    const data = useLocation()
    
    return(
        <div className="bg-black p-16 ">
    <div className="bg-[#EFEFEF] p-10 border rounded-md ">
      <Header  username={data.state.username}></Header>
      <div className="flex justify-between gap-7 my-5 flex-wrap">
      <Card bgColor={"#8272DA"} title={23} subtitle={"Chennai"}/>
      <Card bgColor={"#FD6663"} title={"march18"} subtitle={"12:23:31"}/>
      <Card bgColor={"#FCA201"} title={"Build using"} subtitle={"React"}/>
      </div>
      
        <Todocontainer/>
      </div>
    </div>
    

    )
}
export default Landing