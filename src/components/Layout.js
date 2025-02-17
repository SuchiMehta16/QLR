import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Header from "../components/common/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import "./all.scss"
import favicon from "../images/favicon.png"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="QL-Resources"
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <Helmet>
      <meta
        name="google-site-verification"
        content="jKISjo3LeS2Bf8cf2XHd0BXy6muyMu6dj7vKpm1IIFU"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      />

      {/* jquery */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src={withPrefix("js/main.js")}></script>
    </Helmet>
    <Header />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
