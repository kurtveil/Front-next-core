import { Card, CardBody, CardTitle } from "@/src/components/ui/Card";

async function getProducts(): Promise<Product[]> {
  // Llamada a tu API de NestJS
  const response = await fetch('http://localhost:3001/products', {
    cache: 'no-store', // Para obtener datos frescos siempre (SSR)
  });

  if (!response.ok) {
    throw new Error('Error al obtener productos del backend');
  }

  return response.json();
}
export default async function ProductsPage() {
  const products = await getProducts();

  console.log(products)
  return (
    <div>
        <Card>
          <CardTitle>Product</CardTitle>
          <CardBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur pariatur vero soluta, error molestiae veniam, voluptatum modi iure delectus iusto quibusdam expedita ea, cupiditate voluptatibus. Non odio numquam quos aspernatur.
          </CardBody>
        </Card>
    </div>
  )
}
