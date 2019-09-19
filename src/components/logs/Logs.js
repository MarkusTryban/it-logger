import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'

const Logs = ({ log: { logs, loading } }) => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLogs()
  }, [])

  const getLogs = async () => {
    setLoading(true)
    const res = await fetch('/logs')
    const data = await res.json()

    setLogs(data)
    setLoading(false)
  }

  if (loading) {
    return <Preloader />
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Sytem Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  log: state.log
})

export default connect(mapStateToProps)(Logs)
