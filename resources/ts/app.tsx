import "../js/bootstrap";
import "../css/app.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Form from "./CustomerForm";

const App = () => {
    return (
        <div className="App">
            <Form />
        </div>
    );
};
const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
