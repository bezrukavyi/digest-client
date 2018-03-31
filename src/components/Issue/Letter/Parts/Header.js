const Header = () =>
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
                      <span className="title">Invasion of the Flying Wizard</span>
                      <div style={{ height: 10 }} />
                      <span className="title subtitle">#10</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="left" className="gowide lonmo" style={{ textAlign: 'right' }} width="50%">
                <tbody>
                  <tr>
                    <td>
                      <span className="date">March  4, 2018</span>
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
