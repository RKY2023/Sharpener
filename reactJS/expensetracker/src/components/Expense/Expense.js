import { React, useRef } from "react";
import { Button, Container, Form, Nav, Navbar, Table } from "react-bootstrap";

const initialExpense = [
    {
        id: 0,
        meney: 12000,
        desc: 'Rent',
        category: 'Rent',
    },
    {
        id: 1,
        meney: 5000,
        desc: 'Maintenance',
        category: 'Maintenace',
    },
    {
        id: 2,
        meney: 4000,
        desc: 'Grocery',
        category: 'food',
    },
    {
        id: 3,
        meney: 1500,
        desc: 'Milk',
        category: 'food',
    },
]

const Expense = (props) => {
    const inputCategoryRef = useRef();
    const inputDescriptionRef = useRef();
    const inputMoneyRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const expense = {
            
        }
    }
    const expensesJSX = initialExpense.map( (expense) => (
        <tr>
            <td>{expense.id}</td>
            <td>{expense.category}</td>
            <td>{expense.desc}</td>
            <td>{expense.meney}</td>
        </tr>
    ));

    return (
        <>
        <h1>Welcome to Expense Tracker!!!</h1>
        <Container className="my-5">
            <Form onSubmit={submitHandler} className="">
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control ref={inputCategoryRef} />
                    <Form.Label>Desc</Form.Label>
                    <Form.Control ref={inputDescriptionRef} />
                    <Form.Label>Money</Form.Label>
                    <Form.Control ref={inputMoneyRef} />
                </Form.Group>
                <Button type="submit" className="ml-auto my-2 btn-warning btn-sm">Add Expense</Button>
            </Form>
        </Container>
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Desc</th>
                        <th>Money</th>
                    </tr>
                </thead>
                <tbody>
                    {expensesJSX}
                </tbody>
            </Table>
        </Container>
        </>
    );
};

export default Expense;