import classes from './SkillsDisplay.module.css';


export interface SkillsDisplayProps {
  skills: string[];
  confidentNumber: number;
};


function SkillsDisplay({ skills, confidentNumber } : SkillsDisplayProps) {

  return (
    <div className={classes.twocolumns}>
      {
        skills.map((val, ix) => (
          <p key={ix} className={(ix < confidentNumber) ? classes.fullconfident : classes.partconfident}>{val}</p>
        ))
      }
    </div>
  );
}

export default SkillsDisplay;
