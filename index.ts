import inquirer from "inquirer";

interface Task {
    name: string;
    completed: boolean;
}

async function main() {
    const todoList: Task[] = [];
    let conditions: boolean = true;

    console.log("\n \t Welcome to Sobiaisb - Todo-List Application\n");

    while (conditions) {
        const addTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "Enter your New Task :"
            }
        ]);

        const newTask: Task = {
            name: addTask.task,
            completed: false
        };

        todoList.push(newTask);
        console.log(`${newTask.name} Task added in Todo-List successfully`);

        const addMoreTask = await inquirer.prompt([
            {
                name: "addmore",
                type: "confirm",
                message: "Do you want to add more task ?",
                default: true
            }
        ]);

        conditions = addMoreTask.addmore;
    }

    console.log("\nYour updated Todo-list:");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? "X" : " "}] ${task.name}`);
    });
}

main();

