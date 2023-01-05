import FlashSaleLayout from "./FlashSaleLayout";
import RecommendLayout from "./RecommendLayout";
import ShopCategoryLayout from "./ShopCategoryLayout";
import TopContentContainerLayout from "./TopContentContainerLayout";

export default function HeaderLayout() {
  return (
    <>
      <TopContentContainerLayout />
      <ShopCategoryLayout />
      <FlashSaleLayout />
      <RecommendLayout />
    </>
  );
}
