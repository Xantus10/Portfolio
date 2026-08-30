import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageSwitch from './LanguaugeSwitch';

import classes from './Header.module.css';

function Header() {
  const { t } = useTranslation();

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><NavLink to='/' className={({isActive}) => isActive ? classes.active : ''}>{t('Header.Home')}</NavLink></li>
            <li><NavLink to='/projects' className={({isActive}) => isActive ? classes.active : ''}>{t('Header.Projects')}</NavLink></li>
          </ul>
        </nav>
        <LanguageSwitch />
      </header>
    </>
  );
}

export default Header;
