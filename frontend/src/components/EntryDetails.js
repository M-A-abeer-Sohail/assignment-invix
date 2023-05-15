const EntryDetails = ({ entry }) => {

    return (
      <div className="entry-details">
        <h4>{entry.title}</h4>
        <p><strong>Name: </strong>{entry.name}</p>
        <p><strong>Longitude: </strong>{entry.longitude} m/s</p>
        <p><strong>Latitude: </strong>{entry.latitude} m/s</p>
        <p><strong>Volume consumed: </strong>{entry.volume} m3</p>
        <p><strong>Flow: </strong>{entry.flow} m/s</p>
        <p><strong>Battery level: </strong>{entry.battery} m/s</p>
        <p><strong>Current: </strong>{entry.current} mA</p>
        <p>{entry.createdAt}</p>
      </div>
    )
  }
  
  export default EntryDetails