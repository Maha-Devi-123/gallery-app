import './index.css'

const ThumbnailItem = props => {
  const {itemDetails, ChangePic, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = itemDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  const onClickChangePic = () => {
    ChangePic(id)
  }

  return (
    <li>
      <button onClick={onClickChangePic} type="button" className="btn">
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
