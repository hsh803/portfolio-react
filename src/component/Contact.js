import React from 'react';
import Footer from './Footer';

function Contact () {
    return(
        <div className="container">
            <div className="section">
                <h3 className="section-box3">Email</h3>
                <p>hsh803@hotmail.com</p>
                <p>- You can reach me at e-mail for projects in Web Developement/Web Design.</p> 
            </div>

            <div className="section">
                <h3 className="section-box3">LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/hanna-han-10094786/" target="_blank" rel="noopener noreferrer">Link</a> to LinkedIn</p>
                <p>- You can find more information about my education, job experiences and activities at LinkedIn.</p>  
            </div>
            <Footer className="footer1" />
        </div>
    )
}

export default Contact;