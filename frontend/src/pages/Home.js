import { useEffect, useState } from "react"

// components
import EntryDetails from "../components/EntryDetails"

const Home = () => {
  const [entries, setEntries] = useState(null)

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("/api/entries") // using proxy in package.json to bypass cross origin error
      const json = await response.json()

      if (response.ok) {
        setEntries(json)
      }
    }

    fetchEntries()
  }, [])

  return (
    <div className="home">
      <div className="entries">
        {entries && entries.map(entry => (
          <EntryDetails entry={entry} key={entry._id} />
        ))}
      </div>
    </div>
  )
}

export default Home