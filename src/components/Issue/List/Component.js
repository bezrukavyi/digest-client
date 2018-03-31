const Item = () =>
  <div className="issues-card__wrap">
    <a className="issues-card " href="/hellstrmlundin/issues/occaecati-id-fugit-voluptatum-omnis-fugiat-qui-assumenda">
      <div className="issues-card__header">
        <div className="issues-card__release">#10</div>
        <div className="issues-card__date">March  4, 2018</div>
      </div>
      <div className="issues-card__name">Occaecati id fugit voluptatum omnis fugiat qui assumenda.</div>
    </a>
  </div>

const List = () =>
  <div className="issues-card__container">
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </div>

export default List
