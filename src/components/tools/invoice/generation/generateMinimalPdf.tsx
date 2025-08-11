import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
  pdf,
  Link,
  Image, // Import Image component
} from "@react-pdf/renderer";
import { InvoiceData, InvoiceItem } from "@/types/invoice";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 20,
    fontFamily: "Courier",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
  },
  header: {
    marginBottom: 12,
    textAlign: "center",
    paddingBottom: 8,
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 10,
    objectFit: "contain",
    borderRadius: 4,
    border: "1px solid #e0e0e0",
  },
  businessName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  businessInfo: {
    fontSize: 9,
    marginBottom: 2,
    color: "#555555",
    lineHeight: 1.2,
  },
  invoiceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 6,
    color: "#000000",
    backgroundColor: "#f5f5f5",
    padding: "6px 12px",
    borderRadius: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  section: {
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 0.5,
    borderBottomStyle: "dashed",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333333",
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  text: {
    fontSize: 9,
    marginBottom: 2,
    color: "#444444",
    lineHeight: 1.3,
  },
  customerInfo: {
    fontSize: 9,
    marginBottom: 1,
    color: "#444444",
  },
  table: {
    display: "flex",
    width: "100%",
    marginTop: 8,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 3,
  },
  tableHeaderRow: {
    flexDirection: "row",
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
    paddingBottom: 6,
    marginBottom: 6,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 4,
  },
  descriptionColHeader: {
    width: "40%",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "left",
    color: "#333333",
    textTransform: "uppercase",
  },
  qtyColHeader: {
    width: "15%",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    textTransform: "uppercase",
  },
  unitPriceColHeader: {
    width: "20%",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    textTransform: "uppercase",
  },
  priceColHeader: {
    width: "25%",
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "right",
    color: "#333333",
    textTransform: "uppercase",
  },
  descriptionCol: {
    width: "40%",
    fontSize: 9,
    textAlign: "left",
    wordWrap: "break-word",
    color: "#444444",
    paddingRight: 4,
  },
  qtyCol: {
    width: "15%",
    fontSize: 9,
    textAlign: "center",
    color: "#444444",
    fontWeight: "500",
  },
  unitPriceCol: {
    width: "20%",
    fontSize: 9,
    textAlign: "center",
    color: "#444444",
    fontWeight: "500",
  },
  priceCol: {
    width: "25%",
    fontSize: 9,
    textAlign: "right",
    wordWrap: "break-word",
    color: "#333333",
    fontWeight: "bold",
  },
  itemRowSeparator: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 0.5,
    borderBottomStyle: "dotted",
    marginVertical: 2,
  },
  totalsSection: {
    marginTop: 12,
    paddingTop: 8,
    borderTopColor: "#333333",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    backgroundColor: "#fafafa",
    padding: 8,
    borderRadius: 4,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 4,
    alignItems: "center",
  },
  totalLabelSmall: {
    fontSize: 9,
    color: "#555555",
    fontWeight: "500",
  },
  totalValueSmall: {
    fontSize: 9,
    fontWeight: "normal",
    width: "50%",
    textAlign: "right",
    color: "#333333",
  },
  grandTotalRow: {
    borderTopColor: "#333333",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    paddingTop: 6,
    marginTop: 6,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  grandTotalLabel: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000000",
    textTransform: "uppercase",
  },
  grandTotalValueSmall: {
    fontSize: 12,
    fontWeight: "bold",
    width: "50%",
    textAlign: "right",
    color: "#000000",
  },
  paymentInfoSection: {
    marginTop: 10,
    padding: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
  },
  sectionTitleSmall: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333333",
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  textSmall: {
    fontSize: 8,
    marginBottom: 2,
    color: "#555555",
    lineHeight: 1.2,
  },
  paymentItem: {
    flexDirection: "row",
    marginBottom: 2,
  },
  paymentLabel: {
    fontSize: 8,
    fontWeight: "bold",
    minWidth: 70,
    color: "#333333",
  },
  paymentValue: {
    fontSize: 8,
    color: "#555555",
    flex: 1,
  },
  thankYouContainer: {
    marginTop: 12,
    padding: 10,
    backgroundColor: "#f0f8f0",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#c3e6c3",
    borderStyle: "solid",
    textAlign: "center",
  },
  thankYouSmall: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d5a2d",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  footer: {
    fontSize: 7,
    color: "#888888",
    marginTop: "auto",
    textAlign: "center",
    paddingTop: 10,
    borderTopColor: "#e0e0e0",
    borderTopWidth: 1,
    borderTopStyle: "dashed",
    backgroundColor: "#fafafa",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  link: {
    color: "#666666",
    textDecoration: "underline",
    fontSize: 7,
  },
});

const formatCurrency = (amount: number | null | undefined): string => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return "N0.00";
  }
  return `N${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

interface MinimalInvoiceDocumentProps {
  data: InvoiceData;
}

export const MinimalInvoiceDocument: React.FC<MinimalInvoiceDocumentProps> = ({
  data,
}) => {
  return (
    <Document>
      <Page size="A6" style={styles.page}>
        <View style={styles.header} fixed>
          <View style={styles.headerContent}>
            {data.businessLogo && (
              <Image src={data.businessLogo} style={styles.logo} />
            )}
            <Text style={styles.businessName}>{data.businessName}</Text>
          </View>
          <Text style={styles.businessInfo}>{data.businessAddress}</Text>
          <Text style={styles.businessInfo}>Tel: {data.businessPhone}</Text>
          <Text style={styles.invoiceTitle}>
            {data.invoiceType === "invoice" ? "Invoice" : "Receipt"}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.customerInfo}>Customer: {data.customerName}</Text>
          <Text style={styles.customerInfo}>
            Address: {data.customerAddress}
          </Text>
          <Text style={styles.customerInfo}>Phone: {data.customerPhone}</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.descriptionColHeader}>Item</Text>
            <Text style={styles.qtyColHeader}>Qty</Text>
            <Text style={styles.unitPriceColHeader}>Rate</Text>
            <Text style={styles.priceColHeader}>Total</Text>
          </View>

          {data.items.map((item: InvoiceItem, index: number) => (
            <View key={item.id || index.toString()}>
              <View style={styles.tableRow}>
                <Text style={styles.descriptionCol}>{item.description}</Text>
                <Text style={styles.qtyCol}>{item.quantity}</Text>
                <Text style={styles.unitPriceCol}>
                  {formatCurrency(item.unit_price)}
                </Text>
                <Text style={styles.priceCol}>
                  {formatCurrency(
                    (item.unit_price ?? 0) * (item.quantity ?? 0)
                  )}
                </Text>
              </View>
              {index < data.items.length - 1 && (
                <View style={styles.itemRowSeparator} />
              )}
            </View>
          ))}
        </View>

        <View style={styles.totalsSection}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabelSmall}>Subtotal:</Text>
            <Text style={styles.totalValueSmall}>
              {formatCurrency(
                data.items.reduce(
                  (acc, item) =>
                    acc + (item.unit_price ?? 0) * (item.quantity ?? 0),
                  0
                )
              )}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabelSmall}>Discount:</Text>
            <Text style={styles.totalValueSmall}>
              {formatCurrency(data.discount ?? 0)}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabelSmall}>Tax:</Text>
            <Text style={styles.totalValueSmall}>
              {formatCurrency(data.tax ?? 0)}
            </Text>
          </View>
          <View style={[styles.totalRow, styles.grandTotalRow]}>
            <Text style={styles.grandTotalLabel}>Total:</Text>
            <Text style={styles.grandTotalValueSmall}>
              {formatCurrency(data.total)}
            </Text>
          </View>
        </View>

        <View style={styles.paymentInfoSection}>
          {data.invoiceType === "invoice" ? (
            <View>
              <Text style={styles.sectionTitleSmall}>Payment Details</Text>
              <View style={styles.paymentItem}>
                <Text style={styles.paymentLabel}>Bank:</Text>
                <Text style={styles.paymentValue}>{data.bankName}</Text>
              </View>
              <View style={styles.paymentItem}>
                <Text style={styles.paymentLabel}>Account:</Text>
                <Text style={styles.paymentValue}>{data.accountName}</Text>
              </View>
              <View style={styles.paymentItem}>
                <Text style={styles.paymentLabel}>Number:</Text>
                <Text style={styles.paymentValue}>{data.accountNumber}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.thankYouContainer}>
              <Text style={styles.thankYouSmall}>Thank You!</Text>
            </View>
          )}
        </View>

        <View style={styles.footer} fixed>
          <Text>Powered by Roots & Squares</Text>
          <Link src="https://bizengo.com/invoice-generator/">
            <Text style={styles.link}>bizengo.com/invoice-generator</Text>
          </Link>
        </View>
      </Page>
    </Document>
  );
};

export const generateMinimalPdf = async (data: InvoiceData): Promise<Blob> => {
  const blob = await pdf(<MinimalInvoiceDocument data={data} />).toBlob();
  return blob;
};
