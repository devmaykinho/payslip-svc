export interface Period {
  startDate: Date;
  endDate: Date;
}

export type PaymentType =
  | 'SALARIO'
  | 'ADIANTAMENTO'
  | 'FERIAS'
  | 'DECIMO_TERCEIRO'
  | 'PLR';
