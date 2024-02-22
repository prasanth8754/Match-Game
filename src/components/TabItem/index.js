import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabBtn, onChangeTab} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = activeTabBtn === tabId ? 'active-btn' : ''

  const changeTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li>
      <button className={activeTabClassName} type="button" onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
