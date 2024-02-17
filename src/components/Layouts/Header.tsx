import React from 'react'
import {
  Box,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";
  import {MdOutlineMenu} from 'react-icons/md'
type MenuOptionType = 'Home' | 'Profile' | 'Logout';
const menuOptions:MenuOptionType[] = ['Home','Profile','Logout'];
const Header = () => {
  return (
    <Box  position={'sticky'} top={'0'} padding={5} >
             <Menu>
          <MenuButton
            as={IconButton}
            icon={<MdOutlineMenu/>}
            aria-label="Options"
            variant="outline"
            _focus={{ outline: "none" }}
          />
          <MenuList>
            {
                menuOptions&&menuOptions.map((option)=>{
                   return  <MenuItem key={option} >{option}</MenuItem>
                })
            }
          </MenuList>
        </Menu>
      
    </Box>
  )
}

export default Header
