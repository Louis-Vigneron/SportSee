import Logo from '../../Assets/logo.png';

export default function Header (){
    return(
       <div className='header'>
        <div className='header__logo'>
            <div className='header__logo__img'>
                <img
                src={Logo}
                alt="Logo"                
                />                
            </div>
            <p className='header__logo__name'>SportSee</p>
        </div>
            <div className='header__nav'>
                <p className='header__nav__text'>Accueil</p>
                <p className='header__nav__text'>Profil</p>
                <p className='header__nav__text'>Réglages</p>
                <p className='header__nav__text'>Communauté</p>
            </div>
        
       </div>
        
    )
}