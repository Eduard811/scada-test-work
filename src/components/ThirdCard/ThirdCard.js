import React, {useState} from 'react'
import classes from './ThirdCard.module.scss'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import {SvgArrow, SvgPlus} from '../common/SvgSprite'
import {connect} from 'react-redux'
import {addBlock, deleteBlockAC, toggleIsActive} from '../../redux/reducers/thirdCardReducer'

const ThirdCard = ({name, isActive, toggleIsActive, addBlock, blocks, deleteBlockAC}) => {

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
      style={{position: 'absolute', top: '40px', right: '-73px'}}
      className={isActive ? `${classes.thirdCard} + " " + ${classes.thirdCardActive}` : classes.thirdCard}
      onMouseEnter={() => setPlusVisible(true)}
      onMouseLeave={() => setPlusVisible(false)}
    >
      <button className={classes.btn} onClick={setStateCard} />
      <h1>{name}</h1>
      <Droppable droppableId="thirdCard">
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
    isActive: state.third.isActive,
    name: state.third.thirdCard.name,
    blocks: state.third.thirdCard.blocks
  }
}

export default connect(mapStateToProps, {toggleIsActive, addBlock, deleteBlockAC})(ThirdCard)