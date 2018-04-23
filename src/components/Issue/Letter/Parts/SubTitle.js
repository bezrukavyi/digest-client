import { map, startCase } from 'lodash'

const SubTitle = ({ subtitle, subtitlesItems}) =>
  <div>
    <p className="issue-subtitle__name">{subtitle.name}</p>
    <ul className="issue-subtitle__list">
      <li>
        <table align="left" cellPadding={0} cellSpacing={0} className="gowide" style={{ borderCollapse: 'collapse' }} width="100%">
          <tbody>
            {
              map(subtitlesItems, (item, key) => (
                <tr key={key}>
                  <td className="issue-subtitle">
                    <div className="issue-subtitle__title">
                      <a className="issue-subtitle__link" target="_blank" href={item.sourceUrl}>{startCase(item.title)}</a>
                    </div>
                    <div className="issue-subtitle__description">{item.descritpion}</div>
                    <div className="issue-subtitle__source">{item.source}</div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </li>
    </ul>
  </div>

export default SubTitle
