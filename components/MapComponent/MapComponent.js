import styles from "./map.module.scss";

const Map = () => {
  return (
    <div className={styles.map_container}>
      <iframe
        width="100%"
        height="600"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=3244%20Fulton%20Ave,%20Sacramento,%20CA%2095821&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </div>
  );
};

export default Map;
