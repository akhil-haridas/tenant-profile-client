import type { RentalHistoryItem } from '../types/tenant.types';

import RentalCard from './RentalCard';

interface Props {
    rentals: RentalHistoryItem[];
}

const RentalHistory = ({ rentals }: Props) => {
    return (
        <div className="mt-6">
            {rentals.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                    No rental history found
                </div>
            ) : (
                <div className="space-y-4">
                    {rentals.map((rental) => (
                        <RentalCard
                            key={rental.id}
                            rental={rental}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RentalHistory;