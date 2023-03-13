import products from "../json/images.json"
import ProductItem from "../components/ProductItem"
import { Row, Col } from "antd";

export default function ProductList({ slogan }) {
    return (

        <div >
            <p className="header__slogan">{slogan}
                <hr className="divider--dark" />
            </p>
            <div className="container">
            <Row  gutter={[32, 32]}>
                {products.map(product => (
                    <Col 
                        key={product.id}
                        sm={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 6 }}
                        xxl={{ span: 6 }}
                    >
                        <ProductItem  product={product} />
                    </Col>
                ))}
            </Row>
            </div>
        </div>
    )
}