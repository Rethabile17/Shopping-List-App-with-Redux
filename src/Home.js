import React from 'react'
import ItemToDo from './itemtodo'
import AddItem from './additem'
function Home() {
  return (
    <div>
        <AddItem/>
        <ItemToDo/>
    </div>
  )
}

export default Home