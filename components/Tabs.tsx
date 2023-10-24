import React, { FC } from "react";

interface TabBase {
  id: string;
  title: string;
  isActive?: boolean;
  isLoading?: boolean;
}

interface TabProps extends TabBase {
  onClick: () => void;
}
const TabItem: FC<TabProps> = ({ id, title, isActive, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`w-fit py-1 px-2 rounded-md border text-sm ${
        isActive ? "border-primary bg-primary/10" : "border-black"
      }`}
    >
      {title}
    </div>
  );
};

type GenericTabsProps<T> = {
  items: T[];
  onSelect: (id: T) => void;
};
const Tabs = <T extends TabBase>({ items, onSelect }: GenericTabsProps<T>) => {
  return (
    <div className="flex-start space-x-3">
      {items.map((item) => {
        const { id, title, isActive } = item;
        return (
          <TabItem
            key={id}
            id={id}
            title={title}
            isActive={isActive}
            onClick={() => {
              onSelect(item);
            }}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
