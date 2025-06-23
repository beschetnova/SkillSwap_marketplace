import { memo, useMemo } from "react";
import checkboxCategory from "../../../images/icons/checkbox-remove.svg";
import checkboxDone from "../../../images/icons/checkbox-done.svg";
import checkboxEmpty from "../../../images/icons/checkbox-empty.svg";
import chevronUp from "../../../images/icons/chevron-up.svg";
import styles from "./skills-item.module.css";
import useSwitch from "../../../hooks/use-switch";
import Input from "../Input/input";

type SkillsItemProps = {
  skill: Skills;
  selected: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
};

const SkillsItem = ({ skill, selected, onChange }: SkillsItemProps) => {
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
          type="button"
          className={styles.category}
          onClick={toggle}
        >
          <img src={icon} alt={skill.title} />
          {skill.title}
          {open &&
            <img className={styles.chevron} src={chevronUp} alt={skill.title} />
          }
        </button>
        {open && skill.submenu.map((skill) => (
          <span
            key={skill.title}
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

export default memo(SkillsItem);