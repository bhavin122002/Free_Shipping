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
  Select,
  Icon,
  PageActions,
  Frame,
  ContextualSaveBar,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { DeleteMajor, CancelMajor } from "@shopify/polaris-icons";
import { useNavigate } from "@remix-run/react";
import dashboard from "../../app/dashboard.css";

export const links = () => [{ rel: "stylesheet", href: dashboard }];

export default function LayoutExample() {
  const [rateNames, setRateNames] = useState([{ value: "" }]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [textFieldValue, setTextFieldValue] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const initialCondition = {
    selectCondition: "",
    sales: "Equals to",
    orders: "",
  };

  const [conditions, setConditions] = useState([initialCondition]);
  const navigation = useNavigate();

  const handleTextFieldChange = (newValue) => {
    setTextFieldValue(newValue);
    setIsDirty(true);
  };

  const handleRateNameChange = (newValue, index) => {
    const updatedRateNames = [...rateNames];
    updatedRateNames[index].value = newValue;
    setRateNames(updatedRateNames);
    setIsDirty(true);
  };

  const handleSave = () => {
    setIsDirty(false);
  };

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Saved Changes"
      saveAction={{
        onAction: handleSave,
        loading: false,
        disabled: false,
      }}
      discardAction={{
        onAction: () => setIsDirty(false),
      }}
    />
  ) : null;

  const handleProductChange = (index, newValue) => {
    const updatedConditions = [...conditions];
    updatedConditions[index].selectCondition = newValue;
    setConditions(updatedConditions);
  };

  const handleOrdersChange = (index, newValue) => {
    const updatedConditions = [...conditions];
    updatedConditions[index].orders = newValue;
    setConditions(updatedConditions);
  };

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
    const updatedRateName = rateNames.filter((_, i) => i !== indexNum);
    setRateNames(updatedRateName);
  };

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

  const addCondition = () => {
    console.log("first condition...");
    setConditions([...conditions, { ...initialCondition }]);
  };

  const addRuleName = () => {
    console.log("first condition...");

    const newRateNames = [...rateNames, { value: "" }];
    setRateNames(newRateNames);
  };

  return (
    <Frame>
      {contextualSaveBarMarkup}
      <Page
        backAction={{ content: "Settings", url: "/app/first" }}
        title="Better Free Shipping / Edit Rule"
        compactTitle
        secondaryActions={[
          { content: "Cancel", disabled: true },
          { content: "Delete", disabled: true },
        ]}
        primaryAction={{
          content: "Save",
          onAction: () => navigation("/app/first"),
        }}
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
                      value={textFieldValue}
                      onChange={handleTextFieldChange}
                      helpText="For admin use only"
                    />
                    <Card roundedAbove="md">
                      <Grid columns={{ sm: 3 }}>
                        <Grid.Cell
                          columnSpan={{ xs: 8, sm: 5, md: 5, lg: 9, xl: 9 }}
                        >
                          <Text variant="headingSm" as="h6">
                            Rule in disabled
                          </Text>
                        </Grid.Cell>
                        <Grid.Cell
                          columnSpan={{ xs: 3, sm: 0, md: 0, lg: 2, xl: 2 }}
                        >
                          <div onChange={() => handleTextFieldChange()}>
                            <label className="toggle">
                              <input type="checkbox" />
                              <span className="slider"></span>
                            </label>
                          </div>
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
                          onClick={() => {
                            handleButtonClick(0);
                            handleTextFieldChange();
                          }}
                        >
                          All
                        </Button>
                        <Button
                          pressed={activeButtonIndex === 1}
                          onClick={() => {
                            handleButtonClick(1);
                            handleTextFieldChange();
                          }}
                        >
                          Any
                        </Button>
                      </ButtonGroup>
                      <Text variant="headingSm" as="h6" fontWeight="regular">
                        All Conditions below must be satisfied for the rule to
                        be true.
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
                                onChange={(e) => {
                                  handleProductChange(index, e);
                                  handleTextFieldChange();
                                }}
                                value={condition.selectCondition}
                                placeholder="Select Condition"
                              />
                            </Grid.Cell>
                            <Grid.Cell area="sales">
                              <TextField
                                type="text"
                                value="equals to"
                                disabled
                              />
                            </Grid.Cell>
                            <Grid.Cell area="orders">
                              <TextField
                                value={condition.orders}
                                onChange={(e) => {
                                  handleOrdersChange(index, e);
                                  handleTextFieldChange();
                                }}
                                placeholder=""
                                autoComplete="off"
                              />
                            </Grid.Cell>

                            {index !== 0 && (
                              <div
                                onClick={() => {
                                  handleDeleteCondition(index);
                                  handleTextFieldChange();
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
                            onClick={() => {
                              addCondition();
                              handleTextFieldChange();
                            }}
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
                            onClick={() => {
                              handleButton(0);
                              handleTextFieldChange();
                            }}
                          >
                            By Rate Name
                          </Button>
                          <Button
                            pressed={activeButton === 1}
                            onClick={() => {
                              handleButton(1);
                              handleTextFieldChange();
                            }}
                          >
                            All Rates
                          </Button>
                        </ButtonGroup>
                        {rateNames.map((rateName, indexNum) => (
                          <Grid key={indexNum} columns={{ sm: 3 }}>
                            <Grid.Cell
                              columnSpan={{ xs: 8, sm: 5, md: 5, lg: 9, xl: 9 }}
                            >
                              <TextField
                                value={rateName.value}
                                onChange={(newValue) => {
                                  handleRateNameChange(newValue, indexNum);
                                  handleTextFieldChange();
                                }}
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
                                    handleTextFieldChange();
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
                          <Button
                            variant="primary"
                            onClick={() => {
                              addRuleName();
                              handleTextFieldChange();
                            }}
                          >
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
              primaryAction={{
                content: "Save",
                onAction: () => navigation("/app/first"),
              }}
            />
          </Card>
        </BlockStack>
      </Page>
    </Frame>
  );
}
