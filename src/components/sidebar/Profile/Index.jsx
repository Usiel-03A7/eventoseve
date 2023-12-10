import styles from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={styles.profile__container}>
      <img className={styles.profile__img} src="https://scontent.fclq1-1.fna.fbcdn.net/v/t39.30808-6/312135917_645461550419141_2731109671351696524_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFEcDxua2uz5paFBv7MN-dUtedNmhR6Ez61502aFHoTPvZfpDNQ-rtnNZbezYfmCFqma8XOPUwFwel6i7EqH6LE&_nc_ohc=hYdtwp8aPzgAX_dUEMi&_nc_ht=scontent.fclq1-1.fna&cb_e2o_trans=t&oh=00_AfBtjqcm8q-pOApPEDF5tgP_616UlyAX-rCRepgKsGC6ew&oe=657A6E59" alt="Admin image" />
      <h3 className={styles.profile__title}>Evelin Torres</h3>
    </div>
  )
}
