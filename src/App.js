import { useEffect, useState } from "react";
import { ContactList, Form, Layout } from "./components";

function App() {
  const [list, setList] = useState(
    [
      {
          name: 'ahahaha',
          tel: '345345'
      },
      {
          name: 'Berat',
          tel: '345345'
      },
      {
          name: 'Aslan',
          tel: '345345'
      },
      {
          name: 'Kral',
          tel: '345345'
      },
      {
          name: 'asss',
          tel: '345345'
      }
  ]
  );

  useEffect(() => {
    console.log(list)
  }, [list])

  return (
    <Layout>
      <Form setList={setList} list={list} />
      <ContactList setList={setList} list={list} />
    </Layout>
  );
}

export default App;