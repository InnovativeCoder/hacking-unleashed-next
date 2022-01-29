import Document, { Head, Html, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="msvalidate.01" content="1E96135EB9697AE5E0A7B5DC0F0D7BA0" />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    {/* <!-- Start of Async ProveSource Code --> */}
                    <script type="text/javascript" dangerouslySetInnerHTML={{
                        __html: `
                    !function(o,i){window.provesrc && window.console && console.error && console.error("ProveSource is included twice in this page."), provesrc = window.provesrc = { dq: [], display: function () { this.dq.push(arguments) } }, o._provesrcAsyncInit = function () { provesrc.init({ apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2MWYwMmU1MzYyYWZjMjI3YWM0YjY0YTMiLCJpYXQiOjE2NDMxMzA0NTJ9.TuIYSXwtlwuMUR4Zwv3GMoVPNCo8Z9oyN9gxrh9uJl4", v: "0.0.4" }) };var r=i.createElement("script");r.type="text/javascript",r.async=!0,r["ch"+"ar"+"set"]="UTF-8",r.src="https://cdn.provesrc.com/provesrc.js";var e=i.getElementsByTagName("script")[0];e.parentNode.insertBefore(r,e)}(window,document)
                    `,
                    }}
                    />
                    {/* <!-- End of Async ProveSource Code --> */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />

                    {/* Microsoft Clarity */}
                    <script type="text/javascript" dangerouslySetInnerHTML={{
                        __html: `
                        (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "5gjtxwb8jb");
                        `}}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}