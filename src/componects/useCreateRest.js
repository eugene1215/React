import React, { useState } from "react";
import { useNavigate } from "react-router";


export default function CreateRest(){
    const [form, setForm] = useState({
        restName:"",
        restId:"",
        restDescription:"",
        restRate: "",

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

        setForm({ restId: "", restName: "", restDescription: "", restRate: ""});
        navigate("/");
    } 
    return (
        <div>
          <h3>Create New Record</h3>
          <form onSubmit={onSubmit()}>
            <div className="form-group">
              <label htmlFor="restName">restName</label>
              <input
                type="text"
                className="form-control"
                id="restName"
                value={form.restName}
                onChange={(e) => updateForm({ restName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="restDescription">restDescription</label>
              <input
                type="text"
                className="form-control"
                id="restDescription"
                value={form.restDescription}
                onChange={(e) => updateForm({ restDescription: e.target.value })}
              />
            </div>
            {/* <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="positionOptions"
                  id="positionIntern"
                  value="Intern"
                  checked={form.level === "Intern"}
                  onChange={(e) => updateForm({ level: e.target.value })}
                />
                <label htmlFor="positionIntern" className="form-check-label">Intern</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="positionOptions"
                  id="positionJunior"
                  value="Junior"
                  checked={form.level === "Junior"}
                  onChange={(e) => updateForm({ level: e.target.value })}
                />
                <label htmlFor="positionJunior" className="form-check-label">Junior</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="positionOptions"
                  id="positionSenior"
                  value="Senior"
                  checked={form.level === "Senior"}
                  onChange={(e) => updateForm({ level: e.target.value })}
                />
                <label htmlFor="positionSenior" className="form-check-label">Senior</label>
              </div>
            </div> */}
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