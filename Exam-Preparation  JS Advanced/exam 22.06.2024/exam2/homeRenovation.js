class HomeRenovation {
  tasks = [];
  completedTasks = [];
  constructor(budget) {
    this.budget = budget;
  }
  addTask(description, cost, priority) {
    if (cost > this.budget) return `Not enough budget to add '${description}' task.`;
    
    const task = { description, cost, priority };
    this.tasks.push(task);
    this.budget -= cost;

    return `The task '${description}' has been successfully added to the renovation plan.`;
  }
  markTaskAsCompleted(description) {
    const index = this.tasks.findIndex((task) => task.description === description);
    if (index === -1) throw new Error(`Task '${description}' not found in the renovation plan.`);
    const newTask = this.tasks.splice(index, 1)[0];
    this.completedTasks.push(newTask);
    return `The task '${description}' has been successfully completed.`;
  }
  getPriorityTasksCount(minimalPriority) {
    if (minimalPriority <= 0) return "The priority cannot be zero or negative.";
    const priority = this.tasks.filter((task) => task.priority >= minimalPriority);
    if (priority.length === 0) return `No tasks found with priority ${minimalPriority} or higher.`;
    return `You have ${priority.length} tasks to prioritize.`;
  }
  renovationSummary() {
    if (this.completedTasks.length === 0) throw new Error("No tasks have been completed yet!");
    const result = [];
    result.push(`Budget left $${this.budget}.`);
    result.push(`You have completed ${this.completedTasks.length} tasks.`);
    result.push("Pending tasks in the renovation plan:");
    this.tasks.forEach((task) => {result.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`);});
    return result.join("\n");
  }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());
