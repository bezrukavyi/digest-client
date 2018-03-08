const MailingList = (props) => (
  <div>
    <p>{props.value}</p>
    <button onClick={props.increment}>Increment</button>
  </div>
)

export default MailingList
