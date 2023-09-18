import React from "react";
import notFound from "../asset/3814348[1].jpg"
const NotFound=()=>{
   
return <div style={{textAlign:"center" } }>
  <img src={notFound} alt="not found" style={{maxWidth:"100vw"}}></img>
  <h3>OOPS!!!</h3>
  <p>This store doesn't exist till now...</p>
</div>
}
export default NotFound;