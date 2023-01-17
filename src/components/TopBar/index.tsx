import { 
  Container, 
  SearchBoxContainer, 
  Logo,
  DropMenuRoot,
  DropMenuTrigger,
  UserContainer,
  DropMenuPortal,
  DropMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator } from './styles'
import { MagnifyingGlass, Tote, User } from 'phosphor-react';
import { colors} from '@rmuikit/tokens'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';

export const Topbar = () => {
    // const [bookmarksChecked, setBookmarksChecked] = useState(true);
    // const [urlsChecked, setUrlsChecked] = useState(false);
    // const [person, setPerson] = useState('pedro');
    // const { total  } = useCart();

  return (
    <Container>
      <Logo>
        <a> Bazaar</a>
      </Logo>
      <SearchBoxContainer>
        <MagnifyingGlass size={20} color={colors.gray400} />
        <input type="text" placeholder="Search for products, brands and more" />
        <div>
          <button>Search</button>
        </div>
      </SearchBoxContainer>
      <UserContainer>
        <Tote size={38} color={colors.gray600} />
        <DropMenuRoot>
          <DropMenuTrigger asChild>
            <button className="IconButton" aria-label="Customise options">
              <User size={38} color={colors.gray600} />
            </button>
          </DropMenuTrigger>
          <DropMenuPortal>
            <DropMenuContent sideOffset={6}>
            <DropdownMenuItem>
                Meu carrinho
              </DropdownMenuItem>
              <DropdownMenuItem>
                Minhas compras
              </DropdownMenuItem>
              <DropdownMenuItem>
                Meu perfil
              </DropdownMenuItem>
              <DropdownMenuItem>
                Fale conosco
              </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
                Sair
              </DropdownMenuItem>
            </DropMenuContent>
          </DropMenuPortal>

        </DropMenuRoot>

      </UserContainer>
    </Container>
  )
}
Container.displayName = 'Container'