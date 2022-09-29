import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../Card/Card";
import React, { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        {props.item.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </Card>
    </div>
  );
}
