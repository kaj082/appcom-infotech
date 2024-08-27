export const checkMobile = async function () {
  if ("userAgentData" in navigator) {
    const userAgentData = navigator.userAgentData;
    const platforms = userAgentData.platforms || [];
    return platforms.includes("Android") || platforms.includes("iPhone");
  }
  return false;
};
