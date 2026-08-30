import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegQuestionCircle } from "react-icons/fa";

import ExperienceCard from '../components/ExpirienceCard';
import FeaturedProject from '../components/FeaturedProject';
import SkillsDisplay from '../components/SkillsDisplay';

import maturitaimg from '../assets/maturita.png';
import pqcimg from '../assets/pqc.png';
import socimg from '../assets/soc.png';

import classes from './HomePage.module.css';

function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      <section>
        <h1>Jaroslav Žaba</h1>
        <h2 style={{textWrap: 'balance'}}>{t('Pages.Home.Subtitle')}</h2>
        <p id={classes.welcome}>{t('Pages.Home.Welcome')}</p>
      </section>
      <section className={classes.mypastcontainer}>
        <div>
          <h3>{t('Pages.Home.ExpirienceTitle')}</h3>
          <ExperienceCard experiences={[
            {from: 2025, to: 2026, title: t('Pages.Home.Expiriences.VDA_CS_Teacher.Title'), desc: t('Pages.Home.Expiriences.VDA_CS_Teacher.Desc')}
          ]} />
        </div>
        <div>
          <div>
            <h3>{t('Pages.Home.EducationTitle')}</h3>
            <ExperienceCard experiences={[
              {from: 2022, to: 2026, title: t('Pages.Home.Educations.VDA.Title'), desc: t('Pages.Home.Educations.VDA.Desc')},
              {from: 2026, to: null, title: t('Pages.Home.Educations.MUNIBc.Title'), desc: t('Pages.Home.Educations.MUNIBc.Desc')},
            ]} />
          </div>
          <div>
            <h3>{t('Pages.Home.CompetitionsTitle')}</h3>
            <ExperienceCard experiences={[
              {title: t('Pages.Home.Competitions.Kybersoutez.Title'), desc: t('Pages.Home.Competitions.Kybersoutez.Desc')},
              {title: t('Pages.Home.Competitions.NAG.Title'), desc: t('Pages.Home.Competitions.NAG.Desc')},
              {title: t('Pages.Home.Competitions.CVUT_TD.Title'), desc: t('Pages.Home.Competitions.CVUT_TD.Desc')}
            ]} />
          </div>
        </div>
      </section>
      <section>
        <h3>{t('Pages.Home.FeaturedProjectsTitle')}</h3>
        <div className={classes.projectscontainer}>
          <FeaturedProject name={t('Pages.Home.FeaturedProjects.PQClib.Name')} imgPath={pqcimg} githubUrl='https://github.com/Xantus10/python-pqc-lib' desc={[
            <p key={1}>{t('Pages.Home.FeaturedProjects.PQClib.Desc1')} <a target='_blank' href="https://csrc.nist.gov/projects/post-quantum-cryptography">NIST PQC project</a>.</p>,
            <p key={2}>{t('Pages.Home.FeaturedProjects.PQClib.Desc2')}</p>,
            <p key={3}>{t('Pages.Home.FeaturedProjects.PQClib.Desc3')} <a target='_blank' href="https://pypi.org/project/python-pqc-lib/">PyPI</a>.</p>
          ]} additionalNotes={t('Pages.Home.FeaturedProjects.PQClib.AddNotes')} />
          <FeaturedProject name={t('Pages.Home.FeaturedProjects.Maturita.Name')} imgPath={maturitaimg} githubUrl='https://github.com/Xantus10/MATURITA' desc={[
            <p key={1}>{t('Pages.Home.FeaturedProjects.Maturita.Desc1')}</p>,
            <p key={2}>{t('Pages.Home.FeaturedProjects.Maturita.Desc2')}</p>,
            <p key={3}>{t('Pages.Home.FeaturedProjects.Maturita.Desc3')} <a target='_blank' href="https://burza.vda.cz/guide.html">{t('Here')}</a>.</p>
          ]} additionalNotes={t('Pages.Home.FeaturedProjects.Maturita.AddNotes')} />
          <FeaturedProject name={t('Pages.Home.FeaturedProjects.SOC.Name')} imgPath={socimg} githubUrl='https://github.com/Xantus10/SOCAlertSim' desc={[
            <p key={1}>{t('Pages.Home.FeaturedProjects.SOC.Desc1')}</p>,
            <p key={2}>{t('Pages.Home.FeaturedProjects.SOC.Desc2')}</p>,
            <p key={3}>{t('Pages.Home.FeaturedProjects.SOC.Desc3')} <a target='_blank' href="https://xantus10.github.io/SOCAlertSim/">{t('Here')}</a>.</p>
          ]} />
        </div>
        <Link to='/projects' id={classes.otherprojects}>{t('Pages.Home.MoreProjects')} <span><FaArrowRight /></span></Link>
      </section>
      <section className={classes.flexrow}>
        <div>
          <h3>
            {t('Pages.Home.SkillsTitle')}
            <div id={classes.skillshint}>
              <FaRegQuestionCircle />
              <div id={classes.skillshinttooltip}>
                <p><span style={{color: 'green'}}>{t('Pages.Home.SkillsHint.Green')}</span> - {t('Pages.Home.SkillsHint.GreenMeaning')}</p>
                <p><span style={{color: 'yellow'}}>{t('Pages.Home.SkillsHint.Yellow')}</span> - {t('Pages.Home.SkillsHint.YellowMeaning')}</p>
              </div>
            </div>
          </h3>
          <SkillsDisplay translationBasename='Pages.Home.Skills' len={5} confidentNumber={4} />
        </div>
        <div>
          <h3>{t('Pages.Home.CertificationTitle')}</h3>
          <ul>
            <li><p><code>PCEP-30-01</code> - Certified Entry-Level Python Programmer</p></li>
            <li><p><code>JSE-40-01</code> - Certified Entry-Level JavaScript Programmer</p></li>
            <li><a target='_blank' href="https://www.credly.com/users/jaroslav-zaba/badges/credly">{t('Pages.Home.OtherCourses')} (Credly)</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
