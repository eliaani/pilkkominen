export const TodoTable = ({ todos }) => {
  return (
    <table>
      <tr><td style={{ width: '110px' }}>Date</td><td>Description</td></tr>
      <tbody>
        {
          todos.map((todo, index) => <tr key={index}><td>{todo.date}</td><td>{todo.description}</td></tr>)
        }
      </tbody>
    </table>
  )
}