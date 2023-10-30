import { createConnection } from 'mysql'

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'taskdb'
})

export function getConnection() {
  return connection
}
