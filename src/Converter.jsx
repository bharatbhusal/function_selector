// src/Converter.jsx
import { useState, useEffect } from "react";
import { keccak_256 } from "js-sha3";

const Converter = () => {
	const [signature, setSignature] = useState("");
	const [selector, setSelector] = useState("");

	useEffect(() => {
		if (signature) {
			const hash = keccak_256(signature);
			setSelector("0x" + hash.slice(0, 8));
		} else {
			setSelector("");
		}
	}, [signature]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
			<div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
				<h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
					Function Signature to Selector Converter
				</h1>
				<input
					type="text"
					placeholder="Enter function signature (e.g., transfer(address,uint256))"
					value={signature}
					onChange={(e) => setSignature(e.target.value)}
					className="px-4 py-2 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				{selector && (
					<p className="mt-4 text-lg text-center text-gray-700">
						Function Selector:{" "}
						<strong className="text-blue-600">{selector}</strong>
					</p>
				)}
			</div>
		</div>
	);
};

export default Converter;
