import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon";
//dd
const Dashboard = () => {
  return (
    <Box>
      <DataRibbon />
    </Box>
  );
};
export default Dashboard;
