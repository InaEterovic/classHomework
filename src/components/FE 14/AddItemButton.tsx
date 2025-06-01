import React from "react";

type Props = {
  onAdd: () => void;
};

const AddItemButton = React.memo(({ onAdd }: Props) => {
  console.log("🔁 AddItemButton rendered");
  return (
    <button className="p-2 bg-cyan-600 rounded-b-sm" onClick={onAdd}>
      Add Item
    </button>
  );
});

export default AddItemButton;
