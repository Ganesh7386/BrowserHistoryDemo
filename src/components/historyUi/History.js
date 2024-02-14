import {useState} from 'react'
import EachBrowsedList from '../EachBrowsedWebList/browsedList'
import './index.css'

function History(props) {
  const {browsedList} = props
  const [listOfElements, changeList] = useState(browsedList)
  const [inputValue, changeInputValue] = useState('')
  const [filteredList, changeFilteredList] = useState(browsedList)
  const [isEmpty, changeIsEmpty] = useState(false)
  console.log(listOfElements)

  const deleteElementFromList = id => {
    // filtering after an element deleted

    const deletingIndex = listOfElements.findIndex(eachObj => eachObj.id === id)
    const newListAfterDeletion = [...listOfElements]
    newListAfterDeletion.splice(deletingIndex, 1)

    console.log(newListAfterDeletion)
    // console.log(newListAfterDeletion)
    changeList(newListAfterDeletion)
    changeFilteredList(newListAfterDeletion)
  }

  const searchingList = () => {
    // const filteredElements = [...listOfElements]
    const newFilteredElements = listOfElements.filter(eachObj =>
      eachObj.title.toLowerCase().includes(inputValue.toLowerCase()),
    )
    console.log(newFilteredElements)
    if (newFilteredElements.length === 0) {
      changeIsEmpty(true)
    } else {
      changeIsEmpty(false)
    }
    changeFilteredList(newFilteredElements)
  }

  const onChangeInputValue = event => {
    changeInputValue(event.target.value)
    searchingList()
  }

  return (
    <div>
      <div className="headerContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
        />
        <div className="searchLogoAndSearchElementContainer">
          <div className="searchLogoContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </div>
          <input
            className="searchInputStyling"
            type="search"
            value={inputValue}
            onChange={onChangeInputValue}
            placeholder="Search history"
          />
        </div>
      </div>
      <div className="resultsContainer">
        <ul className="unorderedListsStyling">
          {filteredList.map(eachObj => (
            <EachBrowsedList
              key={eachObj.id}
              eachElement={eachObj}
              deletingElementMethod={deleteElementFromList}
            />
          ))}
        </ul>
        {(isEmpty || listOfElements.length === 0) && (
          <p>There is no history to show</p>
        )}
      </div>
    </div>
  )
}

export default History
