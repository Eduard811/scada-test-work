const TOGGLE_IS_ACTIVE = 'TOGGLE_IS_ACTIVE'
const ADD_BLOCK = 'ADD_BLOCK'
const DELETE_BLOCK = 'DELETE_BLOCK'
const UPDATE_POSITION_BLOCK = 'UPDATE_POSITION_BLOCK'

const initialState = {
  isActive: false,
  mainCard: {
    name: 'Main',
    blocks: [{id: 1, name: 'Block1'}, {id: 2, name: 'Block2'}, {id: 3, name: 'Block3'}]
  }
}

const mainCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_ACTIVE:
      return {
        ...state,
        isActive: action.isActive
      }
    case ADD_BLOCK:
      return {
        ...state,
        mainCard: {...state.mainCard, blocks: [...state.mainCard.blocks, action.block]}
      }
    case DELETE_BLOCK:
      return {
        ...state,
        mainCard: {...state.mainCard, blocks: state.mainCard.blocks.filter(el => el.id !== action.blockId)}
      }
    case UPDATE_POSITION_BLOCK:
      return {
        ...state,
        mainCard: {...state.mainCard, blocks: [...action.blocks]}
      }
    default:
      return state
  }
}

export const toggleIsActive = isActive => ({type: TOGGLE_IS_ACTIVE, isActive})
export const addBlock = block => ({type: ADD_BLOCK, block})
export const deleteBlockAC = blockId => ({type: DELETE_BLOCK, blockId})
export const updatePositionBlockMain = blocks => ({type: UPDATE_POSITION_BLOCK, blocks})

export default mainCardReducer