import {
  Box,
  Button,
  Card,
  Icon,
  Page,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { CancelMajor } from "@shopify/polaris-icons";
import React, { useCallback, useState } from "react";

export default function appAllAction() {
  const [selected, setSelected] = useState(0);

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  return (
    <Page fullWidth>
      <Card>
        <div style={{ display: "flex" }}>
          <div style={{ width: "20%" }}>
            <div style={{ marginBottom: "10px" }}>
              <Text variant="headingMd" as="h6">
                Conditions Available
              </Text>
            </div>
            <div style={{ border: "2px solid black" }}>
              <div style={{ margin: "10px" }}>
                <Box>
                  <Text variant="headingMd" as="h6">
                    Customer
                  </Text>
                  <div style={{ marginLeft: "10px" }}>
                    <Text variant="headingSm" as="h6">
                      Customer Tag
                    </Text>
                    <Text variant="headingSm" as="h6">
                      Customer Email
                    </Text>
                    <Text variant="headingSm" as="h6">
                      Customer Order Count
                    </Text>
                    <Text variant="headingSm" as="h6">
                      Shipping Country
                    </Text>
                  </div>
                </Box>
              </div>

              <div style={{ margin: "10px" }}>
                <Box>
                  <Text variant="headingMd" as="h6">
                    Product
                  </Text>
                  <div style={{ marginLeft: "10px" }}>
                    <Text variant="headingSm" as="h6">
                      Title
                    </Text>
                    <Text variant="headingSm" as="h6">
                      Product Tag
                    </Text>
                    <Text variant="headingSm" as="h6">
                      SKU
                    </Text>
                    <Text variant="headingSm" as="h6">
                      Vendor
                    </Text>
                    <Text variant="headingSm" as="h6">
                      Metafield
                    </Text>
                    <Text variant="headingSm" as="h6">
                      Collection*
                    </Text>
                  </div>
                </Box>
              </div>
              <div style={{ margin: "10px" }}>
                <Box>
                  <Text variant="headingMd" as="h6">
                    Advanced
                  </Text>
                  <div style={{ marginLeft: "10px" }}>
                    <Text variant="headingSm" as="h6">
                      Cart Has Items
                    </Text>
                  </div>
                </Box>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "25px" }}>
            <div style={{ margin: "15px 0 15px 0" }}>
              <Box>
                <Text variant="headingMd" as="h6">
                  Customer Tag
                </Text>
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <Select
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </div>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <Select
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </div>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <TextField />
                  </div>
                </div>
              </Box>
            </div>
            <div style={{ margin: "15px 0 15px 0" }}>
              <Box>
                <Text variant="headingMd" as="h6">
                  Customer Email
                </Text>
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <Select
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </div>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <Select
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </div>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <TextField />
                  </div>
                </div>
              </Box>
            </div>
            <div style={{ margin: "15px 0 15px 0" }}>
              <Box>
                <Text variant="headingMd" as="h6">
                  Customer Order Count
                </Text>
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <Select
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </div>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <Select
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </div>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <TextField />
                  </div>
                </div>
              </Box>
            </div>
            <div style={{ margin: "15px 0 15px 0" }}>
              <Box>
                <Text variant="headingMd" as="h6">
                  Shipping Country
                </Text>
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <Select
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </div>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <Select
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </div>
                  <div style={{ width: "29%", marginRight: "10px" }}>
                    <TextField />
                  </div>
                </div>
              </Box>
            </div>
          </div>
          <div style={{ width: "37%" }}>
            <div style={{ marginLeft: "7px" }}>
              <div style={{ margin: "15px 0 15px 0", width: "67%" }}>
                <Box>
                  <Text variant="headingMd" as="h6">
                    Product Collection
                  </Text>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <TextField />
                    </div>
                  </div>
                </Box>
              </div>
              <div style={{ margin: "15px 0 15px 0", width: "67%" }}>
                <Box>
                  <Text variant="headingMd" as="h6">
                    Product Title
                  </Text>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <TextField />
                    </div>
                  </div>
                </Box>
              </div>
              <div style={{ margin: "15px 0 15px 0", width: "67%" }}>
                <Box>
                  <Text variant="headingMd" as="h6">
                    Product Tag
                  </Text>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <TextField />
                    </div>
                  </div>
                </Box>
              </div>
              <div style={{ margin: "15px 0 15px 0", width: "67%" }}>
                <Box>
                  <Text variant="headingMd" as="h6">
                    Product SKU
                  </Text>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <TextField />
                    </div>
                  </div>
                </Box>
              </div>
              <div style={{ margin: "15px 0 15px 0", width: "67%" }}>
                <Box>
                  <Text variant="headingMd" as="h6">
                    Product Vendor
                  </Text>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "31%", marginRight: "10px" }}>
                      <TextField />
                    </div>
                  </div>
                </Box>
              </div>
              <div style={{ margin: "15px 0 15px 0", width: "67%" }}>
                <Box>
                  <Text variant="headingMd" as="h6">
                    Product Metafield
                  </Text>
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <div style={{ width: "25%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "25%", marginRight: "10px" }}>
                      <TextField placeholder="Key" />
                    </div>
                    <div style={{ width: "25%", marginRight: "10px" }}>
                      <Select
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                      />
                    </div>
                    <div style={{ width: "25%", marginRight: "10px" }}>
                      <TextField placeholder="Value" />
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </div>
          <div style={{ width: "25%", marginTop: "15px" }}>
            <div style={{ marginBottom: "10px" }}>
              <Text variant="headingMd" as="h6">
                Cart Has Items
              </Text>
              <div style={{ marginTop: "10px" }}>
                <Text variant="headingSm" as="h6">
                  Quantity or SubTotal
                </Text>
                <Select
                  options={options}
                  onChange={handleSelectChange}
                  value={selected}
                />
                <Text variant="headingSm" as="h6">
                  Total Quantity of items or SubTotal of Items
                </Text>
              </div>
              <div style={{ display: "flex", marginTop: "15px" }}>
                <div style={{ marginRight: "10px" }}>
                  <Select
                    label="Match Conditions"
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                  />
                </div>
                <div>
                  <TextField
                    label="Amount"
                    helpText="Quantity or SubTotal of items"
                  />
                </div>
              </div>
              <div>
                <Select
                  label="Item Selector"
                  options={options}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </div>
              <div style={{ display: "flex", margin: "15px 0 15px" }}>
                <div>
                  <TextField label="Product Id" />
                </div>
                <div style={{ margin: "31px 0 0 17px" }}>
                  <span>
                    <Icon source={CancelMajor} tone="base" />
                  </span>
                </div>
              </div>
              <Button>Add More</Button>
            </div>
          </div>
        </div>
      </Card>
    </Page>
  );
}
