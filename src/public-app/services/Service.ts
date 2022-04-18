import { api } from "./api/api";
import { BASE_URL } from "./api/api";

export class Service {
    static async getPlan() {

        const faleMais = {
            label: 'FaleMais',
            acrecimo: 10,
            ddd: [
                {
                    id: 11,
                    label: '011'
                },
                {
                    id: 16,
                    label: '016'
                },
                {
                    id: 17,
                    label: '017'
                },
                {
                    id: 18,
                    label: '018'
                },
            ],
            ddd_price: {
                origem: [
                    {
                        id: 11,
                        label: '011',
                        preco: 1
                    },
                    {
                        id: 16,
                        label: '016',
                        preco: 0.9
                    },
                    {
                        id: 17,
                        label: '017',
                        preco: 0.7
                    },
                    {
                        id: 18,
                        label: '018',
                        preco: -0.1
                    }
                ],
                destino: [
                    {
                        id: 11,
                        label: '011',
                        preco: 2
                    },
                    {
                        id: 16,
                        label: '016',
                        preco: 0.9
                    },
                    {
                        id: 17,
                        label: '017',
                        preco: 0.7
                    },
                    {
                        id: 18,
                        label: '018',
                        preco: -0.1
                    }
                ]
            },
            plano: [
                30, 60, 120
            ]
        }

        try {
            return faleMais
        } catch (error) {
            return error
        }
    }
}