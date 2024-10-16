"use client";
import styled from "styled-components";
import { connectDB } from "@/lib/dbConfig";

export default function Home() {
  connectDB()
  return (
    <>
      <Headers>
        Hello Duniya My name is Abhimanyu kumar
      </Headers>
      
    </>
  );
}

const Headers = styled.div`
  color:red;
  font-size:30px;
`