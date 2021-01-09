const THIRD_CARD_TOGGLE_IS_ACTIVE = 'THIRD_CARD_TOGGLE_IS_ACTIVE'
const THIRD_CARD_ADD_BLOCK = 'THIRD_CARD_ADD_BLOCK'
const THIRD_CARD_DELETE_BLOCK = 'THIRD_CARD_DELETE_BLOCK'
const THIRD_CARD_UPDATE_POSITION_BLOCK = 'THIRD_CARD_UPDATE_POSITION_BLOCK'

const initialState = {
  isActive: false,
  thirdCard: {
    name: 'Third',
    blocks: [{id: 10, name: 'Block10'}, {id: 11, name: 'Block11'}, {id: 12, name: 'Block12'}]
  }
}

const mainCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case THIRD_CARD_TOGGLE_IS_ACTIVE:
      return {
        ...state,
        isActive: action.isActive
      }
    case THIRD_CARD_ADD_BLOCK:
      return {
        ...state,
        thirdCard: {...state.thirdCard, blocks: [...state.thirdCard.blocks, action.block]}
      }
    case THIRD_CARD_DELETE_BLOCK:
      return {
        ...state,
        thirdCard: {...state.thirdCard, blocks: state.thirdCard.blocks.filter(el => el.id !== action.blockId)}
      }
    case THIRD_CARD_UPDATE_POSITION_BLOCK:
      return {
        ...state,
        thirdCard: {...state.thirdCard, blocks: [...action.blocks]}
      }
    default:
      return state
  }
}

export const toggleIsActive = isActive => ({type: THIRD_CARD_TOGGLE_IS_ACTIVE, isActive})
export const addBlock = block => ({type: THIRD_CARD_ADD_BLOCK, block})
export const deleteBlockAC = blockId => ({type: THIRD_CARD_DELETE_BLOCK, blockId})
export const updatePositionBlockThird = blocks => ({type: THIRD_CARD_UPDATE_POSITION_BLOCK, blocks})

export default mainCardReducer