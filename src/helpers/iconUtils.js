// iconUtils.js
export const getIconType = (item) => {
  if (item?.is_hit) return "hit";
  if (item?.is_new) return "new";
  if (item?.is_sale) return "sale";
  return "";
};
