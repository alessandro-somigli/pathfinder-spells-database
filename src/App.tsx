import { useState } from 'react'

import './App.css'
import { ExecutedQuery, connect } from '@planetscale/database'
import ScrollButton from './ScrollButton'
import InfoButton from './InfoButton'
import InfoPage from './InfoPage'

const config = {
  host: import.meta.env.VITE_DB_HOST,
  username: import.meta.env.VITE_DB_USERNAME,
  password: import.meta.env.VITE_DB_PASSWORD
}

const connection = connect(config)

function App() {
  const [input, setInput] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [info, setInfo] = useState(false)
  const [output, setOutput] = useState({} as ExecutedQuery | undefined)

  const sendQuery = async (input: string): Promise<ExecutedQuery | undefined> => {
    let response = undefined
    setLoading(true)
    try {
      response = await connection.execute(input)
      setError("")
    } catch (res_error) {
      setError("error: " + res_error)
    } finally {
      setLoading(false)
    }
    return response
  }

  return (
    <main className={"page-container"}>
      <h1>Pathfinder DB incantesimi</h1>

      <div>
        <div className='form'>
          <textarea className='text-area' style={collapsed?{display: 'none'}:{}} 
            onChange={e => setInput(e.target.value)} placeholder='query...' /> <br />
          <button className='button' style={collapsed?{display: 'none'}:{}} 
            onClick={async () => setOutput(await sendQuery(input))} >cerca</button>
          <button onClick={() => setCollapsed(!collapsed)}>{collapsed? '▼':'▲'}</button>
        </div>

        <ScrollButton />
        <InfoButton handleClick={() => setInfo(true)} />

        <div className='info-box-container' style={info?{}:{display: 'none'}}>
          <div className='info-box'>
            <button className='close-button' onClick={() => setInfo(false)}>✕</button>
            <InfoPage />
          </div>
        </div>

        {loading? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>:
          error? <p className='error-message'>{error}</p>:
          !output?'':
          <div className='table-container' style={info?{display: 'none'}:{}}>
            <table className='table'>
              <thead>
                <tr>
                  {output.headers?.map((header, index) => <th key={index}>{header}</th>)}
                </tr>
              </thead>
              <tbody>
                {output.rows?.map((row, index) => 
                  <tr key={index}>
                    {Object.entries(row).map((section: [string, string], index: number) => <td key={index}>{section[1]}</td>)}
                  </tr>)}
              </tbody>
            </table>
          </div> }
      </div>
    </main>
  )

}

export default App


// select name, subschool from spells WHERE spells.school = "abjuration";

// things to add:
// write rules and guidance (collapsable as well)
// center table when little (no lnline-block)



// select distinct `duration` from spells