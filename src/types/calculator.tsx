

export interface ItemCalculationData {
    id: string;
    productCategory: string;
    costPerItemNum: number;
    quantityNum: number;
    itemTotalCost: number;
    itemProfitAmount: number;
    itemSuggestedSellingPrice: number;
    pricePerUnit: number;
}

export interface CalculationReportData {
    profitMarginNum: number;
    shippingCostNum: number;
    otherExpensesNum: number;
    items: ItemCalculationData[];
    totalItemsBaseCost: number;
    totalItemsProfit: number;
    totalItemsRevenueBeforeGlobalExpenses: number;
    totalExpenditure: number;
    finalSuggestedSellingPrice: number;
    overallNetProfit: number;
    generationDate: string;
    businessName?: string;
    businessAddress?: string;
    businessPhone?: string;
    businessLogo?: string | null; // <--- ADD THIS
}

export type CalculationPdfGeneratorFunction = (data: CalculationReportData) => Promise<Blob>;