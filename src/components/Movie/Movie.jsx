import React from 'react'
// import Data from '../Data'
import {useParams, useHistory} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import  {useSelector} from 'react-redux'
function Movie() {
    const Data = useSelector (state => state.Movie)
    const {id}=useParams()
    const Found= Data.filter(el => el.id==id)
    const History= useHistory()
    if(id == 0 ){
        History.push("/")
        window.location.reload()
    }
    if(id> Data.length ){ 
        History.push("/")
        window.location.reload()  
    }
    console.log(Found)
  return (
     <> 
     <div>
      {Found[0].title}   
     </div>
    <div>
        {Found[0].trailer}
    </div>
    <div>
        {Found[0].description}
    </div>
    <Button variant='danger' onClick={()=>History.goBack()}> Go Back </Button>
    <Button variant='success' onClick={()=>History.push('/')}> HOME </Button>
    {id<= Data.length-1 ? 
    <Button variant='warning' onClick={()=>History.push(`/Movie/${Found[0].id+1}`)}> NEXT </Button>
    : ''}
    { id > 1 ?  
    <Button variant='danger' onClick={()=>History.push(`/Movie/${Found[0].id-1}`)}> Previous </Button>
    :'' }
    </>
  )
}

export default Movie