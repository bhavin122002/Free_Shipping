import react from "react";
import { Page, Card, Icon, Button, Text, Box } from "@shopify/polaris";
import { EditMajor } from "@shopify/polaris-icons";
import dashboard from "../../app/dashboard.css";

export const links = () => [{ rel: "stylesheet", href: dashboard }];

export default function appFirst() {
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
        <Card padding={1200}>
          <Icon source={EditMajor} tone="base" />
          <div className="free-shipping-text">
            <Text variant="headingXl" as="h4" alignment="center">
              Add Your First Free Shipping Rule
            </Text>
          </div>
          <div className="btn-rule">
            <Button>Add Rule</Button>
          </div>
        </Card>
      </Card>
    </Page>
  );
}
