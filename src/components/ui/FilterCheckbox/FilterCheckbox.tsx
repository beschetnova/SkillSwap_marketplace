type Props = {
  title?: string;
  items: string[];
  checkedItems: string[];
  showAll: boolean;
  toggleShowAll: () => void;
  handleCheckboxChange: (item: string) => void;
  buttonName: string;
};

const FilterCheckboxUI = ({
  title,
  items,
  checkedItems,
  showAll,
  toggleShowAll,
  handleCheckboxChange,
  buttonName
}: Props) => {
  const visibleItems = showAll ? items : items.slice(0, 5);

  return (
    <>
      {title && <h3>{title}</h3>}
      <div>
        {visibleItems.map((item) => (
          <div key={item}>
            <label>
              <input
                type='checkbox'
                checked={checkedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          </div>
        ))}
        {items.length > 5 && (
          <button onClick={toggleShowAll}>{buttonName}</button>
        )}
      </div>
    </>
  );
};

export default FilterCheckboxUI;
