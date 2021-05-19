import React from 'react';
import Footer from './Footer';

function About () {
    return(
    <div className="container">
        <div className="section">
            <h3 className="section-box1">Job Expreience</h3>
            
                <ul>
                    <li>Web Developer, Freelancer, 2020 - now</li>
                    <li>Content Management & Workflow Specialist, Norstedts Juridik, 2016 - now</li>
                    <li>Sales Coordinator, Kia Motors Sweden AB, 2014 - 2015</li>
                    <li>Course Director, Medborgarskolan, 2014</li>
                </ul>
            
        </div>

        <div className="section">
            <h3 className="section-box1">Education</h3>

                <ul>
                    <li>Web programming and Database, Blekinge Tekniska Högskola (BTH), 2019 - 2020</li>
                    <p>- Languages: HTML, CSS(LESS/SASS), Javascript, SQL, PHP</p>
                    <p>- Techniques: Node.js, Express, MySQL, GitHub(Git)</p>
                    <li>Bachelor of Business Economy, Hankuk University of Foreign Studies (HUFS), 2008 - 2013</li>
                    <li>Bachelor of Swedish, Hankuk University of Foreign Studies (HUFS), 2008 - 2013</li>
                </ul>

        </div>
        <Footer className="footer2" />
</div>
    )
}

export default About;