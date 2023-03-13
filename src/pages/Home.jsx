import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
import Article from "../components/Article"

function Home(){
    return(
        <div className="contianer main-layout">
            <Header className="layout-header " 
            title="HI"
            />
            <ProductList className="container layout-cotent" 
            slogan="images"/>
            <Article className="layout-article " />
            <Footer className="layout-footer " />
        </div>
    )
}
export default Home;