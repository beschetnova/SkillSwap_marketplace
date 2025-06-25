import Category from "../category/category";

type Props = {
    skill: Skills;
}

const Skill = ({ skill }: Props) => {
    return skill.submenu
        ? (<Category category={skill} />)
        : skill.title
}

export default Skill;