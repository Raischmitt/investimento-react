import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <div>
            <header id="header">
                <img src={logo} alt="logo showing a money bag" />
                <h1>Investment Calculator</h1>
            </header>
        </div>
    );
}