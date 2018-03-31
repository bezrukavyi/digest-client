const Style = () =>
  <style dangerouslySetInnerHTML={{__html: `
      body, table, td, p, a, li, blockquote { 
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100% 
      }
      table, td {
        mso-table-rspace: 0pt;
        mso-table-lspace: 0pt 
      }
      img { 
        -ms-interpolation-mode: bicubic 
      }
      table {
        border-spacing: 0;
        mso-table-lspace: -1pt;
        mso-table-rspace: -1pt;
        border-collapse: collapse !important 
      }
      
      table.container {
        border: 0;
        cellpadding: 0;
        cellspacing: 0;
        style: "border-collapse: collapse";
        width: 600;
      }
      
      @media screen and (max-width: 600px) {
        body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: none !important }
        body { 
          width: 100% !important; 
          min-width: 100% !important 
        }
        .nomo { 
          display: none; 
        }
        .lonmo { 
          text-align: left !important; 
        }
        .gowide { 
          width: 100%; 
        }
        .container { 
          width: auto !important; 
        }
      }
      .issue-html {
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
      }
      .issue-html__table {
        background: #fff;
        border: 0;
        cellpadding: 0;
        cellspacing: 0;
        width: 100%;
      }
      .issue-html__header {
        background: -webkit-gradient(linear, left top, left bottom, from(#2898fb), to(#0171fd)) !important;
        background: linear-gradient(#2898fb, #0171fd) !important;
        color: #fff;
        padding: 10px;
      }
      .issue-html__header .title {
        font-size: 24px;
        color: #ffffff;
        font-weight: bold;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
      }
      .issue-html__header .subtitle {
        font-size: 16px;
      }
      .issue-html__header .date {
        font-size: 16px;
        font-weight: normal;
        color: #ffffff;
      }
      .issue-html__header td.block {
        align: "left";
      }
      .issue-html__content {
        align: "left";
        padding: 15px;
        background: #fff;
      }
      .issue-html__content .description {
        margin-top: 0;
        font-size: 1.15em;
        line-height: 1.5em;
        padding-top: 0;
        margin-bottom: 15px;
      }
      .issue-top-items__source {
        color: #a4a6a8;
        font-weight: bold;
        font-size: 10px;
        line-height: 14px;
        margin-bottom: 5px;
        text-transform: uppercase;
      }
      .issue-top-items {
        padding-bottom: 15px;
      }
      .issue-top-items__title {
        font-size: 18px;
        margin: 2px 0px;
        margin-bottom: 10px;
      }
      .issue-top-items__link {
        display: block;
        color: #2898fb;
        line-height: 24px;
        text-decoration: underline;
        font-weight: normal;
        width: max-content;
      }
      .issue-top-items__description {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 10px;
      }
      .issue-subtitle {
        padding-bottom: 15px;
      }
      .issue-subtitle__name {
        color: #0171fd;
        font-size: 18px;
        font-weight: 500;
        margin-top: 24px;
        margin-bottom: 10px;
      }
      .issue-subtitle__list {
        position: relative;
        padding-left: 18px;
        margin-top: 10px;
        list-style-type: none;
        overflow: auto;
      }
      .issue-subtitle__list:after {
        display: block;
        content: '';
        width: 2px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #9a9a9a1a;
      }
      .issue-subtitle__title {
        color: #ee5533;
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 10px;
      }
      .issue-subtitle__description {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 10px;
      }
      .issue-subtitle__source {
        color: #a4a6a8;
        font-weight: bold;
        font-size: 10px;
        line-height: 14px;
        text-transform: uppercase;
      }
      .issue-subtitle__link {
        color: #2898fb;
        display: block;
        line-height: 24px;
        text-decoration: underline;
        font-weight: normal;
        width: max-content;
      }
      .issue-footer {
        padding: 15px 0;
        background-color: #f1f1f1;
        text-align: center;
      }
      .issue-footer__link {
        color: #cecece;
        width: 100%;
        font-size: 13px;
        text-decoration: none;
      }
    `}}
  />

export default Style
