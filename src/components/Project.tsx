
import classes from './Project.module.css';

export interface FeaturedProjectProps {
  name: string;
  imgPath: string;
  githubUrl: string;
  desc: string;
  tags?: string[];
};

function Project( { name, imgPath, githubUrl, desc, tags } : FeaturedProjectProps ) {

  return (
    <a href={githubUrl} target='_blank' className={classes.card}>
        <div className={classes.image}>
          <img src={imgPath} alt="" />
        </div>
        <div className={classes.innercontainer}>
          <div className={classes.text}>
            <h4>{name}</h4>
            <p>{desc}</p>
          </div>
          <div className={classes.tagscontainer}>
            {
              (tags) ? tags.map((val, ix) => (<p key={ix}>{val}</p>)) : <></>
            }
          </div>
      </div>
    </a>
  );
}

export default Project;
