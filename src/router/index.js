import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import InitialPage from "../pages/Initial";
import Home from "../pages/Home";

const Router = () => {
  return(
    <Suspense>
      <Routes>
        <Route exact path="/" element={<InitialPage />} />
        <Route exact path="/home/:prompt" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  )
};

export default Router;
