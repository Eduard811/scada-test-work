import React, {useState} from 'react'
import {connect} from 'react-redux'
import classes from './MainCard.module.scss'
import {toggleIsActive, addBlock, deleteBlockAC} from '../../redux/reducers/mainCardReducer'
import {
  SvgPlus,
  SvgArrow,
  SvgConnectionSecond,
  SvgConnectionFirst,
  SvgConnectionThird} from '../common/SvgSprite'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import FirstCard from '../FirstCard/FirstCard'
import SecondCard from '../SecondCard/SecondCard'
import ThirdCard from '../ThirdCard/ThirdCard'

const MainCard = ({name, isActive, toggleIsActive, addBlock, blocks, deleteBlockAC}) => {

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
    <div className={classes.cardWrapper}>
        <div
          className={isActive ? `${classes.mainCard} + " " + ${classes.mainCardActive}` : classes.mainCard}
          onMouseEnter={() => setPlusVisible(true)}
          onMouseLeave={() => setPlusVisible(false)}
        >
          <button className={classes.btn} onClick={setStateCard} />
          <h1>{name}</h1>
          <Droppable droppableId="mainCard">
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
              <div className={vector ? `circle + activeCircle`: "circle"} onClick={onChangeConnection}>
                <SvgArrow />
              </div>
          }
          {
            connection &&
            <React.Fragment>
              <div className={classes.connectionFirst}>
                <SvgConnectionFirst />
                <FirstCard />
              </div>
              <div className={classes.connectionSecond}>
                <SvgConnectionSecond />
                <SecondCard />
              </div>
              <div className={classes.connectionThird}>
                <SvgConnectionThird />
                <ThirdCard />
              </div>
            </React.Fragment>
          }
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isActive: state.main.isActive,
    name: state.main.mainCard.name,
    blocks: state.main.mainCard.blocks
  }
}

export default connect(mapStateToProps, {toggleIsActive, addBlock, deleteBlockAC})(MainCard)