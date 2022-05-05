import { useRouter } from 'next/router';

function PortfolioProjectPage() {
	const router = useRouter();

	return (
		<div>
			<h1>The Project Page {router.query.projectId}</h1>
		</div>
	);
}

export default PortfolioProjectPage;
