import { startCase } from 'lodash'

const TopItem = (props) =>
  <table align="left" cellPadding={0} cellSpacing={0} className="gowide" style={{ borderCollapse: 'collapse' }} width="100%">
    <tbody>
      <tr>
        <td className="issue-top-items">
          <div className="issue-top-items__title">
            <a className="issue-top-items__link" target="_blank" href={props.sourceUrl}>{startCase(props.title)}</a>
          </div>
          <div className="issue-top-items__description">{props.description}</div>
          <div className="issue-top-items__source">{props.source}</div>
        </td>
      </tr>
    </tbody>
  </table>

export default TopItem
