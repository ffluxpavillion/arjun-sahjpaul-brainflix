import './Header.scss';
import Logo from '../../assets/Logo/BrainFlix-logo.svg';
import Search from '../../assets/Icons/search.svg';
import UploadIcon from '../../assets/Icons/upload.svg';
import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<header className="header">
			<Link to="/">
				<img className="header__logo" src={Logo} alt="brainflix logo"></img>
			</Link>
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
						<Link to="/upload">
							<img
								className="header__uploadIcon"
								src={UploadIcon}
								alt="Search Icon"
							></img>
						</Link>
						UPLOAD
					</button>
					<div className="header__avatar large-screen"></div>
				</div>
			</form>
		</header>
	);
}
