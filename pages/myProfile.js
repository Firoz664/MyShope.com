/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useEffect} from 'react'
import  {useRouter}  from 'next/router'

const myProfile = () => {
  const router = useRouter()

  useEffect(() => {
    if(!localStorage.getItem('token')){
    router.push('/')
  
    } 
  }, [])
  return (
    <div>
      Profiles
    </div>
  )
}

export default myProfile

