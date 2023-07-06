import './portfolio.scss';
import { ReactComponent as Email } from '../../assets/email.svg';
import { ReactComponent as Download } from '../../assets/download.svg';
import IMG from '../../assets/portfolio.png';
const Portfolio = () => {
    return (
        <div className='portfolio-container'>
            <div className="portfolio-background">
                <div className="portfolio">
                    <div className="head">
                        <span className='download'>
                            <Download />
                        </span>
                        <span className='email'>
                            <Email />
                        </span>
                    </div>
                    <div className="body">
                        <div className="left-body">
                            <div className="contain-img">
                                <div className='image'/>
                            </div>
                            <div className="contain-vertical">
                                <div className="vertical-left">

                                </div>
                                <div className="vertical-right">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="right-body">
                            <div className="introduce">
                                <p className='p-hi-introduce'>Hi, I'm <span className='span-hi-introduce'>HTML5!</span></p>
                                <p className='p-1-introduce'>Powerfull Web Language</p>
                                <p className='p-2-introduce'><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
                                    Facilis, veritatis. Repellendus fugiat labore nisi cupiditate
                                    velit tenetur cum totam veritatis beatae amet sed. <b>Vitae dolorum enim est natus.</b>
                                    deleniti, nostrum itaque dolor dolores necessitatibus recusandae.
                                    <b>Tenetur culpa amet eum explicabo.</b>
                                </p>
                            </div>
                            <div className="profile">
                                <h1 className='title'>PROFILE</h1>
                                <div className='fullname-contain'>
                                    <h4 className='title-1'>FULL NAME</h4>
                                    <p className='hyper-markup'>Hypertext Markup Language</p>
                                </div>
                                <div className='date-contain'>
                                    <h4 className='title-1'>BORN</h4>
                                    <p className='date'>28 October 2014 by World Wide Web Consortium and WHATWG</p>
                                </div>
                            </div>
                            <div className="worked-with">
                                <h1 className='title'>PORTFÓLIO</h1>
                                <h4 className='title-1'>WORK WITH</h4>
                                <div className='img-workwith-contain'>
                                    <img src={IMG} alt="img" />
                                    <img src={IMG} alt="img" />
                                    <img src={IMG} alt="img" />
                                </div>
                            </div>
                            <div className="contact">
                                <h1 className='title'>CONTACT</h1>
                                <h4 className='title-1'>SEND A MESSAGES</h4>
                                <form className='form'> 
                                    <div className='form-double-contain'>
                                        <input type="text" id='firstname' placeholder='First Name' />
                                        <input type="text" id='lastname' placeholder='Last Name' />
                                    </div>
                                    <div className='form-double-contain'>
                                        <input type="email" id='email' placeholder='Email' />
                                        <input type="text" id='phone' placeholder='Phone' />
                                    </div>
                                    <div>
                                        <input type="text" id='subject' placeholder='Subject' />
                                    </div>
                                    <div>
                                        <select id="domain">
                                            <option value="">Please select your domain</option>
                                        </select>
                                    </div>
                                    <div>
                                        <textarea id="message" rows="3" placeholder='Message'></textarea>
                                    </div>
                                    <div className='check-box-contain'>
                                        <input type="checkbox" id="humancheck" />
                                        <span>I'm humans!</span>
                                    </div>
                                    <div className='button-contain'>
                                        <button type='button' className='send'>Send!</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;