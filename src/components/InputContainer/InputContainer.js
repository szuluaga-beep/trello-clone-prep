import { Collapse } from '@mui/material'
import React, { useState } from 'react'
import "./styles.css"

const InputContainer = ({ listId, type }) => {
     const [open, setOpen] = useState(false)
     return (
          <div className='input-container'>
               <Collapse
                    in={open}
               >
                    {/* InputCard */}
               </Collapse>
               <Collapse in={!open}
               >
                    <div className='input-content'>
                         <button onClick={() => {
                              setOpen((prev) => !prev)
                         }}>
                              {type === "card" ? "+ Add Card" : "Add List"}
                         </button>
                    </div>
               </Collapse>
          </div>
     )
}

export default InputContainer