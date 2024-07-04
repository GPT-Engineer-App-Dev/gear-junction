import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchFeaturedProducts = async () => {
  // Simulate fetching data from an API
  return [
    { id: 1, name: "Smartphone", price: "$699", image: "/placeholder.svg" },
    { id: 2, name: "Laptop", price: "$999", image: "/placeholder.svg" },
  ];
};

const fetchLatestProducts = async () => {
  // Simulate fetching data from an API
  return [
    { id: 3, name: "Headphones", price: "$199", image: "/placeholder.svg" },
    { id: 4, name: "Smartwatch", price: "$299", image: "/placeholder.svg" },
  ];
};

const Index = () => {
  const { data: featuredProducts, isLoading: isLoadingFeatured } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: fetchFeaturedProducts,
  });

  const { data: latestProducts, isLoading: isLoadingLatest } = useQuery({
    queryKey: ["latestProducts"],
    queryFn: fetchLatestProducts,
  });

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Electronics Store</h1>
        <p className="text-lg mb-6">Find the best electronics at unbeatable prices.</p>
        <Button as={Link} to="/products" variant="primary">Shop Now</Button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isLoadingFeatured ? (
            <p>Loading...</p>
          ) : (
            featuredProducts.map((product) => (
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
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isLoadingLatest ? (
            <p>Loading...</p>
          ) : (
            latestProducts.map((product) => (
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
      </section>
    </div>
  );
};

export default Index;