export const productsList: Product[] = [
    {id: 1, name: 'Lejia', price: 10, description: 'Botella de 1 Litro'},
    {id: 2, name: 'Detergente', price: 5, description: 'Mas de 120 lavados'},
    {id: 3, name: 'Limpiacristales', price: 4, description: 'Tus cristales transparentes'},
    {id: 4, name: 'Quita Grasa', price: 7, description: 'Cocina tranquilo, nosotros limpiamos'},
    {id: 5, name: 'Perfumina', price: 2, description: 'El olor a flores de campo mas natural'},
]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description: string;
}