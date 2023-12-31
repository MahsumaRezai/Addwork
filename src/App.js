import React, { useState } from 'react';
import List from './Component/List';
import Form from './Component/Form.js';

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        { text: 'Do all exercises!', id: 'g1' },
        { text: 'Finish the course!', id: 'g2' }
    ]);

    const addGoalHandler = enteredText => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
            return updatedGoals;
        });
    };

    const deleteItemHandler = goalId => {
        setCourseGoals(prevGoals => {
            const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };

    let content = (
        <p style={{ textAlign: 'center', color: "red" , fontSize:'20px'}}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <List items={courseGoals} onDeleteItem={deleteItemHandler} />
        );
    }

    return (
        <div>
            <section id="goal-form">
                <Form onAddGoal={addGoalHandler} />
            </section>
            <section id="goals">
                {content}

            </section>
        </div>
    );
};

export default App;
