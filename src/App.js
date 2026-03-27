import Navbar from "./Components/Navbar";
import Catagories from "./Components/Catagories.js";
import Saleimg from "./Components/SaleImg.js";
import Recommented from "./Components/Recommented";
import Topics from "./Components/Topics.js";
import PopularSection from "./Components/PopularSection.js";
import Footer from "./Components/Footer.js";


function App()
{
    return(
        <>
        <Navbar></Navbar>
        <Catagories></Catagories>
        <Saleimg></Saleimg>
        <Recommented></Recommented>
        <Topics></Topics>
        <PopularSection></PopularSection>
        <Footer></Footer>
        </>
    )
}
export default App