import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Add this import
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchProducts = async () => {
  // Simulate fetching data from an API
  return [
    { id: 1, name: "Smartphone", price: "$699", image: "/placeholder.svg" },
    { id: 2, name: "Laptop", price: "$999", image: "/placeholder.svg" },
    { id: 3, name: "Headphones", price: "$199", image: "/placeholder.svg" },
    { id: 4, name: "Smartwatch", price: "$299", image: "/placeholder.svg" },
  ];
};

const ProductListing = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <img src={product.image} alt={product.name} className="mx-auto object-cover w-full h-[200px]" />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p>{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button as={Link} to={`/products/${product.id}`} variant="secondary">View Details</Button>
                <Button variant="primary" className="ml-2">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductListing;