import styles from '../styles/Home.module.css';
export default function Home() {
	const callAPI = async () => {
		try {
			const res = await fetch(
				`/.netlify/functions/shopadmin`
			);
			const html = await res.text();
			return html
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<button onClick={callAPI}>Make API Call</button>
			</main>
		</div>
	);
}