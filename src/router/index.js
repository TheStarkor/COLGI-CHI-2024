import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import InitialPage from "../pages/Initial";
import Home from "../pages/Home";
import TestPage from "../pages/Test"
import Chat from "../pages/Chat"

const Router = () => {
  return(
    <Suspense>
      <Routes>
        <Route exact path="/" element={<InitialPage />} />
        <Route exact path="/home/:prompt" element={<Home />} />
        <Route exact path="/test" element={<TestPage />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  )
};

export default Router;
