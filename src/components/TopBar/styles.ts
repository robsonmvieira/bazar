import { styled } from '../../../stitches.config'
import { colors, fonts, space, fontSizes, fontWeights, radii } from '@rmuikit/tokens'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Container = styled('div', {
  margin: '0 auto',
  maxWidth: '1400px',
  fontFamily: `${fonts.default}`,
  backgroundColor: `${colors.white}`,
  marginBottom: `${space[10]}`,
  marginTop: `${space[10]}`,
  
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Logo = styled('div', {
  display: 'flex',
  '& a': {
    color: `${colors.gray400}`,
    fontFamily: `${fonts.default}`,
    fontSize: `${fontSizes['2xl']}`,
    fontWeight: `${fontWeights.bold}`,
  }
})

export const SearchBoxContainer = styled('div', {
  flex: '1',
  maxWidth: '670px',
  borderRadius: `${radii.md}`,
  border: `1px solid ${colors.gray300}`,
  height: '48px',
  '&:focus-within': {
    border: `1px solid ${colors.gray600}`
  },
  '& svg': {
    marginLeft: `${space[2]}`,
  },
  '& input': {
    border: 'none',
    flex: '1',
    height: '100%',
    paddingLeft: `${space[2]}`,
    color: `${colors.gray500}`,

    '&:focus': {
      outline: 'none'
    },
    '&:focus-within': {
      // border: `1px solid ${colors.red400}`, 
    },
    '&::placeholder': {
      color: `${colors.gray300}`,
      fontFamily: `${fonts.default}`,
    }

  },

  '& div': {
    height: '100%',
    display: 'flex'
    
  },
  '& button': {
    all: 'unset',
    backgroundColor: `${colors.gray100}`,
    borderBottomRightRadius: `${radii.md}`,
    borderTopRightRadius: `${radii.md}`,
    padding: `${space[2]}`,
    color: `${colors.gray500}`,
    fontFamily: `${fonts.default}`,
    fontWeight: `${fontWeights.medium}`,
    cursor: 'pointer',
    
    // width: '100%',
  },

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const UserContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  // '& svg': {
  //   marginRight: `${space[2]}`,
  //   cursor: 'pointer',
  // }
  cursor: 'pointer',

  '& svg': {
    backgroundColor: `${colors.gray100}`,
    borderRadius: `50%`,
    padding: `${space[2]}`,
  }
})

export const DropMenuRoot = styled(DropdownMenu.Root, {
  // display: 'none',
})

export const DropMenuTrigger = styled(DropdownMenu.Trigger, {
  all: 'unset',
  marginLeft: `${space[4]}`,
  
  '& button': {
    all: 'unset',
    
  },
  
})

export const DropMenuPortal = styled(DropdownMenu.Portal, {
  background: 'red'
})

export const DropMenuContent = styled(DropdownMenu.Content, {
  backgroundColor: `${colors.gray50}`,
  padding: `${space[2]}`,
  borderRadius: `${radii.sm}`,
  minWidth: '150px',
  fontFamily: `${fonts.default}`,
  // gap: `10px`,
  // display: 'flex',
  // flexDirection: 'column',
  // background: 'red',
})

export const DropdownMenuItem = styled(DropdownMenu.Item, {
  fontFamily: `${fonts.default}`,
  fontSize: `${fontSizes.sm}`,
  color: `${colors.gray600}`,
  cursor: 'pointer',
  marginBottom: `${space[2]}`,
  '&:hover': {
    outline: 'none',
    color: `${colors.gray900}`,
  }
})

export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  backgroundColor: `${colors.gray300}`,
  height: '2px',
  // backgroundColor: 'red',
  margin: '5px auto'

})