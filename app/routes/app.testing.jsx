import {
  Page,
  Layout,
  FormLayout,
  TextField,
  BlockStack,
  Divider,
  Card,
  Grid,
  ButtonGroup,
  Button,
  Text,
  Checkbox,
  Select,
  Icon,
  PageActions,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { DeleteMajor, CancelMajor } from "@shopify/polaris-icons";
import dashboard from "../../app/dashboard.css";

export const links = () => [{ rel: "stylesheet", href: dashboard }];

export default function LayoutExample() {
  const [checked, setChecked] = useState(false);
  const [checkedVal, setCheckedVal] = useState("");
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("Jaded Pixel");
  const [conditions, setConditions] = useState([1]);
  const [rateName, setRteName] = useState([1]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);
  const handleChangeVal = useCallback(
    (newChecked) => setCheckedVal(newChecked),
    []
  );

  const handleChangeValue = useCallback((newValue) => setValue(newValue), []);

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const handleButtonClick = useCallback(
    (index) => {
      if (activeButtonIndex === index) return;
      setActiveButtonIndex(index);
    },
    [activeButtonIndex]
  );

  const handleButton = useCallback(
    (index) => {
      if (activeButton === index) return;
      setActiveButton(index);
    },
    [activeButton]
  );

  const handleDeleteCondition = (index) => {
    console.log(" delete function called", index);
    const updatedConditions = conditions.filter((_, i) => i !== index);
    setConditions(updatedConditions);
  };

  const handleDeleteRate = (indexNum) => {
    console.log(" delete function called", indexNum);
    const updatedRateName = rateName.filter((_, i) => i !== indexNum);
    setRteName(updatedRateName);
  };

  const options = [
    { label: "Customer Tag", value: "customertag" },
    { label: "Customer Email", value: "customeremail" },
    { label: "Customer Order Count", value: "customerordercount" },
    { label: "Shipping Country", value: "shippingcountry" },
    { label: "Product Collection", value: "productcollection" },
    { label: "Product Title", value: "title" },
    { label: "Product SKU", value: "sku" },
    { label: "Product Vendor", value: "Vendor" },
    { label: "Product Metafield", value: "Metafield" },
    { label: "Cart Has Items", value: "cartitem" },
    { label: "Quantity or SubTotal", value: "quantityorsubTotal" },
  ];

  const addCondition = () => {
    console.log("first condition...");
    const newCondition = {
      product: "",
      sales: "Equals to",
      orders: Math.floor(Math.random() * 1000000) + 1,
    };
    setConditions([...conditions, newCondition]);
  };

  const addRuleName = () => {
    console.log("first condition...");
    const newCondition = {
      product: "",
      sales: "Equals to",
      orders: Math.floor(Math.random() * 1000000) + 1,
    };
    setRteName([...rateName, newCondition]);
  };

  return (
    <Page
      backAction={{ content: "Settings", url: "/app/homepage" }}
      title="Better Free Shipping / Edit Rule"
      compactTitle
      secondaryActions={[
        { content: "Cancel", disabled: true },
        { content: "Delete", disabled: true },
      ]}
      primaryAction={<Button variant="primary">Save</Button>}
    >
      <BlockStack gap="500">
        <Divider borderColor="border-inverse" />
        <Card>
          <Layout>
            <Layout.AnnotatedSection
              id="storeDetails"
              title="General"
              description="Admin Settings"
            >
              <FormLayout>
                <Card>
                  <TextField
                    label="Rule Name"
                    onChange={() => {}}
                    helpText="For admin use only"
                    autoComplete="off"
                  />
                  <Card roundedAbove="md">
                    <Grid>
                      <Grid.Cell
                        columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}
                      >
                        <Text variant="headingSm" as="h6">
                          Rule in disabled
                        </Text>
                      </Grid.Cell>
                      <Grid.Cell
                        columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}
                      >
                        <Checkbox checked={checked} onChange={handleChange} />
                      </Grid.Cell>
                    </Grid>
                  </Card>
                </Card>
              </FormLayout>
            </Layout.AnnotatedSection>
          </Layout>

          <BlockStack gap="400">
            <div className="border-second">
              <Divider borderColor="border-inverse" />
            </div>
            <Layout>
              <Layout.AnnotatedSection
                id="storeDetails"
                title="Conditions"
                description="Configure the rules you require"
              >
                <Card>
                  <FormLayout>
                    <Text variant="headingMd" as="h6">
                      Condition Match
                    </Text>
                    <ButtonGroup variant="segmented">
                      <Button
                        pressed={activeButtonIndex === 0}
                        onClick={() => handleButtonClick(0)}
                      >
                        All
                      </Button>
                      <Button
                        pressed={activeButtonIndex === 1}
                        onClick={() => handleButtonClick(1)}
                      >
                        Any
                      </Button>
                    </ButtonGroup>
                    <Text variant="headingSm" as="h6" fontWeight="regular">
                      All Conditions below must be satisfied for the rule to be
                      true.
                    </Text>
                    <BlockStack gap={400}>
                      <Divider borderColor="border-inverse" />
                      {conditions.map((condition, index) => (
                        <Grid
                          key={index}
                          columns={{ xs: 1, sm: 6, md: 6, lg: 6, xl: 6 }}
                          areas={{
                            xs: ["product", "sales", "orders", "icon"],
                            sm: [
                              "product product sales sales orders orders icon",
                            ],
                            md: [
                              "product product sales sales orders orders icon",
                            ],
                            lg: [
                              "product product sales sales orders orders icon icon",
                            ],
                            xl: [
                              "product product sales sales orders orders icon icon",
                            ],
                          }}
                        >
                          <Grid.Cell area="product">
                            <Select
                              options={options}
                              onChange={handleSelectChange}
                              value={selected}
                            />
                          </Grid.Cell>
                          <Grid.Cell area="sales">
                            <TextField type="text" value="equals to" disabled />
                          </Grid.Cell>
                          <Grid.Cell area="orders">
                            <TextField
                              value={value}
                              onChange={handleChangeValue}
                              autoComplete="off"
                            />
                          </Grid.Cell>

                          {index !== 0 && (
                            <div
                              onClick={() => {
                                handleDeleteCondition(index);
                                console.log("Delete");
                              }}
                            >
                              <Icon source={DeleteMajor} tone="critical" />
                            </div>
                          )}
                        </Grid>
                      ))}
                      <BlockStack gap={500}>
                        <Divider borderColor="border-inverse" />
                        <Button
                          variant="primary"
                          onClick={() => addCondition()}
                        >
                          Add another Condition
                        </Button>
                      </BlockStack>
                    </BlockStack>
                  </FormLayout>
                </Card>
              </Layout.AnnotatedSection>
            </Layout>
            <BlockStack gap="500">
              <Divider borderColor="border-inverse" />
              <Layout>
                <Layout.AnnotatedSection
                  id="storeDetails"
                  title="Rate(s) to Make Free"
                  description=" Shipping Rate that you would like to be free based on
                      Condition"
                >
                  <Card>
                    <FormLayout>
                      <Text variant="headingMd" as="h6">
                        Shipping Rate Selector
                      </Text>
                      <ButtonGroup variant="segmented">
                        <Button
                          pressed={activeButton === 0}
                          onClick={() => handleButton(0)}
                        >
                          By Rate Name
                        </Button>
                        <Button
                          pressed={activeButton === 1}
                          onClick={() => handleButton(1)}
                        >
                          All Rates
                        </Button>
                      </ButtonGroup>
                      {rateName.map((condition, indexNum) => (
                        <Grid key={indexNum} columns={{ sm: 3 }}>
                          <Grid.Cell
                            columnSpan={{ xs: 8, sm: 5, md: 5, lg: 9, xl: 9 }}
                          >
                            <TextField
                              value={checkedVal}
                              onChange={handleChangeVal}
                              placeholder="Shipping rate Name"
                              autoComplete="off"
                            />
                          </Grid.Cell>
                          <Grid.Cell
                            columnSpan={{ xs: 3, sm: 0, md: 0, lg: 2, xl: 2 }}
                          >
                            {indexNum !== 0 && (
                              <div
                                onClick={() => {
                                  handleDeleteRate(indexNum);
                                  console.log("Delete");
                                }}
                              >
                                <Icon source={CancelMajor} tone="base" />
                              </div>
                            )}
                          </Grid.Cell>
                        </Grid>
                      ))}
                      <BlockStack gap={400}>
                        <Divider borderColor="border-inverse" />
                        <Button variant="primary" onClick={() => addRuleName()}>
                          Add another Rate Name
                        </Button>
                      </BlockStack>
                    </FormLayout>
                  </Card>
                </Layout.AnnotatedSection>
              </Layout>
            </BlockStack>
          </BlockStack>
          <PageActions
            secondaryActions={[
              { content: "Cancel", disabled: true },
              { content: "Delete", disabled: true },
            ]}
            primaryAction={<Button variant="primary">Save</Button>}
          />
        </Card>
      </BlockStack>
    </Page>
  );
}
