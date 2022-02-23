import React, { useState } from "react";
import { useNavigate } from "react-router";
import StyleSheet from "../Style/Style.css"

export default function CreateRest(){
    const [form, setForm] = useState({
        restName:"",
        restId:"",
        restDescription:"",
        restRate: 10,

    });
    const navigate = useNavigate();
    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
    async function onSubmit(e){
      e.preventDefault();
        
        // console.log(e);
        // genInt();
        const newRest = {...form};

        await fetch("http://127.0.0.1:8081/createRest", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRest),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({restId: {}, restName: {}, restDescription: {}, restRate: {}});
        navigate("/");
    } 

    // function genInt(){
    //   updateForm({restId : Math.floor(Math.random() * 1000000)+1})
    // }
    return (
        <div>
          <h3>Create New Record</h3>
          <form onSubmit={onSubmit.bind()}>
          {/* <div className="form-group">
              <label htmlFor="restId">Restaurant Id</label>
              <input
                
                type="text"
                className="form-control"
                id="restId"
                value={form.restId}
                onChange={(e) => {updateForm({ restId: e.target.value })}}
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="restName">Restaurant Name</label>
              <input
              width={StyleSheet.width}
                type="text"
                className="form-control"
                id="restName"
                value={form.restName}
                onChange={(e) => updateForm({ restName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="restDescription">Restaurant Description</label>
              <input
                type="text"
                className="form-control"
                id="restDescription"
                value={form.restDescription}
                onChange={(e) => updateForm({ restDescription: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Create Restaurant"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      );
}