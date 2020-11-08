import React from "react";
import Head from "next/head";

import Layout from "../components/layout";

const About = (props) => {
    return (
        <Layout>
            <Head>
                <title>XReactive-Tutorials on JavaScript, React, Angular and more</title>
                <meta name="description" content="Tutorials on JavaScript, React, Angular and more" />
            </Head>
            <h3 className="head-a">About</h3>
            {/* <h5 className="mt-4 mb-4 head-a">I’m a fullstack developer from Pakistan.</h5> */}
            <p className="text-a">
                I am professional full stack developer. I take difficult problems in programming as challenge and love to solve them.
                It's my passion to convert real world logic into code, which thurst me to write elegant and proficient structural code.
            </p>
            <p className="text-a">
                I develop applications in Angular, React, ASP.Net, Express.js, Azure Core, Amazon AWS, Dockers, MongoDB and SQL Server technologies
            </p>
            {/* <p className="text-a">
                I develop applications in following technologies
                <ul>
                    <li>Angular</li>
                    <li>React</li>
                    <li>ASP.Net Core</li>
                    <li>Express.js</li>
                    <li>Azure</li>
                    <li>Amazon AWS</li>
                    <li>Dockers</li>
                    <li>MongoDB</li>
                    <li>SQL Server</li>
                </ul>
            </p> */}
            <p className="text-a">you can find me on twitter <a href="https://twitter.com/babirali001" target="_blank">@babirali001</a></p>
            <br />
            <p className="text-a">The source code of this blog is open source you can find it on GitHub and start bloging <a href="https://github.com/babirali/xreactive-blog" target="_blank">Code</a>.</p>
        </Layout>
    );
};

export default About;
