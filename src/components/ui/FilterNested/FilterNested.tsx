import type { SkillCategory } from '../../../utils/types';

type Props = {
  title?: string;
  items: SkillCategory[];
  checkedItems: string[];
  expandedCategories: string[];
  showAll: boolean;
  toggleShowAll: () => void;
  toggleCategoryExpand: (categoryId: string) => void;
  toggleSkillCheck: (skillId: string) => void;
  buttonName: string;
};

const FilterNestedUI = ({
  title,
  items,
  checkedItems,
  expandedCategories,
  showAll,
  toggleShowAll,
  toggleCategoryExpand,
  toggleSkillCheck,
  buttonName
}: Props) => {
  const visibleItems = showAll ? items : items.slice(0, 5);
//TODO: стили сделаны кое-как лишь бы показывало. Надо убрать их отсюда и сделать файл со стилями
  return (
    <div>
      {title && <h3>{title}</h3>}
      {visibleItems.map((category) => (
        <div key={category.id} style={{ marginBottom: '10px' }}>
          {/* Категория с кнопкой раскрытия */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => toggleCategoryExpand(category.id)}
              style={{ width: '15px', height: '15px' }}
            >
              {expandedCategories.includes(category.id) ? '-' : '+'}
            </button>
            <span style={{ marginLeft: '8px' }}>{category.name}</span>
          </div>
          {/* Внутри раскрытой категории список навыков */}
          {expandedCategories.includes(category.id) && (
            <div style={{ marginLeft: '20px', marginTop: '5px' }}>
              {category.skills.map((skill) => (
                <div key={skill.id}>
                  <label>
                    <input
                      type='checkbox'
                      checked={checkedItems.includes(skill.id)}
                      onChange={() => toggleSkillCheck(skill.id)}
                    />
                    {skill.name}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {items.length > 5 && (
        <button onClick={toggleShowAll}>{buttonName}</button>
      )}
    </div>
  );
};

export default FilterNestedUI;
