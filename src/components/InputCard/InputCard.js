import { Clear } from '@mui/icons-material'
import React, { useState } from 'react'

import "./styles.css"
const InputCard = ({ setOpen, listId, type }) => {
     const [title, setTitle] = useState("")
     return (
          <div className='input-card'>
               <div className='input-card-container'>
                    <textarea
                         className='input-text' placeholder={
                         type === "card"
                              ? "Enter title of this card"
                              : "Enter list title"
                    }
                         autoFocus
                    />

                    <div className='confirm'>
                         <button className='button-confirm'>
                              {
                                   type === "card"
                                        ? "Add Card"
                                        : "Add List"
                              }
                         </button>
                         <button className='button-cancel'>
                              <Clear/>
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default InputCard