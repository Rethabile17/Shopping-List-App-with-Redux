import React from 'react'
import ItemToDo from './itemtodo';
import AddItem from './additem';
import teamsAndConditions from './components/dataAndPrivacyProtection';
function Home() {
  return (
    <div>
        <AddItem/>
        <teamsAndConditions/>
      
    </div>
  )
}

export default Home