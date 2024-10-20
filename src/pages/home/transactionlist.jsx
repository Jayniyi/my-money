import styles from "./home.module.css";
import { useFirestore } from "../../hooks/usefirestore";
export default function TransactionList({ transactions }) {
   // Fixed capitalization of 'TransactionList'
   const { deletedDocument } = useFirestore('transactions')
  //  console.log(response)
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => ( // Changed 'transactions' to 'transaction' for individual item
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p> {/* Corrected to 'transaction' */}
          <p className={styles.amount}>${transaction.amount}</p> {/* Corrected to 'transaction' */}
        <button onClick={() => deletedDocument(transaction.id) }>x </button>
        </li>
      ))}
    </ul>
  );
} 