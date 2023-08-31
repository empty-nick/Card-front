import styles from './styles.module.css'
import { Img } from "react-image";
import { Loader } from "../Loader/Loader.tsx";

export const Welcome = () => {
	return (
		<div className={styles.welcome}>
			Welcome
			<Img
				src={['../../assets/cat.png', 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg']}
				loader={<Loader/>}
				decode={true}
			/>
		</div>
	)
}