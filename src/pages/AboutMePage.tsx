import { useTranslation } from 'react-i18next';


import classes from './AboutMePage.module.css';


function AboutMePage() {
  const { t } = useTranslation();

  return (
    <main className={classes.main}>
      <section className={classes.titlecard}>
        <h1>{t('Pages.About.Title')}</h1>
      </section>
      <section>
        <h2>{t('Pages.About.FreeTime.Title')}</h2>
        <div className={classes.cardgrid}>
          <div>
            <h3>{t('Pages.About.FreeTime.Gaming.Title')}</h3>
            <ul>
              <li><p>{t('Pages.About.FreeTime.Gaming.n1')}</p></li>
              <li><p>{t('Pages.About.FreeTime.Gaming.n2')}</p></li>
              <li><p>{t('Pages.About.FreeTime.Gaming.n3')}</p></li>
            </ul>
          </div>
          <div>
            <h3>{t('Pages.About.FreeTime.Music.Title')}</h3>
            <p>{t('Pages.About.FreeTime.Music.Two')}</p>
            <ul>
              <li><p>{t('Pages.About.FreeTime.Music.n1')}</p></li>
              <li><p>{t('Pages.About.FreeTime.Music.n2')}</p></li>
            </ul>
            <p>{t('Pages.About.FreeTime.Music.Story')}</p>
          </div>
          <div>
            <h3>{t('Pages.About.FreeTime.CTF.Title')}</h3>
            <p>{t('Pages.About.FreeTime.CTF.Cont')}</p>
          </div>
          <div>
            <h3>{t('Pages.About.FreeTime.Drawing.Title')}</h3>
            <p>{t('Pages.About.FreeTime.Drawing.Cont')}</p>
            <p>{t('Pages.About.FreeTime.Drawing.Bad')}</p>
          </div>
          <div>
            <h3>{t('Pages.About.FreeTime.Sports.Title')}</h3>
            <ul>
              <li><p>{t('Pages.About.FreeTime.Sports.n1')}</p></li>
              <li><p>{t('Pages.About.FreeTime.Sports.n2')}</p></li>
            </ul>
            <p>{t('Pages.About.FreeTime.Sports.Weekly')}</p>
          </div>
          <div>
            <h3>{t('Pages.About.FreeTime.Anything.Title')}</h3>
            <p>{t('Pages.About.FreeTime.Anything.Cont')}</p>
            <p>{t('Pages.About.FreeTime.Anything.All')}</p>
          </div>
        </div>
      </section>
      <section className={classes.currentwork}>
        <h2>{t('Pages.About.Current.Title')}</h2>
        <div className={classes.currentworkcenter}>
          <p>{t('Pages.About.Current.Cont')}</p>
        </div>
      </section>
      <section>
        <h2>{t('Pages.About.Favourites.Title')}</h2>
        <ul>
          <li><p>{t('Pages.About.Favourites.Fastfood')}</p></li>
          <li><p>{t('Pages.About.Favourites.Game')}</p></li>
          <li><p>{t('Pages.About.Favourites.TVShow')}</p></li>
          <li><p>{t('Pages.About.Favourites.Alcohol')}</p></li>
          <li><p>{t('Pages.About.Favourites.Nihility')}</p></li>
        </ul>
      </section>
    </main>
  );
}


export default AboutMePage;
