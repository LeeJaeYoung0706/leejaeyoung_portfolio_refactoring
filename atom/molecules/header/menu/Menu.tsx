import MenuView, {CloseBackGroundStyle} from "@/atom/molecules/header/menu/MenuView";
import {useScrollPosition} from "@/hooks/useScrollPosition";
import {useThemeContext} from "@/styles/ThemeHandlerContext";
import {useRouter} from "next/navigation";


export default function Menu({checked, checkHandler}: HeaderMenuPropsInterface) {

  // ServerSide => next/router , CSR => navigation
  const router = useRouter();
  const {themeHandler} = useThemeContext();
  const [isTop] = useScrollPosition();

  return (
    <>
      {
        checked && <CloseBackGroundStyle onClick={checkHandler}/>
      }
      <MenuView $isTop={isTop}>

      </MenuView>
    </>
  )
}