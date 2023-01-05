import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

export const ConstantsValue = {
  padLeft: 13,
  padRight: 13,
  padTop: 13,
  padBottom: 13,
  padHorizontal: 13,
  padVertical: 13,
  backgroundContainerColor: "#F1F0F0",
  componentContainerColor: "#FFFFFF",
  navigationPaddingTop: Constants.statusBarHeight,
  navigationBottomBorderColor: "#EEF2F6",
  defaultIconSize: 25,
  sliderImageWidth: Dimensions.get("screen").width,
};

export const AppStyle = StyleSheet.create({
  // Home Style
  HomeLayout: {
    flex: 1,
    backgroundColor: ConstantsValue.backgroundContainerColor,
  },
  // Navigation Style
  NavigationLayout: {
    paddingTop: ConstantsValue.navigationPaddingTop + 13,
    paddingBottom: ConstantsValue.padBottom,
    paddingHorizontal: ConstantsValue.padHorizontal,
    backgroundColor: ConstantsValue.componentContainerColor,
    // borderBottomWidth: 0.6,
    // borderBottomColor: ConstantsValue.navigationBottomBorderColor,
  },
  NavigationLayout_TopWrapper: {
    flexDirection: "row",
  },
  TopNavigationComponent: { alignItems: "center" },
  TopNavigationComponent_Title: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "900",
  },
  LeftNavigationComponent: {
    flex: 1,
    alignItems: "flex-start",
  },
  MiddleNavigationComponent: {
    flex: 1,
    alignItems: "center",
  },
  RightNavigationComponent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  HeartIcon: {
    paddingLeft: ConstantsValue.padLeft,
  },
  // Top Content Style
  TopSliderComponent: {
    position: "relative",
  },
  TopSliderImage: {
    width: ConstantsValue.sliderImageWidth,
    height: 195,
    resizeMode: "cover",
  },
  ShopNow: {
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  ShopNowButton: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 13,
    borderRadius: 30,
    width: 100,
    alignItems: "center",
  },
  ShopNowButtonTitle: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "white",
  },
  // Category Style
  CategoryButton: {
    padding: 13,
    backgroundColor: ConstantsValue.componentContainerColor,
  },
  CategoryButtonTitle: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "700",
  },
  // Shop Category Style
  ShopCategoryLayout: {
    flexDirection: "column",
  },
  ShopCategoryWrapper: {
    alignItems: "center",
    paddingHorizontal: ConstantsValue.padHorizontal,
    paddingVertical: ConstantsValue.padVertical,
    backgroundColor: ConstantsValue.componentContainerColor,
  },
  ShopCategoryTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  ShopCategoryContainer: {
    flexDirection: "row",
    backgroundColor: ConstantsValue.componentContainerColor,
  },
  ShopCategoryImageWrapper: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  ShopCategoryImage: { height: 35, width: 35, resizeMode: "contain" },
  ShopCategoryImageTitle: {
    fontSize: 12,
  },
  ShopCategoryComponent: {
    flex: 1,
    alignItems: "center",
    paddingBottom: ConstantsValue.padBottom,
  },
  // Flast Sale Style
  FlashSaleLayout: {
    backgroundColor: ConstantsValue.componentContainerColor,
    paddingVertical: ConstantsValue.padVertical,
  },
  FlashSaleComponent: {
    flexDirection: "column",
    position: "relative",
  },
  FlashSaleDiscount: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#FFC93C",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    padding: 2,
  },
  FlashSaleDiscountPercentage: { fontSize: 8, fontWeight: "600" },
  FlashSaleImages: { height: 150, width: 100, resizeMode: "cover" },
  FlashSaleSeperatorComponent: { paddingLeft: 8 },
  FlashSaleListHeaderComponent: { paddingLeft: ConstantsValue.padLeft },
  FlashSaleListFooterComponent: {
    height: 150,
    width: 100,
    marginLeft: 8,
    marginRight: ConstantsValue.padRight,
    alignItems: "center",
    justifyContent: "center",
  },
  FlashSaleListFooterTitle: {
    fontSize: 14,
    color: "#333333",
  },
  FlashSaleTitle: {
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: ConstantsValue.padLeft,
    paddingBottom: ConstantsValue.padBottom,
  },
  FlashSalePriceWrapper: {
    flexDirection: "column",
    paddingTop: 3,
  },
  FlashSaleDiscountedPrice: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FF7B54",
  },
  FlashSalePreviousPrice: {
    color: "#9A9A9A",
    fontSize: 10,
    textDecorationLine: "line-through",
    paddingTop: 3,
  },
  // Recommend Style
  RecommendLayout: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    position: "relative",
    backgroundColor: "white",
  },
  RecommendLayoutTitle: {
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: ConstantsValue.padLeft,
    paddingBottom: ConstantsValue.padBottom,
    paddingTop: ConstantsValue.padTop,
  },
  RecommendWrapperTitle: {
    position: "absolute",
    zIndex: 1,
    marginTop: 10,
    backgroundColor: "#212121",
    width: 30,
    alignItems: "center",
  },
  RecommendTitle: {
    fontSize: 10,
    color: "white",
  },
  RecommendedItemsWrapper: {
    position: "relative",
    backgroundColor: "white",
    flexBasis: 110,
    borderRadius: 5,
  },
  RecommendedImage: {
    height: 150,
    width: "auto",
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  RecommendTitlePriceContainer: {
    flexDirection: "column",
    padding: 5,
  },
  RecommendTitlePriceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  RecommendTitlePrice: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FF7B54",
  },
  RecommendPreviousPrice: {
    color: "#9A9A9A",
    fontSize: 10,
    textDecorationLine: "line-through",
    paddingLeft: 5,
  },
  RecommendCategoryTitle: {
    fontSize: 12,
    color: "#6B6B6B",
  },
  RecommendCategorySeeAll: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 13,
    flexDirection: "row",
  },
  RecommendCategorySeeAllTitle: {
    fontSize: 11,
    paddingRight: 1,
  },
  // Footer Style
  FooterLayout: { paddingTop: 20 },
  FooterLogoContainer: {
    alignItems: "center",
    paddingLeft: ConstantsValue.padLeft,
    marginBottom: 20,
    flexDirection: "row",
  },
  FooterLogo: {
    backgroundColor: ConstantsValue.componentContainerColor,
    paddingHorizontal: ConstantsValue.padHorizontal - 5,
    paddingVertical: ConstantsValue.padVertical - 5,
    borderRadius: 100,
  },
  FooterLogoTitle: {
    fontSize: 35,
    textTransform: "uppercase",
    fontWeight: "900",
    paddingLeft: 15,
  },
  SocialContainer: {
    flexDirection: "column",
    paddingLeft: 25,
    paddingRight: 25,
    height: 100,
    justifyContent: "space-between",
  },
  SocialWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  SocialWrapperTitle: {
    paddingLeft: 10,
    fontSize: 14,
  },
  SocialContainer2: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
  },
  SocialIconsContainer: {
    padding: 10,
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 100,
  },
  Links: {
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
  },
  LinksTitle: {
    paddingBottom: 10,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "600",
  },
});
