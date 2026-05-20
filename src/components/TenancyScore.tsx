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

            <div className="flex justify-center mt-8">
                <div className="relative w-40 h-40">

                    <div className="absolute inset-0 rounded-full border-[14px] border-green-500" />

                    <div className="absolute inset-4 rounded-full bg-white flex flex-col items-center justify-center">

                        <span className="text-5xl font-bold text-gray-800">
                            {score}
                        </span>

                        <span className="text-sm text-gray-500 mt-2">
                            {rating}
                        </span>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default TenancyScore;