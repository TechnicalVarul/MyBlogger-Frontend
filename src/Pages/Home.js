import Base from "../Components/Base";
import CatCards from "../Components/CatCards";
import CustomCrousel from "../Components/CustomCrousel";

const Home = ()=>{
    return(
        <Base>
            <CustomCrousel />
            <CatCards />
        </Base>
    );
}

export default Home;