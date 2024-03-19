import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Community() {
  const dispatch = useDispatch()
  const communityTalks = useSelector((state)=> state.talks)

  console.log(communityTalks)
  return (
	<div>Community</div>
  )
}

export default Community