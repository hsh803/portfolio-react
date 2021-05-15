import React from 'react';
import Footer from './Footer';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import ProgressBar from './ProgressBar';

function Project () {

    const HtmlCssJs = {
        background: 'url(/portfolio-react/image/htmlcssjs.png) center / contain no-repeat content-box'
    }

    const Nodejs = {
        background: 'url(/portfolio-react/image/nodejs&express&mysql.png) center / contain no-repeat content-box'
    }

    const Rea = {
        background: 'url(/portfolio-react/image/react.png) center / contain no-repeat content-box'
    }

    const NodejsRea = {
        background: 'url(/portfolio-react/image/nodejs&mysql&react.png) center / contain no-repeat content-box'
    }

    const lgh11 = {
        background: 'url(/portfolio-react/image/lgh11.png) center / contain no-repeat content-box'
    }

    return(
    <div className="container">
        <div className="section">
        <h3 className="section-box2">Languages</h3> 

        <div className="box">      
                <h6>HTML/CSS</h6>
                <ProgressBar percent="90" />      
            </div>        
            <div className="box">
                <h6>Javascript</h6>
                <ProgressBar percent="90" />      
            </div>
            
            <div className="box">
                <h6>SQL</h6>
                <ProgressBar percent="65" />      
            </div>
            
            <div className="box">
                <h6>XML</h6>
                <ProgressBar percent="60" />      
            </div>
        </div>

        <div className="section">
        <h3 className="section-box2">Techniques</h3>

            <div className="box">
                <h6>Node.js/Express</h6>
                <ProgressBar percent="60" />      
            </div>
        
            <div className="box">
                <h6>React</h6>
                <ProgressBar percent="55" />      
            </div>

            <div className="box">
                <h6>Wordpress</h6>
                <ProgressBar percent="85" />      
            </div>
        </div>

        <div className="section">
        <h3 className="section-box2">Project list</h3>
            
        <Card shadow={3} className="card-box">
            <CardTitle expand style={HtmlCssJs} />
            <CardText>Form Template</CardText>
            <CardActions border>
                <Button colored href="https://hsh803.github.io/form-template-js" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/form-template-js" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>

        <Card shadow={3} className="card-box">
            <CardTitle expand style={HtmlCssJs} />
            <CardText>Tip calculator</CardText>
            <CardActions border>
                <Button colored href="https://hsh803.github.io/tip-calculator" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/tip-calculator" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>

        <Card shadow={3} className="card-box">
            <CardTitle expand style={HtmlCssJs} />
            <CardText>To do list</CardText>
            <CardActions border>
                <Button colored href="https://hsh803.github.io/to-do-list" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/to-do-list" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>

        <Card shadow={3} className="card-box">
            <CardTitle expand style={Nodejs} />
            <CardText>Form template</CardText>
            <CardActions border>
                <Button colored href="https://form-template-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/form_nodejs" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>

        <Card shadow={3} className="card-box">
            <CardTitle expand style={Nodejs} />
            <CardText>Vocabulary note</CardText>
            <CardActions border>
                <Button colored href="https://vocabulary-note-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/vocabulary-note" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>

        <Card shadow={3} className="card-box">
            <CardTitle expand style={Nodejs} />
            <CardText>Bank account</CardText>
            <CardActions border>
                <Button colored href="https://account-tracking-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/account" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card> 

        <Card shadow={3} className="card-box">
            <CardTitle expand style={Rea} />
            <CardText>Portfolio</CardText>
            <CardActions border>
                <Button colored href="https://hsh803.github.io/portfolio-react/" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/portfolio-react" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>
        
        <Card shadow={3} className="card-box">
            <CardTitle expand style={Rea} />
            <CardText>Quiz Creator</CardText>
            <CardActions border>
                <Button colored href="https://hsh803.github.io/quiz-react/" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/quiz-react" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>  

        <Card shadow={3} className="card-box">
            <CardTitle expand style={Rea} />
            <CardText>MeMe Generator</CardText>
            <CardActions border>
                <Button colored href="https://hsh803.github.io/meme-react/" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/meme-react" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>

        <Card shadow={3} className="card-box">
            <CardTitle expand style={NodejsRea} />
            <CardText>Date Booking app</CardText>
            <CardActions border>
                <Button colored href="https://date-booking-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/booking-app" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>

        <Card shadow={3} className="card-box">
            <CardTitle expand style={lgh11} />
            <CardText>E-commerce website</CardText>
            <CardActions border>
                <Button colored href="https://lgh11.com/" target="_blank" rel="noopener noreferrer">Live in browser</Button>
                <Button colored href="https://github.com/hsh803/ecommerce-website" target="_blank" rel="noopener noreferrer">Code in Github</Button>
            </CardActions>
        </Card>
          
    </div>
        <Footer className="footer2" />
</div>
    )
}

export default Project;