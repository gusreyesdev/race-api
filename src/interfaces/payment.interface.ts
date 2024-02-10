export interface payment {
  amount_in_cents: number;
  currency: string;
  signature: string;
  customer_email: number;
  payment_method: {
    installments: number;
  };
  reference: string;
  payment_source_id: number;
}
