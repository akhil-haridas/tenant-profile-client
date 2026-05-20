import type { RentalHistoryItem } from '../types/tenant.types';

interface Props {
    rental: RentalHistoryItem;
}

const RentalCard = ({ rental }: Props) => {
    return (
        <div className="border border-gray-100 hover:border-gray-200 transition-all duration-300 rounded-2xl p-5 bg-gray-50">

            <h3 className="font-semibold text-gray-800 text-lg">
                {rental.address}
            </h3>

            <p className="text-gray-500 mt-2">
                {rental.city}, {rental.country}
            </p>

            <div className="mt-4 flex items-center justify-between flex-wrap gap-2">

                <span className="text-sm text-gray-400">
                    Start:
                    {' '}
                    {new Date(
                        rental.startDate
                    ).toLocaleDateString()}
                </span>

                <span className="text-sm text-gray-400">
                    End:
                    {' '}
                    {new Date(
                        rental.endDate
                    ).toLocaleDateString()}
                </span>

            </div>

        </div>
    );
};

export default RentalCard;