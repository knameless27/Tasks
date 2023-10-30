import { getConnection } from './database'
import { Task } from '@main_interfaces/main'

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

function formatObject(obj: any) {
  // Inicializa un array para almacenar las partes formateadas
  const formattedParts: any = []

  // Recorre las claves del objeto
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Obtiene el valor asociado a la clave
      const value = obj[key]

      // Formatea la clave y el valor y los agrega al array
      formattedParts.push(`${key} = '${value}'`)
    }
  }

  // Une las partes formateadas en una cadena con comas y espacios
  const formattedString = formattedParts.join(', ')

  // Devuelve la cadena formateada entre comillas invertidas
  return `\`${formattedString}\``
}

const del = (id: number | undefined) => {
  return `DELETE FROM tasks WHERE id = ${id}`
}

const edit = () => {
  return 'UPDATE tasks SET'
}

const create = () => {
  return 'INSERT INTO tasks SET ?'
}

async function newTask(task: Task) {
  try {
    const connection = getConnection()

    connection.connect()

    await connection.query(create, task)

    connection.end()

    return defaultResponse(null, 'Task created successfully!', true)
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

async function updateTask(task: Task) {
  try {
    const connection = getConnection()

    connection.connect()

    await connection.query(`${edit} ${formatObject(task)} WHERE id = ${task.id}`)

    connection.end()

    return defaultResponse(null, 'Task updated successfully!', true)
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

async function getTask(task: Task) {
  try {
    return defaultResponse(null, 'Task not found!', false)
    const connection = getConnection()

    connection.connect()

    await connection.query(create, task)

    connection.end()

    return defaultResponse(null, 'Task created successfully!', true)
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

async function getAllTasks() {
  try {
    const connection = getConnection()

    connection.connect()

    const query = 'SELECT * FROM tasks'

    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ' + err.message)
        return
      }

      // Los resultados de la consulta están en el arreglo 'results'
      console.log('Registros seleccionados:', results)
    })
    const response = connection.query(`SELECT * FROM tasks`)

    connection.end()

    return defaultResponse(response, 'Task created successfully!', true)
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

async function deleteTask(task: Task) {
  try {
    const connection = getConnection()

    connection.connect()

    await connection.query(del(task.id))

    connection.end()

    return defaultResponse(null, 'Task deleted successfully!', true)
  } catch (error: any) {
    return defaultResponse(null, error, false)
  }
}

export default {
  newTask,
  getTask,
  deleteTask,
  updateTask,
  getAllTasks
}
