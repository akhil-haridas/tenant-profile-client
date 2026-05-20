import type { RentalHistoryItem } from '../types/tenant.types';

import RentalCard from './RentalCard';

interface Props {
    rentals: RentalHistoryItem[];
}

const RentalHistory = ({ rentals }: Props) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">
                Rental History
            </h2>

            <div className="mt-6 space-y-4">
                {rentals.map((rental) => (
                    <RentalCard
                        key={rental.id}
                        rental={rental}
                    />
                ))}
            </div>
        </div>
    );
};

export default RentalHistory;