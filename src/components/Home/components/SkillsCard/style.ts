import { styled } from '../../../../../stitches.config'
import {fonts, colors, fontSizes, space } from '@rmuikit/tokens';
export const Container = styled('div', {
  maxWidth: '1400px',
  margin: '0 auto',
  
  justifyContent: 'space-between',
  width: '100%',
  marginTop: `${space[16]}`,
  marginBottom: `${space[16]}`,
  display: 'grid',
  padding: '2rem 0',
  boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
  gridTemplateColumns: 'repeat(4, 1fr)',
  backgroundColor: '#fff'
})

export const ContainerCard = styled('div', {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  width: '100%',
})
export const ContainerImage = styled('div', {
  marginRight: '10px',
})
export const ContainerText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('span', {
  marginBottom: '0px',
  marginTop: '0px',
  fontSize: `${fontSizes.md}`,
  fontWeight: '600',
  lineHeight: '1.3',
  textTransform: 'none',
  whiteSpace: 'normal',
  color: '#2B3445',
  fontFamily: `${fonts.default}`,
})
export const Subtitle = styled('span', {
  fontFamily: `${fonts.default}`,
  marginTop: `${space[1]}`,
  lineHeight: '1.5',
  color: '#7D879C',
  textTransform: 'none',
  whiteSpace: 'normal',
  fontSize: `${fontSizes.sm}`,
})