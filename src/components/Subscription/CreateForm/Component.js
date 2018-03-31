const CreateForm = () =>
  <div className="container">
    <h1 className="mt-65 center mb-35 title">
      <a href="/hellstrmlundin">Invasion of the flying wizard</a>
    </h1>
    <h2 className="mb-35 center subtitle">Quibusdam Vel Debitis Nihil Et A Nihil Aut Autem. Laudantium Sit Molestias Labore Ut. Itaque Et Ut Dignissimos Reiciendis. Veritatis Voluptatibus Enim Quia Autem Repellat Molestiae Fugiat Tenetur. Maiores Ab At Esse Atque Id.</h2>
    <div className="mb-25">
      <div className="flex-wrap">
        <form className="simple_form inline AVAST_PAM_nonloginform" noValidate="novalidate" id="new_subscription" action="/hellstrmlundin/subscriptions" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" defaultValue="✓" /><input type="hidden" name="authenticity_token" defaultValue="xdhq/CWcYQa/VJg47iCYrvQO9JzTWV0hPs3D4Vyrb6c/MXggQqPG7ZNnLdlmaJBdfI0leIKZ6FsL+8Um8o4Kkw==" /><div className="mr-20 grow-1"><div className="input email required subscription_email"><input className="control-label input-label string email required form-control" autofocus="autofocus" type="email" name="subscription[email]" id="subscription_email" /></div></div>
          <input type="submit" name="commit" defaultValue="Subscribe" className="btn btn btn-blue-gradient" data-disable-with="Subscribe" />
        </form>
      </div>
    </div>
    <div className="description font-16 mt-20 mb-25 center">
      Check out our latest <a href="/hellstrmlundin/issues/occaecati-id-fugit-voluptatum-omnis-fugiat-qui-assumenda">Issue #10</a> for a sample of what we're about
        </div>
    <div className="bottom font-16 center">
      <a className="btn" href="/hellstrmlundin/issues">← Archive</a>
    </div>
  </div>

export default CreateForm
