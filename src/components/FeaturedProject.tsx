import { useTranslation } from 'react-i18next';
import { FaGithub } from "react-icons/fa";

import classes from './FeaturedProject.module.css';

export interface FeaturedProjectProps {
  name: string;
  imgPath: string;
  githubUrl: string;
  desc: React.ReactNode[];
  additionalNotes?: string;
};

function FeaturedProject( { name, imgPath, githubUrl, desc, additionalNotes } : FeaturedProjectProps ) {
  const { t } = useTranslation();

  return (
    <div className={classes.card}>
      <a href={githubUrl} target='_blank' className={classes.github}>
        <FaGithub />
      </a>
      <div className={classes.image}>
        <img src={imgPath} alt="" />
      </div>
      <div className={classes.text}>
        <h4>{name}</h4>
        {desc}
        {additionalNotes ?
        <>
          <hr />
          <p className={classes.addtext}>
            {t('FeaturedProject.AdditionalNotes')}
          </p>
          <p className={classes.addtext}>
            {additionalNotes}
          </p>
        </> : <></>}
      </div>
    </div>
  );
}

export default FeaturedProject;
