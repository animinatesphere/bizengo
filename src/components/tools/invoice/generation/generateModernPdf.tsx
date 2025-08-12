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
// Assuming InvoiceItem is imported or defined consistently from InvoiceGenerator.tsx
// It's better to have a dedicated types file, but for this example, aligning with how it's used.
export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number | null;
  unit_price: number | null; // This is the actual unit price
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
    backgroundColor: "#e74c3c",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    padding: "4px 40px",
    transform: "rotate(30deg)",
    zIndex: 10,
  },
  logoBox: {
    width: "100%",
    height: 60,
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 25,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  // NEW: Style for container holding logo and business name
  headerContent: {
    flexDirection: "row",
    alignItems: "center", // Vertically center content
    justifyContent: "center", // Horizontally center content
    marginBottom: 5,
  },
  // NEW: Style for the logo image
  logo: {
    width: 80,
    height: 50,
    objectFit: "contain",
  },
  businessName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  businessInfo: {
    fontSize: 10,
    marginBottom: 3,
  },
  invoiceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    borderBottomColor: "#808080",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 10,
    marginBottom: 2,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: "bold",
    marginRight: 4,
  },
  infoPaymentLabel: {
    fontSize: 10,
    fontWeight: "normal",
    marginRight: 4,
  },
  infoValue: {
    fontSize: 10,
    fontWeight: "normal",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableEvenRow: {
    backgroundColor: "#f9f9f9",
  },
  tableColHeader: {
    fontSize: 10,
    fontWeight: "bold",
    padding: 5,
  },
  tableCol: {
    fontSize: 9,
    padding: 5,
  },
  // Updated column widths for 4 columns: Description, Quantity, Unit Price, Total Price
  descriptionColHeader: {
    width: "40%", // Reduced from 50%
    textAlign: "left",
  },
  descriptionCol: {
    width: "40%", // Reduced from 50%
    textAlign: "left",
  },
  qtyColHeader: {
    width: "15%", // Adjusted from 20%
    textAlign: "left",
  },
  qtyCol: {
    width: "15%", // Adjusted from 20%
    textAlign: "left",
  },
  unitPriceColHeader: {
    // NEW STYLE
    width: "20%",
    textAlign: "left",
  },
  unitPriceCol: {
    // NEW STYLE
    width: "20%",
    textAlign: "left",
  },
  priceColHeader: {
    width: "25%", // Adjusted from 30% for the total price column
    textAlign: "right", // Align right for numbers
  },
  priceCol: {
    width: "25%", // Adjusted from 30% for the total price column
    textAlign: "right", // Align right for numbers
  },
  totalsContainer: {
    flexDirection: "column",
    alignSelf: "flex-start", // Adjusted to align left
    width: "50%", // Still occupies half width
    marginTop: 5,
    marginBottom: 10,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 10,
    fontWeight: "normal",
  },
  grandTotalValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  thankYou: {
    fontSize: 26,
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    fontSize: 8,
    color: "#808080",
    marginTop: "auto",
    textAlign: "center",
    paddingTop: 10,
    borderTopColor: "#808080",
    borderTopWidth: 0.5,
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
});

const formatCurrency = (amount: number | null | undefined): string => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return "N0.00";
  }
  return `N${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} `;
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
          {/* Logo centered above business name */}
          {data.businessLogo && (
            <View style={styles.logoBox}>
              <Image src={data.businessLogo} style={styles.logo} />
            </View>
          )}
          <Text style={styles.businessName}>{data.businessName}</Text>
          <Text style={styles.businessInfo}>{data.businessAddress}</Text>
          <Text style={styles.businessInfo}>Phone: {data.businessPhone}</Text>
          <Text style={styles.businessInfo}>
            {data.invoiceType === "invoice"
              ? "Invoice Number: "
              : "Receipt Number: "}
            {data.businessIdentifierNumber}
          </Text>
          <Text style={styles.invoiceTitle}>
            {data.invoiceType === "invoice" ? "Invoice" : "Receipt"}
          </Text>
        </View>

        <View style={styles.section}>
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
              Quantity
            </Text>
            <Text style={[styles.tableColHeader, styles.unitPriceColHeader]}>
              Unit Price
            </Text>{" "}
            {/* NEW HEADER */}
            <Text style={[styles.tableColHeader, styles.priceColHeader]}>
              Price
            </Text>{" "}
            {/* This is now line total */}
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
              </Text>{" "}
              {/* NEW CELL */}
              <Text style={[styles.tableCol, styles.priceCol]}>
                {formatCurrency((item.unit_price ?? 0) * (item.quantity ?? 0))}
              </Text>{" "}
              {/* Calculated line total */}
            </View>
          ))}
        </View>

        <View style={{ flexDirection: "column", marginTop: 5 }}>
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
              <Text style={styles.totalLabel}>Total:</Text>
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
            <Text style={styles.thankYou}>Thank you!</Text>
          )}
        </View>

        {/* Call to action for login/signup if not logged in - message and three card design */}
        {showLoginCta && (
          <>
            <View
              style={{
                marginTop: 24,
                marginBottom: 8,
                padding: 10,
                backgroundColor: "#fffbe6",
                border: "1px solid #ffe58f",
                borderRadius: 6,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#ad6800",
                  fontSize: 12,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Please sign up or log in to save your invoice or receipt
                securely.
              </Text>
              <Text
                style={{
                  color: "#ad6800",
                  fontSize: 10,
                  textAlign: "center",
                  marginTop: 4,
                }}
              >
                Visit https://bizengo.com/auth/signup or
                https://bizengo.com/auth/login
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 8,
                marginBottom: 16,
                gap: 8,
              }}
            >
              {/* QR Generation Card */}
              <View
                style={{
                  backgroundColor: "#e6f0fa",
                  borderRadius: 8,
                  padding: 10,
                  width: 120,
                  alignItems: "center",
                  border: "1px solid #b6d4fa",
                  marginRight: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#2563eb",
                    fontWeight: "bold",
                    marginBottom: 4,
                  }}
                >
                  QR
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#2563eb",
                    textAlign: "center",
                    marginBottom: 2,
                  }}
                >
                  QR Generation
                </Text>
                <Text
                  style={{ fontSize: 8, color: "#2563eb", textAlign: "center" }}
                >
                  Scan QR code to get invoice/receipt.
                </Text>
              </View>
              {/* Smart Suggestions Card */}
              <View
                style={{
                  backgroundColor: "#e6fae6",
                  borderRadius: 8,
                  padding: 10,
                  width: 120,
                  alignItems: "center",
                  border: "1px solid #b6fab6",
                  marginRight: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#059669",
                    fontWeight: "bold",
                    marginBottom: 4,
                  }}
                >
                  AI
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#059669",
                    textAlign: "center",
                    marginBottom: 2,
                  }}
                >
                  Smart Suggestions
                </Text>
                <Text
                  style={{ fontSize: 8, color: "#059669", textAlign: "center" }}
                >
                  AI-powered item recommendations.
                </Text>
              </View>
              {/* Professional Templates Card */}
              <View
                style={{
                  backgroundColor: "#f3e8ff",
                  borderRadius: 8,
                  padding: 10,
                  width: 120,
                  alignItems: "center",
                  border: "1px solid #d1b3fa",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#7c3aed",
                    fontWeight: "bold",
                    marginBottom: 4,
                  }}
                >
                  PRO
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#7c3aed",
                    textAlign: "center",
                    marginBottom: 2,
                  }}
                >
                  Professional Templates
                </Text>
                <Text
                  style={{ fontSize: 8, color: "#7c3aed", textAlign: "center" }}
                >
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

// Pass showLoginCta=true to show the call to action if user is not logged in
export const generateModernPdf = async (
  data: InvoiceData,
  showLoginCta: boolean = false
): Promise<Blob> => {
  const blob = await pdf(
    <InvoiceDocument data={data} showLoginCta={showLoginCta} />
  ).toBlob();
  return blob;
};
