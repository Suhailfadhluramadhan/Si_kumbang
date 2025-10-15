import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { ChildProvider  } from "../Pages/DataAnak/CardAnak"
const ChildProviderWrapper = () => {
  return (
    <ChildProvider>
      <Outlet />
    </ChildProvider>
  );
};

export default ChildProviderWrapper;
