import React from "react";
import Sidebar from "./sidebar";
import Content from "./content";
import { QueryClient, QueryClientProvider } from "react-query";

function Container() {
  const queryClient = new QueryClient();
  return (
    <div className="content-container">
      <Sidebar />
      <QueryClientProvider client={queryClient}>
        <Content />
      </QueryClientProvider>
    </div>
  );
}

export default Container;
