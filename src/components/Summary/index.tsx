import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../context/transactionsContext";

export function Summary() {
    const { transactions } = useTransactions()

    const totalDeposits = transactions.reduce((acc, transactions) => {
        if (transactions.type === 'deposit') {
            return acc + transactions.amount
        }

        return acc;
    }, 0)

    const summary = transactions.reduce((acc, transactions) => {
        if (transactions.type === 'deposit') {
            acc.deposits += transactions.amount;
            acc.total += transactions.amount;
        } else {
            acc.withdraws += transactions.amount;
            acc.total -= transactions.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong> {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposits)
                }
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)
                }
                </strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)
                }
                </strong>
            </div>
        </Container>
    )
}