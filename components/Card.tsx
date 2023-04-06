import styles from "@/styles/Home.module.css";

export default function Card(props: any) {
  const { header, children } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>{header}</div>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}
