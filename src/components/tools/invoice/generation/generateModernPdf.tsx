import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  pdf,
  Link,
  Image, // Import Image component
} from "@react-pdf/renderer";

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number | null;
  unit_price: number | null;
}

export interface InvoiceData {
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessLogo: string | null;
  businessEmail: string;
  businessIdentifier: string;
  businessIdentifierNumber: string;
  customerName: string;
  customerAddress: string;
  customerPhone: string;
  items: InvoiceItem[];
  discount: number | null;
  tax: number | null;
  total: number;
  invoiceType: "invoice" | "receipt" | "";
  bankName: string;
  accountName: string;
  accountNumber: string;
}

const styles = StyleSheet.create({
  unpaidRibbon: {
    position: "absolute",
    top: 25,
    right: -50,
    backgroundColor: "#333333",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    padding: "4px 40px",
    transform: "rotate(30deg)",
    zIndex: 10,
  },
  logoBox: {
    width: 120,
    height: 70,
    marginBottom: 15,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    border: "3px solid #000000",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
    fontFamily: "Helvetica",
    border: "2px solid #000000",
  },
  header: {
    marginBottom: 30,
    textAlign: "center",
    paddingBottom: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 3,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
    objectFit: "contain",
  },
  businessName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  businessInfo: {
    fontSize: 12,
    marginBottom: 3,
    color: "#333333",
    lineHeight: 1.4,
    fontWeight: "500",
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 0,
    color: "#ffffff",
    backgroundColor: "#000000",
    padding: 15,
    textAlign: "center",
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#f8f8f8",
    padding: 20,
    border: "2px solid #e0e0e0",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  text: {
    fontSize: 11,
    marginBottom: 4,
    lineHeight: 1.4,
    color: "#333333",
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 8,
    color: "#000000",
    minWidth: 70,
  },
  infoPaymentLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 8,
    color: "#000000",
    minWidth: 100,
  },
  infoValue: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#333333",
    flex: 1,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "flex-start",
  },
  table: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#000000",
    marginBottom: 20,
  },
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: "#000000",
    borderBottomWidth: 3,
    borderColor: "#000000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    minHeight: 40,
  },
  tableEvenRow: {
    backgroundColor: "#f8f8f8",
  },
  tableColHeader: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 15,
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  tableCol: {
    fontSize: 11,
    padding: 15,
    color: "#333333",
    display: "flex",
    alignItems: "center",
  },
  descriptionColHeader: {
    width: "40%",
    textAlign: "left",
  },
  descriptionCol: {
    width: "40%",
    textAlign: "left",
    fontWeight: "600",
    color: "#000000",
  },
  qtyColHeader: {
    width: "15%",
    textAlign: "center",
  },
  qtyCol: {
    width: "15%",
    textAlign: "center",
    fontWeight: "600",
  },
  unitPriceColHeader: {
    width: "20%",
    textAlign: "center",
  },
  unitPriceCol: {
    width: "20%",
    textAlign: "center",
    fontWeight: "600",
  },
  priceColHeader: {
    width: "25%",
    textAlign: "right",
  },
  priceCol: {
    width: "25%",
    textAlign: "right",
    fontWeight: "bold",
    color: "#000000",
  },
  totalsContainer: {
    flexDirection: "column",
    alignSelf: "flex-end",
    width: "70%",
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 20,
    border: "3px solid #000000",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingBottom: 5,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333333",
    textTransform: "uppercase",
  },
  totalValue: {
    fontSize: 12,
    fontWeight: "500",
    color: "#333333",
  },
  grandTotalRow: {
    borderTopWidth: 3,
    borderTopColor: "#000000",
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: "#000000",
    color: "#ffffff",
    marginHorizontal: -20,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  grandTotalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  grandTotalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  thankYou: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 20,
    textAlign: "center",
    color: "#000000",
    backgroundColor: "#f0f0f0",
    padding: 20,
    border: "3px solid #000000",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
  footer: {
    fontSize: 10,
    color: "#666666",
    marginTop: "auto",
    textAlign: "center",
    paddingTop: 20,
    borderTopColor: "#000000",
    borderTopWidth: 2,
    backgroundColor: "#f8f8f8",
    padding: 15,
  },
  link: {
    color: "#333333",
    textDecoration: "underline",
    fontWeight: "600",
  },
  ctaContainer: {
    marginTop: 30,
    marginBottom: 15,
    padding: 20,
    backgroundColor: "#f0f0f0",
    border: "2px solid #000000",
    alignItems: "center",
  },
  ctaTitle: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  ctaSubtitle: {
    color: "#333333",
    fontSize: 11,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "500",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 25,
    gap: 15,
  },
  featureCard: {
    padding: 15,
    width: 120,
    alignItems: "center",
    backgroundColor: "#ffffff",
    border: "2px solid #000000",
    marginHorizontal: 5,
  },
  cardIcon: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000000",
  },
  cardTitle: {
    fontSize: 11,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    color: "#000000",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  cardDescription: {
    fontSize: 9,
    textAlign: "center",
    lineHeight: 1.3,
    color: "#333333",
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

interface InvoiceDocumentProps {
  data: InvoiceData;
  showLoginCta?: boolean;
}

export const InvoiceDocument: React.FC<InvoiceDocumentProps> = ({
  data,
  showLoginCta,
}) => {
  return (
    <Document>
      <Page size="A5" style={styles.page} wrap>
        <View style={styles.header}>
          {data.businessLogo && (
            <View style={styles.logoBox}>
              <Image
                src={data.businessLogo}
                style={{ width: 100, height: 50, objectFit: "contain" }}
              />
            </View>
          )}
          <Text style={styles.businessName}>{data.businessName}</Text>
          <Text style={styles.businessInfo}>{data.businessAddress}</Text>
          <Text style={styles.businessInfo}>Phone: {data.businessPhone}</Text>
          <Text style={styles.invoiceTitle}>
            {data.invoiceType === "invoice" ? "INVOICE" : "RECEIPT"}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Customer:</Text>
            <Text style={styles.infoValue}>{data.customerName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Address:</Text>
            <Text style={styles.infoValue}>{data.customerAddress}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>{data.customerPhone}</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.tableColHeader, styles.descriptionColHeader]}>
              Description
            </Text>
            <Text style={[styles.tableColHeader, styles.qtyColHeader]}>
              Qty
            </Text>
            <Text style={[styles.tableColHeader, styles.unitPriceColHeader]}>
              Unit Price
            </Text>
            <Text style={[styles.tableColHeader, styles.priceColHeader]}>
              Total Price
            </Text>
          </View>

          {data.items.map((item: InvoiceItem, index: number) => (
            <View
              style={[
                styles.tableRow,
                index % 2 === 1 ? styles.tableEvenRow : {},
              ]}
              key={item.id || index.toString()}
            >
              <Text style={[styles.tableCol, styles.descriptionCol]}>
                {item.description}
              </Text>
              <Text style={[styles.tableCol, styles.qtyCol]}>
                {item.quantity}
              </Text>
              <Text style={[styles.tableCol, styles.unitPriceCol]}>
                {formatCurrency(item.unit_price)}
              </Text>
              <Text style={[styles.tableCol, styles.priceCol]}>
                {formatCurrency((item.unit_price ?? 0) * (item.quantity ?? 0))}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ flexDirection: "column", marginTop: 15 }}>
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
            <View style={[styles.totalRow, styles.grandTotalRow]}>
              <Text style={styles.grandTotalLabel}>TOTAL:</Text>
              <Text style={styles.grandTotalValue}>
                {formatCurrency(data.total)}
              </Text>
            </View>
          </View>

          {data.invoiceType === "invoice" ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Payment Information</Text>
              <View style={styles.infoRow}>
                <Text style={styles.infoPaymentLabel}>Bank Name:</Text>
                <Text style={styles.infoValue}>{data.bankName}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoPaymentLabel}>Account Name:</Text>
                <Text style={styles.infoValue}>{data.accountName}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoPaymentLabel}>Account Number:</Text>
                <Text style={styles.infoValue}>{data.accountNumber}</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.thankYou}>THANK YOU!</Text>
          )}
        </View>

        {showLoginCta && (
          <>
            <View style={styles.ctaContainer}>
              <Text style={styles.ctaTitle}>
                Please sign up or log in to save your invoice or receipt
                securely.
              </Text>
              <Text style={styles.ctaSubtitle}>
                Visit https://bizengo.com/auth/signup or
                https://bizengo.com/auth/login
              </Text>
            </View>
            <View style={styles.cardsContainer}>
              <View style={styles.featureCard}>
                <Text style={styles.cardIcon}>QR</Text>
                <Text style={styles.cardTitle}>QR Generation</Text>
                <Text style={styles.cardDescription}>
                  Scan QR code to get invoice/receipt.
                </Text>
              </View>
              <View style={styles.featureCard}>
                <Text style={styles.cardIcon}>AI</Text>
                <Text style={styles.cardTitle}>Smart Suggestions</Text>
                <Text style={styles.cardDescription}>
                  AI-powered item recommendations.
                </Text>
              </View>
              <View style={styles.featureCard}>
                <Text style={styles.cardIcon}>PRO</Text>
                <Text style={styles.cardTitle}>Professional Templates</Text>
                <Text style={styles.cardDescription}>
                  Beautiful invoice designs.
                </Text>
              </View>
            </View>
          </>
        )}

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

export const generateModernPdf = async (
  data: InvoiceData,
  showLoginCta: boolean = false
): Promise<Blob> => {
  const blob = await pdf(
    <InvoiceDocument data={data} showLoginCta={showLoginCta} />
  ).toBlob();
  return blob;
};
