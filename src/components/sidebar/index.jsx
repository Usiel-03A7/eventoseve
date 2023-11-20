import { OptionsPanel } from "./OptionsPanel";
import { OptionItem } from "./OptionsPanel/OptionItem";
import { Profile } from "./Profile/Index";
import styles from "./sidebar.module.css";
import { useLocation } from 'react-router-dom'
import { ImCalendar, ImClipboard, ImPlus, ImExit } from "react-icons/im";

export const Sidebar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <>
      <div className={styles.container}>
        <Profile />

        <OptionsPanel>
          <OptionItem optionText='Calendar' path='/' isActive={currentPath == "/"}>
            <ImCalendar />
          </OptionItem>
          <OptionItem optionText='Inventario' path="/inventary" isActive={currentPath == "/inventary"}>
            <ImClipboard />
          </OptionItem>
          <OptionItem optionText='Nueva Publicacion' path='/newpub' isActive={currentPath == "/newpub"}>
            <ImPlus />
          </OptionItem>
        </OptionsPanel>

        <div className={styles.configs__container}>
          <OptionItem optionText='Salir' path=''>
            <ImExit />
          </OptionItem>
        </div>
      </div>
    </>
  );
};
