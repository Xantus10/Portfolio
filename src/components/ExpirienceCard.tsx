
import classes from './ExpirienceCard.module.css'

export interface ExperienceCardProps {
  experiences: {
    from?: number;
    to?: number | null;
    title: string;
    desc?: string;
  }[]
};

function ExperienceCard({ experiences } : ExperienceCardProps) {

  return (
    <ul className={classes.expiriencecard}>
      {
        experiences.map((val, ix) => {
          return (
            <li key={ix}>
              {(val.from) ? <p className={classes.grey}>{val.from} - {val.to ?? 'Current'}</p> : <></>}
              <p style={{fontWeight: 'bold'}}>{val.title}</p>
              {(val.desc) ? <p>{val.desc}</p> : <></>}
            </li>
          );
        })
      }
    </ul>
  );
}

export default ExperienceCard;
