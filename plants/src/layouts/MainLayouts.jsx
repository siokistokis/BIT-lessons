import Header from "../components/Header";
import SectionFooter from "../components/SectionFooter";
import TopLine from "../components/TopLine";
import { Outlet } from "react-router-dom";

export default function MainLayouts() {
    return (
      <>
      <TopLine/>
      <Header/>
      
        <Outlet/>
      
      <SectionFooter/>
      </>
    )
  }
   