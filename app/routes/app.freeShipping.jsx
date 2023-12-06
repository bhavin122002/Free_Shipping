import {
  Button,
  Card,
  Page,
  Text,
  LegacyCard,
  DataTable,
  Icon,
} from "@shopify/polaris";
import { EditMajor, DeleteMajor, ToggleMinor } from "@shopify/polaris-icons";
import React from "react";
import dashboard from "../../app/dashboard.css";

export const links = () => [{ rel: "stylesheet", href: dashboard }];

export default function appFreeShipping() {
  const rows = [
    [
      <Icon source={ToggleMinor} tone="base" />,
      "Test Rule",
      "Match Any Conditions Product Tag Equals 'Freebie'",
      <Icon source={EditMajor} tone="base" />,
      <Icon source={DeleteMajor} tone="base" />,
    ],
    [
      <Icon source={ToggleMinor} tone="base" />,
      "Another Rule Here",
      "Match ALL Conditions Variant SKU Equals 123ABC Customer email Equals brand@gmail.com",
      <Icon source={EditMajor} tone="base" />,
      <Icon source={DeleteMajor} tone="base" />,
    ],
  ];

  return (
    <Page>
      <Card>
        <div className="main-content">
          <div className="btn-add">
            <Text variant="headingXl" as="h4" alignment="start">
              Better Free Shipping
            </Text>
          </div>
          <div className="btn-add">
            <Button>Add Rule</Button>
          </div>
        </div>
        <div>
          <LegacyCard>
            <DataTable
              columnContentTypes={["text", "text", "text", "text", "text"]}
              headings={["On/Off", "Name", "Conditions", "Action", ""]}
              rows={rows}
            />
          </LegacyCard>
        </div>
      </Card>
    </Page>
  );
}
