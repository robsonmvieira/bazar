import { styled } from '../../../stitches.config'
import { fontSizes, colors } from '@rmuikit/tokens'

export const  HomerContainer = styled('div', {
  backgroundColor: '#F6F9FC'
})

export const Container = styled('div', {
  height: '70vh',
  width: '1400px',
  margin: '0 auto',
})

export const BestSellingCategories = styled('h2', {
  fontSize: `${fontSizes['2xl']}`,
  color: "#2B3445",
  // marginBottom: '32px',
  marginTop: '0px',
  fontWeight: '700',
  lineHeight: '1.5',
  textAlign: 'center',
  textTransform: 'none',
  whiteSpace: 'normal',
})

export const ContainerCard = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '1400px',
  margin: '0 auto',
  boxSizing: 'border-box',
  flexWrap: 'wrap',
  width: '100%',
})

export const CardByType = styled('div', {
  paddingLeft: '24px',
  maxWidth: '33.333333%',
  overflow: 'hidden',
  objectFit: 'cover',
})

export const ContainerCardByType = styled('div', {
  maxHeight: '240px',
  overflow: 'hidden',
  borderRadius: '10px',
  position: 'relative',
  '& img': {
    width: '100%',
    
  }
})

export const ContainerTextCardByType = styled('div', {
  top: 0,
  zIndex: 1,
  color: `${colors.white}`,
  height: '100%',
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  justifyContent: 'center',
  right: '32px',
  alignItems: 'flex-end',
  '& a': {
    color: `${colors.white}`,
    lineHeight: 1.5,
    whitespace: 'normal',
    position: 'relative',
    paddingBottom: '2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    
  }
})

export const Divider = styled('hr', { 
  margin: 0,
  flexShrink: 0,
  borderStyle: 'solid',
  borderColor: '#F3F5F9',
  borderBottomWidth: 'thin',
  borderWidth: '2px',
  marginTop: '12px',
  marginBottom: '12px',
  width: '50px',
})