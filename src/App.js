import React from 'react'
import {connect} from 'react-redux'
import MainCard from './components/MainCard/MainCard'
import {DragDropContext} from 'react-beautiful-dnd'
import {updatePositionBlockMain} from './redux/reducers/mainCardReducer'
import {updatePositionBlockFirst} from './redux/reducers/firstCardReducer'
import {updatePositionBlockSecond} from './redux/reducers/secondCardReducer'
import {updatePositionBlockThird} from './redux/reducers/thirdCardReducer'

function App(props) {

  const reorder = (list, startIndex, endIndex) => {
    if (list === 'mainCard') {
      const result = [...props.mainCard]
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
    }

    if (list === 'firstCard') {
      const result = [...props.firstCard]
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
    }

    if (list === 'secondCard') {
      const result = [...props.secondCard]
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
    }

    if (list === 'thirdCard') {
      const result = [...props.thirdCard]
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
    }
  }

  /**
   * Moves an item from one list to another list.
   */
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source)
    const destClone = Array.from(destination)
    const [removed] = sourceClone.splice(droppableSource.index, 1)

    destClone.splice(droppableDestination.index, 0, removed)

    const result = {}
    result[droppableSource.droppableId] = sourceClone
    result[droppableDestination.droppableId] = destClone

    return result
  }

  const getBlocks = (id) => {
    if (id === 'mainCard') return props.mainCard
    if (id === 'firstCard') return props.firstCard
    if (id === 'secondCard') return props.secondCard
    if (id === 'thirdCard') return props.thirdCard
  }


  const onDragEnd = result => {
    const {source, destination} = result

    // dropped outside the list
    if (!destination) return

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        source.droppableId,
        source.index,
        destination.index
      )
      if (source.droppableId === 'mainCard') {
        props.updatePositionBlockMain(items)
      }
      if (source.droppableId === 'firstCard') {
        props.updatePositionBlockFirst(items)
      }
      if (source.droppableId === 'secondCard') {
        props.updatePositionBlockSecond(items)
      }
      if (source.droppableId === 'thirdCard') {
        props.updatePositionBlockThird(items)
      }
    } else {
      const result = move(
        getBlocks(source.droppableId),
        getBlocks(destination.droppableId),
        source,
        destination
      )
      result.mainCard && props.updatePositionBlockMain(result.mainCard)
      result.firstCard && props.updatePositionBlockFirst(result.firstCard)
      result.secondCard && props.updatePositionBlockSecond(result.secondCard)
      result.thirdCard && props.updatePositionBlockThird(result.thirdCard)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        <MainCard />
      </div>
    </DragDropContext>
  )
}

const mapStateToProps = (state) => {
  return {
    mainCard: state.main.mainCard.blocks,
    firstCard: state.first.firstCard.blocks,
    secondCard: state.second.secondCard.blocks,
    thirdCard: state.third.thirdCard.blocks
  }
}

export default connect(mapStateToProps, {
  updatePositionBlockMain,
  updatePositionBlockSecond,
  updatePositionBlockFirst,
  updatePositionBlockThird})(App)
