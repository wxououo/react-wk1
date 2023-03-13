export default function ProductItem({ product }) {
    return (
        <div className="image">
            <section className="image_layout" key={product.id}>
                <a href="" className="image__link">
                    <img src={product.src} alt="" className="image__style" />
                </a>
                <p className="image_title">{product.imageTitle}</p>
            </section>
        </div>
    )
}
