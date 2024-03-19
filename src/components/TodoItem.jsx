function Todoitem(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
      function handleDelete(deleteid)
      {
        var temparr = activityArr.filter(function(item){
            if(item.id === deleteid)
            {
                return false
            }else{
                return true
            }
        })
        setactivityArr(temparr)

      }

    return(
        <div className=" flex justify-between">
        <p>{props.index}.{props.activity}</p>
        <button className=" text-red-600" onClick={()=>handleDelete(props.id)}> delete</button>
        </div>
    )
    }
export default Todoitem