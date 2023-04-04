import React from 'react'
import NewGeneratedStory from './NewGeneratedStory'
import styled from './styles.module.css'

const NewStory = () => {
  return (
    <div>
        <NewGeneratedStory/>
        <div className={styled.app}>
            <button type="button" class="btn btn-success">Save</button>
            <button type="button" class="btn btn-danger">Regenerate</button>
        </div>
    </div>
  )
}

export default NewStory