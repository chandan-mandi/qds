import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
const GA_TRACKING_ID = 'UA-135304077-1';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }


  }


  render() {
    return (
      <Html lang="en">
        <Head>

          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}

          <link rel="shortcut icon" type="image/png" href="/assets/images/favicon.webp" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/slick.css" />
          <link rel="stylesheet" type="text/css" href={`/assets/css/custom.css?${new Date().getTime()}`} />
          <link rel="stylesheet" type="text/css" href="/assets/css/stepform.css" />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />

          {/* Apple Touch icon */}
          
          <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png"/>

          {/* Font */}
            <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet"></link>

          {/* fontawesome icons */}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
          <script src="/assets/js/slick.min.js"></script>
          <script src="/assets/js/custom.js"></script>
          {/*<script id="ze-snippet"
    src="https://static.zdassets.com/ekr/snippet.js?key=82023f82-6878-444a-80a9-3f35714bfa79"></script>*/}

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
            `
            }}
          />

          {/*<script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  window._insp = window._insp || [];
                  __insp.push(['wid', 1160613352]);
                  var ldinsp = function(){
                    if(typeof window._inspld != "undefined") return; window._inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1160613352&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
                    setTimeout(ldinsp, 0);
                })();
              `
            }}
          />*/}

          <script
            dangerouslySetInnerHTML={{
              __html: `
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/5f8371244704467e89f68498/default';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                  })();
              `
            }}
          />

        </Head>
        <body>
          <div className="page-loader">
            <div className="clock" />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
