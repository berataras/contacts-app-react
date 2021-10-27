import { useEffect, useState } from "react"
import { TextInput } from ".";

export default function ContactList({list, setList}) {

    const [filtered, setFiltered] = useState([]);

    const handlerSetFilter = (e) => {
        const keyword = e.target.value;
        
        if(keyword !== ''){
            const searchResult = list.filter((list) => {
                return list.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setFiltered(searchResult);
        }else{
            console.log('gledim')
            setFiltered(list);
        }
    }

    useEffect(() => {
        setFiltered(list)
    }, [])
 
    return (
        <div>
            <TextInput onChange={handlerSetFilter} />
            <ul>
               {filtered.map((list, index) => (
                  
                    <li key={index}>{list.name}</li>
                   
               ))}
            </ul>
        </div>
    )
}
