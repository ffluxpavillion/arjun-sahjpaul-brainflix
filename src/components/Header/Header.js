import './Header.scss';
import './Header.scss';
import Logo from '../../assets/Logo/BrainFlix-logo.svg';
import Search from '../../assets/Icons/search.svg';
import Upload from '../../assets/Icons/upload.svg';

function Header(props) {
	return (
		<header className="header">
			<img className="header__logo" src={Logo} alt="brainflix logo"></img>
			<form className="header__form">
				<div className="header__wrapper">
					<input
						className="header__search"
						type="search"
						placeholder="Search"
					></input>
					<img
						className="header__searchIcon"
						src={Search}
						alt="Search Icon"
					></img>
				</div>
				<div className="header__avatar small-screen"></div>
				<div className="header__form-bottom">
					<button className="header__button" type="submit">
						<img
							className="header__uploadIcon"
							src={Upload}
							alt="Search Icon"
						></img>
						UPLOAD
					</button>
					<div className="header__avatar large-screen"></div>
				</div>
			</form>
		</header>
	);
}
export default Header;
