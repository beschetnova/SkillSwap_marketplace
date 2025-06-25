type Props = {
  title?: string;
  items: string[];
  selectedItem: string | null;
  nameAttribute: string;
  handleChange: (item: string) => void;
};

const FilterRadioUI = ({
  title,
  items,
  selectedItem,
  nameAttribute,
  handleChange
}: Props) => {
  return (
    <>
      {title && <h3>{title}</h3>}
      <div>
        {items.map((item) => (
          <div key={item}>
            <label>
              <input
                type='radio'
                name={nameAttribute}
                value={item}
                checked={selectedItem === item}
                onChange={() => handleChange(item)}
              />
              {item}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterRadioUI;
