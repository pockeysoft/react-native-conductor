import { Dimensions } from 'react-native'

const {
  width: deviceWidth,
  height: deviceHeight,
} = Dimensions.get('window')

const TOP_PART = 80
const BOTTOM_PART = 50

export const SIZES = {
  COLLAPSED_HEIGHT: 60,
  NORMAL_TOP_PART_HEIGHT: TOP_PART,
  NORMAL_BOTTOM_PART_HEIGHT: BOTTOM_PART,
  NORMAL_HEIGHT: (TOP_PART + BOTTOM_PART),
  EXPANDED_HEIGHT: 290,
  FULL_HEIGHT: deviceHeight,
}

export const STYLES = {
  HEADER_CONTAINER: {
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0,
    width: deviceWidth,
    height: SIZES.NORMAL_HEIGHT,
    backgroundColor: 'white',
  },
}
