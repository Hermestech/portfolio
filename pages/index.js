import { Divider, Box } from "@mui/material"
import Navbar from "../components/Navbar"
import Hero from "../containers/Hero"
import UserInfoContainer from "../containers/UserInfoContainer"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <UserInfoContainer/>
    <Box sx={{margin:'80px 0 80px 0', display:'flex', justifyContent:'center'}}>
    <ContactMe/>
    </Box>
    <Footer/>
    </>
  )
}
