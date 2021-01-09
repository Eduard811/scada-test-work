const SECOND_CARD_TOGGLE_IS_ACTIVE = 'SECOND_CARD_TOGGLE_IS_ACTIVE'
const SECOND_CARD_ADD_BLOCK = 'SECOND_CARD_ADD_BLOCK'
const SECOND_CARD_DELETE_BLOCK = 'SECOND_CARD_DELETE_BLOCK'
const SECOND_CARD_UPDATE_POSITION_BLOCK = 'SECOND_CARD_UPDATE_POSITION_BLOCK'

const initialState = {
  isActive: false,
  secondCard: {
    name: 'Second',
    blocks: [{id: 7, name: 'Block7'}, {id: 8, name: 'Block8'}, {id: 9, name: 'Block9'}]
  }
}

const secondCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SECOND_CARD_TOGGLE_IS_ACTIVE:
      return {
        ...state,
        isActive: action.isActive
      }
    case SECOND_CARD_ADD_BLOCK:
      return {
        ...state,
        secondCard: {...state.secondCard, blocks: [...state.secondCard.blocks, action.block]}
      }
    case SECOND_CARD_DELETE_BLOCK:
      return {
        ...state,
        secondCard: {...state.secondCard, blocks: state.secondCard.blocks.filter(el => el.id !== action.blockId)}
      }
    case SECOND_CARD_UPDATE_POSITION_BLOCK:
      return {
        ...state,
        secondCard: {...state.secondCard, blocks: [...action.blocks]}
      }
    default:
      return state
  }
}

export const toggleIsActive = isActive => ({type: SECOND_CARD_TOGGLE_IS_ACTIVE, isActive})
export const addBlock = block => ({type: SECOND_CARD_ADD_BLOCK, block})
export const deleteBlockAC = blockId => ({type: SECOND_CARD_DELETE_BLOCK, blockId})
export const updatePositionBlockSecond = blocks => ({type: SECOND_CARD_UPDATE_POSITION_BLOCK, blocks})

export default secondCardReducer