import { styled } from "../../../../../stitches.config";
import {colors} from '@rmuikit/tokens'

export const Card = styled('div', {
  maxWidth: '25%',
  flexBasis: '25%',
  flexGrow: 0,
  paddingLeft: '24px',
  paddingTop: '24px',
  position: 'relative',
  marginBottom: '24px',
  cursor: 'pointer',
  '&:hover': {
    scale: 1.05,
  }
})

export const CardImage = styled('div', {
  
  '& img': {
    width: '100%',
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
      scale: 1.05,  
    }
  }
})

export const CardTitle = styled('div', {
  position: 'relative',
  background: '#333',
  color: `${colors.white}`,
  // maxWidth: '100%',
  
  '& button': {
    all: 'unset',
    position: 'absolute',
    background: '#333',
    top: '-50px',
    width: '100%',
    height: '48px',
    textAlign: 'center',
    
  }
})