import { useMemo } from "react";
import checkboxCategory from "../../../images/checkbox-category.svg";
import checkboxDone from "../../../images/checkbox-done.svg";
import checkboxEmpty from "../../../images/checkbox-empty.svg";
import chevronUp from "../../../images/chevron-up.svg";
import styles from "./skills-item.module.css";
import useSwitch from "../../../hooks/use-switch";
import Input from "../Input/input";

type Skill<T> = {
  title: string;
  submenu?: Skill<T>[];
};

type SkillsItemProps<T> = {
  skill: Skill<T>;
  selected: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
};

const SkillsItem = <T,>({ skill, selected, onChange }: SkillsItemProps<T>) => {
  const [open, toggle] = useSwitch();

  const icon = useMemo(() => {
    if (!skill.submenu) return checkboxEmpty;
    const selectedCount = skill.submenu.filter(subItem => selected.includes(subItem.title)).length;
    if (selectedCount === 0) return checkboxEmpty;
    if (selectedCount === skill.submenu.length) return checkboxDone;
    return checkboxCategory;
  }, [skill, selected]);

  if (skill.submenu) {
    return (
      <>
        <button
          className={styles.category}
          onClick={toggle}
        >
          <img src={icon} alt={skill.title} />
          {skill.title}
          {open &&
            <img className={styles.chevron} src={chevronUp} alt={skill.title} />
          }
        </button>
        {open && skill.submenu.map((skill, i) => (
          <span
            key={i.toString()}
            className={styles.content}
          >
            <SkillsItem skill={skill} selected={selected} onChange={onChange} />
          </span>
        ))}
      </>
    );
  } else {
    return (
      <Input
        type='checkbox'
        name='skill'
        value={skill.title}
        selected={selected}
        onChange={onChange}
      >
        {skill.title}
      </Input>
    );
  };
}

export default SkillsItem;