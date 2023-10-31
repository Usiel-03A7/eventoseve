import DefaultUserImage from '/src/assets/default_profile_image.jpg';
import styles from './Profile.module.css'

export const Profile = () => {
  return(
    <div className={ styles.profile__container }>
      <img className={ styles.profile__img } src={DefaultUserImage} alt="Admin image" />
      <h3 className={ styles.profile__title }>Admin Name</h3>
    </div>
  )
}
