"use client";

import "./_cyo/cyo.css";
// The configurator was authored as a standalone React app. It lives under _cyo
// (a Next.js private folder, so it does not create a route) and is mounted here
// inside the storefront layout, so the site header and footer frame it.
import App from "./_cyo/App.jsx";

export default function CreateYourOwnPage() {
  return (
    <div className="cyo-app">
      <App />
    </div>
  );
}
