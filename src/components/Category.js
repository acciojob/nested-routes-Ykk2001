import React from 'react'
import {useParams} from 'react-router-dom';


export default function Category() {
    const {itemName}=useParams();
    const items = ["Groomming", "Shirt", "Trouser", "Jewellery"];
    let filtered=items.filter((item,index)=>item===itemName)
    let item=filtered[0];
  return (
    <div>
       <h2>{item}</h2>
    </div>
  )
}
