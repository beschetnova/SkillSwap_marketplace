import { selectAllSkills } from "../../../../services/slices/skillsSlice";
import { useAppSelector } from "../../../../utils/hooks";
import ListCategory from "../ListCategory/ListCategory";

const DropDownSkillsList = () => {
  const skillsList = useAppSelector(selectAllSkills);
  return (
    <>
  {skillsList.map((item) => (
      
          <div key={item.id}>
            <ListCategory item={item}/>
          </div>
        ))}
    </>
  );
};
export default DropDownSkillsList;
