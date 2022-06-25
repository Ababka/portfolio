import './home.css';

function Home() {
  return (
    <div>
      <nav className='navBar'>
        <ul>
          <li>
            <a href='.intro'>
              <span className='icon'>
                <img src='home.svg' alt='Home Image'></img> //this img is broken
              </span>
              <span className='text'>Home</span>
            </a>
          </li>
          <li>
            <a href='.portfoilio'>
              <span className='icon'>
                <img src='portfolio.svg' alt='Portfolio Image'></img> //this img is broken
              </span>
              <span className='text'>Portfolio</span>
            </a>
          </li>
          <li>
            <a href='.contacts'>
              <span className='icon'>
                <img src='contact.svg' alt='Contact Image'></img> //this img is broken
              </span>
              <span className='text'>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className='intro'>
          <div className='title'>I am a</div>
            <ul className='typeTitles'>
              <li><span className='sd'>Software Developer</span></li>
              <li><span className='m'>Maker</span></li>
              <li><span className='ce'>Car Enthusiast</span></li>
              <li><span className='joke'>Badass ;)</span></li>
            </ul>
      </div>
    </div>
  )
}

export default Home;