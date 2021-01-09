import React, {useState} from 'react'
import {connect} from 'react-redux'
import classes from './FirstCard.module.scss'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import {SvgArrow, SvgPlus} from '../common/SvgSprite'
import {addBlock, deleteBlockAC, toggleIsActive} from '../../redux/reducers/firstCardReducer'

const FirstCard = ({name, isActive, toggleIsActive, addBlock, blocks, deleteBlockAC}) => {

  const [plusVisible, setPlusVisible] = useState(false)
  const [connection, setConnection] = useState(false)
  const [vector, setVector] = useState(true)

  const onChangeConnection = () => {
    setConnection(!connection)
    setVector(!vector)
  }

  const setStateCard = () => toggleIsActive(!isActive)

  const setBlock = () => addBlock({id: Math.random(), name: 'Block'})

  return (
    <div
      style={{position: 'absolute', top: '40px', left: '-73px'}}
      className={isActive ? `${classes.firstCard} + " " + ${classes.firstCardActive}` : classes.firstCard}
      onMouseEnter={() => setPlusVisible(true)}
      onMouseLeave={() => setPlusVisible(false)}
    >
      <button className={classes.btn} onClick={setStateCard} />
      <h1>{name}</h1>
      <Droppable droppableId="firstCard">
        {
          (provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {
                blocks.map((block, index) =>
                  <Draggable key={block.id} draggableId={block.id.toString()} index={index}>
                    {
                      (provided) =>
                        <div {...provided.draggableProps}
                             ref={provided.innerRef}
                             {...provided.dragHandleProps}
                             className={isActive
                               ? `${classes.block} + " " + ${classes.blockActive}`
                               : classes.block}
                        >
                          <p>{block.name}</p>
                          {
                            isActive &&
                            <div onClick={() => deleteBlockAC(block.id)} className={classes.deleteBlock}>
                              <SvgPlus />
                            </div>
                          }
                        </div>
                    }

                  </Draggable>
                )
              }
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
      {
        isActive && <button onClick={setBlock} className={classes.addBlock}><SvgPlus /></button>
      }
      {
        isActive ? null : plusVisible &&
          <div className="circle" onClick={onChangeConnection}>
            {
              vector
                ? <SvgPlus />
                : <SvgArrow />
            }
          </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isActive: state.first.isActive,
    name: state.first.firstCard.name,
    blocks: state.first.firstCard.blocks
  }
}

export default connect(mapStateToProps, {toggleIsActive, addBlock, deleteBlockAC})(FirstCard)