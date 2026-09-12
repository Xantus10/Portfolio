import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Project from '../components/Project';

import pqcimg from '../assets/pqc.png';
import socimg from '../assets/soc.png';
import vwaimg from '../assets/vulnwebapp.png';
import pqclweimg from '../assets/pqclwe.png';
import matimg from '../assets/maturita.png';
import ghimg from '../assets/github.png';
import tglimg from '../assets/tgl.png';


import classes from './ProjectsPage.module.css';


interface ContentFormat {
  title: string;
  cont: React.ReactNode | React.ReactNode[];
};

function ProjectsPage() {
  const { t } = useTranslation();
  const [ page, setPage ] = useState<number>(0);

  function changeSubPage(newPage: number) {
    setPage(newPage);
  }

  const contents: ContentFormat[] = [
    {
      title: t('Pages.Projects.Categories.Cyber'),
      cont: [
        <Project key={'PQClib'} name={t('Pages.Projects.Projects.Cyber.PQC-lib.Name')} imgPath={pqcimg} githubUrl='https://github.com/Xantus10/python-pqc-lib'
                 desc={t('Pages.Projects.Projects.Cyber.PQC-lib.Desc')} tags={t('Pages.Projects.Projects.Cyber.PQC-lib.Tags', {returnObjects: true})} />,
        <Project key={'SOC'} name={t('Pages.Projects.Projects.Cyber.SOC.Name')} imgPath={socimg} githubUrl='https://github.com/Xantus10/SOCAlertSim'
                 desc={t('Pages.Projects.Projects.Cyber.SOC.Desc')} tags={t('Pages.Projects.Projects.Cyber.SOC.Tags', {returnObjects: true})} />,
        <Project key={'VWA'} name={t('Pages.Projects.Projects.Cyber.VulnWebApp.Name')} imgPath={vwaimg} githubUrl='https://github.com/Xantus10/Vuln_Web_App'
                 desc={t('Pages.Projects.Projects.Cyber.VulnWebApp.Desc')} tags={t('Pages.Projects.Projects.Cyber.VulnWebApp.Tags', {returnObjects: true})} />,
        <Project key={'PQCLWE'} name={t('Pages.Projects.Projects.Cyber.PQC-LWE.Name')} imgPath={pqclweimg} githubUrl='https://github.com/Xantus10/PQC-LWE'
                 desc={t('Pages.Projects.Projects.Cyber.PQC-LWE.Desc')} tags={t('Pages.Projects.Projects.Cyber.PQC-LWE.Tags', {returnObjects: true})} />
      ]
    },
    {
      title: t('Pages.Projects.Categories.Web'),
      cont: [
        <Project key={'MATURITA'} name={t('Pages.Projects.Projects.Web.Maturita.Name')} imgPath={matimg} githubUrl='https://github.com/Xantus10/MATURITA'
                 desc={t('Pages.Projects.Projects.Web.Maturita.Desc')} tags={t('Pages.Projects.Projects.Web.Maturita.Tags', {returnObjects: true})} />,
        <Project key={'Portfolio'} name={t('Pages.Projects.Projects.Web.Portfolio.Name')} imgPath={ghimg} githubUrl='https://github.com/Xantus10/Portfolio'
                 desc={t('Pages.Projects.Projects.Web.Portfolio.Desc')} tags={t('Pages.Projects.Projects.Web.Portfolio.Tags', {returnObjects: true})} />
      ]
    },
    {
      title: t('Pages.Projects.Categories.Misc'),
      cont: [
        <Project key={'TGL'} name={t('Pages.Projects.Projects.Misc.TGL.Name')} imgPath={tglimg} githubUrl='https://github.com/Xantus10/Transgalactic'
                 desc={t('Pages.Projects.Projects.Misc.TGL.Desc')} tags={t('Pages.Projects.Projects.Misc.TGL.Tags', {returnObjects: true})} />
      ]
    }
  ];

  return (
    <main className={classes.main}>
      <section className={classes.titlecard}>
        <h1>{t('Pages.Projects.Title')}</h1>
        <h2>{t('Pages.Projects.Subtitle')}</h2>
      </section>
      <section>
        <div className={classes.subpagecontrol}>
          {
            contents.map((val, ix) => {
              return (
                <div key={ix} onClick={() => changeSubPage(ix)}>{val.title}</div>
              );
            })
          }
        </div>
        <select className={classes.subpageselect} value={page} onChange={(e) => changeSubPage(parseInt(e.currentTarget.value))}>
          {
            contents.map((val, ix) => {
              return (
                <option key={ix} value={ix.toString()}>{val.title}</option>
              );
            })
          }
        </select>
        <div className={classes.projectscontainer}>
          {
            contents[page].cont
          }
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
