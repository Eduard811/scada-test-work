const FIRST_CARD_TOGGLE_IS_ACTIVE = 'FIRST_CARD_TOGGLE_IS_ACTIVE'
const FIRST_CARD_ADD_BLOCK = 'FIRST_CARD_ADD_BLOCK'
const FIRST_CARD_DELETE_BLOCK = 'FIRST_CARD_DELETE_BLOCK'
const FIRST_CARD_UPDATE_POSITION_BLOCK = 'FIRST_CARD_UPDATE_POSITION_BLOCK'

const initialState = {
  isActive: false,
  firstCard: {
    name: 'First',
    blocks: [{id: 4, name: 'Block4'}, {id: 5, name: 'Block5'}, {id: 6, name: 'Block6'}]
  }
}

const firstCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_CARD_TOGGLE_IS_ACTIVE:
      return {
        ...state,
        isActive: action.isActive
      }
    case FIRST_CARD_ADD_BLOCK:
      return {
        ...state,
        firstCard: {...state.firstCard, blocks: [...state.firstCard.blocks, action.block]}
      }
    case FIRST_CARD_DELETE_BLOCK:
      return {
        ...state,
        firstCard: {...state.firstCard, blocks: state.firstCard.blocks.filter(el => el.id !== action.blockId)}
      }
    case FIRST_CARD_UPDATE_POSITION_BLOCK:
      return {
        ...state,
        firstCard: {...state.firstCard, blocks: [...action.blocks]}
      }
    default:
      return state
  }
}

export const toggleIsActive = isActive => ({type: FIRST_CARD_TOGGLE_IS_ACTIVE, isActive})
export const addBlock = block => ({type: FIRST_CARD_ADD_BLOCK, block})
export const deleteBlockAC = blockId => ({type: FIRST_CARD_DELETE_BLOCK, blockId})
export const updatePositionBlockFirst = blocks => ({type: FIRST_CARD_UPDATE_POSITION_BLOCK, blocks})

export default firstCardReducer