import './index.css'

function EachBrowsedList(props) {
  const {eachElement, deletingElementMethod} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachElement

  const deleteItem = () => {
    deletingElementMethod(id)
  }

  return (
    <li className="eachListStyling">
      <div className="container">
        <p className="timeStyling">{timeAccessed}</p>
        <div className="detailsContainer">
          <img src={logoUrl} alt="domain logo" className="logoStyling" />
          <p className="alignStyling">{title}</p>
          <p className="urlStyling alignStyling">{domainUrl}</p>
        </div>
        <button data-testid="delete" type="button" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default EachBrowsedList
