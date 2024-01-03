import React from "react";
import styled, {css} from "styled-components";


/**
 * Menu 외 선택 시 Close 를 위한 Div
 */
export const CloseBackGroundStyle = styled.div`
  display: none;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 350;

  ${(props) => props.theme.media.tablet} {
    display: block;
  }

  ${(props) => props.theme.media.mobile} {
    display: block;
  }
`

const MenuLayoutStyle = styled.nav<{$isTop: boolean}>`
  padding-right: 1.7vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  ${(props) => props.$isTop ? css` color: ${props.theme.palette.primary};`
          : css` color: ${props.theme.palette.second};
            opacity: 1;`
  };

  ${(props) => props.theme.media.tablet} {
    display: none;
    position: relative;
    padding-right: 18px;
    z-index: 450;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${(props) => props.theme.media.mobile} {
    display: none;
    position: relative;
    padding-right: 18px;
    z-index: 450;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

function MenuView({$isTop} : any): React.JSX.Element {
  return (
    <MenuLayoutStyle $isTop={$isTop}>

    </MenuLayoutStyle>
  )
}

export default React.memo(MenuView)