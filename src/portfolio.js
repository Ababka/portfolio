import './style/animation.css';
import test from './img/test.png';

function Portfolio() {
    return (
        <div className='portfolio'>
            <h3>These are some of my projects.. my babbies.. my pride and joys..</h3>
                <div className='babbies'>
                    <div className='projects'>
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                    </div>
                    <div className='projects'>
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                    </div>
                    <div className='projects'>
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                    </div>
                    <div className='projects'>
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                        <img className='image' src={test} />
                    </div>
                </div>
        </div>
    )
}

export default Portfolio;