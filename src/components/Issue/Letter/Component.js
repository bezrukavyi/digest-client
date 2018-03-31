import Link from 'next/link'
import Parts from './Parts'

const Letter = () =>
  <div className="issue-html">
    <Parts.Style />
    <table className="issue-html__table">
      <tbody>
        <tr>
          <td align="center" valign="top">
            <table className="container">
              <tbody>
                <Parts.Header />
                <tr>
                  <td className="issue-html__content">
                    <Parts.Description />
                    <Parts.TopItem />
                    <Parts.TopItem />
                    <Parts.TopItem />
                    <Parts.TopItem />
                    <Parts.SubTitle />
                    <Parts.SubTitle />
                    <Parts.SubTitle />
                    <Parts.Footer />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

export default Letter

