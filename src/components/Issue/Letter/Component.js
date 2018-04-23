import Link from 'next/link'
import Parts from './Parts'
import { map } from 'lodash'

const Letter = (props) => {
  const { issue, subtitles, subtitlesItems, topItems } = props

  return (
    <div className="issue-html">
      <Parts.Style />
      <table className="issue-html__table">
        <tbody>
          <tr>
            <td align="center" valign="top">
              <table className="container">
                <tbody>
                  <Parts.Header issue={issue} />
                  <tr>
                    <td className="issue-html__content">

                      <Parts.Description issue={issue} />

                      {
                        map(topItems, (item, key) => (
                          <li key={key}>
                            <Parts.TopItem {...item} />
                          </li>
                        ))
                      }

                      {
                        map(subtitles, (subtitle, key) => (
                          <li key={key}>
                            <Parts.SubTitle subtitle={subtitle} subtitlesItems={subtitlesItems[subtitle.id]} />
                          </li>
                        ))
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Letter

