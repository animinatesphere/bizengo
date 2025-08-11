// src/lib/pdf/ClassicInvoiceDocument.tsx
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

const colors = {
  black: "#000000",
  gray600: "rgb(75, 85, 99)",
  gray300: "rgb(209, 213, 219)",
  gray500: "rgb(107, 114, 128)",
};

const formatCurrency = (amount: number | null | undefined): string => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return "N0.00";
  }
  return `N${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return date.toLocaleDateString("en-US", options);
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 20,
    fontFamily: "Courier",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerLeft: {
    width: "60%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  invoiceTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 2,
  },
  invoiceTitleUnderline: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1.5,
    width: "40%",
    alignSelf: "flex-start",
    marginTop: 0,
    marginBottom: 7.5,
  },
  headerRight: {
    width: "35%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  businessInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 5,
    objectFit: "contain",
  },
  businessName: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.black,
  },
  businessNameUnderline: {
    borderBottomColor: colors.black,
    borderBottomWidth: 0.75,
    width: "100%",
    alignSelf: "flex-start",
    marginTop: 0,
    marginBottom: 4.5,
  },
  businessInfo: {
    fontSize: 9,
    color: colors.gray600,
    marginBottom: 1.5,
  },

  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 3,
  },
  text: {
    fontSize: 9,
    color: colors.black,
    marginBottom: 2,
  },
  smallUnderline: {
    borderBottomColor: colors.gray300,
    borderBottomWidth: 0.75,
    width: 48,
    marginTop: 3,
    marginBottom: 6,
  },

  table: {
    width: "100%",
    marginTop: 15,
    marginBottom: 15,
  },
  tableHeaderRow: {
    flexDirection: "row",
    borderBottomColor: colors.black,
    borderBottomWidth: 0.75,
    paddingBottom: 6,
    marginBottom: 3,
  },
  descriptionColHeader: {
    width: "40%",
    fontSize: 10.5,
    fontWeight: "bold",
    paddingLeft: 6,
    color: colors.black,
    textAlign: "left",
  },
  qtyColHeader: {
    width: "15%",
    fontSize: 10.5,
    fontWeight: "bold",
    paddingLeft: 6,
    color: colors.black,
    textAlign: "left",
  },
  unitPriceColHeader: {
    width: "20%",
    fontSize: 10.5,
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: 6,
    color: colors.black,
  },
  priceColHeader: {
    width: "25%",
    fontSize: 10.5,
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: 6,
    color: colors.black,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomColor: colors.gray300,
    borderBottomWidth: 0.375,
  },
  descriptionCol: {
    width: "40%",
    fontSize: 9,
    paddingLeft: 6,
    color: colors.black,
    textAlign: "left",
    wordWrap: "break-word",
  },
  qtyCol: {
    width: "15%",
    fontSize: 9,
    paddingLeft: 6,
    color: colors.black,
    textAlign: "left",
  },
  unitPriceCol: {
    width: "20%",
    fontSize: 9,
    textAlign: "right",
    paddingRight: 6,
    color: colors.black,
    wordWrap: "break-word",
  },
  priceCol: {
    width: "25%",
    fontSize: 9,
    textAlign: "right",
    paddingRight: 6,
    color: colors.black,
    wordWrap: "break-word",
  },

  paymentInfoContainer: {
    width: "100%",
    marginTop: 18,
  },
  totalsContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 18,
  },
  totalRow: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 3,
  },
  totalLabel: {
    fontSize: 9,
    color: colors.black,
    width: "50%",
    textAlign: "left",
  },
  totalValue: {
    fontSize: 9,
    fontWeight: "normal",
    color: colors.black,
    width: "50%",
    textAlign: "right",
  },
  grandTotalLabel: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: colors.black,
    width: "50%",
    textAlign: "left",
  },
  grandTotalValue: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: colors.black,
    width: "50%",
    textAlign: "right",
  },
  thankYou: {
    fontSize: 27,
    color: colors.black,
    marginTop: 10,
  },
  footer: {
    fontSize: 7,
    color: colors.gray500,
    marginTop: "auto",
    textAlign: "center",
    paddingTop: 8,
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
});

interface ClassicInvoiceDocumentProps {
  data: InvoiceData;
}

export const ClassicInvoiceDocument: React.FC<ClassicInvoiceDocumentProps> = ({
  data,
}) => {
  return (
    <Document>
      <Page size="A5" style={styles.page}>
        <View style={styles.headerContainer} fixed>
          <View style={styles.headerLeft}>
            <Text style={styles.invoiceTitle}>
              {data.invoiceType === "invoice" ? "Invoice" : "Receipt"}
            </Text>
            <View style={styles.invoiceTitleUnderline} />
          </View>

          <View style={styles.headerRight}>
            <View style={styles.businessInfoWrapper}>
              {data.businessLogo && (
                <Image src={data.businessLogo} style={styles.logo} />
              )}
              <Text style={styles.businessName}>{data.businessName}</Text>
            </View>
            <View style={styles.businessNameUnderline} />
            <Text style={styles.businessInfo}>{data.businessPhone}</Text>
            <Text style={styles.businessInfo}>{data.businessAddress}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {data.invoiceType === "invoice" ? "Billed To:" : "Recipient:"}
          </Text>
          <Text style={styles.text}>Customer's Name: {data.customerName}</Text>
          <Text style={styles.text}>Address: {data.customerAddress}</Text>
          <Text style={styles.text}>Phone: {data.customerPhone}</Text>
          <View style={styles.smallUnderline} />
          <Text style={styles.text}>
            Invoice Date: {formatDate(new Date())}
          </Text>
          <View style={styles.smallUnderline} />
          <Text style={styles.businessInfo}>
            {data.invoiceType === "invoice"
              ? "Invoice Number: "
              : "Receipt Number: "}
            {data.businessIdentifierNumber}
          </Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeaderRow}>
            <Text style={styles.descriptionColHeader}>Description</Text>
            <Text style={styles.qtyColHeader}>Quantity</Text>
            <Text style={styles.unitPriceColHeader}>Unit Price</Text>
            <Text style={styles.priceColHeader}>Price</Text>
          </View>

          {data.items.map((item, index) => (
            <View style={styles.tableRow} key={item.id || index.toString()}>
              <Text style={styles.descriptionCol}>{item.description}</Text>
              <Text style={styles.qtyCol}>{item.quantity}</Text>
              <Text style={styles.unitPriceCol}>
                {formatCurrency(item.unit_price)}
              </Text>
              <Text style={styles.priceCol}>
                {formatCurrency((item.unit_price ?? 0) * (item.quantity ?? 0))}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.totalsContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal:</Text>
            <Text style={styles.totalValue}>
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
            <Text style={styles.totalLabel}>Discount:</Text>
            <Text style={styles.totalValue}>
              {formatCurrency(data.discount ?? 0)}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tax:</Text>
            <Text style={styles.totalValue}>
              {formatCurrency(data.tax ?? 0)}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.grandTotalLabel}>Total:</Text>
            <Text style={styles.grandTotalValue}>
              {formatCurrency(data.total)}
            </Text>
          </View>
        </View>

        <View style={styles.paymentInfoContainer}>
          {data.invoiceType === "invoice" ? (
            <View>
              <Text style={styles.sectionTitle}>Payment Information</Text>
              <Text style={styles.text}>Bank Name: {data.bankName}</Text>
              <Text style={styles.text}>Account Name: {data.accountName}</Text>
              <Text style={styles.text}>
                Account Number: {data.accountNumber}
              </Text>
            </View>
          ) : (
            <Text style={styles.thankYou}>Thank you</Text>
          )}
        </View>

        <View style={styles.footer} fixed>
          <Text>Powered by Roots & Squares</Text>
          <Link src="https://bizengo.com/invoice-generator/">
            <Text style={styles.link}>
              https://bizengo.com/invoice-generator/
            </Text>
          </Link>
        </View>
      </Page>
    </Document>
  );
};

export const generateClassicPdf = async (data: InvoiceData): Promise<Blob> => {
  const blob = await pdf(<ClassicInvoiceDocument data={data} />).toBlob();
  return blob;
};
