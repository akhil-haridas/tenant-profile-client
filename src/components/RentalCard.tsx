import type { RentalHistoryItem } from '../types/tenant.types';

interface Props {
    rental: RentalHistoryItem;
}

const RentalCard = ({ rental }: Props) => {
    return (
        <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-800">
                {rental.address}
            </h3>

            <p className="text-gray-500 mt-1">
                {rental.city}, {rental.country}
            </p>

            <p className="text-sm text-gray-400 mt-2">
                {new Date(rental.startDate).toLocaleDateString()} -{' '}
                {new Date(rental.endDate).toLocaleDateString()}
            </p>
        </div>
    );
};

export default RentalCard;