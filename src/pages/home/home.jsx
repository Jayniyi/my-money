import { useAuthContext } from "../../hooks/useauthcontext";
import { useCollection } from "../../hooks/usecollection";
// styles
import styles from "./home.module.css";

// components
import TransactionForm from "./transaction";
import TransactionList from "./transactionlist";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transactions", [
    "uid",
    "==",
    user.uid,
    ["createdAt", "desc"]
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
