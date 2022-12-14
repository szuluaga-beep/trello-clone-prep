import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import sample from "../../utils/sample";
import InputContainer from '../InputContainer/InputContainer';
import List from '../List/List'

const Home = () => {
  const [lists, setLists] = useState(sample.lists)

  return (
   
      <DragDropContext>
        <Droppable
          droppableId='app'
          type='list'
          direction='horizontal'>
          {
            (provided) => (
              <div className='wrapper'
                ref={provided.innerRef}>
                {
                  lists.map((list, index) => {
                    
                    return <List list={list} key={list.id} index={index} />
                   
                  })
                }
                <div>
                  <InputContainer
                    type="list"
                  />
                </div>
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      </DragDropContext>

   
  )
}

export default Home