import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


const Home = () => {
  const [lists, setLists] = useState([])

  return (
    <div>
      <DragDropContext>
        <Droppable
          droppableId='app'
          type='list'
          direction='horizontal'>
          {
            (provided) => {
              <div className='wrapper'
              ref={provided.innerRef}>
                {provided.placeholder}
              </div>
            }
          }
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Home