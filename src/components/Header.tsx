import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdClose, MdMenu } from "react-icons/md";

import LanguageSwitch from './LanguaugeSwitch';

import classes from './Header.module.css';

function Header() {
  const { t } = useTranslation();

  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <>
      <header>
        <nav>
          <input type="checkbox" id={classes.menucheck} checked={checkbox} onChange={(e) => setCheckbox(e.currentTarget.checked)} />
          <label htmlFor={classes.menucheck} className={classes.opensidebar}>
            <MdMenu />
          </label>
          <label htmlFor={classes.menucheck} className={classes.overlay}></label>
          <ul className={classes.links}>
            <label htmlFor={classes.menucheck} className={classes.closesidebar}>
              <MdClose />
            </label>
            
            <li><NavLink onClick={() => setCheckbox(false)} to='/' className={({isActive}) => isActive ? classes.active : ''}>{t('Header.Home')}</NavLink></li>
            <li><NavLink onClick={() => setCheckbox(false)} to='/projects' className={({isActive}) => isActive ? classes.active : ''}>{t('Header.Projects')}</NavLink></li>
          </ul>
        </nav>
        <LanguageSwitch />
      </header>
    </>
  );
}

export default Header;
