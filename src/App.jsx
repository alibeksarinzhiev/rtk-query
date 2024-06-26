import React, { useState } from 'react';
import { useAddUserMutation, useGetUsersQuery } from './store/user';

const App = () => {








    const [gender,setGender] = useState('all')
    const {data=[],isLoading} = useGetUsersQuery({gender})

    const [addUser,obj] = useAddUserMutation()
    

    const add = async(e)=>{
        e.preventDefault()
        let person = {
            name:e.target[0].value,
            gender:e.target[1].checked? 'women':'men'
        }

        await addUser(person)

    }
    console.log(obj)


    if(isLoading){
        return <h1>Loading...</h1>
    }


    return (
        <>
          <h1>app</h1> 

          <button style={{background:gender ==='all'?'red':'buttonface'}}  onClick={()=>setGender('all')}>all</button>
          <button style={{background:gender ==='men'?'red':'buttonface'}} onClick={()=>setGender('men')}>men</button>
          <button style={{background:gender ==='women'?'red':'buttonface'}} onClick={()=>setGender('women')}>women</button>
<br />
<br />
            <form action="" onSubmit={(e)=>add(e)}>
                <input type="text" placeholder='Введите имя' />
                <div>
                <label >
                    <input required name='gender' value='women' type="radio" />
                    <span>women</span>
                </label>
                <label >
                    <input required name='gender' value="men" type="radio" />
                    <span>men</span>   
                </label>
                </div>
                <button>добавить</button>
            </form>
          <ul>
            {data.map((el)=>(
                <li key={el.id}>{el.name}</li>
            ))}
        </ul> 
        </>
    );
};

export default App;



