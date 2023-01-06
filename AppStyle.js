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

  // Switch Style
  SwitchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    width: 100,
    borderWidth: 1,
    borderColor: ConstantsValue.navigationBottomBorderColor,
  },
  SwitchButton: {
    flex: 1,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  ActiveButton: {
    backgroundColor: "#212121",
    alignItems: "center",
  },
  SwitchWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
});

export const AppStyle_v2 = StyleSheet.create({
  // AppRequestLayout Style
  AppRequestLayout: {
    flex: 1,
    backgroundColor: "#EBEAE8",
  },

  // Shop Now Style
  ShopNowContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  ShopNowButton: {
    backgroundColor: "white",
    padding: 13,
    width: 125,
    borderRadius: 30,
    alignItems: "center",
    borderColor: ConstantsValue.navigationBottomBorderColor,
    borderWidth: 1,
  },
  ShopNowButtonTitle: {
    fontSize: 16,
    fontWeight: "500",
  },

  // ContentLayout Style
  ContentLayout: { marginBottom: 30, marginTop: 20 },
  ContentWrapper: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  ContentItem: {
    height: 200,
    width: 125,
    borderRadius: 10,
    resizeMode: "cover",
  },
  ContentDiscount: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#E0CA9E",
    right: 10,
    top: 10,
    paddingTop: 3,
    paddingBottom: 3,
    width: 50,
  },
  ContentDiscountTitle: {
    fontSize: 10,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
  ContentItemTitle1: {
    width: 125,
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  ContentItemTitle2: {
    paddingLeft: 10,
    width: 125,
    fontSize: 14,
    textTransform: "capitalize",
  },
  MoreContainer: {
    backgroundColor: "white",
    alignItems: "center",
    paddingBottom: 20,
  },
  MoreButton: {
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 8,
    width: 100,
    alignItems: "center",
  },
  MoreButtonTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  // Category Style
  CategoryLayout: {
    padding: 13,
    position: "relative",
  },
  CategoryLayoutImage: {
    width: 200,
    height: 350,
    resizeMode: "cover",
    borderRadius: 10,
  },
  CategoryLayoutWrapper: {
    position: "absolute",
    top: 0,
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  CategoryLayoutButton: {
    backgroundColor: "white",
    paddingVertical: 5,
    borderRadius: 30,
    width: 150,
    alignItems: "center",
    borderColor: ConstantsValue.navigationBottomBorderColor,
    borderWidth: 1,
  },
  CategoryLayoutButtonTitle: {
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "500",
  },

  // Header Style
  NavigationLayoutContainer: {
    paddingBottom: 30,
  },
  NavigationLayout: {
    backgroundColor: "white",
    height: 50,
    marginTop: Constants.statusBarHeight,
    position: "absolute",
    width: Dimensions.get("screen").width,
  },
  WallpaperContainer: { position: "relative" },
  Wallpaper: {
    height: Dimensions.get("screen").height - Constants.statusBarHeight - 10,
    width: Dimensions.get("screen").width,
    resizeMode: "cover",
  },
  Display_1: {
    position: "absolute",
    zIndex: 1,
    top: 110,
    right: 0,
    overflow: "hidden",
    height: 250,
    justifyContent: "center",
    opacity: 0.8,
    borderRadius: 10,
  },
  DisplayImage_1: {
    height: 300,
    width: 180,
    resizeMode: "cover",
    borderRadius: 10,
  },
  Display_2: {
    position: "absolute",
    zIndex: 1,
    top: 290,
    right: 150,
    overflow: "hidden",
    height: 250,
    justifyContent: "center",
    opacity: 0.8,
    borderRadius: 10,
  },
  DisplayImage_2: {
    height: 300,
    width: 180,
    resizeMode: "cover",
    borderRadius: 10,
  },
  Display_3: {
    position: "absolute",
    zIndex: 1,
    top: 510,
    right: 20,
    overflow: "hidden",
    height: 250,
    justifyContent: "center",
    opacity: 0.8,
    borderRadius: 10,
  },
  DisplayImage_3: {
    height: 300,
    width: 180,
    resizeMode: "cover",
    borderRadius: 10,
  },
  NavigationLayout_TopWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  NavLeftContent: {
    flex: 1,
    justifyContent: "center",
  },
  NavLeftContentWrapper: {
    paddingLeft: 13,
  },
  NavMiddleContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  NavMiddleContentWrapper: {
    backgroundColor: "#D9D9D9",
    height: 35,
    width: 35,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  NavMiddleTitle: {
    fontSize: 10,
  },
  NavRightContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  NavRightContentWrapper1: {
    paddingRight: 13,
  },
  NavRightContentWrapper2: {
    paddingRight: 13,
  },

  // Footer Style
  FooterLayout: {
    width: Dimensions.get("screen").width,
  },
  FooterLogoContainer: {
    alignItems: "center",
    paddingLeft: ConstantsValue.padLeft,
    marginBottom: 20,
    flexDirection: "row",
  },
  FooterLogo: {
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  FooterLogoTitle: {
    fontSize: 16,
    fontWeight: "500",
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
    color: "#727272",
  },
  SocialContainer2: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
  },
  SocialIconsContainer: {
    padding: 10,
    backgroundColor: "#727272",
    marginRight: 10,
    marginBottom: 30,
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

  // Switch Style
  SwitchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    width: 100,
    borderWidth: 1,
    borderColor: ConstantsValue.navigationBottomBorderColor,
  },
  SwitchButton: {
    flex: 1,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  ActiveButton: {
    backgroundColor: "#212121",
    alignItems: "center",
  },
  SwitchWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
});
