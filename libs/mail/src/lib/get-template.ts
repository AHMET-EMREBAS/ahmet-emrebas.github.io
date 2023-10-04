export const getTemplate = ({ subject, text, code, appName, domain }: any) => `
<div style="min-width: 100%; background-color: rgb(53, 165, 141);">
  <div
    style="
      position: relative;
      background-color: rgba(0, 0, 0, 0.9);
      border-bottom: 10px solid rgba(0, 0, 0, 0.9);
      min-width: 300px;
      max-width: 600px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      margin:auto;
    "
  >
    <div style="padding-left: 20px">
      <img
        src="${domain}/assets/icons/icon-192x192.png"
        alt="logo"
      />
    </div>

    <div
      style="
        background-color: #f3f1f1;
        color: rgba(0, 0, 0, 0.74);
        padding: 20px;
        border-radius: 10px;
        border-left: 5px solid rgba(0, 0, 0, 0.9);
        border-right: 5px solid rgba(0, 0, 0, 0.9);
        margin: auto;
      "
    >
      <h3>${subject}</h3>
      <hr />

      <div>${text}</div>

      <div style="height: 30px"></div>

      ${
        code
          ? `
      <div>
        <code
          style="
            padding: 10px;
            border: 2px dashed rgba(0, 0, 0, 0.9);
            background-color: gray;
            color: white;
            min-width: 300px;
            font-family: 'Courier New', Courier, monospace;
          "
        >
          ${code}
        </code>
      </div>
      `
          : ''
      }
    </div>

    <div
      style="
        background-color: rgb(49, 170, 65);
        margin-top: 30px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        min-height: 100px;
        padding: 20px;
        border-top: 10px solid white;
        border-left: 10px solid white;
        margin-left: 10px;
        width: 80%;
        border-right: 10px dashed white;
        border-bottom: 10px solid white;
      "
    >
      <table>
        <tr>
          <td>
            <a
              href="${domain}"
              style="text-decoration: none; color: white; overflow: visible"
              target="_blank"
              data-saferedirecturl="https://www.google.com/url?q=${domain}"
            >
              <div
                style="
                  border: 1px solid white;
                  background-color: rgba(0, 0, 0, 0.9);

                  padding: 10px;
                  border-radius: 10px;
                  width: 100px;
                  text-align: center;
                "
              >
                Visit Us
              </div>
            </a>
          </td>
          <td style="padding-left: 30px; color: white" rowspan="3">
            <div>This email is sent by ${appName}</div>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="${domain}/auth/login"
              style="text-decoration: none; color: white; overflow: visible"
              target="_blank"
              data-saferedirecturl="https://www.google.com/url?q=${domain}/auth/login"
            >
              <div
                style="
                  border: 1px solid white;
                  background-color: rgba(0, 0, 0, 0.9);
                  padding: 10px;
                  border-radius: 10px;
                  width: 100px;
                  text-align: center;
                "
              >
                Login
              </div>
            </a>
          </td>
          <td style="padding-left: 30px; color: white"></td>
        </tr>
      ${
        code
          ? `
        <tr>
        <td>
          <a
            href="${domain}/auth/login-with-code/?code=${code}"
            style="text-decoration: none; color: white; overflow: visible"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?q=${domain}/auth/login-with-code/?code=${code}"
          >
            <div
              style="
                border: 1px solid white;
                background-color: rgba(0, 0, 0, 0.9);

                padding: 10px;
                border-radius: 10px;
                width: 100px;
                text-align: center;
              "
            >
              Login With Code
            </div>
          </a>
        </td>
      </tr>
        `
          : ''
      }
      </table>
    </div>
  </div>
</div>
`;
