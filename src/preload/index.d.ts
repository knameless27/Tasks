import { ElectronAPI } from '@electron-toolkit/preload'
import { Task } from '../interfaces/main'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      newTask: (task: Task) => any
      getAllTasks: () => any
      getTasks: (index: number) => any
      updateTask: (task: Task, index: number) => any
      newSubTask: (task: Task, index: number) => any
      editSubTask: (task: Task, index: number, fatherIndx: number) => any
      deleteSubTask: (index: number, fatherIndx: number) => any
      deleteTask: (index: number) => any
    }
  }
}
