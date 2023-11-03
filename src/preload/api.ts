import { Task } from '../interfaces/main'
import { ipcRenderer } from 'electron'
import fs from 'fs'
import path from 'path'

const userDataPath = ipcRenderer.sendSync('get-user-data-path')
const filePath = path.join(userDataPath, 'data.json')

const content = {
  tasks: []
}

function doesJsonFileExist(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK)
    return true
  } catch (err) {
    return false
  }
}
if (!doesJsonFileExist(filePath)) {
  fs.writeFile(filePath, JSON.stringify(content), (err) => {
    if (err) {
      console.error('Error al crear el archivo:', err)
    } else {
      console.log('Json creado exitosamente.')
    }
  })
}

const defaultResponse = (response: any | undefined, message: string, status: boolean) => {
  return status
    ? {
        data: response,
        message,
        status: 'success'
      }
    : {
        data: response,
        message,
        status: 'error'
      }
}

function newTask(task: Task) {
  try {
    let json: any

    json = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    json.tasks.push(task)

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8')
    return getAllTasks()
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

function updateTask(task: Task, index: number) {
  try {
    let json: any

    json = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    json.tasks[index] = task

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8')
    return getTask(index)
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

function newSubTask(task: Task, index: number) {
  try {
    let json: any

    json = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    json.tasks[index].subTasks.push(task)

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8')
    return getTask(index)
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

function editSubTask(task: Task, index: number, fatherIndx: number) {
  try {
    let json: any

    json = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    json.tasks[fatherIndx].subTasks[index] = task

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8')
    return getTask(fatherIndx)
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

function deleteSubTask(index: number, fatherIndx: number) {
  try {
    let json: any

    json = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    json.tasks[fatherIndx].subTasks.splice(index, 1)

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8')
    return getTask(fatherIndx)
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

function getTask(index: number) {
  try {
    let json: any

    json = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    return json.tasks[index]
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

function getAllTasks() {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    return data.tasks
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

function deleteTask(index: number) {
  try {
    let json: any

    json = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    json.tasks.splice(index, 1)

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8')
    return getAllTasks()
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

export default {
  newTask,
  getTask,
  deleteTask,
  updateTask,
  getAllTasks,
  newSubTask,
  editSubTask,
  deleteSubTask
}
