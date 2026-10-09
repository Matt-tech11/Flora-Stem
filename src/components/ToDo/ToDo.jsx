import React, { useState } from 'react';
import { Button, Card, Checkbox, Flex, Input, List, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const initialTasks = [
  { id: 1, title: 'Review new plant orders', done: false },
  { id: 2, title: 'Water the greenhouse plants', done: true },
  { id: 3, title: 'Prepare this week’s featured plants', done: false },
];

const ToDo = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    const title = newTask.trim();
    if (!title) return;
    setTasks((current) => [...current, { id: Date.now(), title, done: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks((current) => current.map((task) => (
      task.id === id ? { ...task, done: !task.done } : task
    )));
  };

  const removeTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  return (
    <section className="page-view">
      <Typography.Title level={2}>ToDo</Typography.Title>
      <Typography.Paragraph type="secondary">
        Keep track of the work that keeps your shop growing.
      </Typography.Paragraph>
      <Card className="page-card" title={`${tasks.filter((task) => !task.done).length} tasks left`}>
        <Flex gap="small" className="task-entry">
          <Input
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            onPressEnter={addTask}
            placeholder="Add a task"
            aria-label="New task"
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={addTask}>Add</Button>
        </Flex>
        <List
          dataSource={tasks}
          locale={{ emptyText: 'You’re all caught up.' }}
          renderItem={(task) => (
            <List.Item
              actions={[
                <Button
                  key="remove"
                  type="text"
                  aria-label={`Remove ${task.title}`}
                  icon={<DeleteOutlined />}
                  onClick={() => removeTask(task.id)}
                />,
              ]}
            >
              <Checkbox checked={task.done} onChange={() => toggleTask(task.id)}>
                <span className={task.done ? 'task-done' : ''}>{task.title}</span>
              </Checkbox>
            </List.Item>
          )}
        />
      </Card>
    </section>
  );
};

export default ToDo;
