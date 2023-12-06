import {
  Page,
  Layout,
  LegacyCard,
  ResourceList,
  Thumbnail,
  Text,
  Box,
  Select,
  TextField,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import dashboard from "../../app/dashboard.css";

export const links = () => [{ rel: "stylesheet", href: dashboard }];

export default function LayoutExample() {
  const [selected, setSelected] = useState(0);

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section variant="oneThird">
          <LegacyCard title="Conditions Available">
            <LegacyCard.Section>
              <div>
                <div className="customer-box">
                  <Box>
                    <Text variant="headingMd" as="h6">
                      Customer
                    </Text>
                    <div className="customer-text-group">
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

                <div className="customer-box">
                  <Box>
                    <Text variant="headingMd" as="h6">
                      Product
                    </Text>
                    <div className="customer-text-group">
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
                <div className="customer-box">
                  <Box>
                    <Text variant="headingMd" as="h6">
                      Advanced
                    </Text>
                    <div className="customer-text-group">
                      <Text variant="headingSm" as="h6">
                        Cart Has Items
                      </Text>
                    </div>
                  </Box>
                </div>
              </div>
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <LegacyCard>
            <LegacyCard.Section>
              <div className="select-box-group">
                <div className="customer-tag-box">
                  <Box>
                    <Text variant="headingMd" as="h6">
                      Customer Tag
                    </Text>
                    <div className="select-box-group-parant">
                      <div className="select-box-group-child">
                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                      <div className="select-box-group-child">
                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                      <div className="select-box-group-child">
                        <TextField />
                      </div>
                    </div>
                  </Box>
                </div>
                <div className="select-box-group-second">
                  <Box>
                    <Text variant="headingMd" as="h6">
                      Customer Email
                    </Text>
                    <div className="select-box-group-second-child">
                      <div className="select-box-group-child">
                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                      <div className="select-box-group-child">
                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                      <div className="select-box-group-child">
                        <TextField />
                      </div>
                    </div>
                  </Box>
                </div>
                <div className="select-box-group-second">
                  <Box>
                    <Text variant="headingMd" as="h6">
                      Customer Order Count
                    </Text>
                    <div className="select-box-group-second-child">
                      <div className="select-box-group-child">
                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                      <div className="select-box-group-child">
                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                      <div className="select-box-group-child">
                        <TextField />
                      </div>
                    </div>
                  </Box>
                </div>
                <div className="select-box-group-second">
                  <Box>
                    <Text variant="headingMd" as="h6">
                      Shipping Country
                    </Text>
                    <div className="select-box-group-second-child">
                      <div className="select-box-group-child">
                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                      <div className="select-box-group-child">
                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                      </div>
                      <div className="select-box-group-child">
                        <TextField />
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <LegacyCard>
            <LegacyCard.Section>
              <div>
                <div style={{ marginLeft: "7px" }}>
                  <div style={{ margin: "15px 0 15px 0" }}>
                    <Box>
                      <Text variant="headingMd" as="h6">
                        Product Collection
                      </Text>
                      <div style={{ display: "flex", marginTop: "15px" }}>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <TextField />
                        </div>
                      </div>
                    </Box>
                  </div>
                  <div style={{ margin: "15px 0 15px 0" }}>
                    <Box>
                      <Text variant="headingMd" as="h6">
                        Product Title
                      </Text>
                      <div style={{ display: "flex", marginTop: "15px" }}>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <TextField />
                        </div>
                      </div>
                    </Box>
                  </div>
                  <div style={{ margin: "15px 0 15px 0" }}>
                    <Box>
                      <Text variant="headingMd" as="h6">
                        Product Tag
                      </Text>
                      <div style={{ display: "flex", marginTop: "15px" }}>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <TextField />
                        </div>
                      </div>
                    </Box>
                  </div>
                  <div style={{ margin: "15px 0 15px 0" }}>
                    <Box>
                      <Text variant="headingMd" as="h6">
                        Product SKU
                      </Text>
                      <div style={{ display: "flex", marginTop: "15px" }}>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <TextField />
                        </div>
                      </div>
                    </Box>
                  </div>
                  <div style={{ margin: "15px 0 15px 0" }}>
                    <Box>
                      <Text variant="headingMd" as="h6">
                        Product Vendor
                      </Text>
                      <div style={{ display: "flex", marginTop: "15px" }}>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "30%" }}>
                          <TextField />
                        </div>
                      </div>
                    </Box>
                  </div>
                  <div style={{ margin: "15px 0 15px 0" }}>
                    <Box>
                      <Text variant="headingMd" as="h6">
                        Product MetaField
                      </Text>
                      <div style={{ display: "flex", marginTop: "15px" }}>
                        <div style={{ marginRight: "10px", width: "25%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "10px", width: "25%" }}>
                          <TextField placeholder="Key" />
                        </div>
                        <div style={{ marginRight: "10px", width: "25%" }}>
                          <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                          />
                        </div>
                        <div style={{ marginRight: "18px", width: "25%" }}>
                          <TextField placeholder="Value" />
                        </div>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <LegacyCard title="Minneapolis" actions={[{ content: "Manage" }]}>
            <LegacyCard.Section>
              <Text tone="subdued" as="span">
                1931 units available
              </Text>
            </LegacyCard.Section>
            <LegacyCard.Section title="Items">
              <ResourceList
                resourceName={{ singular: "product", plural: "products" }}
                items={[
                  {
                    id: "345",
                    url: "#",
                    name: "Black & orange scarf",
                    sku: "9234194023",
                    quantity: "1230",
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                        alt="Black orange scarf"
                      />
                    ),
                  },
                  {
                    id: "260",
                    url: "#",
                    name: "Tucan scarf",
                    sku: "9234194010",
                    quantity: "701",
                    media: (
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                        alt="Tucan scarf"
                      />
                    ),
                  },
                ]}
                renderItem={(item) => {
                  const { id, url, name, sku, media, quantity } = item;

                  return (
                    <ResourceList.Item
                      id={id}
                      url={url}
                      media={media}
                      accessibilityLabel={`View details for ${name}`}
                    >
                      <Text variant="bodyMd" fontWeight="bold" as="h3">
                        {name}
                      </Text>
                      <div>SKU: {sku}</div>
                      <div>{quantity} available</div>
                    </ResourceList.Item>
                  );
                }}
              />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
