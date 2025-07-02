import type { Skill } from '../../../../utils/types';

type Props = {
  item: Skill;
};
const ListItem = ({ item }: Props) => {
  return <>{item.name}</>;
};
export default ListItem;
