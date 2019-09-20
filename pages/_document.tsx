import Document, { Head, Main, NextScript } from "next/document";

// import 'bootstrap/dist/css/bootstrap.min.css';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

                    <link rel="apple-touch-icon" sizes="57x57" href="/static/img/favicon-icons/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/img/favicon-icons/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/static/img/favicon-icons/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/img/favicon-icons/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/static/img/favicon-icons/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/static/img/favicon-icons/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/static/img/favicon-icons/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/img/favicon-icons/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon-icons/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/static/img/favicon-icons/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/img/favicon-icons/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-icons/favicon-16x16.png" />
                    <link rel="manifest" href="/static/img/favicon-icons/manifest.json" />

                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css?family=Patua+One&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Teko&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="/static/css/style.css" />
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}