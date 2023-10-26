interface Task {
  name: string
  description: string
  finished: boolean
  image?: string
  subTasks: Task[] | []
}

export interface Tasks extends Array<Task> {}

export interface basicPropsSvg {
  width: string
  height: string
  color: string
  data: any
}

