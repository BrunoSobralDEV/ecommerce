import Installment from "./Installment";
import { MAX_INSTALLMENTS, MONTHLY_INTEREST_RATE } from "../constants";

export default class CalculateInstallment {
  execute(
    value: number,
    installmentCount: number = MAX_INSTALLMENTS,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installment {
    if(installmentCount < 2 || installmentCount > MAX_INSTALLMENTS) {
      throw new Error("Invalid installment count. It must be between 2 and 12.");
    }

    const totalWithInterestRate = this.calculateCompoundInterest(value, interestRate, installmentCount);

    return {
      installmentValue: (totalWithInterestRate / installmentCount),
      totalValue: (totalWithInterestRate),
      installmentCount,
      interestRate,
    }
  }

  private calculateCompoundInterest(
    totalValue: number,
    installmentCount: number,
    monthlyInterestRate: number
  ): number {
    return totalValue * Math.pow(1 + monthlyInterestRate, installmentCount)
  }

  private withTwoDecimalPlaces(value: number) {
    return Math.round(value * 100) / 100
  }
}