// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={`li_container ${className}`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem

//  id: 1,
//     headerText: 'The Seasons Latest',
//     description: 'Get the seasons all latest designs in a flick of your hand',
//     className: 'card-1',
