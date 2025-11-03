import BookLists from "@/components/BookLists";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => (
	<>
		<BookOverview {...sampleBooks[0]} />
		<BookLists
			title="Lates Books"
			books={sampleBooks}
			containerClassName="mt-28"
		/>
	</>
);

export default Home;
