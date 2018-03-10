const MailingList = ({ increment, value }) => (
  <div>
    {Object.keys(value).map((name) =>
      <li key={name}>{name} : {value[name]}</li>
    )}
    <button onClick={() => increment(value.id)}>Increment</button>
  </div>
)

export default MailingList
