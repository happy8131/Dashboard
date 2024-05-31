import React from "react";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";

const SignIn = () => {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{session ? "감사합니다." : "로그인이 필요합니다."}</h2>
      <Login />
    </Box>
  );
};

export default SignIn;
