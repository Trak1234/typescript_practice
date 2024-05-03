import React, { useState } from "react";




export default {
    title: "React memo stories",
    
  };

export  const NewMessageBody = (props:{count:number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props:{users:Array<String>}) => {
    console.log('Users')
    return <div>
            {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users,setUsers] = useState(['Dimych', 'Valera', 'Artem'])
 
    return <>
        <button onClick={() => setCounter(counter+1)} >+ </button>
        <NewMessageBody count={counter}/>
        <UsersSecret users={users}/>


    </>

}