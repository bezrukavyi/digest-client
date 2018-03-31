const Iphone = (props) =>
  <div className="iphone">
    <div className="iphone-top">
      <span className="camera" />
      <span className="sensor" />
      <span className="speaker" />
    </div>
    <div className="top-bar" />
    <div className="iphone-screen">
      { props.children }
    </div>
    <div className="buttons">
      <span className="on-off" />
      <span className="sleep" />
      <span className="up" />
      <span className="down" />
    </div>
    <div className="bottom-bar" />
    <div className="iphone-bottom">
      <span />
    </div>
  </div>

export default Iphone
