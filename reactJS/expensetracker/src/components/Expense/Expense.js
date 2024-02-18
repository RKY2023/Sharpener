import { React, useCallback, useEffect, useRef, useState } from "react";
import { Button, Container, Form, Nav, Navbar, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/ExpenseReducer";

const initialExpense = [
  {
    id: 0,
    money: 12000,
    desc: "Rent",
    category: "Rent",
  },
  {
    id: 1,
    money: 5000,
    desc: "Maintenance",
    category: "Maintenace",
  },
  {
    id: 2,
    money: 4000,
    desc: "Grocery",
    category: "food",
  },
  {
    id: 3,
    money: 1500,
    desc: "Milk",
    category: "food",
  },
];

const Expense = (props) => {
  const dispatch = useDispatch();
  const isWorthPremium = useSelector(state => state.expense.worthPremium);
  const inputCategoryRef = useRef();
  const inputDescriptionRef = useRef();
  const inputMoneyRef = useRef();
  const [expenses, setExpenses] = useState(initialExpense);
  const [modifyExpenseId, setModifyExpenseId] = useState('');

  const submitAddExpenseHandler = (e) => {
    e.preventDefault();
    const expense = {
      category: inputCategoryRef.current.value,
      desc: inputDescriptionRef.current.value,
      money: inputMoneyRef.current.value,
    };
    addExpenseToFirebase(expense , modifyExpenseId);
    setModifyExpenseId('');
  };

  const submitDeleteExpenseHandler = (e) => {
    e.preventDefault();
    const expenseId = e.target.getAttribute('data-key');
    deleteExpenseToFirebase(expenseId);
  };

  const submitEditExpenseHandler = (e) => {
    e.preventDefault();
    const expenseId = e.target.getAttribute('data-key');
    const getExpense = expenses.filter( (expense) => {
        return expense.id == expenseId;
    });
    inputCategoryRef.current.value = getExpense[0].category;
    inputDescriptionRef.current.value = getExpense[0].desc;
    inputMoneyRef.current.value = getExpense[0].money;
    setModifyExpenseId(expenseId);
  };

  const activatePremiumHandler = () => {
    dispatch(expenseActions.activatePremium());
    dispatch(expenseActions.setTheme());
  }

  const addExpenseToFirebase = useCallback(async (expense, modifyExpenseId) => {
    let methodType = 'PUT';
    let url =
    "https://atomic-matrix-193707-default-rtdb.firebaseio.com/Expenses/" +
    modifyExpenseId +
    ".json";
    if(modifyExpenseId == ''){
        methodType = 'POST';
        url =
      "https://atomic-matrix-193707-default-rtdb.firebaseio.com/Expenses.json";
    }
    
    try {
      const response = await fetch(url, {
        method: methodType,
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data & data.name) {
        console.log("Expenses added");
      }else if(data && data.hasOwnProperty('desc')){
        console.log("Expenses Edited");
      }
    } catch (err) {
      console.log(err);
    }
  }, [modifyExpenseId]);

  const deleteExpenseToFirebase = useCallback(async (expenseId) => {
    const url =
      "https://atomic-matrix-193707-default-rtdb.firebaseio.com/Expenses/" +
      expenseId +
      ".json";
    try {
      const response = await fetch(url, {
        method: "DELETE",
        // body: JSON.stringify(expense),
        // headers: {
        //     'Content-Type': 'application/json'
        // }
      });
      const data = await response.json();
      console.log(data);
      if (data & (data == null)) console.log("Expenses deleted");
    } catch (err) {
      console.log(err);
    }
  }, []);

  const setExpenseToFirebase = useCallback(async () => {
    const url =
      "https://atomic-matrix-193707-default-rtdb.firebaseio.com/Expenses.json";
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data) {
        console.log("Expenses fetched");
        const loadedExpenses = [];
        for (const key in data) {
          loadedExpenses.push({
            id: key,
            category: data[key].category,
            desc: data[key].desc,
            money: data[key].money,
          });
        }
        setExpenses(loadedExpenses);
        dispatch(expenseActions.checkExpense10k(loadedExpenses));
      }
      
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setExpenseToFirebase();
  }, [setExpenseToFirebase,addExpenseToFirebase, deleteExpenseToFirebase]);

  const makeCSV = (rows) => {
    const csvHeader = 'id, category, desc, money\n';
    return csvHeader + rows.map(r=> '"'+r.id+'", "'+r.category+'", "'+r.desc+'", '+r.money).join('\n');
  }
  const runExpCSV = () => {
    const  tt = makeCSV(expenses);
    console.log(tt);
    console.table(tt);
    return
  }
  // console.log(expenses);

  const createExpenseCSV = () => {
    const blob = new Blob([makeCSV(expenses)], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute(
      'download',
      `Expense.csv`,
    );
    const elem = document.getElementById('tt');
    elem.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    return ;
  }

  const expensesJSX = expenses.map((expense) => (
    <tr>
      <td>{expense.id}</td>
      <td>{expense.category}</td>
      <td>{expense.desc}</td>
      <td>{expense.money}</td>
      <td>
        <Button data-key={expense.id} onClick={submitDeleteExpenseHandler} className="btn-danger mx-1">
          Delete
        </Button>
        <Button data-key={expense.id} onClick={submitEditExpenseHandler} className="btn-secondary mx-1">
          Edit
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <h1 className="mx-5 my-3">Welcome to Expense Tracker!!!</h1>
      { isWorthPremium && <Button className='btn-success' onClick={activatePremiumHandler}>Activate Premium</Button>}
      <Container className="my-5">
        <Form onSubmit={submitAddExpenseHandler} className="">
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control ref={inputCategoryRef} />
            <Form.Label>Desc</Form.Label>
            <Form.Control ref={inputDescriptionRef} />
            <Form.Label>Money</Form.Label>
            <Form.Control ref={inputMoneyRef} />
          </Form.Group>
          <Button type="submit" className="ml-auto my-2 btn-warning btn-sm">
            Add Expense
          </Button>
        </Form>
      </Container>
      <Container className="">
        <h3>Your Expenses</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Desc</th>
              <th>Money</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{expensesJSX}</tbody>
        </Table>
        <h6 id='tt'></h6>
        <a onClick={createExpenseCSV} className="pointer">Download CSV</a>
      </Container>
    </>
  );
};

export default Expense;
