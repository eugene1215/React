import React, { useState } from "react";
import { useNavigate } from "react-router";
import StyleSheet from "../Style/Style.css"

export default function CreateRest(){
    const [form, setForm] = useState({
        restName:"",
        restDescription:"",
        restRate: 0,

    });
    const navigate = useNavigate();
    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
    async function onSubmit(e){
      e.preventDefault();
        
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

        setForm({ restName: {}, restDescription: {}, restRate: {}});
        navigate("/");
    } 

    return (
        <div className="body">
          <h3>Create New Record</h3>
          <form onSubmit={onSubmit.bind()}>
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
              <label htmlFor="restRate">Restaurant Rate</label>
              <input
              width={StyleSheet.width}
                type="text"
                className="form-control"
                id="restRate"
                value={form.restRate}
                onChange={(e) => updateForm({ restRate: e.target.value })}
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