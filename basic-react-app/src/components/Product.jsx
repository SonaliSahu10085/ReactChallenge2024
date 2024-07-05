import "../Stylesheet/Product.css"

export default function Product({no, title, desc}) { 
    return (
        <div className="Product">
            <img src={`../images/img-${no}.png`} alt="" />
            <div className="info">
                <h4>{ title }</h4>
                <p>{ desc }</p>
            </div>
        </div>
    )
}
