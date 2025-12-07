import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Category from "./Category";
export default function Women() {
  const items = ["Groomming", "Shirt", "Trouser", "Jewellery"];
  const {path,url}=useRouteMatch();

//   console.log('Path:',path);
//   console.log('Url:',url)

  return (
    <div>
      <h2>Women Items:</h2>
     <nav>
     <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`${url}/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
     </nav>
      
     <Route path={`${path}/:itemName`} component={Category}/>
    </div>
  );
}
