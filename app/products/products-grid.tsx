"use client";

import { Grid } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./product";
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import API_URL from "../common/constants/api";
import revalidateProducts from "./actions/revalidate-products";
import getAuthentication from "../auth/actions/get-authentication";

interface ProductsGridProps {
   products: IProduct[];
}
const ProductsGrid = ({ products }: ProductsGridProps) => {
   useEffect(() => {
      let socket: Socket;
      const createSocket = async () => {
         socket = io(API_URL!, {
            auth: {
               Authentication: await getAuthentication(),
            },
         });
         socket.on("productUpdated", () => {
            revalidateProducts();
         });
      };
      createSocket();
      return () => {
         socket?.disconnect();
      };
   }, []);

   return (
      <Grid container spacing={3} sx={{ height: "85vh", overflow: "auto" }}>
         {products.map((product) => (
            <Grid key={product.id} sm={6} lg={4} xs={12}>
               <Product product={product} />
            </Grid>
         ))}
      </Grid>
   );
};

export default ProductsGrid;
