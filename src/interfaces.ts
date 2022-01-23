export interface card {
    name: string;
    cardNumber: number;
    cardName: string;
    expiryDate: string;
    cardType: string;
    vendor: string;
    currentBalance: number;
    transactions: transaction[];
}

export interface transaction {
    id: number;
    description: string;
    type: string;
    amount: number;
    transactionDate: Date | string;
}