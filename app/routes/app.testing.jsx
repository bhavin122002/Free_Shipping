import React, { useState } from "react";
import { Select, Text } from "@shopify/polaris";

const options = [
  {
    title: "Customer",
    options: [
      { label: "Customer", value: "Customer" },
      { label: "Customer Tag", value: "Customer Tag" },
      { label: "Customer Email", value: "Customer Email" },
      { label: "Customer Order Count", value: "Customer Order Count" },
      { label: "Shipping Country", value: "Shipping Country" },
    ],
  },
  {
    title: "Product",
    options: [
      { label: "Title", value: "Title" },
      { label: "Product Tag", value: "Product Tag" },
      { label: "SKU", value: "SKU" },
      { label: "Vendor", value: "Vendor" },
      { label: "Metafield", value: "Metafield" },
      { label: "Collection", value: "Collection" },
    ],
  },
  {
    title: "Advance",
    options: [{ label: "Cart has items", value: "Cart has items" }],
  },
];

export default function TableSelect() {
  const [selected, setSelected] = useState("");

  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={selected}
      placeholder="✔️Select Condition"
    />
  );
}
