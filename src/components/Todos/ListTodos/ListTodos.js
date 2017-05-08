import db from '../../db'
export default {
  name: 'ListTodos',
  firebase: {
      anArray: db.ref('todos')
  }
}