import type { SkillCategory } from "../../../../utils/types";
import ListItem from "../ListItem/ListItem";

type Props = {
  item: SkillCategory
}
const ListCategory = ({item}: Props) => {
  return (
    <>
    <img src={`src/images/icons/${item.icon}`}></img>
    <h2>{item.name}</h2>
      {item.skills.map((item) => (
          <div key={item.id}>
            <ListItem item={item}/>
          </div>
        ))}
    </>
  );
};
export default ListCategory;