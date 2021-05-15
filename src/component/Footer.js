import React from 'react';

function Footer (props) {
    return(
        <div className={props.className}>
            <a href="https://www.linkedin.com/in/hanna-han-10094786" target="_blank" rel="noopener noreferrer">LinkedIn</a> {' '}
            <a href="https://github.com/hsh803" target="_blank" rel="noopener noreferrer">GitHub</a> {' '}
            Email: hsh803@hotmail.com
        </div>
    )
}

export default Footer;