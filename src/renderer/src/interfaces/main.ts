interface Task {
  name: string;
  description: string;
  finished: boolean;
  image?: string;
  subTasks: Task[] | [];
}

export interface Tasks extends Array<Task>{}
