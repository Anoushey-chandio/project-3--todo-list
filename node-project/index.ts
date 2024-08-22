#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;
while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "todo",
      message: "what you want to add in your todos?",
      type: "input",
    },
    {
      name: "addmore",
      type: "confirm",
      message: "do you want to addmore?",
      default: "false",
    },
  ]);
  todos.push(addTask.todo);
  condition = addTask.addmore
  console.log(todos)
}
