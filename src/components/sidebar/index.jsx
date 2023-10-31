import { OptionsPanel } from "./OptionsPanel";
import { OptionItem } from "./OptionsPanel/OptionItem";
import { Profile } from "./Profile/Index";
import styles from "./sidebar.module.css";
import { ImCalendar, ImClipboard, ImPlus, ImExit } from "react-icons/im";

export const Sidebar = () => {
  return (
    <> 
      <div className={styles.container}>
        <Profile />

        <OptionsPanel>
          <OptionItem optionText='Calendar' path='/'>
            <ImCalendar/>
          </OptionItem>
          <OptionItem optionText='Inventario' path=''>
            <ImClipboard/>
          </OptionItem>
          <OptionItem optionText='Nueva Publicacion' path=''>
            <ImPlus/>
          </OptionItem>
        </OptionsPanel>

        <div className={ styles.configs__container }>
          <OptionItem optionText='Salir' path=''>
            <ImExit/>
          </OptionItem>
        </div>
      </div>
    </>
  );
};
