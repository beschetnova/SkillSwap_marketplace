import skillsData from '../../../../../public/db/skills-data.json';
import List from '../../../../components/List/list';
import Skill from './skill/skill';
import styles from './skills.module.css';

const Skills = () => {

  return (
    <List 
      list={skillsData}
      callback={(skill, index) => (
        <li key={index}>
          <Skill skill={skill} />
        </li>
      )}
      extraStyle={styles.skillsList}
    />
  );
}

export default Skills;
