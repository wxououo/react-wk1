import styles from './footer.module.css'
import { Row, Col } from 'antd'

export default function Footer() {
    return (
        <footer className="footer">
            <div className={styles.footerAbove}>
                <div className="container">
                    <Row>
                        <Col className={styles.footerDescription} lg={{ span: 16 }}>
                            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                        </Col>
                        <Col className={styles.footerList} lg={{ span: 8 }} >
                            <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-facebook-f"></i></a></li>
                            <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-google-plus-g"></i></a></li>
                            <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={styles.footerBelow}>
                <div className="container">
                    <h6>
                        &copy; Copyright All rights reserved.
                    </h6>
                </div>
            </div>
        </footer >
    )
}