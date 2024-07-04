import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const sampleCartItems = [
  { id: 1, name: "Smartphone", price: "$699", quantity: 1, image: "/placeholder.svg" },
  { id: 2, name: "Laptop", price: "$999", quantity: 1, image: "/placeholder.svg" },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(sampleCartItems);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price.slice(1) * item.quantity, 0);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <img src={item.image} alt={item.name} className="mx-auto object-cover w-full h-[200px]" />
            </CardHeader>
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
              <p>{item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                className="border p-2"
              />
            </CardContent>
            <CardFooter>
              <Button variant="destructive" onClick={() => handleRemove(item.id)}>Remove</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-right">
        <h2 className="text-2xl font-semibold">Total: ${totalPrice}</h2>
        <Button variant="primary" className="mt-4">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;