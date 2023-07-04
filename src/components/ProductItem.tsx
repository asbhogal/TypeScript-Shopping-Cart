import { Box, Image } from "@chakra-ui/react";

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  altText: string;
};
export function ProductItem({
  id,
  name,
  price,
  imgUrl,
  altText,
}: ProductItemProps) {
  return (
    <>
      <Box height="80px">
        <Image src={imgUrl} alt={altText} width="250px" objectFit="cover" />
      </Box>
    </>
  );
}
