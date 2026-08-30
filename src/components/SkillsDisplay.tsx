import { useTranslation } from 'react-i18next';

import classes from './SkillsDisplay.module.css';


export interface SkillsDisplayProps {
  translationBasename: string;
  len: number;
  confidentNumber: number;
};


function SkillsDisplay({ translationBasename, len, confidentNumber } : SkillsDisplayProps) {
  const { t } = useTranslation();

  return (
    <div className={classes.twocolumns}>
      {
        Array.from({ length: len }, (_, ix) => (
          <p key={ix} className={(ix < confidentNumber) ? classes.fullconfident : classes.partconfident}>{t(`${translationBasename}.${ix}` as any)}</p>
        ))
      }
    </div>
  );
}

export default SkillsDisplay;
