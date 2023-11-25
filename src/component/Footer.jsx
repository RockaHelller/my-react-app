import '../Style/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>Copyright &#169; {new Date().getFullYear()}</p>
                    <p>Designed with ❤️ by Murad Jafarov</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;