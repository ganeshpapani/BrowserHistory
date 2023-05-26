import './index.css'

const HistoryItem = props => {
  const {historyItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyItem

  return (
    <li className="history-list-con">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="image" alt={title} />
      <p className="para"> {title}</p>
      <p className="url"> {domainUrl}</p>
    </li>
  )
}

export default HistoryItem
