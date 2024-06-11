import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

type StarsProps = {
	stars: number;
	reviews?: number;
};

const Stars = ({ stars, reviews }: StarsProps) => {
	const newStars = Array.from({ length: 5 }, (_, index) => {
		const number = index + 0.5;
		return (
			<span key={index}>
				{stars >= index + 1 ? (
					<BsStarFill />
				) : stars >= number ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
		);
	});

	return (
		<div className="flex items-center gap-1">
			<div className="text-xs text-yellow-500 flex items-center gap-0.5 pb-0.5">
				{newStars}
			</div>
			{reviews && <p className="text-sm text-gray-500">({reviews} reviews)</p>}
		</div>
	);
};
export default Stars;
