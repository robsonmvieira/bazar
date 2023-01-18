import { styled } from '../../../stitches.config'
import { fontSizes } from '@rmuikit/tokens'

export const  HomerContainer = styled('div', {
  backgroundColor: '#F6F9FC'
})

export const Container = styled('div', {
  height: '70vh',
  width: '1400px',
  margin: '0 auto',
})

export const BestSellingCategories = styled('h2', {
  fontSize: `${fontSizes['5xl']}`,
  color: "#2B3445",
  marginBottom: '32px',
  marginTop: '0px',
  // fontSize: '25px',
  fontWeight: '700',
  lineHeight: '1.5',
  textAlign: 'center',
  textTransform: 'none',
  whiteSpace: 'normal'
})
