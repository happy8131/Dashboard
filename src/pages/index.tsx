import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Dashboard from "./dashboard";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </>
  );
}
