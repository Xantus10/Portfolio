
import classes from './Project.module.css';

export interface FeaturedProjectProps {
  name: string;
  imgPath: string;
  githubUrl: string;
  desc: string;
};

function Project( { name, imgPath, githubUrl, desc } : FeaturedProjectProps ) {

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
            <p>Python</p>
            <p>Cryptography</p>
            <p>NIST</p>
          </div>
      </div>
    </a>
  );
}

export default Project;
