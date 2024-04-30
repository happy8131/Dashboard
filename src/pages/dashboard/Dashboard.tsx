import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
//dd
const Dashboard = () => {
  return (
    <Box>
      <DataRibbon />
      <TransactionsPerDay />
    </Box>
  );
};
export default Dashboard;
