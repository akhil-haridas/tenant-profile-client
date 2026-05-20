interface Props {
    score: number;
    rating: string;
}

const TenancyScore = ({ score, rating }: Props) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">
                Tenancy Score
            </h2>

            <div className="mt-6 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border-[12px] border-green-500 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">
                        {score}
                    </span>

                    <span className="text-sm text-gray-500 mt-1">
                        {rating}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TenancyScore;