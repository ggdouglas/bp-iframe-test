import { Button, Classes, MenuItem } from "@blueprintjs/core";
import { type ItemRendererProps, Select } from "@blueprintjs/select";
import clsx from "clsx";

export interface FilterPickerProps {
  label: string;
  items: string[];
  onToggle: (filter: string) => void;
  selected: string[];
  menuProps: React.HTMLAttributes<HTMLUListElement>;
}

export const FilterPicker = ({
  items,
  label,
  onToggle,
  selected,
  menuProps,
}: FilterPickerProps) => {
  return (
    <Select
      items={items}
      itemRenderer={(
        item: string,
        { handleClick, handleFocus, modifiers }: ItemRendererProps
      ) => {
        if (!modifiers.matchesPredicate) {
          return null;
        }
        const isActive = selected.some(
          (selectedFilter) => selectedFilter === item
        );
        return (
          <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            key={item}
            text={item}
            icon={isActive ? "tick" : "blank"}
            onClick={handleClick}
            onFocus={handleFocus}
          />
        );
      }}
      itemPredicate={(query, item) => {
        const normalizedQuery = query.trim().toLocaleLowerCase();
        return item.toLocaleLowerCase().includes(normalizedQuery);
      }}
      onItemSelect={onToggle}
      menuProps={menuProps}
    >
      <Button
        active={selected.length !== 0}
        fill={true}
        intent="none"
        className={clsx(Classes.TAG, Classes.ROUND, Classes.INTERACTIVE)}
        endIcon="chevron-down"
        variant="minimal"
      >
        {label}
      </Button>
    </Select>
  );
};
