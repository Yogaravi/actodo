import AddTodoform from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function Todocontainer()
{
    const [activityArr , setactivityArr] = useState([
        {
               id:1,
               activity:"Go for a walk"
           },
           {
           
               id:2,
               activity:"take some breakfast"
           },
           {
               id:3,
               activity:"take some water"
           }  
       ])
    return(
        <div>
            <div className=" flex gap-5 flex-wrap">
                <AddTodoform activityArr={activityArr}setactivityArr={setactivityArr}/>
                <TodoList activityArr={activityArr}setactivityArr={setactivityArr}/>
        </div>
      </div>
    )
}
export default Todocontainer