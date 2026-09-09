import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Project from '../components/Project';

import pqcimg from '../assets/pqc.png';


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
      cont: <Project name={t('Pages.Home.FeaturedProjects.PQClib.Name')} imgPath={pqcimg} githubUrl='https://github.com/Xantus10/python-pqc-lib'
                     desc={t('Pages.Home.FeaturedProjects.PQClib.Desc1')} />
    },
    {
      title: t('Pages.Projects.Categories.Web'),
      cont: <p>Content 2</p>
    },
    {
      title: t('Pages.Projects.Categories.Misc'),
      cont: <p>content 3</p>
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
