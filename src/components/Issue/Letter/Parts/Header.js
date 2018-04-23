import timeFormat from 'utils/timeFormat'
import { startCase } from 'lodash'

const Header = ({issue}) =>
  <tr>
    <td className="issue-html__header">
      <table align="left" cellPadding={0} cellSpacing={0} width="100%">
        <tbody>
          <tr>
            <td className="block">
              <table align="left" className="gowide" width="50%">
                <tbody>
                  <tr>
                    <td>
                      <span className="title">{startCase(issue.name)}</span>
                      <div style={{ height: 10 }} />
                      <span className="title subtitle">#{issue.releaseNumber}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="left" className="gowide lonmo" style={{ textAlign: 'right' }} width="50%">
                <tbody>
                  <tr>
                    <td>
                      <span className="date">{timeFormat.default(issue.releaseAt)}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>

export default Header
