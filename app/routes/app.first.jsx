import {
  Page,
  EmptyState,
  Divider,
  BlockStack,
  Card,
  Button,
} from "@shopify/polaris";
import { useNavigate } from "@remix-run/react";
import React from "react";

export default function PageExample() {
  const navigation = useNavigate();
  return (
    <Page
      title="Better Free Shipping"
      compactTitle
      primaryAction={{
        content: "Add Rule",
        disabled: false,
        onAction: () => navigation("/app/editRule"),
      }}
    >
      <BlockStack gap="500">
        <Divider borderColor="border-inverse" />
        <Card>
          <EmptyState
            heading=" Add Your First Free Shipping Rule"
            action={{
              content: "Add Rule",
              onAction: () => navigation("/app/editRule"),
            }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          ></EmptyState>
        </Card>
      </BlockStack>
    </Page>
  );
}
