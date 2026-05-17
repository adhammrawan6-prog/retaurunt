import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id='footer'>

      <div className="footer-logo">
        <h2>Foodie</h2>
        <p>Delicious food everyday 🍔</p>
      </div>

      <ul className="footer-links">
        <li><a href="#Hero">Home</a></li>
        <li><a href="#Menu">Menu</a></li>
     
        <li><a href='#footer'>Contact</a></li>
      </ul>

      <div className="footer-contact">
        <p>+20 123 456 789</p>
        <p>foodie@gmail.com</p>
      </div>

      <div className="footer-social">
      </div>

    </footer>
  )
}

export default Footer