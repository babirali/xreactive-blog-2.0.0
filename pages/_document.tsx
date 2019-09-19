import Document, { Head, Main, NextScript } from "next/document";

// import 'bootstrap/dist/css/bootstrap.min.css';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="stylesheet" href="/static/css/style.css" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-icons/favicon.ico"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}