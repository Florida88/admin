
import { PriceTemplateItemReadDto, Unit } from './types';

export const sampleData: PriceTemplateItemReadDto[] = [
    {
        id: '1',
        enabled: true,
        type: 'Concrete',
        width: 10,
        height: 5,
        unit: Unit.M2,
        rate: 50,
        matchSize: true,
        group: 'Foundation',
        description: 'Concrete foundation',
        summary: 'Concrete',
        order: 1,
    },
    {
        id: '2',
        enabled: true,
        type: 'Brickwork',
        width: 8,
        height: 3,
        unit: Unit.M2,
        rate: 30,
        matchSize: true,
        group: 'Walls',
        description: 'Brickwork walls',
        summary: 'Brickwork',
        order: 2,
    },
];
