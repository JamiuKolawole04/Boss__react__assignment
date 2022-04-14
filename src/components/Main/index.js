import Access from '../Access';
import img1 from '../../asset/Pebble People.svg';
import img2 from '../../asset/Pebble.svg';
import Balloon from '../../asset/Ballon_group.svg';
import './styles/main.css';


const Main = () => {
    return (
        <main className="flex column">
            <div className="d-flex row justify-content-between sm-column-reverse md-text-center align-items-center">
                <div className='sm-mt-12'>
                    <h1 className="header__text">Share, We Care</h1>
                    <p className='header__subtext' >Comforta provides seamless counselling & therapeutic <br /> platform that puts in mind your privacy, confidentiality, and <br />
                        sound state of mind.
                    </p>
                    <button className='btn1 early__access'> <span>Get early access</span></button>
                    <button className='btn1 waitlist'><span>Join waitlist</span></button>
                </div>
                <img
                    src={img1}
                    alt=""
                    className='img__1'
                />

            </div>

            <div className="d-flex row justify-content-between comforta__description__container sm-column ">

                <div className="comfort__balloonImg">
                    <img
                        src={img2}
                        alt="pebble-img"
                        className='img__2'
                    />

                </div>

                <div className='comforta__description__text__container mt-140 sm-mt-20'>
                    <p className='comforta__description__text'>What is Comforta?</p>
                    <p className='comforta__description__subtext'>Comforta is a harmonious platform designed to<br /> provide connection between 'comfortee' and <br /> comforta. Our platform is designed by putting in <br /> mind privacy, security and confidentiality of our <br /> users. We onboard specialists with enough <br /> experience to cater for humans emotional <br /> needs.</p>
                </div>
            </div>

            <div className="enquiry__container d-flex justify-content-between row sm-column-reverse md-text-center">
                <div>
                    <p className='enquiry__text__paragraphOne'>What do we do?</p>
                    <p className='enquiry__text__paragraphTwo'>We Provide 24/7 online pocket friendly <br /> counseling services. We match you with our best<br /> comforta professionals to give you the best <br /> counseling or therapeutic experience</p>
                    <p className='enquiry__text__paragraphThree'>We match our users to the most experienced <br /> professionals using a well thought out process <br /> guaranteed to help each individual through any<br /> situation</p>
                </div>

                <div className='balloon__container'>

                    <img
                        src={Balloon}
                        alt=""
                        className=''
                    />

                </div>

            </div>
            <Access />
        </main>
    );
}

export default Main;