import './App.css';
import Table from './components/Table/Table';
import data from './data.json';

function App() {
  const table1 = [
    { name: { col: true, sort: true } },
    { city: { col: true, sort: true } },
    { email: { col: true, sort: true } },
    { date: { col: true, sort: true } },
    { role: { col: true, sort: true } },
  ];
  const table2 = [
    { name: { col: true, sort: true } },
    { city: false },
    { email: { col: true, sort: false } },
    { date: false },
    { role: { col: true, sort: false } },
  ];
  const table3 = [
    { name: false },
    { city: false },
    { email: { col: true, sort: false } },
    { date: { col: true, sort: true } },
    { role: { col: true, sort: true } },
  ];
  const table4 = [
    { name: { col: true, sort: false } },
    { city: { col: true, sort: true } },
    { email: false },
    { date: { col: true, sort: false } },
    { role: { col: true, sort: true } },
  ];

  return (
    <div className='App'>
      <Table data={data} tableConfigure={table1} />
      <Table data={data} tableConfigure={table2} />
      <Table data={data} tableConfigure={table3} />
      <Table data={data} tableConfigure={table4} />
    </div>
  );
}

export default App;
