import {
  Box,
  Button,
  Card,
  Icon,
  Page,
  Text,
  TextField,
  Tabs,
  Select,
  Layout,
  TextContainer,
  LegacyCard,
  FormLayout,
} from "@shopify/polaris";
import { ToggleMinor, CircleCancelMajor } from "@shopify/polaris-icons";
import React, { useCallback, useState } from "react";
import dashboard from "../../app/dashboard.css";

export const links = () => [{ rel: "stylesheet", href: dashboard }];

export default function EditRule() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [textFieldValue2, setTextFieldValue2] = useState("Rule in disabled");
  const [selected, setSelected] = useState(0);

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    []
  );
  const handleTextFieldChange2 = useCallback(
    (value) => setTextFieldValue2(value),
    []
  );

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const tabs = [
    {
      content: "All",
    },
    {
      content: "Any",
    },
  ];
  const tabsRate = [
    {
      content: "By Rate Name",
    },
    {
      content: "All Rates",
    },
  ];

  return (
    <Page>
      <Card>
        <div className="edit-rule">
          <div className="btn-add">
            <Text variant="headingXl" as="h4">
              Better Free Shipping / Edit Rule
            </Text>
          </div>
          <div className="btn-group">
            <div className="btn">
              <Button disabled>Cancel</Button>
            </div>
            <div className="btn">
              <Button disabled>Delete</Button>
            </div>
            <div className="btn">
              <Button>Save</Button>
            </div>
          </div>
        </div>
        <Page narrowWidth>
          <Layout>
            <Layout.Section variant="oneThird">
              <div style={{ marginTop: "var(--p-space-500)" }}>
                <TextContainer>
                  <Text id="storeDetails" variant="headingMd" as="h2">
                    General
                  </Text>
                  <Text tone="subdued" as="p">
                    Admin Settings
                  </Text>
                </TextContainer>
              </div>
            </Layout.Section>
            <Layout.Section variant="oneThird">
              <LegacyCard sectioned>
                <FormLayout>
                  <TextField
                    label="Rule name"
                    onChange={() => {}}
                    autoComplete="off"
                    helpText="For admin use only"
                  />
                  <TextField
                    value={textFieldValue2}
                    onChange={() => {
                      handleTextFieldChange2;
                    }}
                  />
                </FormLayout>
              </LegacyCard>
            </Layout.Section>
          </Layout>
          <div className="second-box">
            <Layout>
              <Layout.Section variant="oneThird">
                <div style={{ marginTop: "var(--p-space-500)" }}>
                  <TextContainer>
                    <Text id="storeDetails" variant="headingMd" as="h2">
                      Conditions
                    </Text>
                    <Text tone="subdued" as="p">
                      Configure the rules you require
                    </Text>
                  </TextContainer>
                </div>
              </Layout.Section>
              <Layout.Section variant="oneThird">
                <LegacyCard sectioned>
                  <FormLayout>
                    <Box>
                      <div className="tabs">
                        <Text variant="headingMd" as="h6">
                          Condition Match
                        </Text>
                        <Tabs
                          tabs={tabs}
                          selected={selected}
                          onSelect={handleTabChange}
                        ></Tabs>
                        <div className="text-tabs">
                          <Text variant="headingSm" as="h6">
                            All Conditions below must be satisfied for the rule
                            to be true.
                          </Text>
                        </div>
                      </div>

                      <div className="select-box">
                        <div className="select-box-child">
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div className="select-box-child">
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div className="select-box-child">
                          <TextField />
                        </div>
                        <div className="select-box-child-2">
                          <Icon source={CircleCancelMajor} tone="base" />
                        </div>
                      </div>
                      <div className="select-box-second">
                        <div className="select-box-second-child">
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div className="select-box-second-child">
                          <TextField placeholder="Key" />
                        </div>
                        <div className="select-box-second-child">
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div className="select-box-second-child">
                          <TextField placeholder="Value" />
                        </div>
                        <div className="select-box-second-icon">
                          <Icon source={CircleCancelMajor} tone="base" />
                        </div>
                      </div>
                      <div className="select-box-third">
                        <div className="select-box-third-child">
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div className="select-box-third-child">
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div className="select-box-third-child-text">
                          <TextField />
                        </div>
                      </div>
                      <div className="select-box-third-child-btn">
                        <Button>Add another Condition</Button>
                      </div>
                    </Box>
                  </FormLayout>
                </LegacyCard>
              </Layout.Section>
            </Layout>
          </div>

          <div className="second-box">
            <Layout>
              <Layout.Section variant="oneThird">
                <div style={{ marginTop: "var(--p-space-500)" }}>
                  <TextContainer>
                    <Text id="storeDetails" variant="headingMd" as="h2">
                      Rate(s) to Make Free
                    </Text>
                    <Text tone="subdued" as="p">
                      Shipping Rate that you would like to be free based on
                      Condition
                    </Text>
                  </TextContainer>
                </div>
              </Layout.Section>
              <Layout.Section variant="oneThird">
                <LegacyCard sectioned>
                  <FormLayout>
                    <div className="fourth-box">
                      <Box>
                        <div>
                          <Text variant="headingMd" as="h2">
                            Shipping Rate Selector
                          </Text>
                        </div>
                        <div className="select-tabs">
                          <Tabs
                            tabs={tabsRate}
                            selected={selected}
                            onSelect={handleTabChange}
                          ></Tabs>
                        </div>
                        <div className="select-tabs">
                          <TextField
                            placeholder="Shipping rate Name"
                            value={textFieldValue}
                            onChange={handleTextFieldChange}
                            autoComplete="off"
                          />
                        </div>
                        <div className="fourth-btn">
                          <Button>Add another rate name</Button>
                        </div>
                      </Box>
                    </div>
                  </FormLayout>
                </LegacyCard>
              </Layout.Section>
            </Layout>
          </div>

          <Layout>
            <Layout.Section variant="oneThird">
              <div
              className="btn-group-last"
                style={{
                  marginTop: "17px",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <div style={{ marginRight: "10px" }}>
                  <Button disabled>Cancel</Button>
                </div>
                <div style={{ marginRight: "10px" }}>
                  <Button disabled>Delete</Button>
                </div>
                <div style={{ margin: "0px 6px 27px 0px" }}>
                  <Button>Save</Button>
                </div>
              </div>
            </Layout.Section>
          </Layout>
        </Page>
      </Card>
    </Page>
  );
}
