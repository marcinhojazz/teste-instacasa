import React from 'react'
import { useRouter } from 'next/router'

interface Props {
  
}

const Users = (props) => {
  const router = use
  +Router()
  const { uid } = router.query

  return <p>Users: {uid}</p>
  
}

export default Users
