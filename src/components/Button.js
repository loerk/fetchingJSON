import React from "react";

function Button({ name, onClick }) {
    return (
        <button
            style={{
                width: "7rem",
                backgroundColor: "tomato",
                border: "none",
                padding: "1rem",
                fontSize: "1.2rem"
            }}
            onClick={onClick}
        >
            {name}
        </button >
    );
}

export default Button;
