import styles from "@/styles/Home.module.css";
import React from "react";

export interface GridData {
  Year: number;
  Amount: number;
  Group: string;
  Description: string;
}

export default function Grid({ data }) {
  return (
    <div className={styles.grid}>
      <div className={styles.gridRow}>
        {data.columns.map((item: string, idx: number) => (
          <div key={idx} className={styles.gridItem}>
            {item}
          </div>
        ))}
      </div>
      {data.rows.map((item: GridData) => {
        return (
          <div className={styles.gridRow} key={item.Year}>
            <div className={styles.gridItem}>{item.Year}</div>
            <div className={styles.gridItem}>{item.Amount}</div>
            <div className={styles.gridItem}>{item.Group}</div>
            <div className={styles.gridItem}>{item.Description}</div>
          </div>
        );
      })}
    </div>
  );
}
