const Header = () =>
  <div className="row mt-35">
    <div className="col-md-auto mb-35 mr-auto mailing-list-title">
      <a href="/hellstrmlundin">Invasion of the flying wizard</a>
    </div>
    <div className="col-md-auto mb-35">
      <div className="row align-items-center">
        <div className="col"><a className="header-link" href="/hellstrmlundin/issues">Archive</a></div>
        <div className="col"><a className="header-link active" href="/hellstrmlundin/issues/occaecati-id-fugit-voluptatum-omnis-fugiat-qui-assumenda">Latest</a></div>
        <div className="col"><a className="header-link" href="/hellstrmlundin/issues.rss">RSS</a></div>
        <div className="col"><a className="btn btn-blue-gradient" href="/hellstrmlundin">Subscribe</a></div>
      </div>
    </div>
  </div>

export default Header
