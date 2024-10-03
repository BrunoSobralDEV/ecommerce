import { CalculateInstallment } from '@/core'

export default function useInstallment(val: number, quantity: number = 12) {
    const installment = new CalculateInstallment().execute(val, quantity)
    return installment
}
