import { FaMinus, FaPlus } from "react-icons/fa";

type AmountButtonsProps = {
	amount: number;
	increase: () => void;
	decrease: () => void;
	cartView?: boolean;
};

const AmountButtons = ({
	amount,
	increase,
	decrease,
	cartView,
}: AmountButtonsProps) => {
	return (
		<div className={`border border-gray-300 flex w-20 items-center text-center`}>
			<button type="button" onClick={decrease} aria-label="Minus" className="flex justify-center items-center h-8 w-full border-none cursor-pointer bg-transparent transition duration-200 ease-in-out hover:bg-gray-300">
				<FaMinus className="text-gray-500 text-sm font-semibold" />
			</button>
			<span className={`flex justify-center items-center ${cartView ? 'h-7 w-full' : 'h-8 w-full'} border-l border-r border-gray-300`}>
				{amount}
			</span>
			<button type="button" onClick={increase} aria-label="Plus" className="flex justify-center items-center h-8 w-full border-none cursor-pointer bg-transparent transition duration-200 ease-in-out hover:bg-gray-300">
				<FaPlus className="text-gray-500 text-sm font-semibold" />
			</button>
		</div>
	);
};
export default AmountButtons;
