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

// Register Helvetica font if not already registered, though it's often built-in
// Font.register({ family: 'Helvetica', fonts: [{ src: 'path/to/Helvetica.ttf' }] });

const colors = {
  blue500: "rgb(59, 130, 246)",
  gray600: "rgb(75, 85, 99)",
  blue400: "rgb(96, 165, 250)",
  gray700: "rgb(55, 65, 81)",
  gray200: "rgb(229, 231, 235)",
  blue600: "rgb(37, 99, 235)",
  gray500: "rgb(107, 114, 128)",
  purple500: "rgb(139, 92, 246)",
  purple600: "rgb(124, 58, 237)",
  purple400: "rgb(167, 139, 250)",
  indigo500: "rgb(99, 102, 241)",
  indigo600: "rgb(79, 70, 229)",
  pink500: "rgb(236, 72, 153)",
  emerald500: "rgb(16, 185, 129)",
  orange500: "rgb(249, 115, 22)",
  teal500: "rgb(20, 184, 166)",
  cyan500: "rgb(6, 182, 212)",
  violet500: "rgb(139, 92, 246)",
  rose500: "rgb(244, 63, 94)",
  amber500: "rgb(245, 158, 11)",
  lime500: "rgb(132, 204, 22)",
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 0,
    fontFamily: "Helvetica",
    background: `linear-gradient(135deg, ${colors.purple500} 0%, ${colors.indigo500} 50%, ${colors.cyan500} 100%)`,
  },
  header: {
    textAlign: "center",
    background: `linear-gradient(135deg, ${colors.purple500} 0%, ${colors.indigo500} 50%, ${colors.pink500} 100%)`,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: colors.purple600,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  // NEW: Container for logo and business name
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  // NEW: Style for the logo image
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
    objectFit: "contain",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 5,
  },
  businessName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textShadow: `2px 2px 4px rgba(0,0,0,0.3)`,
  },
  businessInfo: {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.95)",
    marginBottom: 3,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  invoiceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 3,
    color: "#FFFFFF",
    backgroundColor: colors.orange500,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
    textShadow: `1px 1px 2px rgba(0,0,0,0.3)`,
  },
  contentWrapper: {
    paddingHorizontal: 25,
    paddingTop: 25,
    flexGrow: 1,
    background: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)`,
  },
  section: {
    marginBottom: 8,
    backgroundColor: `rgba(${colors.emerald500
      .replace("rgb(", "")
      .replace(")", "")}, 0.05)`,
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: colors.emerald500,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.emerald500,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  text: {
    fontSize: 11,
    marginBottom: 3,
    color: colors.gray700,
    fontWeight: "500",
  },
  table: {
    width: "100%",
    marginTop: 18,
    marginBottom: 18,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: colors.gray500,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tableHeaderRow: {
    flexDirection: "row",
    background: `linear-gradient(90deg, ${colors.teal500} 0%, ${colors.cyan500} 100%)`,
    paddingVertical: 15,
    borderBottomColor: colors.teal500,
    borderBottomWidth: 2,
  },
  descriptionColHeader: {
    width: "40%",
    fontSize: 11,
    fontWeight: "bold",
    paddingLeft: 12,
    color: "#FFFFFF",
    textAlign: "left",
    textShadow: `1px 1px 2px rgba(0,0,0,0.3)`,
  },
  qtyColHeader: {
    width: "15%",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "left",
    color: "#FFFFFF",
    textShadow: `1px 1px 2px rgba(0,0,0,0.3)`,
  },
  unitPriceColHeader: {
    width: "20%",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "left",
    color: "#FFFFFF",
    textShadow: `1px 1px 2px rgba(0,0,0,0.3)`,
  },
  priceColHeader: {
    width: "25%",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "left",
    paddingRight: 12,
    color: "#FFFFFF",
    textShadow: `1px 1px 2px rgba(0,0,0,0.3)`,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomColor: `rgba(${colors.teal500
      .replace("rgb(", "")
      .replace(")", "")}, 0.1)`,
    borderBottomWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  descriptionCol: {
    width: "40%",
    fontSize: 10.5,
    paddingLeft: 12,
    color: colors.gray700,
    textAlign: "left",
    wordWrap: "break-word",
    fontWeight: "500",
  },
  qtyCol: {
    width: "15%",
    fontSize: 10.5,
    textAlign: "left",
    color: colors.gray700,
    fontWeight: "600",
    backgroundColor: `rgba(${colors.amber500
      .replace("rgb(", "")
      .replace(")", "")}, 0.1)`,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  unitPriceCol: {
    width: "20%",
    fontSize: 10.5,
    textAlign: "left",
    color: colors.gray700,
    fontWeight: "500",
  },
  priceCol: {
    width: "25%",
    fontSize: 10.5,
    textAlign: "left",
    paddingRight: 12,
    color: colors.violet500,
    wordWrap: "break-word",
    fontWeight: "bold",
  },
  totalsContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 18,
    borderTopColor: `rgba(${colors.purple500
      .replace("rgb(", "")
      .replace(")", "")}, 0.3)`,
    borderTopWidth: 2,
    width: "100%",
    backgroundColor: `rgba(${colors.purple500
      .replace("rgb(", "")
      .replace(")", "")}, 0.02)`,
    borderRadius: 10,
    padding: 15,
  },
  paymentInfoContainer: {
    marginTop: 18,
    width: "100%",
    backgroundColor: `rgba(${colors.indigo500
      .replace("rgb(", "")
      .replace(")", "")}, 0.05)`,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.indigo500,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  totalLabel: {
    fontSize: 11,
    color: colors.gray700,
    fontWeight: "600",
  },
  totalValue: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.rose500,
    textAlign: "right",
    minWidth: 70,
  },
  grandTotalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.purple600,
    textShadow: `1px 1px 2px rgba(0,0,0,0.1)`,
  },
  grandTotalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.purple600,
    textAlign: "right",
    minWidth: 70,
    textShadow: `1px 1px 2px rgba(0,0,0,0.1)`,
  },
  thankYou: {
    fontSize: 22,
    color: colors.pink500,
    marginTop: 18,
    textAlign: "center",
    fontWeight: "bold",
    textShadow: `2px 2px 4px rgba(0,0,0,0.1)`,
    backgroundColor: `rgba(${colors.pink500
      .replace("rgb(", "")
      .replace(")", "")}, 0.1)`,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  footer: {
    fontSize: 8,
    color: colors.gray500,
    marginTop: "auto",
    marginBottom: 12,
    textAlign: "center",
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: `rgba(${colors.gray200
      .replace("rgb(", "")
      .replace(")", "")}, 0.5)`,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  link: {
    color: colors.cyan500,
    textDecoration: "underline",
    fontWeight: "bold",
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

interface CreativeInvoiceDocumentProps {
  data: InvoiceData;
}

export const CreativeInvoiceDocument: React.FC<
  CreativeInvoiceDocumentProps
> = ({ data }) => {
  return (
    <Document>
      <Page size="A5" style={styles.page}>
        <View style={styles.header} fixed>
          <View style={styles.headerContent}>
            {data.businessLogo && (
              <Image src={data.businessLogo} style={styles.logo} />
            )}
            <Text style={styles.businessName}>{data.businessName}</Text>
          </View>
          <Text style={styles.businessInfo}>{data.businessAddress}</Text>
          <Text style={styles.businessInfo}>Phone: {data.businessPhone}</Text>
          <Text style={styles.invoiceTitle}>
            {data.invoiceType === "invoice" ? "Invoice" : "Receipt"}
          </Text>
        </View>

        <View style={styles.contentWrapper}>
          <View style={styles.section}>
            <Text style={styles.text}>Customer: {data.customerName}</Text>
            <Text style={styles.text}>Address: {data.customerAddress}</Text>
            <Text style={styles.text}>Phone: {data.customerPhone}</Text>
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

            {data.items.map((item: InvoiceItem, index: number) => (
              <View style={styles.tableRow} key={item.id || index.toString()}>
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
                <Text style={styles.text}>
                  Account Name: {data.accountName}
                </Text>
                <Text style={styles.text}>
                  Account Number: {data.accountNumber}
                </Text>
              </View>
            ) : (
              <Text style={styles.thankYou}>Thank you</Text>
            )}
          </View>
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

export const generateCreativePdf = async (data: InvoiceData): Promise<Blob> => {
  const blob = await pdf(<CreativeInvoiceDocument data={data} />).toBlob();
  return blob;
};
