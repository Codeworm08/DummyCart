import '../App.css'
import {useState} from 'react'
function List()
{
    let result;
    async function getList(){
        let result = await fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
    return result;
    }
    result=getList();
    console.log("Out:",result);
    return (
        <h1>List</h1>
    );
}
export default List