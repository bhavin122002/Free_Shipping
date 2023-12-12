import {
  Card,
  Page,
  Icon,
  BlockStack,
  IndexTable,
  useIndexResourceState,
  Divider,
} from "@shopify/polaris";
import { EditMajor, DeleteMajor, ToggleMinor } from "@shopify/polaris-icons";
import React from "react";

export default function appFreeShipping() {
  const orders = [
    {
      Name: "Jaydon Stanton",
      Conditions: "$969.44",
      Action: (
        <>
          <div style={{ display: "flex" }}>
            <Icon source={EditMajor} tone="base" />
            <Icon source={DeleteMajor} tone="base" />
          </div>
        </>
      ),
    },
    {
      Name: "Ruben Westerfelt",
      Conditions: "$701.19",
      Action: (
        <>
          <div style={{ display: "flex" }}>
            <Icon source={EditMajor} tone="base" />
            <Icon source={DeleteMajor} tone="base" />
          </div>
        </>
      ),
    },
    {
      Name: "Leo Carder",
      Conditions: "$798.24",
      Action: (
        <>
          <div style={{ display: "flex" }}>
            <Icon source={EditMajor} tone="base" />
            <Icon source={DeleteMajor} tone="base" />
          </div>
        </>
      ),
    },
  ];
  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(({ id, Name, Conditions, Action }, index) => (
    <IndexTable.Row
      id={id}
      key={id}
      selected={selectedResources.includes(id)}
      position={index}
    >
      <IndexTable.Cell>{Name}</IndexTable.Cell>
      <IndexTable.Cell>{Conditions}</IndexTable.Cell>
      <IndexTable.Cell>{Action}</IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <Page
      title="Better Free Shipping"
      compactTitle
      primaryAction={{ content: "Add Rule", disabled: false }}
    >
      <BlockStack gap="500">
        <Divider borderColor="border-inverse" />
        <Card>
          <IndexTable
            resourceName={resourceName}
            itemCount={orders.length}
            selectedItemsCount={
              allResourcesSelected ? "All" : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[
              { title: "Name" },
              { title: "Conditions" },
              { title: "Action" },
            ]}
          >
            {rowMarkup}
          </IndexTable>
        </Card>
      </BlockStack>
    </Page>
  );
}
