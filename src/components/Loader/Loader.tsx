import { ThreeCircles } from "react-loader-spinner";
import { ReactElement } from "react";

export const Loader = ({children}: {children?: ReactElement}) => {
	if (children)
		return children

	return (
		<>
				<ThreeCircles
					height="100"
					width="100"
					color="#4fa94d"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
					ariaLabel="three-circles-rotating"
					outerCircleColor=""
					innerCircleColor=""
					middleCircleColor=""
				/>
		</>
	)
}