import styles from './style.module.css'
import { Welcome } from "../../components/Welcome/Welcome.tsx";

export const Home = () => {
	return (
		<div className={styles.container}>
			<section className={styles.content}>
				<Welcome/>
			</section>
			<footer className={styles.footer}>
				footer
			</footer>
		</div>
	)
}