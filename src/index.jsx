import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { ChatbotLandingPage } from "./screens/ChatbotLandingPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ChatbotLandingPage />);
