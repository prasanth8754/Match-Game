import './index.css'

const MatchItem = props => {
  const {matchDetails, onClickImage} = props
  const {id, imageUrl, thumbnailUrl, category} = matchDetails

  const matchImage = () => {
    onClickImage(id)
  }

  return (
    <li>
      <button className="thumb-btn" type="button" onClick={matchImage}>
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchItem
