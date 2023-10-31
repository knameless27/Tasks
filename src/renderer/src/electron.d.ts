declare global {
  interface Window {
    api: {
      newTask: (task: any) => Promise<any>
      getAllTasks: () => Promise<any>
      getTasks: (task: any) => Promise<any>
      // Agrega más métodos según tus necesidades
    }
  }
}
