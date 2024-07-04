import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchProductDetail = async (id) => {
  // Simulate fetching data from an API
  const products = [
    { id: 1, name: "Smartphone", price: "$699", description: "A high-end smartphone with a great camera.", specifications: "Specs here", image: "/placeholder.svg" },
    { id: 2, name: "Laptop", price: "$999", description: "A powerful laptop for all your needs.", specifications: "Specs here", image: "/placeholder.svg" },
    { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones.", specifications: "Specs here", image: "/placeholder.svg" },
    { id: 4, name: "Smartwatch", price: "$299", description: "A smartwatch with various features.", specifications: "Specs here", image: "/placeholder.svg" },
  ];
  return products.find(product => product.id === parseInt(id));
};

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => fetchProductDetail(id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <Card>
      <CardHeader>
        <img src={product.image} alt={product.name} className="mx-auto object-cover w-full h-[400px]" />
      </CardHeader>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.specifications}</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductDetail;