import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);



  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');

  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <h2>Manipulando o useState através de Arrays.</h2>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br />
        <button type="submit">Registrar</button>
      </form>

      <br /><br />

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

