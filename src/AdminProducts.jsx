import AddProduct from "./AddProduct";
import { useState } from "react";

function AdminProducts() {
   const[showContent,setShowContent] = useState(true)
   function handleBackButtonClick(){
      setShowContent(true);
   };
   return (
      <div className="bg-white" style={{ height: '100%' }}>
         {showContent ? (
            <div className="container-fluid p-0">
               <div className="row py-3 px-4">
                  <div className="col d-flex">
                     <h3 className="align-self-center fw-bold">List of products</h3>
                  </div>
                  <div className="col text-end">
                     <button className="bg-dark text-white px-4 py-1" onClick={() => setShowContent(false)}><i class="bi bi-plus-lg"></i> New Entry</button>
                  </div>
               </div>
               <hr className="m-0"></hr>
            </div>
         ) : (<AddProduct onBackButtonClick={handleBackButtonClick}/>)}
      </div>
   )
}

export default AdminProducts;