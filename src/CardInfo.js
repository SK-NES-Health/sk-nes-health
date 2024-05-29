function CardInfo(props) {
  return (
    <div className="infocard">
      <img className="info-img" src={props.imgSrc} alt={props.imgAlt} />
      <div className="info-details">{props.details}</div>
      <button className="order-btn">Order</button>
    </div>
  )
}

export default CardInfo
