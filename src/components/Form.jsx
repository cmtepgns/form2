import React from "react";

function Form(props) {
    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="passsword" placeholder="Confirm Password" />
            <button type="submit">
                {props.userIsRegistered ? "Login" : "Registrar"}
                </button>
        </form>
    )
}

export default Form;