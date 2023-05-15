const EntryDetails = ({ entry }) => {

    return (
      <div className="entry-details">
        <h4>{entry.title}</h4>
        <p><strong>Location: </strong>{entry.location}</p>
        <p><strong>Flow: </strong>{entry.flow} m/s</p>
        <p>{entry.createdAt}</p>
      </div>
    )
  }
  
  export default EntryDetails