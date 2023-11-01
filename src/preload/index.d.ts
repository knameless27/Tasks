import { ElectronAPI } from '@electron-toolkit/preload'
import { Task } from '../interfaces/main'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      newTask: (task: Task) => Promise<any>
      getAllTasks: () => Promise<any>
      getTasks: (index: number) => Promise<any>
      updateTask: (task: Task, index: number) => Promise<any>
      deleteTask: (index: number) => Promise<any>
    }
  }
}
